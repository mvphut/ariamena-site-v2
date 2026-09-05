"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "@/lib/useInView";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { SectionHeader } from "@/components/SectionHeader";
import { EnvGlyph } from "@/components/EnvGlyph";
import { home, industries } from "@/content/site";
import s from "./home.module.css";

export function IndustriesSelector() {
  const [active, setActive] = useState(industries[0].slug);
  const [interacted, setInteracted] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const reduced = useReducedMotion();
  const current = industries.find((i) => i.slug === active)!;

  // Advances through the environments on its own until the visitor picks one.
  useEffect(() => {
    if (!inView || interacted || reduced) return;
    const id = setInterval(() => setActive((cur) => industries[(industries.findIndex((i) => i.slug === cur) + 1) % industries.length].slug), 3800);
    return () => clearInterval(id);
  }, [inView, interacted, reduced]);

  const pick = (slug: string) => {
    setInteracted(true);
    setActive(slug);
  };

  return (
    <section className={`section theme-dark ${s.industries}`} data-theme-section="dark" aria-labelledby="industries-title">
      <div className="container">
        <SectionHeader id="industries-title" number={home.industries.number} eyebrow={home.industries.eyebrow} title={home.industries.title} body={home.industries.body} />
      </div>
      <div className={`container ${s.indGrid}`} ref={ref}>
        <div className={s.indListWrap}>
          <ul className={s.indList} aria-label="Environments">
            {industries.map((ind, i) => (
              <li key={ind.slug}>
                <button
                  type="button"
                  className={s.indBtn}
                  aria-pressed={ind.slug === active}
                  onClick={() => pick(ind.slug)}
                  onMouseEnter={() => pick(ind.slug)}
                  onFocus={() => pick(ind.slug)}
                >
                  <span className={`label ${s.indN}`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={s.indName}>{ind.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.indCard} aria-live="polite">
          <div key={current.slug} className={s.indCardInner}>
            <div className={s.indGlyph}>
              <EnvGlyph slug={current.slug} size={88} />
            </div>
            <p className={`label ${s.indCardLabel}`}>Environment · {current.name}</p>
            <h3 className={`h3 ${s.indStatement}`}>{current.statement}</h3>
            <p className={`label ${s.indCapLabel}`}>A program might capture</p>
            <ul className={s.indCaps}>
              {current.captures.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <Link href={`/industries#${current.slug}`} className={s.indMore}>
              More on {current.name.toLowerCase()}
              <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
