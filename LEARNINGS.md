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
### 2026-06-07 — SEO audit remediation (`PINKCITY_SEO_FIXES.md`)
- **Why:** Owner supplied a 10-point SEO audit and asked to apply all of it *except* Fix #3
  (next/image WebP — a no-op here: static export sets `images.unoptimized:true` and product images
  are on R2). Exploration found several audit items were wrong or already done; decisions were
  confirmed with the owner before coding. Plan:
  `~/.claude/plans/read-pinkcity-seo-fixes-md-and-act-glimmering-music.md`.
- **GA4 (Fix #1) — replaced Firebase Analytics with gtag.js.** Audit's premise ("only Cloudflare
  Analytics") was wrong: GA4 already ran via Firebase (`NEXT_PUBLIC_MEASUREMENT_ID`). Adding gtag
  *alongside* would double-count page_views. Chose to **swap** Firebase → standard `gtag.js`
  (`next/script`, `afterInteractive`) in `layout.tsx`, **reusing the same measurement-ID env var** so
  the GA4 property/data carry over. Deleted the now-orphaned `src/firebase.ts` and
  `src/app/AnalyticsProvider.tsx`; removed `firebase` from `package.json` (bundle win — owner must
  `npm install` to update the lockfile). Resolves tech-debt #4. GA scripts only render when the env
  var is set at build time (graceful no-op otherwise). **Dashboard step (owner):** GA4 → link Search Console.
- **Broken social/schema images (Fix #2) — bigger than the audit said.** `public/multimedia/products/`
  is empty (images moved to R2), so `og:image`, `twitter:image`, the `LocalBusiness.image`, AND the
  `sitemap.xml` image locs were **all 404** (www origin). The audit even suggested fixing og:image
  with the *same 404 path*. Pointed all of them to the **R2 origin**
  (`media.pinkcitymouthfresheners.com/multimedia/products/mukhwas_main.png`). Resolves tech-debt #7.
  *Caveat:* `mukhwas_main.png` isn't a true 1200×630 — a dedicated OG asset would be better for CTR.
- **LocalBusiness schema (Fix #4):** removed placeholder `telephone: "+91-XXXXXXXXXX"` (no number is
  shown on the site) and removed `aggregateRating` 4.8/250 (no reviews are displayed anywhere → the
  only "stars" are decorative Hero icons; unverifiable ratings violate Google policy / risk a penalty).
- **Sitemap (Fix #5):** dropped the 4 `/#…` hash-anchor URLs (scroll positions on one page, not
  crawlable pages), pointed image locs to R2, refreshed `lastmod` to 2026-06-07.
- **FAQPage schema (Fix #6):** **already implemented** in `src/outlets/FAQ.tsx` (valid JSON-LD from all
  10 Q&As) — no change. (Pattern reused for Product schema below.)
- **Video (Fix #7, `VideoCard.tsx`):** `preload="auto"`→`"none"` (videos now fetch on hover/tap via
  `play()`, not on page load — LCP/bytes win); removed invalid `loading="lazy"` (not a `<video>` attr);
  added `aria-label`. Kept the deliberate hover/tap UX — did **not** add autoplay (4 autoplaying videos
  would hurt mobile load). No poster/captions added (no assets; videos have no spoken content).
- **Heading hierarchy (Fix #8A, `Footer.tsx`):** footer jumped `<h2>`→`<h4>`; changed the 3 footer
  `<h4>` (Company, Products, sr-only Keywords) → `<h3>` to keep the outline contiguous.
- **Button contrast (Fix #8B, `ContactUsCard.tsx`):** `pinkcity-dark` (#d93a61) on white = **4.44:1**,
  just under WCAG AA 4.5:1 for normal text. Per owner decision, overrode **only** the Send Message
  button with `bg-[#ca3358]` (≈5.1:1); left the global brand token untouched.
- **Product schema (Fix #9, `OurProducts.tsx`):** 88 products on a single page, no prices, no
  per-product URLs → product rich results won't trigger and 88 entries = bloat + "missing price"
  warnings. Added **8 category-level** `Product` JSON-LD entries (one per top-level category), built by
  mapping the existing `products` array (DRY) and emitted via a `<script>` inside the section (mirrors
  FAQ.tsx). `offers`/price intentionally omitted; `brand`/`manufacturer` reference the Organization
  `@id` from layout's `@graph` (cross-block `@id` is valid).
- **Keywords meta (Fix #10, `layout.tsx`):** removed the 2 full-sentence keyword-stuffed entries.
- **Out of scope:** Fix #3 (excluded), Fix #11 (GCP nginx — infra, not repo; relevant only if
  self-hosting on GCP — owner to confirm hosting if wanted).
- **⚠️ New tech debt surfaced — contrast is systemic, not just one button.** The same sub-4.5:1
  `bg-pinkcity-dark text-white` (normal text) also appears in `Header.tsx` (CTA + mobile nav button),
  `Chatbot.tsx` (message bubble + send button; hover uses the even-lighter `/90`), `ProductModal.tsx`
  (selected tab), and `ContactUs.tsx` (section bg). Owner scoped this pass to the Send Message button
  only; the cleaner systemic fix is to **darken the global `pinkcity-dark` token** (`tailwind.config.js`
  + `globals.css @theme`) by a hair — barely perceptible, fixes all at once. Left for owner's call.
- **Note on `logo.svg`:** OG metadata no longer references it, but the **Organization schema `logo`**
  in `layout.tsx` still points to `public/images/logo.svg` — so it remains in use (don't delete yet).

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
