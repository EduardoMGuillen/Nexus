"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { waLink } from "@/lib/site";

const INTERESTS = [
  "Web Esencial ($150)",
  "Web Pro ($350)",
  "Tu Web, Tu Presupuesto",
  "CRM o sistema a medida",
  "Marketing digital",
  "Todavía no sé, quiero asesoría",
];

const field =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-primary-400/70 focus:bg-white/[0.06] focus:ring-2 focus:ring-primary-500/20";

export default function ContactForm() {
  const [interest, setInterest] = useState(INTERESTS[1]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Hola Nexus, soy ${String(data.get("name") || "").trim()}.`,
      data.get("business") ? `Negocio: ${String(data.get("business")).trim()}` : "",
      `Me interesa: ${interest}`,
      data.get("message") ? `\n${String(data.get("message")).trim()}` : "",
    ].filter(Boolean);
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.("event", "generate_lead", { method: "whatsapp_form", interest });
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-slate-400">Tu nombre</span>
          <input name="name" required autoComplete="name" placeholder="Ej. María López" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-slate-400">Negocio o rubro</span>
          <input name="business" placeholder="Ej. Clínica dental en SPS" className={field} />
        </label>
      </div>
      <fieldset>
        <legend className="mb-2 block text-xs font-medium text-slate-400">¿Qué te interesa?</legend>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setInterest(i)}
              aria-pressed={interest === i}
              className={`rounded-full px-3.5 py-2 text-xs font-medium transition ${
                interest === i
                  ? "bg-primary-500 text-[#03161a]"
                  : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/25"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </fieldset>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-slate-400">Cuéntanos un poco (opcional)</span>
        <textarea name="message" rows={3} placeholder="¿Qué quieres lograr con tu web?" className={`${field} resize-none`} />
      </label>
      <button type="submit" className="btn-primary w-full">
        <Send className="h-4 w-4" />
        Enviar por WhatsApp
      </button>
      <p className="text-center text-xs text-slate-500">Se abrirá WhatsApp con tu mensaje listo. Respondemos el mismo día.</p>
    </form>
  );
}
