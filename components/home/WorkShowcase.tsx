import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BrowserFrame, SectionHeader } from "../ui";
import { WORK } from "@/lib/work";

export default function WorkShowcase({ limit = 6 }: { limit?: number }) {
  const items = WORK.slice(0, limit);
  return (
    <section id="trabajos" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Trabajo real"
          title={
            <>
              Webs publicadas que <span className="text-glow">ya están vendiendo</span>
            </>
          }
          text="Nada de plantillas genéricas: cada proyecto tiene su identidad, su libro de marca y está conectado a los canales donde el cliente vende."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((w, i) => (
            <a
              key={w.name}
              href={w.url}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 2) * 120}ms` }}
              className="group card block p-3 transition hover:border-primary-400/30"
            >
              <BrowserFrame src={w.image} alt={`Sitio web de ${w.name}`} url={w.url} />
              <div className="flex items-start justify-between gap-4 px-3 pb-3 pt-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">
                    {w.sector} · {w.location}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">{w.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{w.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-300 transition group-hover:border-primary-400 group-hover:bg-primary-500 group-hover:text-[#03161a]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div data-reveal className="mt-12 flex justify-center">
          <Link href="/clientes" className="btn-ghost">
            Ver todos los proyectos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
