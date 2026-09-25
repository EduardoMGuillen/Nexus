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

export default function Globe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const small = window.innerWidth < 768;
    const count = small ? 1100 : 2200;

    const pts: { lat: number; lon: number; land: boolean }[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const lat = Math.asin(y) / RAD;
      const lon = (((i * golden) / RAD) % 360) - 180;
      pts.push({ lat, lon, land: isLand(lat, lon) });
    }

    const arcs = DESTINATIONS.map((d, i) => ({
      path: Array.from({ length: 48 }, (_, k) => slerp(HUB, d, k / 47)),
      offset: i * 0.37,
    }));

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let running = false;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      if (!running) raf = requestAnimationFrame(draw);
    };
    const ro = new ResizeObserver(resize);

    const tilt = 6 * RAD;
    const cosT = Math.cos(tilt);
    const sinT = Math.sin(tilt);

    const project = (lat: number, lon: number, rot: number, lift = 1) => {
      const la = lat * RAD;
      const lo = (lon - rot) * RAD;
      const x = Math.cos(la) * Math.sin(lo) * lift;
      const y = Math.sin(la) * lift;
      const z = Math.cos(la) * Math.cos(lo) * lift;
      return { x, y: y * cosT - z * sinT, z: y * sinT + z * cosT };
    };

    const start = performance.now();

    const draw = (now: number) => {
      const t = (now - start) / 1000;
      const rot = -74 + Math.sin(t / 10) * 24;
      const R = Math.min(w, h) * 0.46;
      const cx = w / 2;
      const cy = h / 2;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const body = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
      body.addColorStop(0, "rgba(16,40,101,0.55)");
      body.addColorStop(0.7, "rgba(7,16,36,0.85)");
      body.addColorStop(1, "rgba(0,186,196,0.18)");
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      for (const p of pts) {
        const q = project(p.lat, p.lon, rot);
        if (q.z < -0.15) continue;
        const depth = Math.max(0, q.z);
        const sx = cx + q.x * R;
        const sy = cy - q.y * R;
        if (p.land) {
          ctx.fillStyle = `rgba(64,224,232,${0.25 + depth * 0.75})`;
          ctx.beginPath();
          ctx.arc(sx, sy, 0.7 + depth * 1.15, 0, Math.PI * 2);
          ctx.fill();
        } else if (q.z > 0) {
          ctx.fillStyle = `rgba(120,160,220,${depth * 0.3})`;
          ctx.fillRect(sx, sy, 1.2, 1.2);
        }
      }

      for (const arc of arcs) {
        const phase = ((t * 0.35 + arc.offset) % 1.6) / 1.2;
        ctx.lineWidth = 1.4;
        for (let k = 1; k < arc.path.length; k++) {
          const f = k / (arc.path.length - 1);
          const lift = 1 + Math.sin(f * Math.PI) * 0.18;
          const a = project(arc.path[k - 1][0], arc.path[k - 1][1], rot, lift);
          const b = project(arc.path[k][0], arc.path[k][1], rot, lift);
          if (a.z < 0 || b.z < 0) continue;
          const head = Math.max(0, 1 - Math.abs(f - phase) * 6);
          const alpha = 0.18 + head * 0.82;
          ctx.strokeStyle = `rgba(94,231,255,${alpha})`;
          ctx.beginPath();
          ctx.moveTo(cx + a.x * R, cy - a.y * R);
          ctx.lineTo(cx + b.x * R, cy - b.y * R);
          ctx.stroke();
        }
        const end = arc.path[arc.path.length - 1];
        const e = project(end[0], end[1], rot);
        if (e.z > 0) {
          ctx.fillStyle = "rgba(94,231,255,0.9)";
          ctx.beginPath();
          ctx.arc(cx + e.x * R, cy - e.y * R, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const hub = project(HUB[0], HUB[1], rot);
      if (hub.z > 0) {
        const hx = cx + hub.x * R;
        const hy = cy - hub.y * R;
        const pulse = (t * 0.8) % 1;
        ctx.strokeStyle = `rgba(0,186,196,${1 - pulse})`;
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

      const rim = ctx.createRadialGradient(cx, cy, R * 0.86, cx, cy, R * 1.04);
      rim.addColorStop(0, "rgba(0,186,196,0)");
      rim.addColorStop(0.75, "rgba(0,186,196,0.22)");
      rim.addColorStop(1, "rgba(0,186,196,0)");
      ctx.fillStyle = rim;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.04, 0, Math.PI * 2);
      ctx.fill();

      if (running) raf = requestAnimationFrame(draw);
    };

    resize();
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(draw);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`h-full w-full ${className}`} />;
}
