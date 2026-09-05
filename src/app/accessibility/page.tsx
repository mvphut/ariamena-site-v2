import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { accessibilityPage, site } from "@/content/site";
import p from "@/components/page.module.css";

export const metadata: Metadata = { title: "Accessibility" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Accessibility" title="Accessibility statement." lead={accessibilityPage.intro} />
      <section className={p.section} data-theme-section="light" style={{ paddingTop: 0 }}>
        <div className={`container ${p.prose}`}>
          <h2>What this site does</h2>
          <ul>
            {accessibilityPage.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
          <h2>Standard</h2>
          <p>The site is built to meet WCAG 2.1 level AA. Automated checks run on every build, and pages are reviewed by hand at desktop, tablet, and phone sizes with keyboard-only navigation and reduced motion enabled.</p>
          <h2>If something does not work</h2>
          <p>Write to {site.email} with the page and what you were trying to do. We reply within two working days and fix confirmed problems in the next release.</p>
          <p className={p.note}>Last updated {accessibilityPage.updated}.</p>
        </div>
      </section>
    </>
  );
}
