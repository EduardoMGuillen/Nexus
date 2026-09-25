import type { Metadata } from "next";
import Link from "next/link";
import { Check, FileText, Layers, MessageSquareQuote, Palette, PenTool, Type } from "lucide-react";
import { PageHero, SectionHeader } from "@/components/ui";
import { WhatsAppIcon } from "@/components/icons";
import BrandBook from "@/components/home/BrandBook";
import Faq from "@/components/home/Faq";
import ContactSection from "@/components/home/ContactSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, servicePageJsonLd } from "@/lib/jsonld";
import { SITE_URL, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Libro de marca en Honduras y Centroamérica: manual de identidad",
  description:
    "Diseñamos el libro de marca de tu negocio: logo y versiones, paleta, tipografías, aplicaciones y tono de voz. Incluido con cada página web de Nexus Global desde $150.",
  alternates: { canonical: `${SITE_URL}/libro-de-marca` },
  openGraph: {
    title: "Libro de marca en Honduras | Nexus Global",
    description: "El manual que define cómo se ve y cómo habla tu negocio. Incluido con cada web.",
    url: `${SITE_URL}/libro-de-marca`,
  },
};

const PARTS = [
  { icon: PenTool, title: "Logotipo y versiones", text: "Versión principal, horizontal, ícono, en blanco y negro, área de seguridad y usos incorrectos." },
  { icon: Palette, title: "Paleta de colores", text: "Colores principales y de apoyo con códigos HEX, RGB y CMYK para web, redes e impresión." },
  { icon: Type, title: "Tipografías", text: "Fuentes para títulos y textos, tamaños y jerarquía para que todo se lea igual de profesional." },
  { icon: Layers, title: "Aplicaciones", text: "Tarjetas, publicaciones y historias para redes, empaques, rótulos, uniformes y facturas." },
  { icon: MessageSquareQuote, title: "Tono de voz", text: "Cómo le habla tu marca a tus clientes en Instagram, WhatsApp y tu web, con ejemplos." },
  { icon: FileText, title: "Archivos finales", text: "PDF del manual y archivos del logo en PNG y SVG, listos para tu imprenta o diseñador." },
];

const TIERS = [
  {
    name: "Esencial",
    plan: "Incluido en la Web Esencial ($150)",
    items: ["Logo y sus versiones", "Paleta de colores", "Tipografías", "Archivos PNG y SVG"],
  },
  {
    name: "Completo",
    plan: "Incluido en la Web Pro ($350)",
    items: [
      "Todo lo del esencial",
      "Usos correctos e incorrectos del logo",
      "Aplicaciones: tarjetas, redes y empaques",
      "Tono de voz y plantillas para redes",
      "Manual en PDF",
    ],
  },
];

const FAQS = [
  {
    q: "¿Qué es un libro de marca?",
    a: "Es el manual de identidad de un negocio: reúne el logo y sus versiones, la paleta de colores, las tipografías, las aplicaciones (tarjetas, redes, empaques) y el tono de voz. Sirve para que la marca se vea y suene igual en todos lados, sin importar quién diseñe la siguiente pieza.",
  },
  {
    q: "¿Cuánto cuesta un libro de marca con Nexus?",
    a: "Está incluido con cada página web: la Web Esencial ($150) trae el libro de marca esencial y la Web Pro ($350) el completo. Si solo necesitas el libro de marca, sin web, escríbenos por WhatsApp y te cotizamos según tu caso.",
  },
  {
    q: "¿Es lo mismo que un manual de marca o manual de identidad corporativa?",
    a: "Sí. Libro de marca, manual de marca, brandbook y manual de identidad corporativa son nombres distintos para el mismo documento. Lo que cambia entre agencias es qué tan completo es.",
  },
  {
    q: "¿Pueden trabajar con mi logo actual?",
    a: "Sí. Si ya tienes logo lo ordenamos, creamos las versiones que falten y construimos el resto del manual a partir de él. Si no tienes, lo diseñamos contigo.",
  },
  {
    q: "¿Trabajan con marcas fuera de Honduras?",
    a: "Sí. Hacemos libros de marca para negocios de cualquier país de Centroamérica y fuera de la región. Todo el proceso se coordina por WhatsApp y videollamada, y los archivos se entregan en digital.",
  },
];

export default function LibroDeMarcaPage() {
  return (
    <main>
      <JsonLd data={servicePageJsonLd("/libro-de-marca")} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Libro de marca", path: "/libro-de-marca" }])} />
      <PageHero
        eyebrow="Libro de marca · Honduras y Centroamérica"
        title={
          <>
            Un libro de marca que hace que <span className="text-glow">te recuerden</span>
          </>
        }
        text="El manual que define cómo se ve y cómo habla tu negocio: logo, colores, tipografías, aplicaciones y tono de voz. Lo incluimos con cada página web."
      >
        <a
          href={waLink("Hola Nexus, quiero un libro de marca para mi negocio.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full sm:w-auto"
        >
          <WhatsAppIcon className="h-4 w-4" /> Cotizar mi libro de marca
        </a>
        <Link href="/paginas-web" className="btn-ghost w-full sm:w-auto">
          Ver planes con web
        </Link>
      </PageHero>

      <section className="pb-10">
        <div className="container-x mx-auto max-w-4xl">
          <div data-reveal>
            <BrandBook />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Qué incluye"
            title={
              <>
                Todo lo que tu marca necesita <span className="text-glow">en un solo documento</span>
              </>
            }
            text="Un libro de marca evita logos estirados, colores distintos en cada publicación y mensajes que no suenan a ti."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PARTS.map((p, i) => (
              <div key={p.title} data-reveal style={{ ["--reveal-delay" as string]: `${(i % 3) * 100}ms` }} className="card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300 ring-1 ring-primary-400/30">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Dos niveles"
            title={
              <>
                Esencial o completo, <span className="text-glow">según tu plan</span>
              </>
            }
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
            {TIERS.map((t) => (
              <div key={t.name} data-reveal className="card p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-300">Libro de marca {t.name}</p>
                <p className="mt-2 text-sm text-slate-400">{t.plan}</p>
                <ul className="mt-6 space-y-3">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-500/15">
                        <Check className="h-3 w-3 text-primary-300" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-400">
            ¿Solo necesitas el libro de marca? También lo hacemos por separado.{" "}
            <Link href="/blog/que-es-libro-de-marca" className="text-primary-300 underline decoration-primary-500/40 underline-offset-4">
              Lee nuestra guía sobre el libro de marca
            </Link>
            .
          </p>
        </div>
      </section>

      <Faq faqs={FAQS} />

      <ContactSection
        title={
          <>
            Dale a tu negocio <span className="text-glow">una marca clara</span>
          </>
        }
        text="Cuéntanos de tu negocio y te proponemos el libro de marca y la web que mejor te funcionan."
      />
    </main>
  );
}
