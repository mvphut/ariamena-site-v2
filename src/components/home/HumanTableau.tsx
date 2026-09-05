"use client";

import { useEffect, useRef } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { FigureShape } from "@/components/figure/Figure";
import { Hand } from "@/components/figure/Hand";
import { home } from "@/content/site";
import { subscribeScroll, viewProgress } from "@/lib/scroll";
import { useReducedMotion } from "@/lib/useReducedMotion";
import s from "./home.module.css";

const scenes: Record<string, React.ReactNode> = {
  hand: (
    <g transform="translate(70 30) scale(1.15)">
      <g className={s.animHand}>
        <Hand mode="silhouette" />
      </g>
    </g>
  ),
  floor: (
    <g>
      <g stroke="var(--ink)" strokeOpacity="0.28" fill="none">
        <path d="M0 230h400M0 262h400M20 230 0 300M120 230l-30 70M220 230l-14 70M320 230v70" />
        <rect x="40" y="150" width="90" height="80" rx="2" />
        <rect x="150" y="196" width="230" height="34" rx="2" />
        <path d="M160 196v-30h40v30M330 196v-44h36v44" />
      </g>
      <rect className={s.animItem} x="210" y="182" width="26" height="14" rx="2" fill="var(--clay)" opacity="0.7" />
      <FigureShape pose="reaching" x={150} y={60} scale={0.62} fill="var(--clay)" />
      <g className={s.walker}>
        <FigureShape pose="walking" x={300} y={90} scale={0.42} fill="var(--clay)" />
      </g>
    </g>
  ),
  instruction: (
    <g>
      <g stroke="var(--ink)" strokeOpacity="0.28" fill="none">
        <rect x="150" y="50" width="220" height="120" rx="2" />
        <path d="M0 240h400" />
        <path className={s.animWrite} d="M170 80h100M170 100h60" pathLength={1} />
      </g>
      <g className={s.animSway}>
        <FigureShape pose="teaching" x={40} y={50} scale={0.62} fill="var(--clay)" />
      </g>
      <FigureShape pose="sitting" x={170} y={160} scale={0.36} fill="var(--clay)" />
      <FigureShape pose="sitting" x={250} y={160} scale={0.36} fill="var(--clay)" />
      <FigureShape pose="sitting" x={330} y={160} scale={0.36} fill="var(--clay)" />
    </g>
  ),
  office: (
    <g>
      <g stroke="var(--ink)" strokeOpacity="0.28" fill="none">
        <path d="M0 250h400M110 250v-50h180v50M140 200v-70h120v70" />
        <rect x="160" y="146" width="80" height="50" rx="2" />
      </g>
      <FigureShape pose="handing" x={20} y={40} scale={0.66} fill="var(--clay)" />
      <FigureShape pose="handing" x={250} y={40} scale={0.66} fill="var(--clay)" flip />
      <rect className={s.animPass} x="175" y="118" width="46" height="30" rx="2" fill="var(--warm)" stroke="var(--ink)" strokeOpacity="0.5" />
    </g>
  ),
  home: (
    <g>
      <g stroke="var(--ink)" strokeOpacity="0.28" fill="none">
        <rect x="40" y="40" width="120" height="110" rx="2" />
        <path d="M100 40v110M40 95h120M0 250h400" />
        <path d="M200 250v-70c0-10 8-18 18-18h140c10 0 18 8 18 18v70M200 200h176" />
      </g>
      <g className={s.animPlant} fill="none" stroke="var(--ink)" strokeOpacity="0.28">
        <path d="M340 250v-30M340 220c-20-30 10-60 20-50M340 220c10-40-20-50-26-38" />
      </g>
      <FigureShape pose="sitting" x={190} y={70} scale={0.58} fill="var(--clay)" />
    </g>
  ),
  yard: (
    <g>
      <g stroke="var(--ink)" strokeOpacity="0.28" fill="none">
        <path d="M0 240h400M0 262h400" />
        <rect x="260" y="150" width="60" height="45" /><rect x="320" y="150" width="60" height="45" /><rect x="290" y="105" width="60" height="45" /><rect x="260" y="195" width="120" height="45" />
        <path d="M40 240v-40h90v40M40 220h90M60 240h-8M70 240h-8" />
      </g>
      <g className={s.animRoll}>
        <rect x="130" y="200" width="60" height="40" rx="2" fill="none" stroke="var(--ink)" strokeOpacity="0.5" />
        <circle cx="140" cy="244" r="6" fill="none" stroke="var(--ink)" strokeOpacity="0.5" />
        <circle cx="180" cy="244" r="6" fill="none" stroke="var(--ink)" strokeOpacity="0.5" />
        <FigureShape pose="pushing" x={20} y={80} scale={0.55} fill="var(--clay)" />
      </g>
    </g>
  ),
};

const layout = [
  { id: "hand", depth: 3, cls: "f1" },
  { id: "floor", depth: 1, cls: "f2" },
  { id: "instruction", depth: 2, cls: "f3" },
  { id: "office", depth: 3, cls: "f4" },
  { id: "home", depth: 1, cls: "f5" },
  { id: "yard", depth: 2, cls: "f6" },
];

export function HumanTableau() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>("[data-depth]"));
    return subscribeScroll((_, vh) => {
      if (window.innerWidth < 768) {
        items.forEach((it) => (it.style.transform = ""));
        return;
      }
      const p = viewProgress(el, vh);
      for (const it of items) {
        const d = Number(it.dataset.depth);
        it.style.transform = `translate3d(0, ${((p - 0.5) * d * -36).toFixed(1)}px, 0)`;
      }
    });
  }, [reduced]);

  return (
    <section className={`section theme-light ${s.human}`} data-theme-section="light" aria-labelledby="human-title">
      <div className="container">
        <SectionHeader id="human-title" number={home.human.number} eyebrow={home.human.eyebrow} title={home.human.title} accent="people." body={home.human.body} />
      </div>
      <div className={`container ${s.tableau}`} ref={ref}>
        {layout.map((f, i) => {
          const frag = home.human.fragments.find((x) => x.id === f.id)!;
          return (
            <Reveal key={f.id} as="figure" className={`${s.frag} ${s[f.cls]}`} delay={i * 80} threshold={0.15}>
              <div data-depth={f.depth} className={s.fragInner}>
                <svg viewBox="0 0 400 300" className={s.fragSvg} aria-hidden="true">
                  {scenes[f.id]}
                </svg>
                <figcaption className={s.fragCap}>
                  <span className="label">{String(i + 1).padStart(2, "0")}</span>
                  <span className={s.fragTitle}>{frag.caption}</span>
                  <span className={`small ${s.fragNote}`}>{frag.note}</span>
                </figcaption>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
