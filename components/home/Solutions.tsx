import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Bot, Megaphone, Search, Share2, Target } from "lucide-react";
import { SectionHeader } from "../ui";

const KANBAN = [
  { title: "Nuevos", color: "bg-cyan-400", cards: ["Clínica SPS", "Hotel Copán"] },
  { title: "Propuesta", color: "bg-violet-400", cards: ["Constructora"] },
  { title: "Ganados", color: "bg-emerald-400", cards: ["Academia", "Panadería"] },
];

export default function Solutions() {
  return (
    <section id="soluciones" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Soluciones empresariales"
          title={
            <>
              Más que una web: <span className="text-glow">herramientas para vender</span>
            </>
          }
          text="Cuando tu negocio crece, crecemos contigo: sistemas, automatizaciones y marketing construidos a la medida de cómo trabajas."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-6">
          <Link
            href="/crm"
            data-reveal
            className="group card relative overflow-hidden p-7 transition hover:border-primary-400/30 lg:col-span-4"
          >
            <div className="flex items-start justify-between">
              <div className="max-w-md">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">CRM a medida</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                  Todos tus clientes y ventas en un solo tablero
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Leads de tu web y WhatsApp, etapas de venta, recordatorios y reportes. Hecho para tu proceso, no al revés.
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-primary-300" />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {KANBAN.map((col) => (
                <div key={col.title} className="rounded-2xl border border-white/[0.06] bg-[#070c17]/70 p-3">
                  <p className="flex items-center gap-2 text-[11px] font-semibold text-slate-300">
                    <span className={`h-2 w-2 rounded-full ${col.color}`} /> {col.title}
                  </p>
                  <div className="mt-3 space-y-2">
                    {col.cards.map((c) => (
                      <div key={c} className="rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-2.5 text-[11px] text-slate-200 transition group-hover:translate-x-0.5">
                        {c}
                        <div className="mt-1.5 h-1 w-2/3 rounded bg-white/10" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Link>

          <Link
            href="/marketing"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
            className="group card relative overflow-hidden p-7 transition hover:border-primary-400/30 lg:col-span-2"
          >
            <div className="flex items-start justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">Marketing digital</p>
              <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-primary-300" />
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white">Que te encuentren y te elijan</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Redes sociales, SEO local, Google y campañas con objetivos claros.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { icon: Share2, label: "Redes" },
                { icon: Search, label: "SEO" },
                { icon: Target, label: "Anuncios" },
                { icon: Megaphone, label: "Contenido" },
              ].map((x) => (
                <div key={x.label} className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-3 text-xs text-slate-300">
                  <x.icon className="h-4 w-4 text-primary-300" /> {x.label}
                </div>
              ))}
            </div>
          </Link>

          <a
            href="https://mivisita.app"
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="group card relative overflow-hidden p-7 transition hover:border-primary-400/30 lg:col-span-3"
          >
            <div className="flex items-start justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">Sistemas y apps</p>
              <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-primary-300" />
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white">Software a la medida de tu operación</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Como MiVisita: una app de seguridad residencial con QR, portería y reportes, hecha por Nexus.
            </p>
            <div className="relative mt-6 aspect-[2/1] overflow-hidden rounded-xl border border-white/10">
              <Image src="/work/mivisita.jpg" alt="App MiVisita desarrollada por Nexus" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover object-top transition duration-700 group-hover:scale-105" />
            </div>
          </a>

          <Link
            href="/blog/agentes-ia-whatsapp-negocios-honduras"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
            className="group card relative overflow-hidden p-7 transition hover:border-primary-400/30 lg:col-span-3"
          >
            <div className="flex items-start justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">Automatización e IA</p>
              <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-primary-300" />
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white">Asistentes que responden por ti</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Bots de WhatsApp, respuestas automáticas y flujos con IA para no perder clientes fuera de horario.
            </p>
            <div className="mt-6 space-y-2.5 rounded-xl border border-white/10 bg-[#070c17]/70 p-4">
              <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-[#005c4b] px-3.5 py-2 text-xs text-white">
                Hola, ¿tienen mesa para 6 el sábado?
              </div>
              <div className="flex items-end gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-primary-300">
                  <Bot className="h-3.5 w-3.5" />
                </span>
                <div className="w-fit max-w-[80%] rounded-2xl rounded-bl-sm bg-white/[0.07] px-3.5 py-2 text-xs text-slate-200">
                  ¡Claro! Tenemos disponible a las 8:00 p.m. ¿Te la reservo a tu nombre?
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
