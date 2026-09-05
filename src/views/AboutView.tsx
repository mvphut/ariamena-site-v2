import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Portrait } from "@/components/Portrait";
import type { Content } from "@/content/site";
import p from "@/components/page.module.css";

export function AboutView({ c }: { c: Content }) {
  const { aboutPage, company, founders, site } = c;
  return (
    <>
      <PageHero eyebrow={aboutPage.hero.eyebrow} title={aboutPage.hero.title} lead={aboutPage.hero.lead} accent={aboutPage.hero.accent} />
      <section className={p.section} data-theme-section="light" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={p.factsRow}>
            {[
              { v: company.founded, l: site.ui.founded },
              { v: company.bases.join(" · "), l: site.ui.bases },
              { v: company.network, l: site.ui.network },
              { v: `${company.countries.length} ${site.ui.countries}`, l: site.ui.coverage },
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
            <h2>{site.ui.founders}</h2>
            <p>{site.ui.foundersBody}</p>
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
            <h2>{site.ui.believe}</h2>
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
                <Button href={`${site.base}/contact`} variant="secondary">
                  {site.ui.introduce}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTABand c={c} />
    </>
  );
}
