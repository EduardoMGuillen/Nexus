import type { Metadata } from "next";
import HondurasLandingContent from "./HondurasLandingContent";
import JsonLd from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  organizationJsonLd,
  serviceJsonLd,
} from "@/lib/jsonld";
import { HONDURAS_KEYWORDS, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Crear página web en Honduras | Diseño web Tegucigalpa y SPS",
  description:
    "Crea tu página web en Honduras con Nexus Global. Diseño web en Tegucigalpa, San Pedro Sula y todo el país. Sitios desde 300 USD, SEO local, hosting y PayPal.",
  keywords: HONDURAS_KEYWORDS,
  alternates: { canonical: `${SITE_URL}/crear-pagina-web-honduras` },
  openGraph: {
    title: "Crear página web en Honduras | Nexus Global",
    description:
      "Agencia hondureña de diseño web: Basic 300 USD, Premium 500 USD. Tegucigalpa, San Pedro Sula y todo Honduras.",
    url: `${SITE_URL}/crear-pagina-web-honduras`,
    locale: "es_HN",
    type: "website",
    images: [{ url: "/NexusGPTHD.png", width: 1200, height: 630, alt: "Nexus Global Honduras" }],
  },
};

export default function CrearPaginaWebHondurasPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={serviceJsonLd()} />
      <JsonLd data={faqJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Crear página web en Honduras", path: "/crear-pagina-web-honduras" },
        ])}
      />
      <HondurasLandingContent />
    </>
  );
}
