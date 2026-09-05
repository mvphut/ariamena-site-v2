"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Words } from "@/components/Words";
import { FigureShape } from "@/components/figure/Figure";
import { Environment } from "@/components/figure/Environment";
import { PointCloud } from "@/components/PointCloud";
import { drawFigure, type Cloud } from "@/lib/pointcloud";
import { en, type Content } from "@/content/site";
import { motion } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import s from "./home.module.css";

type Phase = "human" | "observe" | "record" | "resolve";

export function Hero({ c = en }: { c?: Content }) {
  const { home, homeExtra, site } = c;
  const caption = site.ui.phases;
  const [phase, setPhase] = useState<Phase>("human");
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<Cloud | null>(null);
  const reduced = useReducedMotion();

  // Scroll drives the transformation: human → observed → recorded → structured.
  useEffect(() => {
    const section = sectionRef.current;
    const scene = sceneRef.current;
    if (!section || !scene) return;
    if (reduced) {
      if (cloudRef.current) cloudRef.current.progress = 0.6;
      return;
    }
    const { ScrollTrigger } = motion();
    let current: Phase = "human";
    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=90%",
      scrub: 0.5,
      onUpdate: (self) => {
        const p = self.progress;
        scene.style.setProperty("--p", p.toFixed(3));
        scene.style.transform = `translate3d(0, ${(p * 40).toFixed(1)}px, 0)`;
        if (cloudRef.current) cloudRef.current.progress = Math.min(1, Math.max(0, (p - 0.3) / 0.6));
        const ph: Phase = p < 0.12 ? "human" : p < 0.38 ? "observe" : p < 0.7 ? "record" : "resolve";
        if (ph !== current) {
          current = ph;
          setPhase(ph);
        }
      },
    });
    return () => st.kill();
  }, [reduced]);

  const shown: Phase = reduced ? "record" : phase;
  const drawn = shown !== "human";

  return (
    <section ref={sectionRef} className={`${s.hero} theme-light`} data-theme-section="light" aria-labelledby="hero-title">
      <div className={s.heroFog} aria-hidden="true" />
      <div className={`container ${s.heroGrid}`}>
        <div className={s.heroCopy}>
          <Reveal as="p" className={`label ${s.eyebrow}`} delay={100} auto>
            {home.hero.eyebrow}
          </Reveal>
          <Words as="h1" id="hero-title" className="display" text={home.hero.title.join(" ")} accent={home.hero.accent} delay={150} stagger={70} auto />
          <Reveal as="p" className={`lead ${s.heroLead}`} delay={500} auto>
            {home.hero.lead}
          </Reveal>
          <Reveal className={s.ctas} delay={650} auto>
            <Button href={`${site.base}/contact`} magnetic>
              {site.cta.primary}
            </Button>
            <Button href={`${site.base}/method`} variant="link">
              {site.cta.secondary}
            </Button>
          </Reveal>
        </div>

        <div className={`${s.scene} ${s["ph_" + shown]} draw ${drawn ? "is-in" : ""}`} ref={sceneRef}>
          <PointCloud
            count={9000}
            box={[640, 520]}
            draw={(ctx) => drawFigure(ctx, "reaching", 150, 44, 1.25)}
            target="grid-right"
            warm={["#c9a98c", "#c9a98c", "#a8937f"]}
            cool={["#9aa7b8", "#5ee4ff", "#8a6cff"]}
            size={1.7}
            drift={2.4}
            scan
            assemble="mount"
            onReady={(cl) => {
              cloudRef.current = cl;
            }}
          />
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
                <Environment stroke="var(--ink)" opacity={0.2} />
              </g>
            </g>
            <g mask="url(#hmR)">
              <g transform="translate(40 150) scale(1.08)">
                <Environment stroke="#fff" opacity={0.14} />
              </g>
              <FigureShape pose="reaching" mode="skeleton" x={150} y={44} scale={1.25} stroke="var(--cyan)" box className={s.heroSkel} />
            </g>
            <path d="M300 30v470" stroke="var(--cyan)" strokeOpacity="0.3" strokeDasharray="2 6" />
          </svg>
          <span className={`${s.tag} ${s.tagWarm} ${s.tagScene}`}>{home.hero.labels.scene}</span>
          <span className={`${s.tag} ${s.tagCool} ${s.tagPerson}`}>{home.hero.labels.person}</span>
          <span className={`${s.tag} ${s.tagCool} ${s.tagSeq}`}>{home.hero.labels.seq}</span>
          <div className={s.stream} aria-hidden="true">
            {homeExtra.stream.map((line, i) => (
              <span key={line} className={s.streamLine} style={{ ["--i" as string]: i }}>
                {line}
              </span>
            ))}
          </div>
          <p className={`label ${s.phaseTag}`} aria-live="off">
            <span key={shown}>{caption[shown]}</span>
          </p>
        </div>
      </div>
      <div className={s.scrollHint} aria-hidden="true">
        <span className="label">{site.ui.scroll}</span>
        <i />
      </div>
    </section>
  );
}
