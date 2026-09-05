"use client";

import { useEffect, useRef } from "react";
import { Cloud, samplePoints, type Palette } from "@/lib/pointcloud";
import { motion } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

type Props = {
  count: number;
  box: [number, number];
  draw: (ctx: CanvasRenderingContext2D) => void;
  target?: "grid-right" | "scatter";
  warm: Palette;
  cool: Palette;
  size?: number;
  drift?: number;
  scan?: boolean;
  /** "mount": assemble once on load. "scroll": assemble as the parent scrolls into view. */
  assemble?: "mount" | "scroll";
  onReady?: (cloud: Cloud) => void;
  className?: string;
};

function gridRight(count: number): Float32Array {
  const cols = 28;
  const rows = Math.ceil(count / cols);
  const out = new Float32Array(count * 2);
  let s = 3;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  for (let i = 0; i < count; i++) {
    const c = i % cols;
    const r = Math.floor(i / cols);
    out[i * 2] = 0.55 + (c / (cols - 1)) * 0.43 + (rnd() - 0.5) * 0.006;
    out[i * 2 + 1] = 0.08 + (r / Math.max(1, rows - 1)) * 0.84 + (rnd() - 0.5) * 0.006;
  }
  return out;
}

export function PointCloud({ count, box, draw, target = "scatter", warm, cool, size, drift, scan, assemble = "mount", onReady, className = "" }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const parent = canvas.parentElement as HTMLElement;
    let cloud: Cloud | null = null;
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    // Heavy work (pixel sampling, animation) starts only when the canvas is near the viewport and the main thread is idle.
    const init = () => {
      if (cancelled || cloud) return;
      const n = window.innerWidth < 768 ? Math.round(count * 0.42) : count;
      const shape = samplePoints(box[0], box[1], n, draw);
      const cl = new Cloud(canvas, { count: n, shape, target: target === "grid-right" ? gridRight(n) : undefined, warm, cool, size, drift, scan });
      cloud = cl;
      onReady?.(cl);
      cleanup = attach(cl);
    };
    const near = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        near.disconnect();
        const idle = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
        if (idle) idle(init, { timeout: 900 });
        else setTimeout(init, 120);
      }
    }, { rootMargin: "400px" });
    near.observe(canvas);

    const attach = (cloud: Cloud) => {
    const ro = new ResizeObserver(() => cloud.resize());
    ro.observe(canvas);

    if (reduced) {
      cloud.assemble = 1;
      cloud.render(performance.now());
      return () => ro.disconnect();
    }

    let stop: (() => void) | undefined;
    if (assemble === "mount") {
      const { gsap } = motion();
      const tw = gsap.to(cloud, { assemble: 1, duration: 1.8, ease: "power3.out", delay: 0.2 });
      stop = () => tw.kill();
    } else {
      const { ScrollTrigger } = motion();
      const st = ScrollTrigger.create({
        trigger: parent,
        start: "top 92%",
        end: "top 45%",
        scrub: 0.6,
        onUpdate: (self) => {
          cloud.assemble = self.progress;
        },
      });
      stop = () => st.kill();
    }

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) cloud.start(); else cloud.stop();
    }, { rootMargin: "120px" });
    io.observe(canvas);

    const move = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      cloud.mouse.x = e.clientX - r.left;
      cloud.mouse.y = e.clientY - r.top;
      cloud.mouse.on = true;
    };
    const leave = () => {
      cloud.mouse.on = false;
    };
    parent.addEventListener("pointermove", move);
    parent.addEventListener("pointerleave", leave);

    return () => {
      stop?.();
      io.disconnect();
      ro.disconnect();
      cloud.stop();
      parent.removeEventListener("pointermove", move);
      parent.removeEventListener("pointerleave", leave);
    };
    };

    return () => {
      cancelled = true;
      near.disconnect();
      cleanup?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  return <canvas ref={ref} className={`cloud ${className}`} aria-hidden="true" />;
}
