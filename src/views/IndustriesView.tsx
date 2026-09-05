import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { EnvGlyph } from "@/components/EnvGlyph";
import type { Content } from "@/content/site";
import p from "@/components/page.module.css";

export function IndustriesView({ c }: { c: Content }) {
  const { industries, home, site } = c;
  return (
    <>
      <PageHero eyebrow={site.nav[1].label} title={home.industries.title} lead={home.industries.body} accent={home.industries.accent} />
      <section className={p.section} data-theme-section="light">
        <div className="container">
          <div className={p.indGrid}>
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} as="article" className={p.indItem} delay={(i % 2) * 80} id={ind.slug}>
                <EnvGlyph slug={ind.slug} size={44} />
                <div>
                  <h2>{ind.name}</h2>
                  <p>{ind.statement}</p>
                  <ul className={p.points}>
                    {ind.captures.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <p className={p.note} style={{ marginTop: 40 }}>
            {site.ui.indNote}
          </p>
        </div>
      </section>
      <CTABand c={c} />
    </>
  );
}
