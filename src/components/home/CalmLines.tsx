"use client";

import { useEffect, useRef } from "react";
import { subscribeScroll, viewProgress } from "@/lib/scroll";
import { useReducedMotion } from "@/lib/useReducedMotion";
import s from "./home.module.css";

const N = 22;
const seeds = Array.from({ length: N }, (_, i) => ({
  rot: ((i * 37) % 60) - 30,
  dx: ((i * 53) % 120) - 60,
  dy: ((i * 29) % 80) - 40,
}));

/** Scattered lines that align and soften as the visitor scrolls from the dark half into the light. */
export function CalmLines() {
  const ref = useRef<SVGSVGElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const lines = Array.from(svg.querySelectorAll<SVGLineElement>("line"));
    if (reduced) {
      lines.forEach((l) => (l.style.transform = ""));
      return;
    }
    return subscribeScroll((_, vh) => {
      const p = viewProgress(svg, vh);
      const t = Math.min(1, Math.max(0, (p - 0.15) / 0.6));
      const e = 1 - Math.pow(1 - t, 3);
      lines.forEach((l, i) => {
        const sd = seeds[i];
        l.style.transform = `translate(${(sd.dx * (1 - e)).toFixed(1)}px, ${(sd.dy * (1 - e)).toFixed(1)}px) rotate(${(sd.rot * (1 - e)).toFixed(2)}deg)`;
        l.style.opacity = String(0.9 - e * 0.55);
      });
    });
  }, [reduced]);

  return (
    <svg ref={ref} viewBox="0 0 1200 400" preserveAspectRatio="none" className={s.calm} aria-hidden="true">
      {seeds.map((_, i) => {
        const y = 30 + i * (340 / (N - 1));
        return <line key={i} x1="80" x2="1120" y1={y} y2={y} stroke={i % 3 === 0 ? "var(--cyan)" : i % 3 === 1 ? "var(--uv)" : "#fff"} strokeWidth="1" style={{ transformOrigin: "600px " + y + "px", transformBox: "view-box" }} />;
      })}
    </svg>
  );
}
