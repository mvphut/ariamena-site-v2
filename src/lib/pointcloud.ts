"use client";

import { poses, type Pose } from "@/components/figure/poses";

export type Palette = [string, string, string]; // left → middle → right tint stops

/** Draws the figure silhouette geometry into a canvas context (same geometry as FigureShape). */
export function drawFigure(ctx: CanvasRenderingContext2D, pose: keyof typeof poses, x: number, y: number, scale: number, flip = false) {
  const p: Pose = poses[pose];
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(flip ? -scale : scale, scale);
  if (flip) ctx.translate(-230, 0);
  ctx.fillStyle = "#000";
  ctx.strokeStyle = "#000";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  const [h, n, LS, RS, LE, RE, LW, RW, LH, RH, LK, RK, LA, RA] = p;
  ctx.beginPath();
  ctx.arc(h[0], h[1], 24, 0, Math.PI * 2);
  ctx.fill();
  const seg = (pts: number[][], w: number) => {
    ctx.lineWidth = w;
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.stroke();
  };
  seg([[h[0], h[1] + 24], n], 16);
  ctx.lineWidth = 22;
  ctx.beginPath();
  ctx.moveTo(LS[0], LS[1]);
  ctx.lineTo(RS[0], RS[1]);
  ctx.lineTo(RH[0], RH[1]);
  ctx.lineTo(LH[0], LH[1]);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  seg([LS, LE, LW], 22);
  seg([RS, RE, RW], 22);
  seg([LH, LK, LA], 26);
  seg([RH, RK, RA], 26);
  ctx.restore();
}

/** Open hand holding a tool (same geometry as the Hand component). 260 x 200 box. */
export function drawHand(ctx: CanvasRenderingContext2D, x: number, y: number, scale: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.fillStyle = "#000";
  ctx.strokeStyle = "#000";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  const rr = (rx: number, ry: number, w: number, h: number, r: number) => {
    ctx.beginPath();
    ctx.moveTo(rx + r, ry);
    ctx.arcTo(rx + w, ry, rx + w, ry + h, r);
    ctx.arcTo(rx + w, ry + h, rx, ry + h, r);
    ctx.arcTo(rx, ry + h, rx, ry, r);
    ctx.arcTo(rx, ry, rx + w, ry, r);
    ctx.closePath();
    ctx.fill();
  };
  rr(76, 92, 112, 100, 40);
  ctx.lineWidth = 22;
  for (const [a, b] of [[[100, 104], [92, 34]], [[128, 100], [126, 22]], [[156, 102], [160, 30]], [[182, 114], [198, 56]]]) {
    ctx.beginPath();
    ctx.moveTo(a[0], a[1]);
    ctx.lineTo(b[0], b[1]);
    ctx.stroke();
  }
  ctx.lineWidth = 24;
  ctx.beginPath();
  ctx.moveTo(84, 126);
  ctx.lineTo(36, 92);
  ctx.stroke();
  ctx.restore();
}

/** Samples `count` points from the opaque pixels of whatever `draw` paints on a w×h canvas. Returns normalized [0..1] coords. */
export function samplePoints(w: number, h: number, count: number, draw: (ctx: CanvasRenderingContext2D) => void, seed = 1): Float32Array {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d", { willReadFrequently: true })!;
  draw(ctx);
  const data = ctx.getImageData(0, 0, w, h).data;
  const cand: number[] = [];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (data[(y * w + x) * 4 + 3] > 120) cand.push(x, y);
  const n = cand.length / 2;
  const out = new Float32Array(count * 2);
  let s = seed;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  for (let i = 0; i < count; i++) {
    const k = Math.floor(rnd() * n);
    out[i * 2] = (cand[k * 2] + rnd() - 0.5) / w;
    out[i * 2 + 1] = (cand[k * 2 + 1] + rnd() - 0.5) / h;
  }
  return out;
}

function hexToRgb(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function mix(a: number[], b: number[], t: number) {
  return `rgb(${Math.round(a[0] + (b[0] - a[0]) * t)},${Math.round(a[1] + (b[1] - a[1]) * t)},${Math.round(a[2] + (b[2] - a[2]) * t)})`;
}

export type CloudOptions = {
  count: number;
  shape: Float32Array; // normalized base positions
  target?: Float32Array; // normalized positions for progress = 1 (defaults to a scatter)
  warm: Palette; // palette at progress 0
  cool: Palette; // palette at progress 1
  size?: number; // css px
  drift?: number; // css px of idle drift
  scan?: boolean;
};

const BUCKETS = 10;

/** Canvas 2D particle field. Cheap enough for ~10k points at 60 fps. */
export class Cloud {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  opt: CloudOptions;
  w = 0;
  h = 0;
  dpr = 1;
  progress = 0; // 0 = shape, 1 = target
  tint: number | null = null; // color blend override (defaults to progress)
  assemble = 0; // 0 = scattered intro, 1 = in place
  mouse = { x: -1e4, y: -1e4, on: false };
  bucket: Uint8Array;
  seedA: Float32Array;
  seedB: Float32Array;
  scatter: Float32Array;
  target: Float32Array;
  running = false;
  raf = 0;
  t0 = performance.now();
  warm: number[][];
  cool: number[][];

  constructor(canvas: HTMLCanvasElement, opt: CloudOptions) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.opt = opt;
    const n = opt.count;
    this.bucket = new Uint8Array(n);
    this.seedA = new Float32Array(n);
    this.seedB = new Float32Array(n);
    this.scatter = new Float32Array(n * 2);
    let s = 7;
    const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
    for (let i = 0; i < n; i++) {
      this.bucket[i] = Math.min(BUCKETS - 1, Math.floor(opt.shape[i * 2] * BUCKETS));
      this.seedA[i] = rnd() * 6.283;
      this.seedB[i] = 0.5 + rnd();
      this.scatter[i * 2] = rnd();
      this.scatter[i * 2 + 1] = rnd();
    }
    this.target = opt.target ?? this.scatter;
    this.warm = opt.warm.map(hexToRgb);
    this.cool = opt.cool.map(hexToRgb);
    this.resize();
  }

  resize() {
    const r = this.canvas.getBoundingClientRect();
    this.dpr = Math.min(1.5, window.devicePixelRatio || 1);
    this.w = Math.max(1, Math.round(r.width));
    this.h = Math.max(1, Math.round(r.height));
    this.canvas.width = Math.round(this.w * this.dpr);
    this.canvas.height = Math.round(this.h * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  start() {
    if (this.running) return;
    this.running = true;
    const loop = (t: number) => {
      if (!this.running) return;
      this.render(t);
      this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  palette(t: number, x: number) {
    // color across the shape (left→right) blended between warm and cool by progress
    const stops = (pal: number[][]) => (x < 0.5 ? mixRgb(pal[0], pal[1], x * 2) : mixRgb(pal[1], pal[2], (x - 0.5) * 2));
    const a = stops(this.warm);
    const b = stops(this.cool);
    return mix(a, b, t);
  }

  render(now: number) {
    const { ctx, w, h, opt } = this;
    const time = (now - this.t0) / 1000;
    ctx.clearRect(0, 0, w, h);
    const n = opt.count;
    const size = opt.size ?? 1.6;
    const drift = opt.drift ?? 2.2;
    const p = this.progress;
    const tint = this.tint ?? p;
    const asm = this.assemble;
    const easeAsm = 1 - Math.pow(1 - asm, 3);
    const scanX = opt.scan ? ((time * 0.14) % 1.4) * w - 0.2 * w : -1e4;
    const mx = this.mouse.x;
    const my = this.mouse.y;
    const R = Math.min(w, h) * 0.16;
    const R2 = R * R;
    // colors per bucket, this frame
    const colors: string[] = [];
    const hi: string[] = [];
    for (let b = 0; b < BUCKETS; b++) {
      colors.push(this.palette(tint, (b + 0.5) / BUCKETS));
      hi.push("#ffffff");
    }
    const xs = new Float32Array(n);
    const ys = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const sx = opt.shape[i * 2] * w;
      const sy = opt.shape[i * 2 + 1] * h;
      const tx = this.target[i * 2] * w;
      const ty = this.target[i * 2 + 1] * h;
      let x = sx + (tx - sx) * p;
      let y = sy + (ty - sy) * p;
      // idle drift
      const a = this.seedA[i];
      const f = this.seedB[i];
      x += Math.sin(time * f + a) * drift;
      y += Math.cos(time * f * 0.9 + a * 1.7) * drift;
      // intro assemble from scatter
      const scx = this.scatter[i * 2] * w;
      const scy = this.scatter[i * 2 + 1] * h;
      x = scx + (x - scx) * easeAsm;
      y = scy + (y - scy) * easeAsm;
      // mouse repulsion
      if (this.mouse.on) {
        const dx = x - mx;
        const dy = y - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < R2 && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const k = ((R - d) / R) * 18;
          x += (dx / d) * k;
          y += (dy / d) * k;
        }
      }
      xs[i] = x;
      ys[i] = y;
    }
    for (let b = 0; b < BUCKETS; b++) {
      ctx.fillStyle = colors[b];
      for (let i = 0; i < n; i++) {
        if (this.bucket[i] !== b) continue;
        ctx.fillRect(xs[i], ys[i], size, size);
      }
    }
    if (opt.scan) {
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      for (let i = 0; i < n; i++) {
        const d = Math.abs(xs[i] - scanX);
        if (d < 7) ctx.fillRect(xs[i], ys[i], size, size);
      }
    }
  }
}

function mixRgb(a: number[], b: number[], t: number) {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}
