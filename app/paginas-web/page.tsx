import type { Metadata } from "next";
import PaginasWebContent from "./PaginasWebContent";

export const metadata: Metadata = {
  title: "Páginas Web para Negocios - Diseño, Google Ads, Hosting y CRM",
  description: "Páginas web profesionales con integración de anuncios de Google, diseño responsive, hosteo optimizado y CRM integrado. Soluciones completas para hacer crecer tu negocio online.",
  keywords: [
    "páginas web",
    "diseño web",
    "Google Ads",
    "hosting web",
    "CRM",
    "desarrollo web",
    "sitios web",
    "optimización SEO",
    "marketing digital",
    "presencia online",
  ],
  openGraph: {
    title: "Páginas Web para Negocios - Diseño, Google Ads, Hosting y CRM | Nexus Global",
    description: "Páginas web profesionales con integración de anuncios de Google, diseño responsive, hosteo optimizado y CRM integrado.",
    url: "https://nexusglobal.com/paginas-web",
    images: [
      {
        url: "/NexusGPTHD.png",
        width: 1200,
        height: 630,
        alt: "Nexus Global - Páginas Web para Negocios",
      },
    ],
  },
};

export default function PaginasWebPage() {
  return <PaginasWebContent />;
}
