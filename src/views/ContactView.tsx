import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import type { Content } from "@/content/site";
import p from "@/components/page.module.css";

export function ContactView({ c }: { c: Content }) {
  const { contactNext, contactPage, site } = c;
  return (
    <>
      <PageHero eyebrow={contactPage.hero.eyebrow} title={contactPage.hero.title} lead={contactPage.hero.lead} accent={contactPage.hero.accent} />
      <section className={p.section} data-theme-section="light" style={{ paddingTop: 0 }}>
        <div className={`container ${p.formGrid}`}>
          <Reveal>
            <ContactForm c={c} />
          </Reveal>
          <div className={p.sideStack}>
            <Reveal className={p.panel} delay={150}>
              <h2>{contactPage.direct.title}</h2>
              <p style={{ color: "var(--ink-2)", marginBottom: 18 }}>{contactPage.direct.text}</p>
              <a href={`mailto:${site.email}`} className="mono" style={{ borderBottom: "1px solid var(--line-strong)", paddingBottom: 2 }}>
                {site.email}
              </a>
              <p className="label" style={{ color: "var(--ink-3)", marginTop: 28 }}>
                {site.ui.repliesLine}
              </p>
            </Reveal>
            <Reveal className={p.panel} delay={250}>
              <h2>{contactNext.title}</h2>
              <ol className={p.steps}>
                {contactNext.steps.map((s, i) => (
                  <li key={s.title}>
                    <span className={`label ${p.n}`}>0{i + 1}</span>
                    <div>
                      <b>{s.title}</b>
                      <p>{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
