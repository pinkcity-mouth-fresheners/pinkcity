# LEARNINGS.md — PinkCity Mouth Freshener Website

> Persistent project brain. Read this at the start of every session to hydrate context.
> Append new learnings with timestamps; never overwrite history.

## Project Overview
- **What:** Marketing / catalogue website for *PinkCity Mouth Freshener* (Jaipur mukhwas brand, est. 1982).
- **Stack:** Next.js 15 (App Router) + React 19 + Tailwind CSS v4 + TypeScript.
- **Build/serve model:** `output: "export"` — a **fully static** site (`out/`) served from a server/CDN.
  There is **no Node server at runtime**, so any Next feature needing a server (image optimization,
  query-string routing, ISR) is unavailable by design.
- **Media:** Most product imagery is served from an external origin
  `https://media.pinkcitymouthfresheners.com` via the `mediaUrl()` helper (`src/lib/media.ts`).
  Some assets also live locally in `public/`.
- **Goal stated by owner:** *ultra-fast rendering*.

## Key Architecture Decisions
- **Static export** (`next.config.ts: output:"export"`, `images.unoptimized:true`). Image optimization
  must be done at the source/build time — Next will NOT resize/convert at runtime.
- **External media CDN** for product photos (`media.pinkcitymouthfresheners.com`), with a 31-day
  cache TTL on the origin.
- **App Router file conventions** are used for SEO metadata (`layout.tsx`) and the favicon
  (`src/app/icon.png`).

## Known Tech Debt (as of 2026-06-04 audit)
1. **Render-blocking client gate** — the whole page was hidden behind a `LoadingScreen` until client
   hydration (`ClientPageWrapper` → `MobileProvider` → `AppShell`). Static HTML shipped only a spinner.
   → Being removed in favour of static server-rendered content + CSS-responsive layout.
2. **~12 MB of up-front imagery** — several "SVG" files are Figma exports with embedded base64 rasters
   (e.g. `public/images/elaichi.svg` 3.6 MB, `public/images/logo.svg` 2.8 MB). → Converting to WebP.
3. **`src/app/icon.png` was 12726×10077 px / 37.5 MB and non-square** → broke Google Search favicon
   and bloated the build. → Replacing with small square icons.
4. **Firebase auth bundled but unused** (`src/firebase.ts` eagerly calls `getAuth`/`GoogleAuthProvider`).
5. **`tailwind.config.js`** has wrong `content` globs (point at `./app` etc., code is in `src/`) and a
   `--var(` typo; effectively dead under Tailwind v4 but misleading.
6. **`babel-plugin-react-compiler`** installed but not enabled (no `experimental.reactCompiler`).
7. **Broken social-share images** in `layout.tsx` (`/multimedia/products/mukhwas_main.png` missing;
   `og:image` is a 2.8 MB SVG).
8. **Dead code:** `src/svgs/Logo.tsx` (2,343-line unused inline SVG).

## Changelog (newest first — explain the WHY)
### 2026-06-04 — Performance & favicon audit (planning + start of implementation)
- **Why:** Owner asked for an "ultra fast rendering" static site and reported the favicon not showing
  in Google Search. Full audit captured above; remediation plan approved
  (`~/.claude/plans/check-the-project-and-floofy-eclipse.md`).
- Created this `LEARNINGS.md` (was missing) to persist project knowledge across sessions.

**Batch 1 implemented (favicon + safe bundle/config wins):**
- **Favicon (Google Search fix):** replaced `src/app/icon.png` (was 12726×10077, 37.5 MB, non-square)
  with a **512×512 white-padded square** (~213 KB, full logo, nothing cropped). Added
  `src/app/apple-icon.png` (180×180) and `src/app/favicon.ico` (48×48 PNG-in-ICO). Next's App Router
  file conventions auto-emit the `<link rel="icon">` / `apple-touch-icon` tags. *Why:* Google requires
  a square, reasonably-sized, crawlable favicon; the old non-square 37.5 MB PNG was rejected by Google
  (and bloated every build) even though browsers downscaled it for the tab. Owner chose the
  full-logo-padded framing. Generated offline with `sips` + a dependency-free Node ICO wrapper.
- **Firebase bundle trim (`src/firebase.ts`):** removed unused `getAuth`/`GoogleAuthProvider`
  (and their exports) so the `firebase/auth` chunk no longer ships. Only `initAnalytics` is consumed
  (by `AnalyticsProvider`).
- **`AnalyticsProvider.tsx`:** dropped `useSearchParams()` (forces a client Suspense boundary even on
  static export); now reads `window.location.search` in the effect, preserving utm/query tracking.
- **`next.config.ts`:** removed inert `images.formats` / `minimumCacheTTL` (ignored under
  `unoptimized:true`); added a comment explaining the static-export image constraint.

**Batch 2 implemented (Phase 3 — image WebP conversion, ~7 MB → ~480 KB of display assets):**
- Converted the heavy local display images to sized WebP and rewired references:
  | asset | before | after | how |
  |-------|--------|-------|-----|
  | `elaichi` (Hero ×4) | 3.6 MB svg | **4 KB** webp | extract → downscale 360px |
  | `banner` (ProductBanner) | 732 KB svg | **68 KB** webp | qlmanage render → crop 1280×970 |
  | `banner_2` (ProductBanner) | 1.2 MB svg | **76 KB** webp | qlmanage render → crop 1280×828 |
  | `about_us` (AboutUs) | 1.2 MB svg | **272 KB** webp | qlmanage render 1080² |
  | `hawaMahal` (AboutBanner) | 280 KB svg | **60 KB** webp | qlmanage render → crop 1600×547 |
- **Why qlmanage (not raw base64 extract):** the banner SVGs wrap their raster in a `<pattern>` with a
  non-uniform-scale + offset matrix, so the raw embedded PNG is cropped/distorted vs. what's displayed.
  Rendering the SVG as-is (WebKit via `qlmanage`) reproduces the on-screen result faithfully; the square
  thumbnail is then centre-cropped back to each viewBox aspect ratio. Each output was visually verified.
- Refs changed: `Hero.tsx` (string src ×4), `page.tsx` (Banner/Banner2 imports), `AboutUs.tsx`
  (AboutUsLogo import), `AboutBanner.tsx` (HawMahal import). `design_banner.svg` (48 KB) kept as SVG.
- **Orphaned by this change (NOT deleted — awaiting owner OK):** `public/images/elaichi.svg`,
  `public/multimedia/banner.svg`, `public/multimedia/banner_2.svg`, `public/images/about_us.svg`,
  `public/images/hawaMahal.svg` (~7 MB). Also pre-existing-unused: `public/multimedia/AboutUs.svg`
  (1.8 MB, never referenced). These are still copied into `out/` (everything in `public/` is) but are
  no longer fetched by browsers, so they don't slow page load — only the deploy artifact. Safe to delete.
  NOTE: `public/images/logo.svg` (2.8 MB) is still used as the OG image in `layout.tsx` — handle in the
  OG-image cleanup, don't delete yet.

**Batch 2 follow-up (2026-06-04, owner review):**
- **`qlmanage` rasterization flattens transparency to WHITE** — a key gotcha. The cutout assets
  (elaichi, banners, hawaMahal) are transparent PNGs displayed over coloured backgrounds, so the
  white-flattened WebPs looked wrong. **Lesson:** for cutouts, extract the *embedded* base64 PNG
  (which keeps its alpha) rather than rasterizing the SVG via qlmanage.
- **elaichi.webp regenerated** from the embedded raster (`-exact -alpha_q 100`): now `hasAlpha:yes`,
  20 KB, 70% transparent pixels verified. White box on the pink hero gradient is gone.
- **Owner reverted** `banner`/`banner_2`/`hawaMahal` back to their SVGs (same white-flatten issue) and
  deleted those WebPs. `page.tsx` + `AboutBanner.tsx` now import the `.svg` originals again.
- **`about_us`**: kept as `about_us.webp` (272 KB) per owner decision — its white background is fine
  on the white About-section card. (Pure-vector source, so no embedded raster to extract for alpha.)

**Batch 3 implemented (logo: cross-origin R2 → same-origin WebP):**
- **Why:** the header logo (`priority`, above the fold) was loaded from R2
  (`mediaUrl("logo.svg")`, 2.8 MB, cross-origin). On this **single-region server, no-CDN** setup the
  cross-origin DNS+TCP+TLS handshake lands on the critical path; a small same-origin asset rides the
  already-open connection. The 2.8 MB size made it worse regardless of origin.
- Extracted the embedded raster from `logo.svg` → `public/images/logo.webp` (900×627, **124 KB**,
  `hasAlpha: yes`, 64% transparent — proper cutout for the translucent header).
- Swapped all 4 R2 logo refs to `/images/logo.webp`: `Header.tsx`, `Footer.tsx`, `AboutUs.tsx` (×2);
  removed the now-unused `mediaUrl` import from each.
- Added `<link rel="dns-prefetch" href="https://media.pinkcitymouthfresheners.com">` in `layout.tsx`
  so the below-the-fold **product** images (still on R2 — correct place for big/long-tail media) resolve
  DNS early.
- **Rule of thumb recorded:** small render-critical assets → same-origin (connection reuse beats edge
  caching when bytes are tiny); large/many/below-fold media → R2 edge. The deciding factor is
  cross-origin handshake vs byte-transfer, not "CDN vs disk."
- `public/images/logo.svg` (2.8 MB) is now used ONLY by the OG metadata in `layout.tsx` — keep until
  the OG-image fix, then it can go.

**Still pending (next batches):** Phase 1+2 render-gate removal + CSS-responsive refactor (16 files),
font-weight trim, tailwind.config cleanup, OG/Twitter image fix (incl. local logo.svg), dead
`svgs/Logo.tsx`.
