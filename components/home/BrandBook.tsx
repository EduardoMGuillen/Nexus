"use client";

import { useEffect, useState } from "react";

const PAGES = ["Logo", "Color", "Tipografía", "Aplicaciones", "Voz"] as const;
type Page = (typeof PAGES)[number];

const PALETTE = [
  { name: "Espresso", hex: "#2B1A12", rgb: "43 26 18", text: "text-white" },
  { name: "Tierra", hex: "#8B5A2B", rgb: "139 90 43", text: "text-white" },
  { name: "Montaña", hex: "#2F5D50", rgb: "47 93 80", text: "text-white" },
  { name: "Oro", hex: "#D9A441", rgb: "217 164 65", text: "text-[#2B1A12]" },
  { name: "Crema", hex: "#F3E6D3", rgb: "243 230 211", text: "text-[#2B1A12]" },
];

function Mark({ className = "h-16 w-16", light = false }: { className?: string; light?: boolean }) {
  const fg = light ? "#F3E6D3" : "#2B1A12";
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="none" stroke={fg} strokeWidth="2.5" />
      <path d="M10 44 L25 22 L33 33 L39 26 L54 44 Z" fill="#2F5D50" />
      <path d="M25 22 L29 28 L25 27 L21 28 Z" fill="#F3E6D3" />
      <ellipse cx="32" cy="50" rx="7" ry="4.5" fill="#8B5A2B" />
      <path d="M26 50 Q32 47 38 50" stroke="#F3E6D3" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function PageContent({ page }: { page: Page }) {
  if (page === "Logo") {
    return (
      <div className="grid h-full grid-cols-2 gap-3">
        <div className="relative col-span-2 flex items-center justify-center rounded-xl bg-[#F3E6D3] [background-image:linear-gradient(rgba(43,26,18,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(43,26,18,0.08)_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="absolute inset-6 rounded-full border border-dashed border-[#8B5A2B]/40" />
          <div className="flex items-center gap-3">
            <Mark className="h-16 w-16 sm:h-20 sm:w-20" />
            <div className="leading-none text-[#2B1A12]">
              <p className="font-serif text-2xl font-bold sm:text-3xl">Café</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.4em]">Montaña</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-xl bg-[#2B1A12] py-4">
          <Mark className="h-12 w-12" light />
        </div>
        <div className="flex items-center justify-center rounded-xl bg-[#2F5D50] py-4">
          <p className="font-serif text-xl font-bold text-[#F3E6D3]">Café Montaña</p>
        </div>
      </div>
    );
  }
  if (page === "Color") {
    return (
      <div className="flex h-full flex-col gap-2">
        {PALETTE.map((c, i) => (
          <div
            key={c.hex}
            className={`flex flex-1 items-center justify-between rounded-xl px-4 ${c.text}`}
            style={{ background: c.hex, flexGrow: i === 0 ? 1.6 : 1 }}
          >
            <span className="text-sm font-semibold">{c.name}</span>
            <span className="font-mono text-[11px] opacity-80">
              {c.hex} · RGB {c.rgb}
            </span>
          </div>
        ))}
      </div>
    );
  }
  if (page === "Tipografía") {
    return (
      <div className="flex h-full flex-col justify-between rounded-xl bg-[#F3E6D3] p-5 text-[#2B1A12]">
        <div className="flex items-end gap-4">
          <span className="font-serif text-7xl font-bold leading-none sm:text-8xl">Aa</span>
          <div className="pb-2 text-xs">
            <p className="font-semibold">Titulares · Serif</p>
            <p className="opacity-70">Bold / 700</p>
          </div>
        </div>
        <div className="space-y-2 border-t border-[#2B1A12]/15 pt-4">
          <p className="font-serif text-xl font-bold">Café de altura, hecho en Honduras</p>
          <p className="text-sm leading-relaxed opacity-80">
            Textos en sans-serif para lectura cómoda en web y redes. Tamaños, interlineado y jerarquía definidos.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] opacity-60">ABCDEFGHIJ 0123456789</p>
        </div>
      </div>
    );
  }
  if (page === "Aplicaciones") {
    return (
      <div className="grid h-full grid-cols-2 gap-3">
        <div className="flex flex-col justify-between rounded-xl bg-[#2B1A12] p-4 shadow-lg">
          <Mark className="h-9 w-9" light />
          <div className="text-[#F3E6D3]">
            <p className="text-xs font-semibold">María López</p>
            <p className="text-[10px] opacity-70">Barista principal</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-[#2F5D50] p-4">
          <p className="font-serif text-lg font-bold leading-tight text-[#F3E6D3]">Nuevo tueste de temporada</p>
          <span className="absolute bottom-3 left-4 rounded-full bg-[#D9A441] px-2.5 py-1 text-[10px] font-bold text-[#2B1A12]">
            Post Instagram
          </span>
          <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-[#D9A441]/40" />
        </div>
        <div className="flex items-center justify-center gap-4 rounded-xl bg-[#F3E6D3] p-3">
          <div className="relative h-16 w-12 rounded-b-xl rounded-t-sm bg-white shadow-md">
            <div className="absolute inset-x-0 top-5 flex justify-center">
              <Mark className="h-7 w-7" />
            </div>
          </div>
          <div className="relative h-20 w-14 rounded-md bg-[#8B5A2B] shadow-md">
            <div className="absolute inset-x-2 top-6 rounded bg-[#F3E6D3] py-1 text-center font-serif text-[8px] font-bold text-[#2B1A12]">
              MONTAÑA
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center rounded-xl border border-[#2B1A12]/10 bg-white p-3 text-[#2B1A12]">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8B5A2B]">Web</p>
          <div className="mt-2 h-2 w-3/4 rounded bg-[#2B1A12]" />
          <div className="mt-1.5 h-2 w-1/2 rounded bg-[#2B1A12]/30" />
          <div className="mt-3 h-5 w-16 rounded-full bg-[#2F5D50]" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col gap-3 rounded-xl bg-[#F3E6D3] p-5 text-[#2B1A12]">
      <p className="font-serif text-2xl font-bold">Cercana, cálida y orgullosa de su origen.</p>
      <div className="grid flex-1 grid-cols-2 gap-3 text-xs">
        <div className="rounded-lg bg-[#2F5D50]/10 p-3">
          <p className="font-bold text-[#2F5D50]">Sí decimos</p>
          <p className="mt-2 leading-relaxed">“Tu café de la mañana, cultivado a 1,500 metros en Marcala.”</p>
        </div>
        <div className="rounded-lg bg-[#8B5A2B]/10 p-3">
          <p className="font-bold text-[#8B5A2B]">No decimos</p>
          <p className="mt-2 leading-relaxed">“Somos la mejor cafetería del mundo, compra ya.”</p>
        </div>
      </div>
      <p className="text-[11px] opacity-70">Tono de voz aplicado a web, redes y atención por WhatsApp.</p>
    </div>
  );
}

export default function BrandBook() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % PAGES.length), 4200);
    return () => clearInterval(id);
  }, [paused]);

  const page = PAGES[index];

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="relative">
      <div role="tablist" aria-label="Secciones del libro de marca" className="mb-6 flex flex-wrap justify-center gap-2 lg:justify-start">
        {PAGES.map((p, i) => (
          <button
            key={p}
            type="button"
            role="tab"
            aria-selected={i === index}
            onClick={() => setIndex(i)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              i === index
                ? "bg-primary-500 text-[#03161a]"
                : "border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="[perspective:1600px]">
        <div className="relative transition-transform duration-700 [transform:rotateX(8deg)_rotateY(-12deg)] hover:[transform:rotateX(2deg)_rotateY(-4deg)]">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[28px] bg-[#1c130d]/80" />
          <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[28px] bg-[#e7d6bd]/60" />
          <div className="relative grid overflow-hidden rounded-[28px] bg-[#fbf5ec] shadow-[0_40px_120px_-30px_rgba(0,186,196,0.35)] sm:grid-cols-[0.8fr_1.2fr]">
            <div className="relative flex flex-col justify-between border-b border-[#2B1A12]/10 p-6 text-[#2B1A12] sm:border-b-0 sm:border-r">
              <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-8 bg-gradient-to-l from-[#2B1A12]/10 to-transparent sm:block" />
              <div className="flex items-center gap-2">
                <Mark className="h-7 w-7" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em]">Libro de marca</p>
              </div>
              <div className="my-6 sm:my-0">
                <p className="font-mono text-xs text-[#8B5A2B]">0{index + 1} / 0{PAGES.length}</p>
                <p className="mt-2 font-serif text-4xl font-bold leading-none">{page}</p>
                <p className="mt-3 max-w-[14rem] text-xs leading-relaxed opacity-70">
                  {page === "Logo" && "Versiones, área de seguridad y usos correctos del logotipo."}
                  {page === "Color" && "Paleta oficial con códigos HEX y RGB para web e impresión."}
                  {page === "Tipografía" && "Familias, pesos y jerarquía para títulos y textos."}
                  {page === "Aplicaciones" && "Tarjetas, redes sociales, empaques y web con la misma identidad."}
                  {page === "Voz" && "Cómo habla tu marca en redes, web y WhatsApp."}
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] opacity-50">Café Montaña · Ejemplo</p>
            </div>
            <div key={page} className="h-72 p-4 [animation:bookIn_0.6s_ease] sm:h-80 sm:p-5">
              <PageContent page={page} />
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes bookIn{from{opacity:0;transform:translateX(18px) rotateY(-12deg)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}
