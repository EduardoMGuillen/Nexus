import type { Metadata } from "next";
import NosotrosContent from "./NosotrosContent";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quiénes somos — Nexus Honduras | Nexus Global",
  description:
    "Nexus Honduras es Nexus Global: agencia de desarrollo web en Honduras. Atención nacional desde Tegucigalpa y San Pedro Sula. Casos reales, HTTPS y contacto.",
  alternates: { canonical: `${SITE_URL}/nosotros` },
  openGraph: {
    title: "Quiénes somos | Nexus Global Honduras",
    description: "Equipo, ubicación, contacto y casos en producción.",
    url: `${SITE_URL}/nosotros`,
    locale: "es_HN",
  },
};

export default function NosotrosPage() {
  return <NosotrosContent />;
}
