"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { motion } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

/** Smooth, inertial scrolling (Lenis) wired into GSAP ScrollTrigger. Off under reduced motion. */
export function MotionProvider() {
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const { gsap, ScrollTrigger } = motion();
    const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 0.95, smoothWheel: true });
    document.documentElement.classList.add("lenis");
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    // in-page anchors (skip link, hash links) go through Lenis
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const el = document.querySelector(a.getAttribute("href") || "");
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -80 });
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
    };
  }, [reduced]);
  return null;
}
