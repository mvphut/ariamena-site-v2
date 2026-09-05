import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { DataCard } from "@/components/DataCard";
import { EnvGlyph } from "@/components/EnvGlyph";
import type { Content } from "@/content/site";
import p from "@/components/page.module.css";

export function WorkView({ c }: { c: Content }) {
  const { programs, workPage, industries, site } = c;
  return (
    <>
      <PageHero eyebrow={workPage.hero.eyebrow} title={workPage.hero.title} lead={workPage.hero.lead} accent={workPage.hero.accent} />
      <section className={p.section} data-theme-section="light" style={{ paddingTop: 0 }}>
        <div className="container">
          {programs.map((pr, i) => {
            const ind = industries.find((x) => x.name === pr.environment);
            return (
              <Reveal key={pr.slug} as="article" id={pr.slug} className={p.program}>
                <div className={p.programHead}>
                  <div className={p.programMeta}>
                    <span className={`label ${p.n}`}>
                      {site.ui.program} 0{i + 1}
                    </span>
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
                    <h3 className={p.subhead}>{site.ui.captured}</h3>
                    <ul className={p.points}>
                      {pr.captured.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                    <h3 className={p.subhead} style={{ marginTop: 28 }}>
                      {site.ui.quality}
                    </h3>
                    <ul className={p.points}>
                      {pr.quality.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <DataCard rows={pr.card} title={site.ui.dataCard} ships={site.ui.shipsWith} />
                </div>
              </Reveal>
            );
          })}
          <p className={p.note} style={{ marginTop: 48 }}>
            {site.ui.workNote}
          </p>
        </div>
      </section>
      <CTABand c={c} title={site.ui.workCta.title} accent={site.ui.workCta.accent} body={site.ui.workCta.body} />
    </>
  );
}
