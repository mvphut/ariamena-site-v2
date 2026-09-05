"use client";

type Cb = (y: number, vh: number) => void;

const subs = new Set<Cb>();
let raf = 0;
let started = false;

function tick() {
  raf = 0;
  const y = window.scrollY;
  const vh = window.innerHeight;
  subs.forEach((cb) => cb(y, vh));
}

function schedule() {
  if (!raf) raf = requestAnimationFrame(tick);
}

export function subscribeScroll(cb: Cb) {
  if (typeof window === "undefined") return () => {};
  if (!started) {
    started = true;
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
  }
  subs.add(cb);
  schedule();
  return () => {
    subs.delete(cb);
  };
}

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** progress 0 when the element's top enters the viewport bottom, 1 when its bottom leaves the top */
export function viewProgress(el: Element, vh: number) {
  const r = el.getBoundingClientRect();
  return clamp01((vh - r.top) / (vh + r.height));
}

/** progress for a sticky container: 0 when its top hits the viewport top, 1 when its bottom hits the viewport bottom */
export function pinProgress(el: Element, vh: number) {
  const r = el.getBoundingClientRect();
  const range = r.height - vh;
  if (range <= 0) return clamp01(-r.top / Math.max(1, r.height));
  return clamp01(-r.top / range);
}
