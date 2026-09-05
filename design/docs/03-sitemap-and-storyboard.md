# Ariamena — Sitemap and homepage storyboard

## Sitemap

```
/                      Home (the cinematic story)
/capabilities          What Ariamena does, modalities, deliverables
/industries            Thirteen environments, what is captured in each
/method                Five stages, what you receive, what we need from you
/responsible-data      Six principles, how they work in practice
/about                 Name, belief, how we work, work with us
/contact               Start a conversation (form + direct email)
/privacy               Privacy notice (structure ready; legal text to be supplied)
/terms                 Terms (structure ready; legal text to be supplied)
```

Primary navigation: Capabilities · Industries · Method · Responsible Data · About · [Start a conversation]
Footer: Ariamena · Capabilities · Industries · Method · Responsible Data · About · Contact · LinkedIn · Privacy · Terms

## Homepage storyboard

Axis position is the page's place between warm (0) and dark (1). The backdrop color is driven by scroll.

| # | Section | Axis | Goal | Layout | Visual | Motion | Reduced motion |
|---|---|---|---|---|---|---|---|
| 1 | Hero | 0 → 0.5 across the width | State what Ariamena does | Left: eyebrow, H1, lead, two CTAs. Right: scene crossing the axis | Warm environment and clay silhouette on the left; the same figure as cyan keypoints, frame, and vector field on the right | On load: headline lines rise, figure draws, keypoints trace, frame corners lock. On scroll: the light half recedes | Final frame shown, no draw-in |
| 2 | Human | 0 | Every intelligent system begins with people | Two-column header, then a full-width evidence tableau | Six abstract fragments: hand, production floor, instruction, office handover, home, yard | Three-depth parallax (24 / 12 / 6 px); captions reveal as fragments enter | Fragments static, captions visible |
| 3 | Data | 0.35 | Reality becomes a usable signal | Header, then an interactive figure with a three-state toggle and five stage notes | Raw scene → data layer → structured representation | Toggle crossfades and draws; keypoints trace; boxes snap; grid resolves | Toggle still works; states switch instantly |
| 4 | Industries | 0.55 | Built for the environments AI must understand | Selector list on the left, environment card on the right | Thirteen environment glyphs in the same line language | Selection crossfades the card; the glyph re-draws | Instant switch |
| 5 | Method | 0.75 | From the field to the model | Pinned stack: stage copy on the left, five-layer stack on the right | Layers: Human experience, Observation, Context, Structure, Intelligence | Sticky container; each layer rises and locks in as its stage scrolls into view | All five layers shown, no pin |
| 6 | Responsible Data | 0.6 → 0.2 | Human data requires human responsibility | Header, then a six-principle grid | The dark field calms: lines align and become transparent; the backdrop lightens | Backdrop eases toward warm; principles reveal in sequence | Static |
| 7 | Outcome | 0.15 | AI that understands more | Header, then the returned scene with three outcome notes | The original human scene, warm again, with a refined transparent intelligence layer over it | Silhouette and field crossfade back in | Static |
| 8 | CTA + footer | 0.05 | Convert | Centered headline, one line, one button | None | Headline reveal | Static |

Section lengths: hero 100vh; Human 120vh; Data 110vh; Industries 100vh; Method pinned, 5 × 70vh scroll length; Responsible 100vh; Outcome 90vh; CTA 60vh.
