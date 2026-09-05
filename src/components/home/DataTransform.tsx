"use client";

import { useEffect, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { FigureShape } from "@/components/figure/Figure";
import { Environment } from "@/components/figure/Environment";
import { home } from "@/content/site";
import { useInView } from "@/lib/useInView";
import { useReducedMotion } from "@/lib/useReducedMotion";
import s from "./home.module.css";

type StateId = "raw" | "layer" | "structure";

export function DataTransform() {
  const [state, setState] = useState<StateId>("raw");
  const [interacted, setInteracted] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const reduced = useReducedMotion();
  const idx = home.data.states.findIndex((x) => x.id === state);

  // Cycles raw → data layer → structured on its own until the visitor takes over.
  useEffect(() => {
    if (!inView || interacted || reduced) return;
    const id = setInterval(() => setState((cur) => home.data.states[(home.data.states.findIndex((x) => x.id === cur) + 1) % 3].id as StateId), 3200);
    return () => clearInterval(id);
  }, [inView, interacted, reduced]);

  const pick = (id: StateId) => {
    setInteracted(true);
    setState(id);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      pick(home.data.states[(idx + 1) % 3].id as StateId);
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      pick(home.data.states[(idx + 2) % 3].id as StateId);
    }
  };

  return (
    <section className={`section theme-dark ${s.data}`} data-theme-section="dark" aria-labelledby="data-title">
      <div className="container">
        <SectionHeader id="data-title" number={home.data.number} eyebrow={home.data.eyebrow} title={home.data.title} body={home.data.body} />
      </div>
      <div className={`container ${s.dataGrid}`}>
        <div className={`${s.dataScene} draw ${inView ? "is-in" : ""} ${s["st_" + state]}`} ref={ref}>
          <svg viewBox="0 0 640 480" className={s.dataSvg} aria-hidden="true">
            <g className={s.lRaw}>
              <g transform="translate(60 90)">
                <Environment stroke="#fff" opacity={0.22} />
              </g>
              <FigureShape pose="reaching" mode="silhouette" x={200} y={70} scale={1} fill="rgba(244,239,231,0.85)" />
            </g>
            <g className={s.lLayer}>
              <g transform="translate(60 90)">
                <Environment stroke="var(--cyan)" opacity={0.18} />
              </g>
              <FigureShape pose="reaching" mode="both" x={200} y={70} scale={1} fill="rgba(255,255,255,0.05)" stroke="var(--cyan)" box />
              <g fill="none" stroke="var(--uv)" strokeWidth="1" strokeDasharray="4 3">
                <rect x="256" y="292" width="126" height="54" />
                <rect x="84" y="196" width="118" height="164" />
              </g>
              <g className="mono" fill="var(--uv)" fontSize="11">
                <text x="258" y="286">workstation</text>
                <text x="86" y="190">shelving</text>
              </g>
            </g>
            <g className={s.lStruct}>
              <g stroke="#fff" strokeOpacity="0.09">
                {Array.from({ length: 13 }).map((_, i) => (
                  <path key={"v" + i} d={`M${40 + i * 46} 40V440`} />
                ))}
                {Array.from({ length: 9 }).map((_, i) => (
                  <path key={"h" + i} d={`M40 ${40 + i * 50}H592`} />
                ))}
              </g>
              <g fontSize="11" className="mono">
                {[
                  ["frame", "0412", "#5ee4ff"],
                  ["subject", "person", "#5ee4ff"],
                  ["action", "reach · grasp", "#8a6cff"],
                  ["object", "component · tray", "#8a6cff"],
                  ["context", "station B · shift 2", "#a5acba"],
                  ["review", "accepted", "#5ee4ff"],
                ].map(([k, v, c], i) => (
                  <g key={k} transform={`translate(64 ${76 + i * 50})`}>
                    <text fill="#a5acba" y="4">{k}</text>
                    <rect x="120" y="-10" width={140 + (i % 3) * 40} height="26" rx="2" fill={c} fillOpacity="0.14" stroke={c} strokeOpacity="0.5" />
                    <text x="130" y="6" fill={c}>{v}</text>
                  </g>
                ))}
              </g>
              <g transform="translate(456 76)">
                <rect width="120" height="180" rx="3" fill="none" stroke="var(--cyan)" strokeOpacity="0.6" />
                <FigureShape pose="reaching" mode="skeleton" x={2} y={6} scale={0.5} stroke="var(--cyan)" />
              </g>
              <g transform="translate(456 300)" fill="var(--uv)" opacity="0.8">
                {Array.from({ length: 48 }).map((_, i) => (
                  <rect key={i} x={(i % 12) * 10} y={Math.floor(i / 12) * 10} width="6" height="6" opacity={((i * 7) % 5) / 5 + 0.2} />
                ))}
              </g>
            </g>
          </svg>
          <span className={`${s.tag} ${s.tagCool} ${s.stateTag}`}>{home.data.states[idx].hint}</span>
        </div>

        <div className={s.dataControls}>
          <div className={s.segmented} role="group" aria-label="Transformation state" onKeyDown={onKey}>
            {home.data.states.map((st) => (
              <button
                key={st.id}
                type="button"
                aria-pressed={state === st.id}
                className={s.segBtn}
                onClick={() => pick(st.id as StateId)}
                onMouseEnter={() => pick(st.id as StateId)}
                onFocus={() => pick(st.id as StateId)}
              >
                {st.label}
              </button>
            ))}
          </div>
          <ol className={s.stages}>
            {home.data.stages.map((st, i) => (
              <Reveal as="li" key={st.name} delay={i * 70} className={s.stage}>
                <span className={`label ${s.stageN}`}>0{i + 1}</span>
                <div>
                  <h3 className={s.stageT}>{st.name}</h3>
                  <p className={`small ${s.stageP}`}>{st.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
