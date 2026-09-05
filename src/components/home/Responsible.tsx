import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { en, type Content } from "@/content/site";
import s from "./home.module.css";

export function Responsible({ c = en }: { c?: Content }) {
  const { home, principles, site } = c;
  return (
    <section className={`section theme-cool ${s.responsible}`} data-theme-section="cool" aria-labelledby="resp-title">
      <div className="container">
        <SectionHeader id="resp-title" number={home.responsible.number} eyebrow={home.responsible.eyebrow} title={home.responsible.title} accent={home.responsible.accent} body={home.responsible.body} />
      </div>
      <div className="container">
        <div className={s.principles}>
          {principles.map((p, i) => (
            <Reveal key={p.title} className={s.principle} delay={i * 60}>
              <span className={`label ${s.prN}`}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={s.prT}>{p.title}</h3>
              <p className={`small ${s.prP}`}>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <div className={`container ${s.respFoot}`}>
        <Reveal>
          <Button href={`${site.base}/responsible-data`} variant="link">
            {site.ui.respLink}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
