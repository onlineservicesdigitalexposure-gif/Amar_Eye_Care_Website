# Amar Eye Center - Developer Documentation

**Lead Developer**: Suman Bar  
**Project**: Amar Eye Center Web Application  
**Version**: 1.0.0 (Production-Ready Codebase)  
**Environment**: Node.js & Vite  

---

## 🚀 Project Overview

Amar Eye Center is a modern, high-performance, responsive React application built to serve as a premium medical and ophthalmology platform. Designed with an advanced component-driven architecture, the project utilizes the latest React 19 standards alongside a bleeding-edge deployment stack including Vite 8 and Tailwind CSS 4.

From the developer's point of view, the project emphasizes **maintainability, rigid typing, SEO superiority, and robust i18n (Internationalization)** to effortlessly switch between primary and localized languages (like English and Bengali). It is fundamentally crafted to convert visitors into patients through smooth UX, rapid load times, and crystal clear medical descriptions.

---

## 🌟 Core Features & Modules

- **Dynamic Bilingual System**: Complete integration of English and Bengali translations mapped gracefully without page reloads.
- **Responsive Medical Gallery**: A fully sortable image gallery split into categories (*Clinic Interior, Equipment, Surgery Room, Patient Care*) complete with a responsive lightbox.
- **Location & Branch Network Logic**: Scalable UI handling multiple physical location data points and Google Maps integrations.
- **Clinical Service Pages**: Modular setups allowing rapid expansion of treatments offered (Phacoemulsification, Glaucoma, Pediatric care, etc.).
- **High-Converting Floating CTA Actions**: Persistent, floating interaction elements tied directly to WhatsApp and direct dialing for emergency eye care.

---

## 🛠 Tech Stack Architecture

- **Core Framework**: React 19 + TypeScript (v5.9)
- **Build Tooling**: Vite (v8) for hyper-fast Hot Module Replacement and optimized chunking.
- **Styling Engine**: Tailwind CSS v4 (Integrated with `clsx` and `tailwind-merge` for conflict-free utility compositions).
- **Animations**: Framer Motion (v12) for GPU-accelerated enter/exit animations and scroll-snapping micro-interactions.
- **Routing logic**: React Router DOM (v7) for deeply nested, client-side routing.
- **Icons**: Lucide React for crisp, highly customizable vector assets.

---

## 📁 Source Code Structure

Our workspace strictly follows the feature-segmentation standard for structured React projects.

```text
amar_eye_center/
├── src/
│   ├── animations/     # Framer Motion orchestration files (fadeUpVariants, staggerContainer)
│   ├── assets/         # Static project assets including gallery images and vector graphics
│   ├── components/     # Reusable, stateless UI components (Hero, Testimonials, Modals)
│   │   └── ui/         # Foundational atomic components (SEO wrapper, Buttons)
│   ├── context/        # React Context providers (Global State: e.g. LanguageContext)
│   ├── data/           # Statically typed TS datasets (e.g. strict gallery arrays)
│   ├── i18n/           # Regional mapping & translation objects (e.g., en.json, bn.json)
│   ├── layouts/        # Root structural frames (Navbar, Footer wraps)
│   ├── pages/          # Top-level routable views (Home.tsx, Gallery.tsx, Services.tsx)
│   ├── router/         # Application router and nested route definitions
│   ├── utils/          # Standard JS/TS utilities (like our vital `cn()` tailwind merger)
│   ├── App.css         # Minimal component-level CSS logic
│   ├── App.tsx         # Main Provider wrapper root
│   ├── index.css       # Tailwind CSS anchor & global styles
│   └── main.tsx        # React-DOM mount point
├── public/             # Raw public assets (favicons, robots.txt, manifests)
├── eslint.config.js    # Strict linting rules to enforce clean code constraints
├── package.json        # Core dependencies, script targets
├── tsconfig.json       # TypeScript compiler settings mapped to `.app` and `.node`
├── vercel.json         # Vercel cloud provider deployment properties
└── vite.config.ts      # Bundler config, mapped aliases, and optimized dependencies
```

---

## ⚙️ Advanced Engineering Highlights

### 1. Unified Utility Class Merging (`cn()`)
All styling is backed by a custom `cn` utility that uses `clsx` and `tailwind-merge`. This completely solves selector collision and specificity issues, allowing for dynamic override strings pushing complex conditional styles down the DOM tree safely.

### 2. Deep i18n Integration
Language control isn't just an afterthought. The system possesses a fully typed `LanguageContext` ensuring total synchronization. Translations are modularized allowing UI text to be upgraded via independent files rather than editing TSX components directly, avoiding merge conflicts during content upgrades and gracefully allowing silent fallbacks for missing terminology keys.

### 3. SEO Optimization
Dynamic Meta adjustments using internal SEO wrappers. The architecture dynamically changes `schema.org` markup and Open Graph elements based on the exact route a client is visiting to drastically improve crawler visibility, local search authority, and Google snippet rankings for eye care queries.

### 4. Fluid Motion Architecture
All animation primitives easily separate state from aesthetics and are extracted into `src/animations/variants.ts` preventing inline config clutter. We orchestrate `<AnimatePresence />` to handle smooth multi-dimensional mount/unmount animations spanning across route changes, mobile menu drawers, and interactive gallery modals.

### 5. Type-Safe Configuration
Built around stringent TypeScript `tsconfig.json` requirements. Native `tsc -b` execution prior to Vite compilation ensures no code ever hits the production branch with malformed object access, deeply parsing through intensely mapped translation schema records out-of-the-box.

---

## 🛠 Asset & Data Management Guide

### 🖼 Adding Gallery Images
Images must be sized responsively before adding to ensure low bundle size. 
1. Place standard `.jpg` or `.webp` files in `src/assets/Gallery/`.
2. Open `src/data/gallery.ts` and import your file at the top of the dataset.
3. Map the variable into the `galleryData` array, providing the correct `category` string. The UI handles the rest.

### 🌐 Updating Translations
Regional overrides belong inside the `src/i18n/` maps. When adding a brand new English string, immediately mirror the exact structure into the matching fallback map so the compiler doesn't throw a key error during the `tsc` validation phase.

---

## 🚀 Deployment Pipeline & Vercel Integration

The repository uses `vercel.json` routing configurations to ensure single-page application (SPA) paths don't return `404 Not Found` when directly linked or hard-refreshed in the browser. 

The build pipeline leverages Vite's rollup engine to automatically code-split UI routes (creating isolated chunks for `Gallery`, `Services`, `Home`, etc.), shrinking the Time-to-Interactive (TTI) for patients browsing on low-power 3G mobile networks.

---

## 💻 Developer Onboarding & Local Execution

### 1. Clone & Setup Dependencies
Extract the repository to your local workspace, then install via standard NPM:
```bash
npm install
```

### 2. Spin up the Dev Server (Vite Module Replacement)
Boot the workspace on localhost with sub-second hot-reloading:
```bash
npm run dev
```

### 3. Type-Check, Lint, & Compile Build
Before merging pull requests or deploying, always verify the TS schema constraints:
```bash
npm run lint
npm run build
```

---
*Maintained by Amar Eye Center Engineering Team.*
