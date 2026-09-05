import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { DataCard } from "@/components/DataCard";
import { EnvGlyph } from "@/components/EnvGlyph";
import { programs, workPage, industries } from "@/content/site";
import p from "@/components/page.module.css";

export const metadata: Metadata = { title: "Work", description: workPage.hero.lead };

export default function Page() {
  return (
    <>
      <PageHero eyebrow={workPage.hero.eyebrow} title={workPage.hero.title} lead={workPage.hero.lead} accent="deliver them." />
      <section className={p.section} data-theme-section="light" style={{ paddingTop: 0 }}>
        <div className="container">
          {programs.map((pr, i) => {
            const ind = industries.find((x) => x.name === pr.environment) ?? industries.find((x) => pr.environment.startsWith(x.name.split(" ")[0]));
            return (
              <Reveal key={pr.slug} as="article" id={pr.slug} className={p.program}>
                <div className={p.programHead}>
                  <div className={p.programMeta}>
                    <span className={`label ${p.n}`}>Program 0{i + 1}</span>
                    <span className={`label ${p.programEnv}`}>
                      <EnvGlyph slug={ind?.slug ?? "offices"} size={22} /> {pr.environment} · {pr.location}
                    </span>
                  </div>
                  <h2>{pr.title}</h2>
                  <p className="lead">{pr.summary}</p>
                </div>
                <div className={p.programFacts}>
                  {pr.facts.map((f) => (
                    <div key={f.label} className={p.fact}>
                      <span className={p.factV}>{f.value}</span>
                      <span className={`label ${p.factL}`}>{f.label}</span>
                    </div>
                  ))}
                </div>
                <div className={p.programGrid}>
                  <div>
                    <h3 className={p.subhead}>What was captured</h3>
                    <ul className={p.points}>
                      {pr.captured.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                    <h3 className={p.subhead} style={{ marginTop: 28 }}>
                      How quality was checked
                    </h3>
                    <ul className={p.points}>
                      {pr.quality.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                  <DataCard rows={pr.card} />
                </div>
              </Reveal>
            );
          })}
          <p className={p.note} style={{ marginTop: 48 }}>
            Programs are described at the level of detail we share publicly. Client names, model details, and full data cards are shared under NDA.
          </p>
        </div>
      </section>
      <CTABand title="Run a pilot on the environment your model needs." accent="your model needs." body="Four weeks, fixed scope, fixed price, and enough validated data to test against your own benchmarks." />
    </>
  );
}
