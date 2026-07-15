/**
 * Auto-theme generator.
 *
 * Reads the profile photo, extracts a palette from BACKGROUND + CLOTHING
 * (skin tones are filtered out), derives a full design-token set, and writes
 * `app/theme.generated.css`. Runs LOCALLY only — never on Vercel.
 *
 * Usage:  node scripts/theme/generate.mjs
 *         (or `pnpm theme` from the project root)
 *
 * If extraction fails for any reason, the existing theme.generated.css is left
 * untouched so a bad run can never break a deploy.
 */
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import sharp from "sharp";
import { converter, formatHex, formatRgb, wcagContrast } from "culori";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..");

// ---- Config -----------------------------------------------------------------
const DP_PATH = path.join(ROOT, "public", "assets", "img", "DP.webp");
const OUT_PATH = path.join(ROOT, "app", "theme.generated.css");

// Manual escape hatch: pin a hex value here to override the auto-pick.
// e.g. { primary: "#029ed7", accent: "#fada1b" }
const OVERRIDES = { primary: null, accent: null };

const SAMPLE_SIZE = 160; // downscale longest edge to this before sampling
const MIN_HUE_GAP = 32; // accent must differ from primary by at least this many degrees
// -----------------------------------------------------------------------------

const toOklch = converter("oklch");
const toRgb = converter("rgb");

/** Classic YCbCr skin-tone test — true for likely skin pixels (so we drop them). */
function isSkin(r, g, b) {
  const cb = 128 - 0.168736 * r - 0.331264 * g + 0.5 * b;
  const cr = 128 + 0.5 * r - 0.418688 * g - 0.081312 * b;
  return cr >= 133 && cr <= 173 && cb >= 77 && cb <= 127;
}

function saturation(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max === 0 ? 0 : (max - min) / max;
}

function rgbObj(r, g, b) {
  return { mode: "rgb", r: r / 255, g: g / 255, b: b / 255 };
}

function channels(hex) {
  const c = toRgb(hex);
  return `${Math.round(c.r * 255)}, ${Math.round(c.g * 255)}, ${Math.round(c.b * 255)}`;
}

/** Nudge lightness (and tame chroma at the extremes) in OKLCH space. */
function shift(hex, dL, dC = 0) {
  const c = toOklch(hex);
  const out = {
    mode: "oklch",
    l: Math.min(0.98, Math.max(0.12, c.l + dL)),
    c: Math.max(0, (c.c ?? 0) + dC),
    h: c.h ?? 0,
  };
  return formatHex(out);
}

function hueDist(a, b) {
  const ha = toOklch(a).h ?? 0;
  const hb = toOklch(b).h ?? 0;
  const d = Math.abs(ha - hb) % 360;
  return d > 180 ? 360 - d : d;
}

/** White or near-black text, whichever reads better on the given background. */
function readableText(bgHex) {
  const onWhite = wcagContrast(bgHex, "#ffffff");
  const onDark = wcagContrast(bgHex, "#1a202c");
  return onDark >= onWhite ? "#1a202c" : "#ffffff";
}

function swatch(hex) {
  const c = toRgb(hex);
  const r = Math.round(c.r * 255);
  const g = Math.round(c.g * 255);
  const b = Math.round(c.b * 255);
  return `\x1b[48;2;${r};${g};${b}m      \x1b[0m`;
}

async function extractSeeds() {
  const { data, info } = await sharp(DP_PATH)
    .resize(SAMPLE_SIZE, SAMPLE_SIZE, { fit: "inside" })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const ch = info.channels; // 4 (RGBA)
  const buckets = new Map();
  let kept = 0;
  let droppedSkin = 0;

  for (let i = 0; i < data.length; i += ch) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = ch === 4 ? data[i + 3] : 255;

    if (a < 128) continue; // transparent
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    if (max > 244 && min > 232) continue; // near-white (shirt, wall highlights)
    if (max < 60) continue; // dark (blazer, black graffiti outlines, shadows)
    if (saturation(r, g, b) < 0.28) continue; // muted (gray wall, beige pants, navy)
    if (isSkin(r, g, b)) {
      droppedSkin++;
      continue;
    }

    // Quantize to 16 levels per channel.
    const key = (r >> 4) * 1024 + (g >> 4) * 32 + (b >> 4);
    const bucket = buckets.get(key) ?? { n: 0, r: 0, g: 0, b: 0, sat: 0 };
    bucket.n++;
    bucket.r += r;
    bucket.g += g;
    bucket.b += b;
    bucket.sat += saturation(r, g, b);
    buckets.set(key, bucket);
    kept++;
  }

  if (kept === 0) throw new Error("No usable pixels after filtering.");

  // Score: population weighted toward more saturated (vivid) buckets.
  const ranked = [...buckets.values()]
    .map((bk) => {
      const r = Math.round(bk.r / bk.n);
      const g = Math.round(bk.g / bk.n);
      const b = Math.round(bk.b / bk.n);
      const avgSat = bk.sat / bk.n;
      const hex = formatHex(rgbObj(r, g, b));
      return { hex, n: bk.n, score: bk.n * (0.4 + 0.6 * avgSat) };
    })
    .sort((a, b) => b.score - a.score);

  // Collapse into distinct-hue candidates (merge buckets within 24° of an
  // already-chosen swatch, accumulating their coverage).
  const candidates = [];
  for (const c of ranked) {
    const near = candidates.find((p) => hueDist(p.hex, c.hex) < 24);
    if (near) {
      near.n += c.n;
    } else {
      candidates.push({ hex: c.hex, n: c.n });
    }
  }
  candidates.sort((a, b) => b.n - a.n);
  const coverage = candidates.reduce((s, c) => s + c.n, 0);
  for (const c of candidates) c.pct = (c.n / coverage) * 100;

  const primary = OVERRIDES.primary ?? candidates[0].hex;

  // Accent = highest-scoring swatch that's far enough in hue from primary.
  let accent = OVERRIDES.accent;
  if (!accent) {
    const candidate = candidates.find((c) => hueDist(c.hex, primary) >= MIN_HUE_GAP);
    accent = candidate ? candidate.hex : null;
  }
  const accentDerived = !accent;
  if (!accent) {
    // Fall back to a complementary hue derived from primary.
    const c = toOklch(primary);
    accent = formatHex({ mode: "oklch", l: 0.6, c: Math.max(0.12, c.c ?? 0.12), h: ((c.h ?? 0) + 180) % 360 });
  }

  return { primary, accent, accentDerived, candidates, kept, droppedSkin, total: kept + droppedSkin };
}

function buildCss({ primary, accent }) {
  const primaryLight = shift(primary, 0.14, -0.01);
  const primaryDark = shift(primary, -0.16);
  const accentLight = shift(accent, 0.14, -0.01);

  // Pastel card backgrounds: very light tints of primary/accent.
  const cardTint = (hex) => formatHex({ mode: "oklch", l: 0.95, c: 0.05, h: toOklch(hex).h ?? 0 });

  const tokens = {
    "--primary": primary,
    "--primary-light": primaryLight,
    "--primary-dark": primaryDark,
    "--primary-rgb": channels(primary),
    "--primary-light-rgb": channels(primaryLight),
    "--primary-dark-rgb": channels(primaryDark),
    "--primary-glow": `rgba(${channels(primary)}, 0.15)`,
    "--primary-gradient": `linear-gradient(135deg, ${primary} 0%, ${primaryLight} 100%)`,
    "--accent": accent,
    "--accent-light": accentLight,
    "--accent-rgb": channels(accent),
    "--accent-light-rgb": channels(accentLight),
    "--text-on-primary": readableText(primary),
    "--text-on-accent": readableText(accent),
    "--card-bg-1": cardTint(primary),
    "--card-bg-2": cardTint(accent),
    "--card-bg-3": formatHex({ mode: "oklch", l: 0.95, c: 0.05, h: ((toOklch(accent).h ?? 0) + 40) % 360 }),
    "--card-bg-4": formatHex({ mode: "oklch", l: 0.95, c: 0.05, h: ((toOklch(primary).h ?? 0) + 40) % 360 }),
  };

  const body = Object.entries(tokens)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join("\n");

  // `:root:root` (specificity 0,2,0) is used intentionally so these values
  // win over the `:root` fallback defaults in globals.css regardless of CSS
  // import/chunk order — which Next.js notes can differ between dev and prod.
  return `/* AUTO-GENERATED by scripts/theme/generate.mjs — do not edit by hand.\n   Regenerate with \`pnpm theme\` after changing public/assets/img/DP.webp. */\n:root:root {\n${body}\n}\n`;
}

async function main() {
  const seeds = await extractSeeds();
  const css = buildCss(seeds);
  fs.writeFileSync(OUT_PATH, css, "utf8");

  const pct = ((seeds.droppedSkin / seeds.total) * 100).toFixed(1);

  console.log("\nVivid colors found in DP (skin/clothing/wall filtered out):\n");
  for (const c of seeds.candidates.slice(0, 6)) {
    console.log(`  ${swatch(c.hex)}  ${c.hex}  ${c.pct.toFixed(1).padStart(5)}% coverage`);
  }

  console.log("\nAuto-pick (dominant):\n");
  console.log(`  primary  ${swatch(seeds.primary)}  ${seeds.primary}`);
  console.log(
    `  accent   ${swatch(seeds.accent)}  ${seeds.accent}` +
      (seeds.accentDerived ? "  (derived — no distinct 2nd swatch found)" : "  (sampled from image)")
  );
  console.log(`\n  ${seeds.droppedSkin} skin pixels dropped (${pct}% of sampled).`);
  console.log(`  Wrote ${path.relative(ROOT, OUT_PATH)}\n`);
}

main().catch((err) => {
  console.error("\n[theme] extraction failed:", err.message);
  if (fs.existsSync(OUT_PATH)) {
    console.error("[theme] keeping existing theme.generated.css — deploy unaffected.\n");
    process.exit(0); // don't fail a build
  }
  console.error("[theme] no existing theme file to fall back to.\n");
  process.exit(1);
});
