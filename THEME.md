# Theming — auto-color from your profile photo

The site's brand colors aren't hardcoded. They're **extracted from your profile photo** (`public/assets/img/DP.webp`) and written into `app/theme.generated.css`, which the whole site reads through CSS variables.

- **Primary** = the most dominant vivid color in the photo (skin, clothing, and the wall are filtered out).
- **Accent** = the next most distinct color.

Everything (navbar, hero glow, animated particles, buttons, badges, project cards) re-skins from those two.

---

## Changing your DP — the checklist

### 1. Replace the photo
Put your new image at exactly:
```
public/assets/img/DP.webp
```
Same name, `.webp` format, overwrite the old one.

> ⚠️ It must be `DP.webp` at that exact path. The legacy `assets/img/DP.webp` (no `public/`) is **not** used — replacing it does nothing.

### 2. Regenerate the colors
```powershell
node scripts/theme/generate.mjs
```
The script prints the colors it found. Confirm the hex values changed — that proves it read your new photo. It overwrites `app/theme.generated.css`.

### 3. Preview locally
The photo keeps the same filename, so dev caches it aggressively. To see the change:
```powershell
# stop the running dev server first (Ctrl+C), then:
Remove-Item -Recurse -Force .next
node_modules\.bin\next.cmd dev
```
Open http://localhost:3000 and **hard-refresh: Ctrl+Shift+R**.

### 4. Ship it
```powershell
git add public/assets/img/DP.webp app/theme.generated.css
git commit -m "chore: update DP and regenerate theme"
git push
```
Vercel redeploys with the new photo + colors automatically. **No cache clearing needed in production** — that's a local-dev-only hassle.

---

## Short version
**Swap `DP.webp` → `node scripts/theme/generate.mjs` → hard-refresh to preview → commit & push.**
Steps 1, 2, 4 are essential; step 3 is just for local preview.

---

## Don't like the auto-picked accent?
Open `scripts/theme/generate.mjs`, find the `OVERRIDES` line near the top, and pin a color by hex:
```js
const OVERRIDES = { primary: null, accent: "#f8e759" }; // e.g. force the yellow accent
```
`null` = let it auto-pick. Then re-run step 2. The script also prints all the vivid colors it found, so you can copy a hex from that list.

---

## How it works (FYI)

- `scripts/theme/generate.mjs` reads the raw image with `sharp`, drops skin tones (YCbCr test) and dark/muted pixels (clothing, wall, black outlines), then ranks the remaining vivid colors.
- It derives light/dark/glow/gradient + pastel card-tint tokens with `culori` and writes them to `app/theme.generated.css` using a `:root:root` selector (so they override the fallback defaults in `app/globals.css`).
- The extraction tooling lives in `scripts/theme/` with its own dependencies. **It never runs on Vercel** — deploys just build against the committed `theme.generated.css`, so a bad run can't break a deploy.
- If extraction ever fails, it keeps the previous `theme.generated.css` instead of writing a broken one.

### Why the photo can look stale locally but the colors don't
Two different paths: color extraction reads the raw file fresh every run (no cache), while the displayed `<Image>` is cached by URL by both the dev server and your browser. Same filename = cache hit. Hence the `.next` wipe + hard refresh in step 3. Production gets a fresh cache on every deploy, so this never happens live.

### First-time / fresh-clone setup
If `node scripts/theme/generate.mjs` errors that `sharp` or `culori` is missing, install the tooling deps once:
```powershell
cd scripts/theme; corepack pnpm install --ignore-workspace; cd ../..
```
