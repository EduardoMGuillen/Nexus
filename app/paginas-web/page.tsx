import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Gauge, MapPin, MessageCircle, Palette, Search, Smartphone } from "lucide-react";
import { BrowserFrame, PageHero, SectionHeader } from "@/components/ui";
import { WhatsAppIcon } from "@/components/icons";
import Plans from "@/components/home/Plans";
import WorkShowcase from "@/components/home/WorkShowcase";
import Faq from "@/components/home/Faq";
import ContactSection from "@/components/home/ContactSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, homeFaqs, serviceJsonLd } from "@/lib/jsonld";
import { DEMOS } from "@/lib/work";
import { SITE_URL, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diseño y desarrollo web en Honduras desde $150 con libro de marca",
  description:
    "Diseño y desarrollo de páginas web en Honduras y Centroamérica: Web Esencial $150, Web Pro $350 o Tu Web, Tu Presupuesto. Adaptadas a celular, conectadas a WhatsApp, con SEO y libro de marca incluido.",
  alternates: { canonical: `${SITE_URL}/paginas-web` },
  openGraph: {
    title: "Páginas web en Honduras desde $150 | Nexus Global",
    description: "Webs profesionales con libro de marca incluido, listas en días y conectadas a WhatsApp.",
    url: `${SITE_URL}/paginas-web`,
  },
};

const INCLUDED = [
  { icon: Smartphone, title: "Hecha para celular", text: "La mayoría de tus clientes te visitan desde el teléfono. Diseñamos primero para ellos." },
  { icon: MessageCircle, title: "Conectada a WhatsApp", text: "Botones con mensajes precargados por producto o servicio para que te escriban en un toque." },
  { icon: Gauge, title: "Rápida de verdad", text: "Imágenes optimizadas y código limpio para que cargue rápido incluso con datos móviles." },
  { icon: Search, title: "Lista para Google", text: "Títulos, descripciones, sitemap y datos estructurados para que te encuentren." },
  { icon: Palette, title: "Libro de marca", text: "Logo, colores y tipografías definidos para que tu marca se vea igual en todos lados." },
  { icon: MapPin, title: "SEO local", text: "Ciudad, mapa y perfil de Google Business para aparecer cuando te buscan cerca." },
];

export default function PaginasWebPage() {
  return (
    <main>
      <JsonLd data={serviceJsonLd()} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Páginas web", path: "/paginas-web" }])} />
      <PageHero
        eyebrow="Páginas web · Honduras"
        title={
          <>
            Tu página web profesional <span className="text-glow">desde $150</span>
          </>
        }
        text="Diseño a medida, libro de marca incluido y lista en días. Para emprendedores, comercios, clínicas, inmobiliarias y marcas de todo Honduras."
      >
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
          <WhatsAppIcon className="h-4 w-4" /> Cotizar por WhatsApp
        </a>
        <Link href="#planes" className="btn-ghost w-full sm:w-auto">
          Ver planes
        </Link>
      </PageHero>

      <Plans showHeader={false} />

      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="En todos los planes"
            title={
              <>
                Lo que hace que una web <span className="text-glow">venda</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((f, i) => (
              <div
                key={f.title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 3) * 100}ms` }}
                className="card p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300 ring-1 ring-primary-400/30">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Demos por sector"
            title={
              <>
                Mira cómo podría verse <span className="text-glow">tu negocio</span>
              </>
            }
            text="Sitios de ejemplo que personalizamos con tu marca, textos y fotos."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {DEMOS.map((d, i) => (
              <a
                key={d.name}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 2) * 120}ms` }}
                className="group card block p-3 transition hover:border-primary-400/30"
              >
                <BrowserFrame src={d.image} alt={`Demo de página web para ${d.name}`} url={d.url} />
                <div className="flex items-center justify-between gap-4 px-3 pb-2 pt-5">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{d.name}</h3>
                    <p className="mt-1 text-sm text-slate-400">{d.text}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-primary-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <WorkShowcase limit={4} />
      <Faq faqs={homeFaqs.slice(0, 6)} />
      <ContactSection />
    </main>
  );
}
