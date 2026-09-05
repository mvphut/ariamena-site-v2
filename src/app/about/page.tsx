import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Portrait } from "@/components/Portrait";
import { aboutPage, company, founders } from "@/content/site";
import p from "@/components/page.module.css";

export const metadata: Metadata = { title: "About", description: aboutPage.hero.lead };

export default function Page() {
  return (
    <>
      <PageHero eyebrow={aboutPage.hero.eyebrow} title={aboutPage.hero.title} lead={aboutPage.hero.lead} accent="works in." />
      <section className={p.section} data-theme-section="light" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={p.factsRow}>
            {[
              { v: company.founded, l: "Founded" },
              { v: company.bases.join(" · "), l: "Bases" },
              { v: company.network, l: "Contributor network" },
              { v: `${company.countries.length} countries`, l: "Active coverage" },
            ].map((f) => (
              <div key={f.l} className={p.fact}>
                <span className={p.factV}>{f.v}</span>
                <span className={`label ${p.factL}`}>{f.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={`${p.section} ${p.sectionMineral}`} data-theme-section="light">
        <div className="container">
          <div className={p.head}>
            <h2>Founders</h2>
            <p>Three people who each watched AI fail in an environment they knew well, and decided the data was the problem.</p>
          </div>
          <div className={p.founders}>
            {founders.map((f, i) => (
              <Reveal key={f.name} className={p.founder} delay={i * 80}>
                <Portrait initials={f.initials} size={120} />
                <div>
                  <h3>{f.name}</h3>
                  <p className={`label ${p.role}`}>{f.role}</p>
                  <p className={p.bio}>{f.bio}</p>
                  <ul className={p.focus}>
                    {f.focus.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className={p.section} data-theme-section="light">
        <div className="container">
          <div className={p.head}>
            <h2>{aboutPage.name.title}</h2>
            <p>{aboutPage.name.text}</p>
          </div>
          <div className={p.head}>
            <h2>What we believe</h2>
            <div className={p.beliefs}>
              {aboutPage.beliefs.map((b, i) => (
                <div key={b.title} className={p.belief}>
                  <span className={`label ${p.n}`}>0{i + 1}</span>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>
          </div>
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
