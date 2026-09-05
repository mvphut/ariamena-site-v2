import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { contactPage, site } from "@/content/site";
import p from "@/components/page.module.css";

export const metadata: Metadata = { title: "Contact", description: contactPage.hero.lead };

export default function Page() {
  return (
    <>
      <PageHero eyebrow={contactPage.hero.eyebrow} title={contactPage.hero.title} lead={contactPage.hero.lead} accent="conversation." />
      <section className={p.section} data-theme-section="light" style={{ paddingTop: 0 }}>
        <div className={`container ${p.formGrid}`}>
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal className={p.panel} delay={150}>
            <h2>{contactPage.direct.title}</h2>
            <p style={{ color: "var(--ink-2)", marginBottom: 18 }}>{contactPage.direct.text}</p>
            <a href={`mailto:${site.email}`} style={{ borderBottom: "1px solid var(--line-strong)", paddingBottom: 2 }}>
              {site.email}
            </a>
            <p className="label" style={{ color: "var(--ink-3)", marginTop: 28 }}>
              Replies come from a person, not a queue.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
