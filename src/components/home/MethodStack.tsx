"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { en, type Content } from "@/content/site";
import { pinProgress, subscribeScroll } from "@/lib/scroll";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useMediaQuery } from "@/lib/useMediaQuery";
import s from "./home.module.css";

const layerFills = ["var(--clay)", "rgba(244,239,231,0.55)", "rgba(165,172,186,0.35)", "rgba(43,91,255,0.55)", "rgba(138,108,255,0.7)"];
const layerStrokes = ["var(--clay)", "rgba(244,239,231,0.9)", "var(--mist)", "var(--cobalt)", "var(--uv)"];

export function MethodStack({ c = en }: { c?: Content }) {
  const { home, methodStages, site } = c;
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scrollCount, setCount] = useState(0);
  const reduced = useReducedMotion();
  const wide = useMediaQuery("(min-width: 900px)");
  const pinned = wide && !reduced;
  const count = pinned ? scrollCount : 5;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || !pinned) return;
    return subscribeScroll((_, vh) => {
      const p = pinProgress(el, vh);
      const c = Math.min(5, Math.floor(p * 5.6));
      setCount((prev) => (prev === c ? prev : c));
    });
  }, [pinned]);

  const active = Math.max(0, Math.min(4, count - 1));

  return (
    <section className={`theme-dark ${s.method} ${pinned ? s.methodPinned : ""}`} data-theme-section="dark" aria-labelledby="method-title">
      <div className={s.methodWrap} ref={wrapRef}>
        <div className={s.methodSticky}>
          <div className={`container ${s.methodHead}`}>
            <SectionHeader id="method-title" number={home.method.number} eyebrow={home.method.eyebrow} title={home.method.title} body={home.method.body} />
          </div>
          <div className={`container ${s.methodGrid}`}>
            <ol className={s.stageList}>
              {methodStages.map((st, i) => (
                <li key={st.n} className={`${s.mStage} ${i === active ? s.mActive : ""} ${i < count ? s.mDone : ""}`}>
                  <div className={s.mStageHead}>
                    <span className={`label ${s.mN}`}>{st.n}</span>
                    <span className={`label ${s.mLayer}`}>{st.layer}</span>
                  </div>
                  <h3 className={s.mTitle}>{st.title}</h3>
                  <p className={`small ${s.mText}`}>{st.text}</p>
                </li>
              ))}
            </ol>
            <div className={s.stackWrap}>
              <svg viewBox="0 0 760 520" className={s.stackSvg} aria-hidden="true">
                <defs>
                  <linearGradient id="stackUv" x1="0" x2="1">
                    <stop offset="0" stopColor="var(--uv)" stopOpacity="0.9" />
                    <stop offset="1" stopColor="var(--cyan)" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <g stroke="#fff" strokeOpacity="0.08" fill="none">
                  <path d="M60 470 300 590M540 470 300 590M300 40v500" />
                  <ellipse cx="300" cy="470" rx="240" ry="120" />
                </g>
                {home.method.layers.map((name, i) => {
                  const y = 440 - i * 78;
                  const on = i < count;
                  return (
                    <g key={name} className={`${s.layer} ${on ? s.layerOn : ""}`} style={{ ["--i" as string]: i }}>
                      <g transform={`translate(0 ${y})`}>
                        <path d="M60 0 300-60 540 0 300 60Z" fill={i === 4 ? "url(#stackUv)" : layerFills[i]} stroke={layerStrokes[i]} strokeWidth="1" />
                        {i === 2 ? <path d="M120 0 300-45M180 15 360-45M240 30 420-45M300 45 480-45" stroke="rgba(255,255,255,0.35)" fill="none" /> : null}
                        {i === 3 ? <path d="M120 0h360M150 -15h300M180 -30h240M150 15h300M180 30h240" stroke="rgba(255,255,255,0.28)" fill="none" /> : null}
                        {i === 1 ? <g fill="var(--cyan)"><circle cx="220" cy="-10" r="3" /><circle cx="300" cy="10" r="3" /><circle cx="380" cy="-20" r="3" /><circle cx="340" cy="30" r="3" /></g> : null}
                        <path d="M60 0v10L300 70v-10M540 0v10L300 70" fill="none" stroke={layerStrokes[i]} strokeOpacity="0.5" />
                        <text x="556" y="6" fill="var(--mist)" fontSize="11" className={`mono ${s.layerLabel}`} letterSpacing="1.5">{name.toUpperCase()}</text>
                      </g>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
          <div className={`container ${s.methodFoot}`}>
            <Button href={`${site.base}/method`} variant="link">
              {site.cta.secondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
