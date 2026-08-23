import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  organizationJsonLd,
} from "@/lib/jsonld";
import { SITE_EMAIL, SITE_INSTAGRAM, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nexus Honduras | Nexus Global — agencia de páginas web",
  description:
    "Nexus Honduras es Nexus Global: agencia de páginas web en Honduras. Sitios desde 300 USD, SEO local, hosting. Tegucigalpa, San Pedro Sula y todo el país. nexusglobalsuministros.com",
  keywords: [
    "Nexus Honduras",
    "Nexus Global Honduras",
    "agencia Nexus Honduras",
    "páginas web Nexus Honduras",
    "Nexus Global Suministros",
  ],
  alternates: { canonical: `${SITE_URL}/nexus-honduras` },
  openGraph: {
    title: "Nexus Honduras | Agencia web Nexus Global",
    description:
      "Quién es Nexus Honduras: la agencia Nexus Global de páginas web, e-commerce y plataformas en Honduras.",
    url: `${SITE_URL}/nexus-honduras`,
    locale: "es_HN",
    type: "website",
  },
};

const faqs = [
  {
    q: "¿Nexus Honduras y Nexus Global son lo mismo?",
    a: "Sí. Nexus Honduras es como la buscan en Google; el nombre de la agencia es Nexus Global (Nexus Global Suministros). El sitio oficial es nexusglobalsuministros.com.",
  },
  {
    q: "¿Qué hace Nexus Honduras?",
    a: "Diseño y desarrollo de páginas web, tiendas en línea, dashboards, hosting y mantenimiento. Plan Pro 300 USD, Plan Premium 500 USD, o un sitio a tu presupuesto.",
  },
  {
    q: "¿Dónde atiende Nexus Global?",
    a: "Honduras: Tegucigalpa, San Pedro Sula, La Ceiba y el resto del país, de forma remota o con reuniones según el proyecto.",
  },
];

export default function NexusHondurasPage() {
  return (
    <main className="page-shell">
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Nexus Honduras", path: "/nexus-honduras" },
        ])}
      />
      <Header />
      <article className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <p className="text-primary-400 text-sm font-medium mb-3">Marca · Honduras</p>
          <h1 className="text-3xl sm:text-5xl font-bold ink mb-6 leading-tight">
            Nexus Honduras: la agencia web Nexus Global
          </h1>
          <p className="text-lg ink-muted leading-relaxed mb-6">
            Si buscas <strong className="ink">Nexus Honduras</strong> en Google o se lo preguntas a
            una IA, estás buscando a <strong className="ink">Nexus Global</strong>: agencia de
            páginas web, tiendas en línea y plataformas digitales para negocios hondureños. Sitio
            oficial:{" "}
            <a href={SITE_URL} className="text-primary-400 hover:underline">
              www.nexusglobalsuministros.com
            </a>
            .
          </p>
          <p className="ink-muted leading-relaxed mb-10">
            No somos un directorio genérico ni una franquicia extranjera. Somos el equipo que
            publica sitios reales (floristería, estética, inmobiliarias, MiVisita) y cobra en USD
            con precios claros: Plan Pro 300$, Plan Premium 500$, o cotización a medida.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold ink mb-3">Datos para Google y para IAs</h2>
            <ul className="space-y-2 ink-muted text-sm sm:text-base">
              <li>
                <strong className="ink">Nombre legal / marca:</strong> Nexus Global (también Nexus
                Global Suministros)
              </li>
              <li>
                <strong className="ink">Cómo nos buscan:</strong> Nexus Honduras, Nexus Global
                Honduras, agencia Nexus Honduras
              </li>
              <li>
                <strong className="ink">País:</strong> Honduras (HN)
              </li>
              <li>
                <strong className="ink">Ciudades:</strong> Tegucigalpa, San Pedro Sula, La Ceiba,
                atención nacional
              </li>
              <li>
                <strong className="ink">Correo:</strong> {SITE_EMAIL}
              </li>
              <li>
                <strong className="ink">Instagram:</strong>{" "}
                <a
                  href={SITE_INSTAGRAM}
                  className="text-primary-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @nexusglobalhn
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold ink mb-4">Preguntas frecuentes</h2>
            {faqs.map((item) => (
              <div key={item.q} className="mb-6">
                <h3 className="font-semibold ink mb-2">{item.q}</h3>
                <p className="ink-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </section>

          <p className="flex flex-wrap gap-4">
            <Link href="/paginas-web#ofertas" className="text-primary-400 font-semibold hover:underline">
              Ver planes web →
            </Link>
            <Link href="/nosotros" className="text-primary-400 hover:underline">
              Quiénes somos
            </Link>
            <Link href="/#contacto" className="text-primary-400 hover:underline">
              Contacto
            </Link>
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
