"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Words } from "@/components/Words";
import { FigureShape } from "@/components/figure/Figure";
import { Environment } from "@/components/figure/Environment";
import { home, homeExtra, site } from "@/content/site";
import { subscribeScroll } from "@/lib/scroll";
import { useReducedMotion } from "@/lib/useReducedMotion";
import s from "./home.module.css";

export function Hero() {
  const [drawn, setDrawn] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 350);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const el = sceneRef.current;
    if (!el) return;
    return subscribeScroll((y, vh) => {
      const p = Math.min(1, y / Math.max(1, vh * 0.9));
      el.style.transform = `translate3d(0, ${p * 40}px, 0)`;
      el.style.setProperty("--p", p.toFixed(3));
    });
  }, [reduced]);

  return (
    <section className={`${s.hero} theme-light`} data-theme-section="light" aria-labelledby="hero-title">
      <div className={s.heroFog} aria-hidden="true" />
      <div className={`container ${s.heroGrid}`}>
        <div className={s.heroCopy}>
          <Reveal as="p" className={`label ${s.eyebrow}`} delay={100}>
            {home.hero.eyebrow}
          </Reveal>
          <Words as="h1" id="hero-title" className="display" text={home.hero.title.join(" ")} accent="real world." delay={150} stagger={70} />
          <Reveal as="p" className={`lead ${s.heroLead}`} delay={500}>
            {home.hero.lead}
          </Reveal>
          <Reveal className={s.ctas} delay={650}>
            <Button href="/contact">{site.cta.primary}</Button>
            <Button href="/method" variant="link">
              {site.cta.secondary}
            </Button>
          </Reveal>
        </div>

        <div className={`${s.scene} draw ${drawn ? "is-in" : ""}`} ref={sceneRef}>
          <svg viewBox="0 0 640 520" className={s.sceneSvg} aria-hidden="true">
            <defs>
              <linearGradient id="hfL" x1="0" x2="1">
                <stop offset="0.38" stopColor="#fff" />
                <stop offset="0.6" stopColor="#000" />
              </linearGradient>
              <linearGradient id="hfR" x1="0" x2="1">
                <stop offset="0.36" stopColor="#000" />
                <stop offset="0.58" stopColor="#fff" />
              </linearGradient>
              <mask id="hmL">
                <rect width="640" height="520" fill="url(#hfL)" />
              </mask>
              <mask id="hmR">
                <rect width="640" height="520" fill="url(#hfR)" />
              </mask>
            </defs>
            <g mask="url(#hmL)">
              <g transform="translate(40 150) scale(1.08)">
                <Environment stroke="var(--ink)" opacity={0.22} />
              </g>
              <FigureShape pose="reaching" mode="silhouette" x={150} y={44} scale={1.25} fill="var(--clay)" className={s.heroSil} />
            </g>
            <g mask="url(#hmR)">
              <g transform="translate(40 150) scale(1.08)">
                <Environment stroke="#fff" opacity={0.16} />
              </g>
              <FigureShape pose="reaching" mode="both" x={150} y={44} scale={1.25} fill="rgba(255,255,255,0.06)" stroke="var(--cyan)" box />
              <g stroke="var(--uv)" strokeWidth="1" opacity="0.7" className={s.vectors}>
                <path d="M470 160l38-6M470 200l38 4M470 240l38-8M470 280l38 6M470 320l38-2M470 360l38 4M514 140l38-8M514 180l38 6M514 220l38-4M514 260l38 8M514 300l38-6M514 340l38 2M514 380l38-4" />
              </g>
            </g>
            <path d="M300 30v470" stroke="var(--cyan)" strokeOpacity="0.35" strokeDasharray="2 6" />
          </svg>
          <span className={`${s.tag} ${s.tagWarm}`} style={{ left: "6%", top: "6%" }}>
            {home.hero.labels.scene}
          </span>
          <span className={`${s.tag} ${s.tagCool}`} style={{ right: "4%", top: "20%" }}>
            {home.hero.labels.person}
          </span>
          <span className={`${s.tag} ${s.tagCool}`} style={{ right: "6%", bottom: "8%" }}>
            {home.hero.labels.seq}
          </span>
          <div className={s.stream} aria-hidden="true">
            {homeExtra.stream.map((line, i) => (
              <span key={line} className={s.streamLine} style={{ ["--i" as string]: i }}>
                {line}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={s.scrollHint} aria-hidden="true">
        <span className="label">Scroll</span>
        <i />
      </div>
    </section>
  );
}
