import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { capabilities } from "@/content/site";
import p from "@/components/page.module.css";

export const metadata: Metadata = { title: "Capabilities", description: capabilities.hero.lead };

export default function Page() {
  return (
    <>
      <PageHero eyebrow={capabilities.hero.eyebrow} title={capabilities.hero.title} lead={capabilities.hero.lead} accent="model-ready data." />
      <section className={p.section} data-theme-section="light">
        <div className="container">
          <div className={p.list}>
            {capabilities.items.map((it, i) => (
              <Reveal key={it.title} className={p.item} delay={(i % 2) * 80}>
                <span className={`label ${p.n}`}>0{i + 1}</span>
                <div>
                  <h2>{it.title}</h2>
                  <p>{it.text}</p>
                  <ul className={p.points}>
                    {it.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className={`${p.section} ${p.sectionMineral}`} data-theme-section="light">
        <div className="container">
          <div className={p.head}>
            <h2>Modalities</h2>
            <div>
              <p>Programs are designed around the signals the model needs, not around a single capture tool. Most programs combine several.</p>
              <ul className={p.chips} aria-label="Modalities">
                {capabilities.modalities.map((m) => (
                  <li key={m} className={p.chip}>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={p.head} style={{ marginBottom: 0 }}>
            <h2>How it fits together</h2>
            <div>
              <p>Every capability above is a stage of one method. Program design sets the acceptance criteria; capture, structuring, and validation answer to them; delivery documents how they were met.</p>
              <div style={{ marginTop: 20 }}>
                <Button href="/method" variant="link">
                  See the method
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
