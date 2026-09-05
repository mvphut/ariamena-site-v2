import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { Words } from "./Words";
import { home, site } from "@/content/site";
import styles from "./CTABand.module.css";

export function CTABand({ title = home.cta.title, body = home.cta.body, accent = "human data layer" }: { title?: string; body?: string; accent?: string }) {
  return (
    <section className={`${styles.band} theme-dark`} data-theme-section="dark" aria-labelledby="cta-title">
      <div className={`container ${styles.inner}`}>
        <Words as="h2" id="cta-title" text={title} accent={accent} className={`h2 ${styles.title}`} />
        <Reveal as="p" className={`lead ${styles.body}`} delay={200}>
          {body}
        </Reveal>
        <Reveal delay={320} className={styles.actions}>
          <Button href="/contact">{site.cta.primary}</Button>
          <a href={`mailto:${site.email}`} className={styles.mail}>
            {site.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
