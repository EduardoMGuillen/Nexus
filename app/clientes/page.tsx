import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BrowserFrame, PageHero, SectionHeader } from "@/components/ui";
import { WhatsAppIcon } from "@/components/icons";
import ContactSection from "@/components/home/ContactSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { CLIENTS } from "@/lib/clients";
import { WORK } from "@/lib/work";
import { SITE_URL, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clientes y proyectos",
  description:
    "Proyectos reales de Nexus Global: Secaira Inmobiliaria, RoseLune, La Gran Casa Blanca, Arte Antone, Haze Puff, Stellare, Marta Martínez Estética, MiVisita y más.",
  alternates: { canonical: `${SITE_URL}/clientes` },
  openGraph: {
    title: "Clientes y proyectos | Nexus Global",
    description: "Webs, tiendas y sistemas publicados para marcas de Honduras y España.",
    url: `${SITE_URL}/clientes`,
  },
};

export default function ClientesPage() {
  const logos = CLIENTS.filter((c, i, arr) => arr.findIndex((x) => x.logo === c.logo) === i);
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Clientes", path: "/clientes" }])} />
      <PageHero
        eyebrow="Portafolio"
        title={
          <>
            Marcas reales, <span className="text-glow">resultados publicados</span>
          </>
        }
        text="Cada proyecto está en línea y puedes visitarlo. Webs, tiendas, catálogos y sistemas para negocios de Honduras y España."
      >
        <a
          href={waLink("Hola Nexus, vi sus proyectos y quiero algo así para mi negocio.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full sm:w-auto"
        >
          <WhatsAppIcon className="h-4 w-4" /> Quiero algo así
        </a>
      </PageHero>

      <section className="pb-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {WORK.map((w, i) => (
            <a
              key={w.name}
              href={w.url}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 2) * 120}ms` }}
              className="group card block p-3 transition hover:border-primary-400/30"
            >
              <BrowserFrame src={w.image} alt={`Sitio web de ${w.name}`} url={w.url} priority={i < 2} />
              <div className="flex items-start justify-between gap-4 px-3 pb-3 pt-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">
                    {w.sector} · {w.location}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-white">{w.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{w.summary}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-primary-300" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section border-t border-white/[0.06]">
        <div className="container-x">
          <SectionHeader eyebrow="Marcas" title="Quienes ya confían en Nexus" />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((c) => (
              <a
                key={c.logo}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
                title={c.name}
                className={`relative flex h-24 items-center justify-center rounded-2xl border border-white/[0.07] p-5 transition hover:-translate-y-1 hover:border-primary-400/40 ${
                  c.logoBg?.includes("bg-white") ? "bg-white" : "bg-white/[0.03]"
                }`}
              >
                <span className="relative h-full w-full">
                  <Image src={c.logo} alt={c.name} fill sizes="180px" className="object-contain" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
