# Project Context — Ekramul Alam (GitHub: [Apn7](https://github.com/Apn7))

> **Purpose:** A single, verified reference for every repository on the GitHub account, so CVs / cover letters / interviews can be written from this file alone — no re-exploring repos.
>
> **How this was built:** Every repo below was **shallow-cloned and inspected at the file level** (manifests: `package.json`, `composer.json`, `build.gradle(.kts)`, `pubspec.yaml`, `requirements.txt`, `pom.xml`, `*.tex`; plus source, model files, and folder trees). Claims here reflect **actual code**, not just READMEs. Where a README/CV claim conflicts with the code, it is flagged **⚠️**.
>
> **Verified:** 2026-07-16, against each repo's default-branch HEAD at clone time.
>
> **Legend:** 🟢 original work · 🔱 fork (see ownership note) · 👥 team project · 🧪 has automated tests · 🎓 coursework

---

## ⚠️ Accuracy corrections (things the current CV/READMEs get wrong)

| Claim in CV/README | Reality in code | Action |
|---|---|---|
| SmartCane uses **YOLOv8** | Model files & training scripts are **YOLOv11n** (`yolo11n_*.tflite`, `train_safewalkbd.py` uses `yolo11n`). One legacy `ARCHITECTURE.md` still says v8; a stray `yolo26n.pt` also exists. | Say **YOLOv11n**. |
| MemeGrove is **Laravel 10** | `composer.json` requires **`laravel/framework: ^11.0`, PHP `^8.2`**. README says 10.x but the code is **Laravel 11**. | Say **Laravel 11**. |
| Healthcare: "Integrated **Cloudinary** + **Nodemailer**" | **Cloudinary is real ✅** — used via **client-side unsigned upload** (`Frontend/src/utils/uploadCloudinary.js` → `api.cloudinary.com/v1_1/{cloud}/image/upload`) across Register, MyAccount, Profile, DoctorProfile, Admin AddDoctor/ManageMedicines; root `package.json` has `@cloudinary/url-gen`. **Nodemailer is NOT present anywhere** (no import, no `createTransport`/`sendMail`). Backend also has an unused `config/cloudinary.js`; server-side file writes use **Multer**. | Keep **Cloudinary** (user/doctor/medicine image uploads). **Remove Nodemailer.** |
| Healthcare = "doctor appointment + pharmacy + blood donor" (simple MERN) | Much bigger: **ChromaDB vector store, Google Gemini, Tesseract OCR, PDF/DOCX ingestion pipeline (pdf2pic/pdfjs/pdf-poppler/mammoth), Leaflet maps**. | The AI/RAG/OCR subsystem is a strong, under-sold selling point. |
| Healthcare & PharmaPlus authored solo | Both are **forks of teammates' repos** (team projects). | Frame as team contributions honestly. |

---

## Summary table

| # | Repo | Tier | Type | Language / Stack (verified) | One-liner |
|---|---|---|---|---|---|
| 1 | Thesis + Thesis-pie + Thesis_Pi_Zero + Thesis_reports | Flagship | 🟢👥 | Flutter/Dart, Kotlin, Python, YOLOv11n, C++, LaTeX | **SmartCane** — smartphone-inference assistive cane (capstone) |
| 2 | Hackathon_Final | Flagship | 🟢 | Next.js 15 + React 19, FastAPI, LangChain + Gemini RAG, Supabase | AI learning platform (BUET CSE Fest 2026 finalist) |
| 3 | System_Project | Flagship | 🔱👥 | MERN (React 18/Vite), Gemini, ChromaDB, Tesseract OCR | Automated Healthcare System |
| 4 | Laravel_Project | Flagship | 🟢 | Laravel 11 / PHP 8.2, MySQL, Bootstrap 5 | MemeGrove social platform |
| 5 | PharmaPlus | Flagship | 🔱👥🧪 | Android (Java), Firebase, Volley | E-commerce pharmacy app (tested) |
| 6 | Computer-Network-Omnet-Project | Flagship | 🟢 | C++, OMNeT++ | HTTP predictive-caching simulation |
| 7 | grammar_fix | Strong | 🟢 | Python, PyQt6, Gemini/Groq | Desktop AI text-tools tray app |
| 8 | Hackathon | Strong | 🟢 | Python, FastAPI, Gemini, PostgreSQL | NL→SQL + external-API agent |
| 9 | Image_Project | Strong | 🟢 | Python, Streamlit, OpenCV | Fingerprint enhancement pipeline |
| 10 | Graphics_Project | Strong | 🟢 | C++17, OpenGL 3.3, GLSL | 3D library scene (first-person) |
| 11 | DSD_project | Strong | 🟢 | Verilog, Vivado | Load-adaptive traffic-light FPGA controller |
| 12 | Portfolio | Strong | 🟢 | Next.js 16, React 19, Framer Motion | This portfolio site (DP-derived theming) |
| 13 | PharmaSynk | Supporting | 🟢 | Android (Java), Firebase | Leaner sibling of PharmaPlus |
| 14 | OOProject | Academic | 🟢🎓 | C++ | Pharmacy Management console app (OOP) |
| 15 | Compiler_project | Academic | 🟢🎓 | C, Flex + Bison | Lexer/parser compiler |
| 16 | Compiler_lab | Academic | 🟢🎓 | C, Flex | Lexer lab task |
| 17 | CSE3110_DataBase_project | Academic | 🟢🎓 | SQL / PL-SQL | Database design + PL/SQL project |
| 18 | dsa-codes | Academic | 🟢🎓 | C++ | DSA implementations (AVL/BST/LL/sort) |
| 19 | Lab_task | Academic | 🟢🎓 | Java | Factory design-pattern demo |
| 20 | SWE_task | Academic | 🟢🎓 | Java, Maven, JUnit 5 | Small JUnit/Maven exercise |
| 21 | Coin-toss | Academic | 🟢🎓 | Swift, SwiftUI | Coin-toss animation app (iOS) |
| 22 | Tower-Defense-Duel | Fork | 🔱👥 | Python | A*/Minimax AI tower-defense (AI lab) |
| 23 | register | Fork | 🔱 | — | is-a.dev subdomain registration fork |
| — | Thesis_Pie_Zero | (empty) | 🟢 | — | Empty placeholder repo |

---

# Tier 1 — Flagship (CV headliners)

## 1. SmartCane — Assistive Navigation for the Visually Impaired (Capstone Thesis)
**Repos:** [Thesis](https://github.com/Apn7/Thesis) (app) · [Thesis-pie](https://github.com/Apn7/Thesis-pie) · [Thesis_Pi_Zero](https://github.com/Apn7/Thesis_Pi_Zero) · [Thesis_reports](https://github.com/Apn7/Thesis_reports) (paper)
**Type:** 🟢 original · 👥 capstone (CSE-4000, KUET, Roll 2007071)
**Paper title (verified):** *"A Smartphone-Inference Smart Cane with Confusion-Matrix-Calibrated Per-Class Hazard Alerts for Bangladeshi Footpaths"* (MDPI LaTeX format; Turnitin report present).

This is a **multi-repo embedded + mobile + ML system**, not a single app.

**A) Phone app — [Thesis] (Flutter/Dart, ~176 MB repo with model assets):**
- **On-device object detection with YOLOv11n** — fine-tuned **"SafeWalkBD"** model, exported to **TFLite (FP16 & INT8)** for a quantization study; run via the official **`ultralytics_yolo`** plugin (native CameraX capture, NMS, fps/latency metrics, runtime FP16↔INT8 + GPU/CPU switching).
- **On-device LLM inference** via native Android **LiteRT-LM SDK** over a Flutter **MethodChannel** (`MainActivity.kt`).
- **Offline Bengali speech-to-text** using **sherpa-onnx** (zipformer); **TTS** via `flutter_tts` (`bn-BD`).
- **BLE communication with the physical cane** (`flutter_blue_plus`); **haptic/vibration** patterns + **audio alerts** for hazard states.
- Sensor **fusion** layer with per-class hazard profiles and sliding-window logic (`lib/services/fusion/`).
- Deps: `provider`, `geolocator/geocoding`, `speech_to_text`, `permission_handler`, `audioplayers`, `record`, `shared_preferences`, `flutter_dotenv`. Dart SDK `^3.10.3`.
- ⚠️ Repo README is still the default Flutter placeholder ("test_app_1"); the real docs are `CODEBASE_CONTEXT.md` / `ARCHITECTURE.md` / `SAFEWALKBD_FINETUNE.md`.

**B) Pi vision node — [Thesis-pie] (Python):** Raspberry Pi detector using **Ultralytics YOLO + OpenCV**, multiprocessing, deployed as a **systemd service** (`smart-cane.service`). Files: `detector.py`, `main.py`, `config.py`.

**C) Pi Zero 2 W sender — [Thesis_Pi_Zero] (Python):** Camera (`picamera2`), **ultrasonic sonar** reader/sender, **buzzer + vibration** feedback, **Wi-Fi AP fallback**, **BLE provisioning**, socket frame streaming to a gateway. Multiple **systemd services** (`pi-vision`, `pi-sonar`, `pi-wifi-fallback`). Extensive hardware/ops docs (wiring, power citations, reflash, provisioning handoffs).

**D) Paper — [Thesis_reports] (LaTeX/TeX, ~86 MB):** MDPI-style manuscript (`paper/main.tex`, `main_mdpi.tex`), capstone report + Turnitin PDF.

**Best for:** Android/mobile roles, ML/embedded/edge-AI roles, research roles. **The strongest, most differentiated project on the account.**

---

## 2. AI-Powered Supplementary Learning Platform — [Hackathon_Final](https://github.com/Apn7/Hackathon_Final)
**Type:** 🟢 original · BUET CSE Fest 2026 Hackathon **Finalist** (Jan 2026)
**Verified stack:**
- **Frontend:** Next.js 15 (App Router) + **React 19**, TypeScript, Tailwind, Radix UI, `lucide-react`, `recharts`, `react-markdown`. **Paddle** payments (`@paddle/paddle-js` + `@paddle/paddle-node-sdk`), Vercel Analytics.
- **Backend:** **FastAPI** (Python), **Supabase (PostgreSQL)** with row-level security & storage.
- **AI/RAG:** **LangChain** + **`langchain-google-genai` (Google Gemini)** embeddings/LLM; multi-format ingestion — **`pypdf`, `python-pptx`, `python-docx`**. Routers: `chat`, `generate`, `materials`, `search`; services: `rag_service`, `chat_service`.
- DB migrations include `document_chunks` (vector chunks) + chat tables.

**Notes for CV:** the embeddings are specifically **Google Gemini** (CV currently says generic "vector embeddings"). Role-based student/instructor portals confirmed. **Best for:** React/full-stack + AI roles.

---

## 3. Automated Healthcare System — [System_Project](https://github.com/Apn7/System_Project)
**Type:** 🔱 fork of `forhad-islam-rony/System_Project` · 👥 team project (frame contributions honestly)
**Verified stack:**
- **Frontend:** React 18 + **Vite** (not CRA), `react-router-dom` v6, **Leaflet + react-leaflet** (maps), `swiper`, `react-hot-toast`, `react-dropzone`, `react-markdown`, Tailwind. Tests via **Vitest**.
- **Backend:** Node/Express, **MongoDB + Mongoose**, JWT + bcrypt/bcryptjs, **Multer** uploads, `sharp`/`jimp`.
- **AI / document intelligence (the under-sold part):** **Google Gemini** (`@google/generative-ai`) + **ChromaDB** vector store + **Tesseract OCR** (`tesseract.js`, `eng.traineddata`) + PDF pipeline (`pdf-parse`, `pdf2pic`, `pdf-poppler`, `pdfjs-dist`) + `mammoth` (DOCX). Services: `ragService.js`, `geminiService.js`, `openaiService.js`, `advancedOcrService.js`, `enhancedFileUploadService.js`. Has `API_DOCUMENTATION.md`, `GEMINI_MIGRATION_INSTRUCTIONS.md`.
- **Features:** doctor appointments, pharmacy cart/checkout, blood donor search, health feeds, emergency ambulance (map-based).

**Image uploads (verified):** **Cloudinary** is genuinely used via a **client-side unsigned upload** helper (`Frontend/src/utils/uploadCloudinary.js`) wired into user Register, MyAccount, Profile, Myprofile, DoctorProfile, and Admin AddDoctor/ManageMedicines; root `package.json` includes `@cloudinary/url-gen`. (A backend `config/cloudinary.js` also exists but the server SDK isn't in deps — the active path is the frontend direct upload; server-side writes use **Multer**.)
**⚠️ CV flag:** **Nodemailer is NOT present** anywhere in the repo — drop it. Keep the Cloudinary claim. **Best for:** full-stack + AI/RAG roles.

---

## 4. MemeGrove — Social Media Platform — [Laravel_Project](https://github.com/Apn7/Laravel_Project)
**Type:** 🟢 original
**Verified stack:** **Laravel 11** (`laravel/framework ^11.0`), **PHP ^8.2**, **MySQL + Eloquent**, Blade + **Bootstrap 5**, **Intervention Image ^3.6** (image resize pipeline), `laravel/tinker`. App structure includes `Events/`, `Listeners/` (event-driven notifications), `Models/`, migrations/seeders/factories, `phpunit.xml`.
**Features (verified in README + structure):** auth/profiles, meme upload + auto-resize, likes/comments/follows, **custom trending algorithm (engagement + time decay)**, tag analytics, soft deletes, admin moderation dashboard.
**⚠️ CV flag:** it's **Laravel 11, not 10**. README also mentions "Sanctum" but Sanctum is **not** in `composer.json require` — verify before claiming. **Best for:** backend/full-stack roles; shows relational DB design.

---

## 5. PharmaPlus — E-Commerce Pharmacy Android App — [PharmaPlus](https://github.com/Apn7/PharmaPlus)
**Type:** 🔱 fork of `Mofazzal874/PharmaPlus` · 👥 team project · 🧪 tested · 🎓 CSE-3120 (Software Engineering Lab)
**Verified stack:** **Native Android in Java** (package `com.example.projecto`), Gradle **Kotlin DSL** (AGP context), **minSdk 28 / target+compile 34**. **Firebase** Auth `22.2.0`, Firestore `24.9.1`, Realtime DB `20.3.0`, Storage `20.3.0`. **Volley** networking. UI: Material, Navigation, ViewBinding, LiveData/ViewModel, Glide, Lottie, RoundedImageView.
**Design patterns (verified by package layout + code):** dedicated `observer/` and `queries/` packages (Observer + a product-query factory), `adapters/` (Adapter), Singleton model instances.
**Testing (verified):** JUnit 4 + **JUnit 5 (Jupiter)**, **Mockito** (core/inline/android/junit-jupiter), **Robolectric 4.7.3**, **Espresso** (core/intents), androidx test rules/runner. **51 main Java files, 4 test files.**
**Extras:** **Appetize.io** live web demo + downloadable APK (Google Drive) linked in README.
**Best for:** Android roles — strongest Java/Android + testing + patterns evidence. **Note:** [PharmaSynk](#13-pharmasynk) is a near-duplicate sibling — do not present both as separate achievements.

---

## 6. HTTP Request Prediction for Faster Web Response — [Computer-Network-Omnet-Project](https://github.com/Apn7/Computer-Network-Omnet-Project)
**Type:** 🟢 original
**Verified stack:** **C++ / OMNeT++**. Modules (`.cc` + `.ned`): `HttpClient`, `HttpServer`, `HttpMessage`, `CacheEntry`, `PatternTable`, `HttpNetwork`; configs in `omnetpp.ini`.
**Behavior (verified):** multi-client HTTP simulation; **80% predictable navigation** (`home → login → dashboard`) + 20% random; server-side **predictive caching** with transition learning, configurable **prediction threshold**, **TTL expiry**, **LRU eviction**; rich latency/hit-rate/prediction metrics across multiple configs.
**Best for:** general SWE roles (systems, C++, networks, algorithms). Pairs well with competitive-programming signal.

---

# Tier 2 — Strong supporting projects

## 7. Grammar Fix — Desktop AI Text Tools — [grammar_fix](https://github.com/Apn7/grammar_fix)
🟢 Python **PyQt6** system-tray app. Global hotkeys (`keyboard`), clipboard (`pyperclip`), overlay review UI. Four workflows: grammar/spelling fix, **English↔Bengali translation**, code explanation, smart summarize/explain. **Provider abstraction** over **Google Gemini (`google-genai`)** and **Groq** (`vertex_client.py`, `groq_client.py`, `provider_manager.py`), runtime model switching, Start-With-Windows support. Has `SECURITY_IMPROVEMENTS.md`. **Best for:** Python / AI-integration roles; shows product polish.

## 8. NL→SQL + External-API Agent — [Hackathon](https://github.com/Apn7/Hackathon)
🟢 Python **FastAPI** service (separate from Hackathon_Final). Uses **Google Gemini** to classify questions, **generate SQL**, and route between a **PostgreSQL** database and **external APIs** — **Frankfurter** (currency exchange) and **OpenStreetMap Nominatim** (geocoding) — including mixed-query planning (`query_router.py`, `llm.py`, `external_apis.py`, `response_formatter.py`). Ships `docker-compose.yml`, OpenAPI spec, and a `checker/` with test cases. **Best for:** AI/agent/backend roles.

## 9. Fingerprint Enhancement System — [Image_Project](https://github.com/Apn7/Image_Project)
🟢🎓 Python **Streamlit** multi-page app implementing an **8-step fingerprint pipeline** (Hong et al., 1998): normalization/**CLAHE**, orientation field, ridge frequency, **Gabor** enhancement, binarization, **Zhang-Suen thinning**, **minutiae extraction (crossing-number)**. Stack: OpenCV, NumPy, SciPy, scikit-image, Matplotlib. Quality metrics per stage. **Best for:** CV/DIP, Python roles.

## 10. 3D Library Simulation — [Graphics_Project](https://github.com/Apn7/Graphics_Project)
🟢🎓 **Modern OpenGL 3.3, C++17**. First-person navigation, **multi-shader texture pipelines** (GLSL `.vert`/`.frag`), animated scene elements, debug visualization. Built with CMake + Visual Studio project. **Best for:** C++/graphics roles.

## 11. Load-Adaptive Traffic-Light Controller — [DSD_project](https://github.com/Apn7/DSD_project)
🟢🎓 **Verilog** for **Digilent Basys 3 (Xilinx Artix-7)**, Vivado 2023.1+. 4-way intersection, 8 phases, **Moore FSM**, custom **ALU** countdown timer, combinational ROM phase config, central control unit; green durations adapt to switch-set load. KUET CSE 4224. **Best for:** hardware/embedded/digital-design roles.

## 12. Portfolio Site — [Portfolio](https://github.com/Apn7/Portfolio)
🟢 **Next.js 16.2.6 + React 19.2.4**, **Framer Motion 12**, lucide-react. Single-page scroll portfolio; notable feature: **theme colors extracted from the profile photo** at build time (YCbCr skin/clothing filtering) generating CSS tokens. `lib/data.js` is the content source of truth. **Best for:** frontend/React roles as a live demo.

---

# Tier 3 — Academic / coursework / small

- **[PharmaSynk](https://github.com/Apn7/PharmaSynk)** 🟢 — Android (Java) pharmacy app; **near-duplicate sibling of PharmaPlus** (same `com.example.projecto` package, same Firebase/Volley stack) but **leaner: 37 main Java files, 1 test file, no Observer/queries packages**. Its README even has a "CV-ready summary." Treat as the earlier/simpler iteration of PharmaPlus, not a separate flagship. <a id="13-pharmasynk"></a>
- **[OOProject](https://github.com/Apn7/OOProject)** 🟢🎓 — C++ console **Pharmacy Management System** (admin/buyer menus, receipts). OOP course demo. (Note: hardcoded demo admin creds in code — fine for a class project, don't showcase security-wise.)
- **[Compiler_project](https://github.com/Apn7/Compiler_project)** 🟢🎓 — C compiler with **Flex (`flex.l`) + Bison (`bison.y`)**, Makefile; lexer + parser.
- **[Compiler_lab](https://github.com/Apn7/Compiler_lab)** 🟢🎓 — C **Flex lexer** lab task (`2007071.l`).
- **[CSE3110_DataBase_project](https://github.com/Apn7/CSE3110_DataBase_project)** 🟢🎓 — **SQL / PL-SQL** database project: ERD (`er_diagram.pdf`), table creation + inserts, aggregate queries, PL/SQL, project report.
- **[dsa-codes](https://github.com/Apn7/dsa-codes)** 🟢🎓 — C++ **data-structure implementations**: AVL, BST, circular & doubly linked lists, sorting.
- **[Lab_task](https://github.com/Apn7/Lab_task)** 🟢🎓 — Java **Factory design-pattern** demo (Shape/Rectangle/Square factory).
- **[SWE_task](https://github.com/Apn7/SWE_task)** 🟢🎓 — small **Java + Maven** project (`artifactId: Apn7`) with **JUnit 5 (Jupiter)**; a testing/setup exercise (minimal code).
- **[Coin-toss](https://github.com/Apn7/Coin-toss)** 🟢🎓 — **SwiftUI** coin-toss game with flip animation (iOS). Shows Swift familiarity.

---

# Tier 4 — Forks / non-original (use with care)

- **[Tower-Defense-Duel](https://github.com/Apn7/Tower-Defense-Duel)** 🔱👥 — **fork**. Python two-player tower-defense with **A\* pathfinding + Minimax (alpha-beta pruning, epsilon-greedy)**, for **CSE 4109 AI Lab**. Legitimate AI content, but it's a fork of a shared/team repo — attribute as a **team/lab** project, verify your contribution before claiming solo.
- **[register](https://github.com/Apn7/register)** 🔱 — **fork of `is-a-dev/register`** (GPL-3.0), used only to claim a personal `*.is-a.dev` subdomain. **Not a real project** — do not list on a CV.
- **[Thesis_Pie_Zero](https://github.com/Apn7/Thesis_Pie_Zero)** — **empty** placeholder (0 KB); ignore. (Distinct from the populated `Thesis_Pi_Zero`.)

---

## Quick "which project for which role" cheat-sheet

| Target role | Lead with | Then |
|---|---|---|
| **Android / Mobile** | PharmaPlus (Java, Firebase, tested), SmartCane app (Flutter, YOLOv11n, BLE) | Healthcare (REST backend) |
| **General SWE (C/C++/DSA)** | OMNeT++ predictive caching, Graphics (OpenGL C++), dsa-codes + Codeforces | Compiler (Flex/Bison), DSD FPGA |
| **React / Frontend** | Hackathon_Final (Next 15/React 19), Healthcare (React/Vite), Portfolio (Next 16) | — |
| **AI / ML / Python** | SmartCane (edge YOLOv11n + on-device LLM), Hackathon (NL→SQL agent), grammar_fix | Healthcare RAG/OCR, Image_Project |
| **Backend / Full-stack** | MemeGrove (Laravel 11), Healthcare (MERN + RAG), Hackathon_Final (FastAPI) | — |
| **Embedded / Hardware** | SmartCane Pi/Pi-Zero nodes (sonar/BLE/camera), DSD traffic controller (Verilog) | — |

**Honesty reminders:** PharmaPlus & Healthcare are **forks of teammates' repos** (team projects) → frame as contributions. PharmaPlus and PharmaSynk are **the same project family** → pick one. `register` and empty `Thesis_Pie_Zero` are not projects.
