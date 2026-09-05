"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { FigureShape } from "@/components/figure/Figure";
import { Environment } from "@/components/figure/Environment";
import { home } from "@/content/site";
import { useInView } from "@/lib/useInView";
import s from "./home.module.css";

export function Outcome() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <section className={`section theme-light ${s.outcome}`} data-theme-section="light" aria-labelledby="outcome-title">
      <div className="container">
        <SectionHeader id="outcome-title" number={home.outcome.number} eyebrow={home.outcome.eyebrow} title={home.outcome.title} accent="starts with more." body={home.outcome.body} />
      </div>
      <div className={`container ${s.outGrid}`}>
        <div className={`${s.outScene} draw ${inView ? "is-in" : ""}`} ref={ref}>
          <svg viewBox="0 0 640 480" className={s.outSvg} aria-hidden="true">
            <g transform="translate(60 90)">
              <Environment stroke="var(--ink)" opacity={0.22} />
            </g>
            <g className={s.outField} stroke="var(--cobalt)" strokeOpacity="0.16" fill="none">
              {Array.from({ length: 7 }).map((_, i) => (
                <path key={i} d={`M40 ${120 + i * 40}C200 ${90 + i * 40} 360 ${160 + i * 40} 600 ${110 + i * 40}`} />
              ))}
            </g>
            <FigureShape pose="reaching" mode="silhouette" x={200} y={70} scale={1} fill="var(--clay)" />
            <g className={s.outLayer}>
              <FigureShape pose="reaching" mode="skeleton" x={200} y={70} scale={1} stroke="var(--cobalt)" />
            </g>
          </svg>
          <span className={`${s.tag} ${s.tagWarm}`} style={{ left: "6%", top: "6%" }}>
            scene · assembly line · understood
          </span>
        </div>
        <ul className={s.outNotes}>
          {home.outcome.notes.map((n, i) => (
            <Reveal as="li" key={n.title} delay={i * 90} className={s.outNote}>
              <h3 className={s.outT}>{n.title}</h3>
              <p className={`small ${s.outP}`}>{n.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
