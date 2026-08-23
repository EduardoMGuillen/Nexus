import type { Metadata } from "next";
import PaginasWebContent from "./PaginasWebContent";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { HONDURAS_KEYWORDS, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Páginas web en Honduras — Precios, diseño, hosting y SEO",
  description:
    "Crea tu página web en Honduras: Basic 300 USD (hasta 3 páginas) o Premium 500 USD (hasta 10). Diseño, hosting, SEO local y PayPal. Tegucigalpa y San Pedro Sula.",
  keywords: [
    ...HONDURAS_KEYWORDS,
    "precios páginas web Honduras",
    "hosting web Honduras",
  ],
  alternates: { canonical: `${SITE_URL}/paginas-web` },
  openGraph: {
    title: "Páginas web en Honduras | Nexus Global",
    description:
      "Planes de diseño web para negocios hondureños. Google, hosting y CRM. Desde 300 USD.",
    url: `${SITE_URL}/paginas-web`,
    locale: "es_HN",
    images: [
      {
        url: "/logo-nexus.png",
        width: 1200,
        height: 630,
        alt: "Páginas web profesionales en Honduras",
      },
    ],
  },
};

export default function PaginasWebPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Páginas web", path: "/paginas-web" },
        ])}
      />
      <PaginasWebContent />
    </>
  );
}
