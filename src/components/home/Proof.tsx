"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { DataCard } from "@/components/DataCard";
import { FigureShape } from "@/components/figure/Figure";
import { PointCloud } from "@/components/PointCloud";
import { drawFigure } from "@/lib/pointcloud";
import { Environment } from "@/components/figure/Environment";
import { en, type Content } from "@/content/site";
import { useInView } from "@/lib/useInView";
import s from "./home.module.css";

export function Proof({ c = en }: { c?: Content }) {
  const { homeExtra, programs, site } = c;
  const pr = programs[0];
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <section className={`section theme-dark ${s.proof}`} data-theme-section="dark" aria-labelledby="proof-title">
      <div className="container">
        <SectionHeader id="proof-title" number={homeExtra.proof.number} eyebrow={homeExtra.proof.eyebrow} title={homeExtra.proof.title} body={homeExtra.proof.body} />
      </div>
      <div className={`container ${s.proofGrid}`}>
        <div>
          <div className={`${s.proofFrame} draw ${inView ? "is-in" : ""}`} ref={ref}>
            <PointCloud count={5000} box={[640, 480]} draw={(ctx) => drawFigure(ctx, "reaching", 200, 70, 1)} warm={["#9fb3c8", "#5ee4ff", "#8a6cff"]} cool={["#9fb3c8", "#5ee4ff", "#8a6cff"]} size={1.5} drift={1.4} scan assemble="scroll" />
            <svg viewBox="0 0 640 480" className={s.dataSvg} aria-hidden="true">
              <g transform="translate(60 90)">
                <Environment stroke="var(--cyan)" opacity={0.18} />
              </g>
              <FigureShape pose="reaching" mode="skeleton" x={200} y={70} stroke="var(--cyan)" box />
              <g fill="none" stroke="var(--uv)" strokeWidth="1" strokeDasharray="4 3">
                <rect x="256" y="292" width="126" height="54" />
                <rect x="84" y="196" width="118" height="164" />
              </g>
              <g className="mono" fill="var(--uv)" fontSize="11">
                <text x="258" y="286">tray</text>
                <text x="86" y="190">shelving</text>
              </g>
            </svg>
            <div className={s.scan} aria-hidden="true" />
            <span className={`${s.tag} ${s.tagCool}`} style={{ left: 16, top: 16 }}>
              {pr.card[0].value} · frame 0412 · accepted
            </span>
          </div>
          <div className={s.proofFacts}>
            {pr.facts.map((f) => (
              <div key={f.label}>
                <span className={s.proofV}>{f.value}</span>
                <span className={`label ${s.proofL}`}>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
        <Reveal delay={150}>
          <p className={`label ${s.proofTitle}`}>
            {pr.title} · {pr.environment}
          </p>
          <DataCard rows={pr.card} title={site.ui.dataCard} ships={site.ui.shipsWith} />
          <div style={{ marginTop: 24 }}>
            <Button href={`${site.base}/work`} variant="link">
              {site.ui.seePrograms}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
