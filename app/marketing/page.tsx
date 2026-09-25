import type { Metadata } from "next";
import { BookOpen, Megaphone, Package, Search, Share2, Target } from "lucide-react";
import { PageHero, SectionHeader } from "@/components/ui";
import { WhatsAppIcon } from "@/components/icons";
import ContactSection from "@/components/home/ContactSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, servicePageJsonLd } from "@/lib/jsonld";
import { SITE_URL, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marketing digital y SEO local en Honduras",
  description:
    "Marketing digital en Honduras: manejo de redes sociales, SEO local, campañas en Google y Meta, contenido y libro de marca para negocios que quieren vender más.",
  alternates: { canonical: `${SITE_URL}/marketing` },
  openGraph: {
    title: "Marketing digital en Honduras | Nexus Global",
    description: "Redes, SEO, campañas y contenido con una marca coherente.",
    url: `${SITE_URL}/marketing`,
  },
};

const SERVICES = [
  { icon: Share2, title: "Redes sociales", text: "Calendario, diseño y publicación en Instagram, Facebook y TikTok con la identidad de tu marca." },
  { icon: Target, title: "Campañas pagadas", text: "Anuncios en Meta y Google con objetivos claros: mensajes, llamadas o ventas, no solo likes." },
  { icon: Search, title: "SEO local", text: "Google Business, reseñas y contenido para aparecer cuando te buscan en tu ciudad." },
  { icon: BookOpen, title: "Libro de marca", text: "La guía visual y de tono que hace que todo lo que publiques se vea profesional." },
  { icon: Megaphone, title: "Contenido", text: "Textos, artículos de blog y piezas que responden lo que tus clientes preguntan." },
  { icon: Package, title: "Lanzamientos", text: "Estrategia para nuevos productos, sucursales o temporadas con web, redes y anuncios alineados." },
];

const STEPS = [
  { title: "Diagnóstico", text: "Revisamos tus redes, web y competencia para saber dónde estás." },
  { title: "Estrategia", text: "Definimos objetivos, público, mensajes y calendario." },
  { title: "Ejecución", text: "Creamos contenido, lanzamos campañas y optimizamos cada semana." },
  { title: "Resultados", text: "Reporte mensual claro: qué funcionó, cuántos mensajes y qué sigue." },
];

export default function MarketingPage() {
  return (
    <main>
      <JsonLd data={servicePageJsonLd("/marketing")} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Marketing", path: "/marketing" }])} />
      <PageHero
        eyebrow="Marketing digital · Honduras"
        title={
          <>
            Que te encuentren, <span className="text-glow">te recuerden y te escriban</span>
          </>
        }
        text="Redes, SEO local, campañas y contenido con una marca coherente. Para negocios en Tegucigalpa, San Pedro Sula y todo Honduras."
      >
        <a
          href={waLink("Hola Nexus, quiero una propuesta de marketing digital para mi negocio.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full sm:w-auto"
        >
          <WhatsAppIcon className="h-4 w-4" /> Pedir propuesta
        </a>
      </PageHero>

      <section className="section pt-4">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <div key={s.title} data-reveal style={{ ["--reveal-delay" as string]: `${(i % 3) * 100}ms` }} className="card group p-7 transition hover:border-primary-400/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300 ring-1 ring-primary-400/30 transition group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Cómo trabajamos"
            title={
              <>
                Marketing con <span className="text-glow">objetivos, no con suerte</span>
              </>
            }
          />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} data-reveal style={{ ["--reveal-delay" as string]: `${i * 100}ms` }} className="card p-7">
                <span className="font-display text-3xl font-bold text-primary-400">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactSection
        title={
          <>
            Hagamos que tu marca <span className="text-glow">se note</span>
          </>
        }
        text="Cuéntanos de tu negocio y te enviamos una propuesta de marketing con objetivos y presupuesto claros."
      />
    </main>
  );
}
