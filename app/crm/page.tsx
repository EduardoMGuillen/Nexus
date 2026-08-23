import type { Metadata } from "next";
import CrmContent from "./CrmContent";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "CRM personalizada Honduras — Pipeline a medida",
  description:
    "CRM a medida en Honduras: pipeline, fichas de cliente, WhatsApp y reportes. No una licencia genérica: un sistema construido para tu operación.",
  keywords: [
    "CRM Honduras",
    "CRM a medida Honduras",
    "pipeline ventas Honduras",
    "software CRM Tegucigalpa",
  ],
  alternates: { canonical: `${SITE_URL}/crm` },
  openGraph: {
    title: "CRM personalizada | Nexus Global Honduras",
    description: "Diseñamos y construimos un CRM a la medida de tu equipo comercial.",
    url: `${SITE_URL}/crm`,
    locale: "es_HN",
    images: [
      {
        url: "/logo-nexus.png",
        width: 1200,
        height: 630,
        alt: "CRM personalizada Nexus Global",
      },
    ],
  },
};

export default function CrmPage() {
  return <CrmContent />;
}
