import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { EnvGlyph } from "@/components/EnvGlyph";
import { industries, home } from "@/content/site";
import p from "@/components/page.module.css";

export const metadata: Metadata = { title: "Industries", description: home.industries.body };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Industries" title={home.industries.title} lead={home.industries.body} accent="must understand." />
      <section className={p.section} data-theme-section="light">
        <div className="container">
          <div className={p.indGrid}>
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} as="article" className={p.indItem} delay={(i % 2) * 80} id={ind.slug}>
                <EnvGlyph slug={ind.slug} size={44} />
                <div>
                  <h2>{ind.name}</h2>
                  <p>{ind.statement}</p>
                  <ul className={p.points}>
                    {ind.captures.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <p className={p.note} style={{ marginTop: 40 }}>
            These are environments Ariamena is built to scope and run programs in. They are not claims of active sites or existing clients.
          </p>
        </div>
      </section>
      <CTABand />
    </>
  );
}
