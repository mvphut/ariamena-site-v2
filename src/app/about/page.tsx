import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { aboutPage } from "@/content/site";
import p from "@/components/page.module.css";

export const metadata: Metadata = { title: "About", description: aboutPage.hero.lead };

export default function Page() {
  return (
    <>
      <PageHero eyebrow={aboutPage.hero.eyebrow} title={aboutPage.hero.title} lead={aboutPage.hero.lead} accent="works in." />
      <section className={p.section} data-theme-section="light">
        <div className="container">
          <div className={p.head}>
            <h2>{aboutPage.name.title}</h2>
            <p>{aboutPage.name.text}</p>
          </div>
        </div>
      </section>
      <section className={`${p.section} ${p.sectionMineral}`} data-theme-section="light">
        <div className="container">
          <div className={p.head}>
            <h2>What we believe</h2>
            <p>Four commitments that shape every program.</p>
          </div>
          <div className={p.list}>
            {aboutPage.beliefs.map((b, i) => (
              <Reveal key={b.title} className={p.item} delay={(i % 2) * 80}>
                <span className={`label ${p.n}`}>0{i + 1}</span>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className={p.section} data-theme-section="light">
        <div className="container">
          <div className={p.head} style={{ marginBottom: 0 }}>
            <h2>{aboutPage.work.title}</h2>
            <div>
              <p>{aboutPage.work.text}</p>
              <div style={{ marginTop: 22 }}>
                <Button href="/contact" variant="secondary">
                  Introduce yourself
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
