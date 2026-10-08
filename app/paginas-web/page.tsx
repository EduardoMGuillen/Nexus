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
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { DEMOS } from "@/lib/work";
import { SITE_URL, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Páginas web en Honduras desde $150: diseño y desarrollo web",
  description:
    "Páginas web en Honduras para negocios de Tegucigalpa, San Pedro Sula y todo el país: Web Esencial $150, Web Pro $350, libro de marca incluido, WhatsApp y SEO. Cotiza hoy.",
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

const CITIES = ["Tegucigalpa", "San Pedro Sula", "La Ceiba", "El Progreso", "Choloma", "Comayagua", "Puerto Cortés", "Todo Honduras"];

const FAQS = [
  {
    q: "¿Cuánto cuesta una página web en Honduras?",
    a: "Depende del alcance. Una landing page profesional cuesta desde 150 USD y un sitio de varias páginas con catálogo y SEO local desde 350 USD. Tiendas en línea, reservas o sistemas se cotizan según lo que necesites con Tu Web, Tu Presupuesto. Con Nexus es pago único y el libro de marca va incluido.",
  },
  {
    q: "¿Qué incluye una página web profesional?",
    a: "Diseño adaptado a celular, botón y mensajes de WhatsApp, mapa y redes sociales, SEO básico (títulos, descripciones, sitemap y datos estructurados), carga rápida, libro de marca y todas las rondas de ajustes necesarias.",
  },
  {
    q: "¿Hacen páginas web en Tegucigalpa, San Pedro Sula y otras ciudades?",
    a: "Sí. Trabajamos con negocios de Tegucigalpa, San Pedro Sula, La Ceiba, El Progreso, Choloma, Comayagua y todo el país. Todo se coordina por WhatsApp y videollamada, así que no importa en qué ciudad estés.",
  },
  {
    q: "¿En cuánto tiempo está lista mi página web?",
    a: "La Web Esencial se entrega en 5 a 7 días y la Web Pro en 10 a 15 días, desde que tenemos tus textos, fotos y datos del negocio.",
  },
  {
    q: "¿El dominio .hn o .com y el hosting están incluidos?",
    a: "Se pagan aparte porque quedan a tu nombre, no al nuestro. Te ayudamos a comprarlos y configurarlos, y tenemos un plan mensual opcional de hosting y mantenimiento.",
  },
  {
    q: "¿Mi página web va a salir en Google?",
    a: "Todas salen con SEO básico y la Web Pro incluye SEO local y la configuración de tu perfil de Google Business, para aparecer en Google Maps cuando te buscan en tu ciudad.",
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Solo una conversación por WhatsApp sobre tu negocio. Si ya tienes logo, fotos y textos, los usamos; si no, te ayudamos a crearlos.",
  },
];

export default function PaginasWebPage() {
  return (
    <main>
      <JsonLd data={serviceJsonLd()} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Páginas web", path: "/paginas-web" }])} />
      <PageHero
        eyebrow="Diseño y desarrollo web · Honduras"
        title={
          <>
            Páginas web en Honduras <span className="text-glow">desde $150</span>
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

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div data-reveal>
            <span className="eyebrow">Cobertura</span>
            <h2 className="h-display mt-5 text-3xl leading-tight sm:text-4xl">
              Páginas web para negocios de <span className="text-glow">todo Honduras</span>
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              {CITIES.map((c) => (
                <li key={c} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-slate-300">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary-300" /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="space-y-5 text-base leading-relaxed text-slate-300">
            <p>
              Diseñamos páginas web para comercios, clínicas, inmobiliarias, restaurantes, tiendas y empresas de
              servicios en Tegucigalpa, San Pedro Sula, La Ceiba, El Progreso y el resto del país. Ya tenemos
              proyectos publicados en San Pedro Sula, El Progreso y Cofradía, y puedes visitarlos en{" "}
              <Link href="/clientes" className="text-primary-300 underline-offset-4 hover:underline">
                nuestra página de clientes
              </Link>
              .
            </p>
            <p>
              Cada web se adapta a cómo compra la gente en Honduras: desde el celular, con datos móviles y escribiendo
              por WhatsApp. Por eso la diseñamos primero para teléfono, la hacemos ligera y dejamos el botón de
              WhatsApp a un toque.
            </p>
            <p>
              ¿Quieres comparar antes de decidir? Lee{" "}
              <Link href="/blog/cuanto-cuesta-pagina-web-honduras" className="text-primary-300 underline-offset-4 hover:underline">
                cuánto cuesta una página web en Honduras en 2026
              </Link>{" "}
              y{" "}
              <Link href="/blog/como-elegir-agencia-diseno-web-honduras" className="text-primary-300 underline-offset-4 hover:underline">
                las 10 preguntas para elegir agencia de diseño web
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <WorkShowcase limit={4} />
      <Faq faqs={FAQS} />
      <ContactSection />
    </main>
  );
}
