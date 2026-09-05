"use client";

import { useEffect } from "react";

/** A soft cyan light that follows the cursor over dark sections. */
export function Spotlight() {
  useEffect(() => {
    const el = document.getElementById("spotlight");
    if (!el || !window.matchMedia("(hover: hover)").matches) return;
    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(() => {
        raf = 0;
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div id="spotlight" className="spotlight" aria-hidden="true" />;
}
