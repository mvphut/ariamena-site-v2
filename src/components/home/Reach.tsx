import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { en, type Content } from "@/content/site";
import s from "./home.module.css";

export function Reach({ c = en }: { c?: Content }) {
  const { company, homeExtra, site } = c;
  return (
    <section className={`section theme-dark ${s.reach}`} data-theme-section="dark" aria-labelledby="reach-title">
      <div className="container">
        <SectionHeader id="reach-title" number={homeExtra.reach.number} eyebrow={homeExtra.reach.eyebrow} title={homeExtra.reach.title} body={homeExtra.reach.body} />
      </div>
      <div className={`container ${s.reachGrid}`}>
        <Reveal className={s.reachCol}>
          <p className={`label ${s.reachLabel}`}>{site.ui.bases}</p>
          <p className={s.reachBig}>{company.bases.join(" · ")}</p>
          <p className={`label ${s.reachLabel}`} style={{ marginTop: 28 }}>
            {site.ui.network}
          </p>
          <p className={s.reachBig}>{company.network}</p>
        </Reveal>
        <Reveal className={s.reachCol} delay={100}>
          <p className={`label ${s.reachLabel}`}>{site.ui.coverage}</p>
          <ul className={s.reachList}>
            {company.countries.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className={s.reachCol} delay={200}>
          <p className={`label ${s.reachLabel}`}>{site.ui.languages}</p>
          <ul className={s.reachList}>
            {company.languages.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
