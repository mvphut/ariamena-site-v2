"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { PointCloud } from "@/components/PointCloud";
import { drawFigure, drawHand } from "@/lib/pointcloud";
import { en, type Content } from "@/content/site";
import s from "./home.module.css";

/** Environment line-work per scene (people are rendered as particles on the canvas underneath). 400 x 300 box. */
const scenes: Record<string, React.ReactNode> = {
  hand: (
    <g>
      <path className={s.animTool} d="M84 200 200 78" stroke="var(--ink)" strokeOpacity="0.45" strokeWidth="6" strokeLinecap="round" />
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
    </g>
  ),
  instruction: (
    <g>
      <g stroke="var(--ink)" strokeOpacity="0.28" fill="none">
        <rect x="150" y="50" width="220" height="120" rx="2" />
        <path d="M0 240h400" />
        <path className={s.animWrite} d="M170 80h100M170 100h60" pathLength={1} />
      </g>
    </g>
  ),
  office: (
    <g>
      <g stroke="var(--ink)" strokeOpacity="0.28" fill="none">
        <path d="M0 250h400M110 250v-50h180v50M140 200v-70h120v70" />
        <rect x="160" y="146" width="80" height="50" rx="2" />
      </g>
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
    </g>
  ),
  yard: (
    <g>
      <g stroke="var(--ink)" strokeOpacity="0.28" fill="none">
        <path d="M0 240h400M0 262h400" />
        <rect x="260" y="150" width="60" height="45" />
        <rect x="320" y="150" width="60" height="45" />
        <rect x="290" y="105" width="60" height="45" />
        <rect x="260" y="195" width="120" height="45" />
        <path d="M40 240v-40h90v40M40 220h90M60 240h-8M70 240h-8" />
      </g>
      <g className={s.animRoll}>
        <rect x="130" y="200" width="60" height="40" rx="2" fill="none" stroke="var(--ink)" strokeOpacity="0.5" />
        <circle cx="140" cy="244" r="6" fill="none" stroke="var(--ink)" strokeOpacity="0.5" />
        <circle cx="180" cy="244" r="6" fill="none" stroke="var(--ink)" strokeOpacity="0.5" />
      </g>
    </g>
  ),
};

/** The people in each scene, drawn into the sampling canvas. */
const people: Record<string, (ctx: CanvasRenderingContext2D) => void> = {
  hand: (ctx) => drawHand(ctx, 70, 30, 1.15),
  floor: (ctx) => {
    drawFigure(ctx, "reaching", 150, 60, 0.62);
    drawFigure(ctx, "walking", 300, 90, 0.42);
  },
  instruction: (ctx) => {
    drawFigure(ctx, "teaching", 40, 50, 0.62);
    drawFigure(ctx, "sitting", 170, 160, 0.36);
    drawFigure(ctx, "sitting", 250, 160, 0.36);
    drawFigure(ctx, "sitting", 330, 160, 0.36);
  },
  office: (ctx) => {
    drawFigure(ctx, "handing", 20, 40, 0.66);
    drawFigure(ctx, "handing", 250, 40, 0.66, true);
  },
  home: (ctx) => drawFigure(ctx, "sitting", 190, 70, 0.58),
  yard: (ctx) => drawFigure(ctx, "pushing", 20, 80, 0.55),
};

const layout = [
  { id: "hand", cls: "f1", count: 2600 },
  { id: "floor", cls: "f2", count: 2600 },
  { id: "instruction", cls: "f3", count: 2400 },
  { id: "office", cls: "f4", count: 2600 },
  { id: "home", cls: "f5", count: 1800 },
  { id: "yard", cls: "f6", count: 2000 },
];

export function HumanTableau({ c = en }: { c?: Content }) {
  const { home } = c;
  return (
    <section className={`section theme-light ${s.human}`} data-theme-section="light" aria-labelledby="human-title">
      <div className="container">
        <SectionHeader id="human-title" number={home.human.number} eyebrow={home.human.eyebrow} title={home.human.title} accent={home.human.accent} body={home.human.body} />
      </div>
      <div className={`container ${s.tableau}`}>
        {layout.map((f, i) => {
          const frag = home.human.fragments.find((x) => x.id === f.id)!;
          return (
            <Reveal key={f.id} as="figure" className={`${s.frag} ${s[f.cls]}`} delay={i * 80} threshold={0.15}>
              <div className={s.fragInner}>
                <div className={s.fragMedia}>
                  <PointCloud count={f.count} box={[400, 300]} draw={people[f.id]} warm={["#c9a98c", "#c2a086", "#b8957c"]} cool={["#c9a98c", "#c2a086", "#b8957c"]} size={1.6} drift={1.5} assemble="scroll" />
                  <svg viewBox="0 0 400 300" className={s.fragSvg} aria-hidden="true">
                    {scenes[f.id]}
                  </svg>
                </div>
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
