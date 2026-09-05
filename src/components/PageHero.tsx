import { Reveal } from "./Reveal";
import { Words } from "./Words";
import styles from "./page.module.css";

export function PageHero({ eyebrow, title, lead, accent }: { eyebrow: string; title: string; lead: string; accent?: string }) {
  return (
    <section className={`${styles.hero} theme-light`} data-theme-section="light">
      <div className={`container ${styles.heroInner}`}>
        <Reveal as="p" className={`label ${styles.eyebrow}`} auto>
          {eyebrow}
        </Reveal>
        <Words as="h1" text={title} accent={accent} className={`display ${styles.title}`} delay={100} auto />
        <Reveal as="p" className={`lead ${styles.lead}`} delay={400} auto>
          {lead}
        </Reveal>
      </div>
    </section>
  );
}
