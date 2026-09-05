# Ariamena — Visual and motion specification

## Tokens

### Color
| Token | Value | Use |
|---|---|---|
| --warm | #F4EFE7 | Human ground |
| --mineral | #E6DCCB | Human secondary surfaces |
| --clay | #C9A98C | Human silhouette |
| --sienna | #B1562F | Human accent: eyebrows, captions on light |
| --ink | #1C1A17 | Text on light |
| --ink-2 | #4A453E | Secondary text on light |
| --graphite | #1B1D22 | Mid-axis ground |
| --black | #0B0C0F | Machine ground |
| --indigo | #141A3A | Intelligence ground |
| --paper | #F2F4F8 | Text on dark |
| --mist | #A5ACBA | Secondary text on dark |
| --cobalt | #2B5BFF | Action: buttons, links, focus |
| --cyan | #5EE4FF | Observation data only |
| --uv | #8A6CFF | Model field only |

Contrast checks (WCAG): ink-2 on warm 8.1:1; mist on black 8.6:1; sienna on warm 5.0:1; white on cobalt 4.6:1; cyan on black 13:1.

### Type
- Families: Instrument Sans (400, 500, 600), Instrument Serif Italic (400), JetBrains Mono (400, 500). Loaded with `next/font`, `display: swap`, subset latin.
- Scale (fluid):
  - display: clamp(44px, 8vw, 112px), weight 500, tracking −0.035em, leading 0.96
  - h2: clamp(34px, 4.6vw, 64px), weight 500, tracking −0.03em, leading 1.0
  - h3: clamp(22px, 2vw, 28px), weight 500, tracking −0.02em
  - lead: clamp(18px, 1.5vw, 21px), leading 1.5
  - body: 17px, leading 1.6
  - label: 11.5px mono, uppercase, tracking 0.14em
- Serif italic is used for at most one phrase per headline and only in sections with axis position under 0.5.

### Spacing and layout
- Container: max 1360px, side padding clamp(20px, 5vw, 72px).
- Grid: 12 columns, gutter 24px. Reading measure 60ch max.
- Section padding: clamp(96px, 14vh, 180px) top and bottom.
- Radius: 6px on cards, 999px on buttons, 3px on labels.
- Borders: 1px hairlines at 14% ink on light, 12% white on dark.

## Components
- **Nav:** fixed, transparent over the hero, gains a blurred surface after 40px of scroll. Inherits the current axis theme (light or dark) via a `data-theme` attribute set by the scroll observer. Mobile: full-screen menu, focus trapped, Escape closes.
- **Buttons:** primary pill (ink on light, cobalt on dark), secondary pill with hairline border, text link with arrow that shifts 4px on hover.
- **Section header:** eyebrow (mono, numbered), headline, one paragraph in the right column on desktop, stacked on mobile.
- **Figure:** one SVG component with three render modes: silhouette, skeleton, both. Same geometry.
- **Environment glyphs:** line drawings in the same stroke weight, 1.25px.
- **Data label:** mono, bordered, with the section's accent color.
- **Cards:** used only for the five method stages, six principles, and thirteen environments. No other card grids.

## Motion
- Ease: `cubic-bezier(.2,.7,.2,1)` for narrative, `cubic-bezier(.16,1,.3,1)` for UI.
- UI durations: 200ms hover, 350ms reveal, 600ms max.
- Text reveals: lines masked and translated 100% → 0 with 60ms stagger, triggered once at 20% intersection.
- Parallax: three depths at 24px, 12px, 6px of travel across the section's visible range, driven by requestAnimationFrame from the scroll position. Disabled under 768px and under reduced motion.
- Backdrop axis: a fixed full-viewport layer whose background interpolates through warm → mineral → graphite → black → indigo → graphite → warm, keyed by section positions. Computed once per frame from scrollY; no per-section repaint.
- Pinned Method stack: a sticky container 100vh tall inside a 350vh scroll section. Progress 0 to 1 maps to five layers; layer *n* rises 40px → 0 and fades 0 → 1 between progress (n−1)/5 and n/5.
- Hero on load: 1.2s sequence. Lines rise (0–500ms), figure fades in (200–700ms), keypoints trace (500–1100ms), frame corners lock (1000–1200ms).
- `prefers-reduced-motion: reduce`: no parallax, no pin (the stack shows all layers), no draw-ins, reveals become opacity only at 150ms.

## Performance budget
- No images larger than 60KB. All figures are inline SVG.
- Fonts: 3 families, latin subset only, preloaded by next/font.
- No animation library. One scroll observer, one rAF loop, IntersectionObserver for reveals.
- Static export: every page pre-rendered.

## Breakpoints
- 360, 390, 768, 1024, 1280, 1440, 1920.
- Under 768: single column; industry selector becomes a horizontal chip row; method stack unpins and shows layers in sequence; hero scene moves below the copy and the axis runs vertically.
