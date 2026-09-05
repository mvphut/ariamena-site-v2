import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import type { Content } from "@/content/site";
import p from "@/components/page.module.css";

export function MethodView({ c }: { c: Content }) {
  const { howPrograms, methodPage, methodStages, site } = c;
  return (
    <>
      <PageHero eyebrow={methodPage.hero.eyebrow} title={methodPage.hero.title} lead={methodPage.hero.lead} accent={methodPage.hero.accent} />
      <section className={p.section} data-theme-section="light">
        <div className="container">
          <div className={p.timeline}>
            {methodStages.map((st, i) => (
              <Reveal key={st.n} className={p.tStage} delay={i * 60}>
                <div className={`label ${p.n}`}>
                  <span>{st.n}</span>
                  <small>{st.layer}</small>
                </div>
                <h2>{st.title}</h2>
                <p>{st.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className={`${p.section} ${p.sectionCool}`} data-theme-section="cool">
        <div className="container">
          <div className={p.head}>
            <h2>{howPrograms.title}</h2>
            <p>{howPrograms.lead}</p>
          </div>
          <div className={p.grid3}>
            {[howPrograms.rigs, howPrograms.formats, howPrograms.review].map((g, i) => (
              <Reveal key={g.title} className={`${p.cell} ${p.cellCool}`} delay={i * 60}>
                <span className={`label ${p.n}`}>0{i + 1}</span>
                <h3>{g.title}</h3>
                <ul className={p.points}>
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className={p.section} data-theme-section="light">
        <div className="container">
          <div className={p.head}>
            <h2>{howPrograms.pilot.title}</h2>
            <p>{site.ui.pilotBody}</p>
          </div>
          <div className={p.timeline}>
            {howPrograms.pilot.steps.map((st, i) => (
              <Reveal key={st.title} className={p.tStage} delay={i * 60}>
                <div className={`label ${p.n}`}>
                  <span>0{i + 1}</span>
                </div>
                <h3 className={p.tStageH3}>{st.title}</h3>
                <p>{st.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className={`${p.section} ${p.sectionMineral}`} data-theme-section="light">
        <div className="container">
          <div className={p.head}>
            <h2>{howPrograms.engagement.title}</h2>
            <p>{site.ui.engagementBody}</p>
          </div>
          <div className={p.grid3}>
            {howPrograms.engagement.items.map((it, i) => (
              <Reveal key={it.title} className={p.cell} delay={i * 60}>
                <span className={`label ${p.n}`}>0{i + 1}</span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </Reveal>
            ))}
          </div>
          <div className={p.two} style={{ marginTop: "clamp(40px, 5vw, 72px)" }}>
            <Reveal className={p.panel}>
              <h3>{methodPage.receive.title}</h3>
              <ul>
                {methodPage.receive.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className={p.panel} delay={120}>
              <h3>{methodPage.need.title}</h3>
              <ul>
                {methodPage.need.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
      <CTABand c={c} />
    </>
  );
}
