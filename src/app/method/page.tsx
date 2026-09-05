import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { methodPage, methodStages } from "@/content/site";
import p from "@/components/page.module.css";

export const metadata: Metadata = { title: "Method", description: methodPage.hero.lead };

export default function Page() {
  return (
    <>
      <PageHero eyebrow={methodPage.hero.eyebrow} title={methodPage.hero.title} lead={methodPage.hero.lead} accent="the model." />
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
      <section className={`${p.section} ${p.sectionMineral}`} data-theme-section="light">
        <div className={`container ${p.two}`}>
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
      </section>
      <CTABand />
    </>
  );
}
