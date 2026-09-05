import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import type { Content } from "@/content/site";
import p from "@/components/page.module.css";

export function CapabilitiesView({ c }: { c: Content }) {
  const { capabilities, site } = c;
  return (
    <>
      <PageHero eyebrow={capabilities.hero.eyebrow} title={capabilities.hero.title} lead={capabilities.hero.lead} accent={capabilities.hero.accent} />
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
            <h2>{site.ui.modalities}</h2>
            <div>
              <p>{site.ui.modalitiesBody}</p>
              <ul className={p.chips} aria-label={site.ui.modalities}>
                {capabilities.modalities.map((m) => (
                  <li key={m} className={p.chip}>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={p.head} style={{ marginBottom: 0 }}>
            <h2>{site.ui.fits}</h2>
            <div>
              <p>{site.ui.fitsBody}</p>
              <div style={{ marginTop: 20 }}>
                <Button href={`${site.base}/method`} variant="link">
                  {site.ui.seeMethod}
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
