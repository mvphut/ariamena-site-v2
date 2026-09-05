import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { principles, responsiblePage, security } from "@/content/site";
import p from "@/components/page.module.css";

export const metadata: Metadata = { title: "Responsible Data", description: responsiblePage.hero.lead };

export default function Page() {
  return (
    <>
      <PageHero eyebrow={responsiblePage.hero.eyebrow} title={responsiblePage.hero.title} lead={responsiblePage.hero.lead} accent="human responsibility." />
      <section className={`${p.section} ${p.sectionCool}`} data-theme-section="cool">
        <div className="container">
          <div className={p.head}>
            <h2>Six principles</h2>
            <p>Each principle is an operating rule, not a value statement. They shape how programs are scoped, staffed, run, reviewed, and delivered.</p>
          </div>
          <div className={p.grid3}>
            {principles.map((pr, i) => (
              <Reveal key={pr.title} className={`${p.cell} ${p.cellCool}`} delay={i * 50}>
                <span className={`label ${p.n}`}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{pr.title}</h3>
                <p>{pr.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className={p.section} data-theme-section="light">
        <div className="container">
          <div className={p.head}>
            <h2>In practice</h2>
            <p>What responsibility looks like at each point in a program.</p>
          </div>
          <div className={p.timeline}>
            {responsiblePage.practice.map((st, i) => (
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
            <h2>{security.title}</h2>
            <p>{security.lead}</p>
          </div>
          <div className={p.grid3}>
            {security.items.map((it, i) => (
              <Reveal key={it.title} className={p.cell} delay={i * 50}>
                <span className={`label ${p.n}`}>0{i + 1}</span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
