# Ariamena — Build report

## What was built
A complete rebrand and rebuild of ariamena.com as a static Next.js 16 site (App Router, React 19, TypeScript, CSS Modules, `output: "export"`). No animation library, no images, no third-party scripts. All visuals are inline SVG and CSS. The result deploys to any static host, including the Cloudflare setup the current site uses.

## Visual concept selected
**Concept A, "The Crossing", on the Human / Machine identity.** One continuous scroll along a warm-to-dark axis. A single human figure is introduced in the hero and re-rendered through the page: warm silhouette, keypoints, structured record, layered stack, and back to a warm silhouette inside the model's field.

## Key design decisions
- One axis carries the story: warm off-white → mineral → graphite → black → deep indigo → cool light → warm. Section grounds are solid; transitions are gradient bands so text never sits on a mid-tone.
- One figure, one geometry: the same fourteen keypoints draw the silhouette (thick strokes) and the skeleton (thin strokes and dots). Seven poses, composed into six environment scenes.
- Type as a narrative device: Instrument Sans for structure, one Instrument Serif italic phrase per headline on the human end, JetBrains Mono for data labels that grow in presence as the page darkens.
- Editorial header pattern borrowed from the reference site's pacing: numbered eyebrow, headline left, one paragraph right, generous vertical rhythm.
- Motion explains transformation only: word-level reveals, three-depth parallax, keypoint draw-in, an interactive raw → data → structured toggle, a pinned five-layer method stack, and lines that align during the dark-to-light crossing. All of it respects `prefers-reduced-motion`.
- Credibility without invention: no client logos, metrics, certifications, or testimonials. The Industries page states explicitly that environments are scoping examples, not active sites.

## Pages included
`/` Home · `/capabilities` · `/industries` · `/method` · `/responsible-data` · `/about` · `/contact` · `/privacy` · `/terms` · 404

## Interactions included
- Fixed navigation that switches between light and dark themes based on the section under it; blurred surface after scroll; mobile full-screen menu with focus trap and Escape to close.
- Hero load sequence: word rise, figure fade, keypoint trace, frame lock; subtle scroll parallax on the scene.
- Human tableau: three-depth parallax (disabled under 768 px and under reduced motion).
- Data transformation: three-state segmented control (click, hover, focus, arrow keys) crossfading raw scene, data layer, and structured record.
- Industries selector: thirteen environments, hover/focus/click, sticky card on desktop, horizontal chip row on narrow screens, deep links to the Industries page.
- Method stack: pinned scroll scene (desktop) where five layers rise and lock as the stages advance; unpinned sequential layout on tablet and mobile.
- Calm transition: scattered lines align and soften as the page crosses from dark to light.
- Outcome: intelligence layer fades over the returned human scene.
- Contact form: validation, environment chips, POST to `NEXT_PUBLIC_FORM_ENDPOINT` when configured, otherwise a prepared email to partnerships@ariamena.com.

## Assets generated
- Logo system: `public/logo-mark.svg`, `public/logo-lockup.svg`, `public/icon.svg`, plus the inline `Logo` component.
- Figure system: `src/components/figure/` (poses, silhouette/skeleton renderer, environment line-work, hand).
- Thirteen environment glyphs: `src/components/EnvGlyph.tsx`.
- Three identity boards (PNG, 1600 × 2300) in `boards/`.
- Fonts loaded through `next/font` (Instrument Sans, Instrument Serif Italic, JetBrains Mono), latin subset, swap.

## Weight
- Static export: 1.8 MB total for all pages, including the pre-rendered RSC payloads.
- JavaScript: about 189 KB gzipped across every chunk (a single page loads a subset).
- CSS: about 8 KB gzipped.
- Fonts: 10 latin-subset woff2 files, 148 KB total, self-hosted through next/font.
- Home HTML: 86 KB, most of it inline SVG. No raster images anywhere.

## Verification
- Type-check and lint: clean.
- Production build: 11 static routes.
- Automated audit (Playwright against the static export) at 1440 × 900, 834 × 1112, and 390 × 844 across all nine pages: no horizontal overflow, no element outside the viewport, no console errors, no failed requests (aborted link prefetches excluded).
- Accessibility script: all internal links resolve, one h1 per page, no heading-level jumps, no unnamed buttons, no broken images; keyboard tab order runs skip link → logo → nav → CTA; the data toggle responds to arrow keys; the mobile menu traps focus, locks scroll, and returns focus on Escape; reduced motion shows final states immediately.
- Screenshots reviewed at every homepage section, at three method-stack progress points, at each data-transform state, on the mobile menu, and on every subpage.

## Items that need real company information later
1. LinkedIn URL: the footer links to `linkedin.com/company/ariamena`; confirm or replace.
2. Contact form backend: set `NEXT_PUBLIC_FORM_ENDPOINT` to a form service or a small API; until then the form falls back to email.
3. Privacy and Terms: legal entity, governing law, processors, and retention periods need to be confirmed and added.
4. Name origin: the About page interprets "Mena" as the people and places the company comes from; adjust if the intended meaning differs.
5. Arabic: the current site serves `/ar`. The new build is English only; the content module is ready to be duplicated for a second locale.
6. Open Graph image: none is set. A 1200 × 630 image using the hero scene would complete social previews.
7. Domain deploy: `out/` is the deployable folder. On Cloudflare Pages, build command `npm run build`, output directory `out`.

## Arabic version (added later on Site 2)
- Arabic lives at `/ar/...`, fully right-to-left, with `lang="ar"` and `dir="rtl"` mirrored onto the document.
- Fonts: IBM Plex Sans Arabic for structure and Amiri for the human accent phrase; loaded only on Arabic pages.
- Content: `src/content/ar.ts` mirrors `src/content/site.ts` exactly (typed as `Content`). Drafted in Modern Standard Arabic; needs a native review before launch.
- Pages are thin wrappers around shared views in `src/views/`, so English and Arabic can never drift structurally.
- Language switch in the header and mobile menu; sitemap lists both locales with hreflang alternates.
- Latin data labels (dataset ids, formats, record streams) stay left-to-right through `unicode-bidi: plaintext`.
