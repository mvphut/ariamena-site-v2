# Ariamena — Visual direction comparison, website concepts, recommendation

## 1. Comparison of the three visual directions

| Criterion | 01 Signal Dark | 02 Field Intelligence | 03 Human / Machine |
|---|---|---|---|
| First read | AI infrastructure | Research partner | The transformation itself |
| Human warmth | Low (carried by copy) | High | High at both ends |
| Technical credibility | Very high | Medium-high (diagram craft) | Very high in the dark half |
| Differentiation in category | Low: dark-first AI sites are common | Medium | High: the axis is the story |
| Story alignment (Human → Data → AI → Human) | Told in words | Told in figures | Told in the background color, the figure, and the type |
| Build complexity | Low | Low | Medium: every component has light and dark states |
| Performance risk | Low | Very low | Low-medium: grain, masks, and scroll-linked backdrop need care |
| Accessibility risk | Low-contrast temptation on dark | Very low | Mid-axis sections must be contrast-checked |
| Best fit for audience | Robotics teams, labs | Research orgs, enterprise | All of the above, with the story doing the work |
| Verdict | Strong fallback | Strong for trust | **Recommended** |

## 2. Two website concepts

### Concept A — "The Crossing"
One continuous scroll along a single axis. The page is a film with one protagonist.

- **Storytelling.** A human figure is introduced in the hero and stays with the visitor. It is observed (Human), deconstructed into keypoints and sequences (Data), placed into environments (Industries), locked into a five-layer stack (Method), calmed and made transparent (Responsible Data), and returned as a warm silhouette inside the model's field (Outcome). The visitor watches the transformation happen instead of reading about it.
- **Pacing.** Long sections, one idea each. Editorial two-column headers: eyebrow and headline on the left, one paragraph on the right. Generous vertical rhythm.
- **Layout system.** Full-bleed sections over a fixed backdrop whose color position on the warm-to-dark axis is driven by scroll. Content sits in a 12-column grid with a narrow reading measure. Evidence tableaus break the grid.
- **Animation behavior.** Scroll-linked backdrop; three-depth parallax in the Human tableau; keypoint traces that draw in as the Data section enters; a pinned Method stack in which five layers rise and lock; masked line-by-line text reveals. No scroll-jacking: native scroll always, the pinned scene is a plain sticky container.
- **Composition.** Asymmetric. Left-weighted type, right-weighted figures, the figure crossing the axis at the center of the hero.
- **Risks.** Engineering discipline; mid-axis contrast; must be tested on mobile where the axis runs vertically.

### Concept B — "Evidence Files"
A research dossier in six numbered chapters.

- **Storytelling.** The site presents Ariamena's argument as a document: Chapter 01 People, 02 Signal, 03 Environments, 04 Method, 05 Responsibility, 06 Outcome. Each chapter is a "file": a panel that slides over the previous one and holds. Visuals are figures with captions (Fig. 01, Fig. 02) rather than atmosphere.
- **Pacing.** Denser and shorter. Reading, not watching. Each chapter is one viewport of content.
- **Layout system.** Light, editorial (Field Intelligence). Sticky chapter number and title on the left, content on the right, like a paper. Centered, narrow measure. Hairline rules everywhere.
- **Animation behavior.** Sticky card stack: each chapter panel pins and is covered by the next with a slight scale-down. Diagrams draw in once on intersection. Hover-to-annotate on figures. No parallax.
- **Composition.** Symmetric, grid-bound, calm.
- **Risks.** Less cinematic; harder to distinguish from other light editorial sites; the "intelligence" half of the story lives only in diagrams.

## 3. Recommendation

**Build Concept A, "The Crossing", on the Human / Machine visual system.**

Why:
1. The company's one sentence is a transformation. Concept A makes the transformation the site's structure. Concept B describes it.
2. Both audiences are served. Labs and robotics teams see rigor in the dark half; research and enterprise buyers feel the care in the warm half.
3. It is the only combination that is hard to imitate. Dark AI sites and light editorial sites are both crowded categories. A site that crosses between them, with a persistent human figure, is not.
4. It stays practical. Everything is SVG, CSS, and a small amount of scroll math. No 3D, no video, no heavy libraries.

What to borrow from Concept B: the editorial two-column header, figure captions in mono, and the numbered chapter system. These are used throughout the build.
