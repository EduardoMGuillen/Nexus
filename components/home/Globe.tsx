"use client";

import { useEffect, useRef } from "react";

type LatLon = [number, number];

// Coarse continent blobs [lat, lon, latRadius, lonRadius] — stylized, not cartographic.
const LAND: [number, number, number, number][] = [
  [50, -100, 16, 30], [63, -125, 9, 28], [31, -97, 9, 16], [18, -97, 5, 8], [12, -86, 4, 5],
  [72, -40, 8, 14], [-8, -60, 17, 14], [-28, -62, 11, 8], [-44, -70, 8, 4], [6, -68, 6, 11],
  [50, 12, 9, 20], [61, 18, 7, 14], [41, -4, 4, 6], [43, 13, 4, 4], [54, -3, 4, 3],
  [10, 18, 14, 22], [-10, 26, 13, 12], [-26, 25, 7, 9], [26, 14, 8, 22], [27, 45, 8, 10],
  [56, 90, 14, 45], [36, 102, 11, 24], [22, 79, 8, 8], [14, 103, 7, 6], [65, 135, 8, 30],
  [-3, 115, 4, 14], [37, 138, 5, 3], [-25, 134, 10, 17], [-41, 173, 4, 3],
];

const HUB: LatLon = [14.8, -86.6];
const DESTINATIONS: LatLon[] = [
  [25.8, -80.2],
  [40.4, -3.7],
  [19.4, -99.1],
  [4.7, -74.1],
  [40.7, -74.0],
  [9.0, -79.5],
];

const RAD = Math.PI / 180;
const LAND_BUCKETS = 6;
const SEA_BUCKETS = 3;

function isLand(lat: number, lon: number) {
  for (const [a, b, ra, rb] of LAND) {
    let d = lon - b;
    if (d > 180) d -= 360;
    if (d < -180) d += 360;
    const v = ((lat - a) / ra) ** 2 + (d / rb) ** 2;
    if (v < 1) return true;
  }
  return false;
}

function slerp(a: LatLon, b: LatLon, t: number): LatLon {
  const toVec = ([lat, lon]: LatLon) => [
    Math.cos(lat * RAD) * Math.cos(lon * RAD),
    Math.cos(lat * RAD) * Math.sin(lon * RAD),
    Math.sin(lat * RAD),
  ];
  const va = toVec(a);
  const vb = toVec(b);
  const dot = Math.min(1, Math.max(-1, va[0] * vb[0] + va[1] * vb[1] + va[2] * vb[2]));
  const omega = Math.acos(dot);
  if (omega < 1e-6) return a;
  const s = Math.sin(omega);
  const k1 = Math.sin((1 - t) * omega) / s;
  const k2 = Math.sin(t * omega) / s;
  const x = k1 * va[0] + k2 * vb[0];
  const y = k1 * va[1] + k2 * vb[1];
  const z = k1 * va[2] + k2 * vb[2];
  return [Math.atan2(z, Math.hypot(x, y)) / RAD, Math.atan2(y, x) / RAD];
}

type Pt = { cosLat: number; sinLat: number; lon: number; lift: number };

const toPt = ([lat, lon]: LatLon, lift = 1): Pt => ({
  cosLat: Math.cos(lat * RAD),
  sinLat: Math.sin(lat * RAD),
  lon: lon * RAD,
  lift,
});

export default function Globe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const small = window.innerWidth < 768;
    const count = small ? 750 : 1800;
    const maxDpr = small ? 1.5 : 2;
    const frameGap = small ? 1000 / 30 : 0;

    const land: Pt[] = [];
    const sea: Pt[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const lat = Math.asin(y) / RAD;
      const lon = (((i * golden) / RAD) % 360) - 180;
      (isLand(lat, lon) ? land : sea).push(toPt([lat, lon]));
    }

    const SEGMENTS = 40;
    const arcs = DESTINATIONS.map((d, i) => ({
      pts: Array.from({ length: SEGMENTS + 1 }, (_, k) => {
        const f = k / SEGMENTS;
        return toPt(slerp(HUB, d, f), 1 + Math.sin(f * Math.PI) * 0.18);
      }),
      end: toPt(d),
      offset: i * 0.37,
    }));
    const hub = toPt(HUB);

    const tilt = 6 * RAD;
    const cosT = Math.cos(tilt);
    const sinT = Math.sin(tilt);

    let px = 0;
    let py = 0;
    let pz = 0;
    const project = (p: Pt, rot: number) => {
      const lo = p.lon - rot;
      const x = p.cosLat * Math.sin(lo) * p.lift;
      const y = p.sinLat * p.lift;
      const z = p.cosLat * Math.cos(lo) * p.lift;
      px = x;
      py = y * cosT - z * sinT;
      pz = y * sinT + z * cosT;
    };

    const landXY: number[][] = Array.from({ length: LAND_BUCKETS }, () => []);
    const seaXY: number[][] = Array.from({ length: SEA_BUCKETS }, () => []);
    const landStyle = Array.from({ length: LAND_BUCKETS }, (_, b) => {
      const d = (b + 0.5) / LAND_BUCKETS;
      return { fill: `rgba(64,224,232,${(0.25 + d * 0.75).toFixed(3)})`, r: 0.7 + d * 1.15 };
    });
    const seaStyle = Array.from(
      { length: SEA_BUCKETS },
      (_, b) => `rgba(120,160,220,${(((b + 0.5) / SEA_BUCKETS) * 0.3).toFixed(3)})`
    );

    let w = 0;
    let h = 0;
    let dpr = 1;
    const start = performance.now();

    const draw = (now: number) => {
      const t = (now - start) / 1000;
      const rot = (-74 + Math.sin(t / 10) * 24) * RAD;
      const R = Math.min(w, h) * 0.46;
      const cx = w / 2;
      const cy = h / 2;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      for (const b of landXY) b.length = 0;
      for (const b of seaXY) b.length = 0;

      for (const p of land) {
        project(p, rot);
        if (pz < -0.15) continue;
        const d = Math.max(0, pz);
        landXY[Math.min(LAND_BUCKETS - 1, Math.floor(d * LAND_BUCKETS))].push(cx + px * R, cy - py * R);
      }
      for (const p of sea) {
        project(p, rot);
        if (pz <= 0) continue;
        seaXY[Math.min(SEA_BUCKETS - 1, Math.floor(pz * SEA_BUCKETS))].push(cx + px * R, cy - py * R);
      }

      for (let b = 0; b < SEA_BUCKETS; b++) {
        const xy = seaXY[b];
        if (!xy.length) continue;
        ctx.fillStyle = seaStyle[b];
        ctx.beginPath();
        for (let i = 0; i < xy.length; i += 2) ctx.rect(xy[i], xy[i + 1], 1.2, 1.2);
        ctx.fill();
      }

      for (let b = 0; b < LAND_BUCKETS; b++) {
        const xy = landXY[b];
        if (!xy.length) continue;
        const { fill, r } = landStyle[b];
        ctx.fillStyle = fill;
        ctx.beginPath();
        for (let i = 0; i < xy.length; i += 2) {
          ctx.moveTo(xy[i] + r, xy[i + 1]);
          ctx.arc(xy[i], xy[i + 1], r, 0, Math.PI * 2);
        }
        ctx.fill();
      }

      ctx.lineWidth = 1.4;
      ctx.strokeStyle = "rgba(94,231,255,0.18)";
      ctx.beginPath();
      for (const arc of arcs) {
        let pen = false;
        for (const p of arc.pts) {
          project(p, rot);
          if (pz < 0) {
            pen = false;
            continue;
          }
          const x = cx + px * R;
          const y = cy - py * R;
          if (pen) ctx.lineTo(x, y);
          else ctx.moveTo(x, y);
          pen = true;
        }
      }
      ctx.stroke();

      for (const arc of arcs) {
        const phase = ((t * 0.35 + arc.offset) % 1.6) / 1.2;
        let prevX = 0;
        let prevY = 0;
        let prevOk = false;
        for (let k = 0; k <= SEGMENTS; k++) {
          project(arc.pts[k], rot);
          const ok = pz >= 0;
          const x = cx + px * R;
          const y = cy - py * R;
          const head = 1 - Math.abs(k / SEGMENTS - phase) * 6;
          if (ok && prevOk && head > 0) {
            ctx.strokeStyle = `rgba(94,231,255,${(head * 0.82).toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            ctx.stroke();
          }
          prevX = x;
          prevY = y;
          prevOk = ok;
        }
        project(arc.end, rot);
        if (pz > 0) {
          ctx.fillStyle = "rgba(94,231,255,0.9)";
          ctx.beginPath();
          ctx.arc(cx + px * R, cy - py * R, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      project(hub, rot);
      if (pz > 0) {
        const hx = cx + px * R;
        const hy = cy - py * R;
        const pulse = (t * 0.8) % 1;
        ctx.strokeStyle = `rgba(0,186,196,${(1 - pulse).toFixed(3)})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(hx, hy, 4 + pulse * 22, 0, Math.PI * 2);
        ctx.stroke();
        const glow = ctx.createRadialGradient(hx, hy, 0, hx, hy, 16);
        glow.addColorStop(0, "rgba(160,250,255,1)");
        glow.addColorStop(0.35, "rgba(0,186,196,0.6)");
        glow.addColorStop(1, "rgba(0,186,196,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(hx, hy, 16, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let raf = 0;
    let last = 0;
    let running = false;
    let started = false;
    let visible = false;
    let disposed = false;

    const loop = (now: number) => {
      if (!running) return;
      raf = requestAnimationFrame(loop);
      if (frameGap && now - last < frameGap) return;
      last = now;
      draw(now);
    };

    const sync = () => {
      const shouldRun = started && visible && !document.hidden;
      if (shouldRun && !running) {
        running = true;
        raf = requestAnimationFrame(loop);
      } else if (!shouldRun && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      if (started) draw(performance.now());
    };
    const ro = new ResizeObserver(resize);
    resize();
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    io.observe(canvas);
    document.addEventListener("visibilitychange", sync);

    // Wait until the page has painted and hydrated so the globe never competes with first render.
    const begin = () => {
      if (disposed) return;
      started = true;
      draw(performance.now());
      canvas.style.opacity = "1";
      sync();
    };
    const schedule = () => {
      if ("requestIdleCallback" in window) window.requestIdleCallback(begin, { timeout: 1500 });
      else setTimeout(begin, 300);
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      disposed = true;
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("load", schedule);
      document.removeEventListener("visibilitychange", sync);
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  return (
    <div aria-hidden="true" className={`relative h-full w-full ${className}`}>
      <div className="absolute inset-[4%] rounded-full bg-[radial-gradient(circle_at_32%_28%,rgba(16,40,101,0.6),rgba(7,16,36,0.9)_68%,rgba(0,186,196,0.2))] shadow-[0_0_70px_-12px_rgba(0,186,196,0.45),inset_0_0_36px_rgba(0,186,196,0.18)]" />
      <canvas ref={canvasRef} className="relative h-full w-full opacity-0 transition-opacity duration-700" />
    </div>
  );
}
