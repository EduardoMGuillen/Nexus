import type { Metadata } from "next";
import ClientesContent from "./ClientesContent";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clientes en Honduras — Marcas que confían en Nexus Global",
  description:
    "Portafolio de clientes de Nexus Global en Honduras: inmobiliarias, floristerías, estética, plataformas y seguridad residencial.",
  alternates: { canonical: `${SITE_URL}/clientes` },
  openGraph: {
    title: "Clientes | Nexus Global Honduras",
    description:
      "Empresas hondureñas con presencia digital impulsada por Nexus Global.",
    url: `${SITE_URL}/clientes`,
    locale: "es_HN",
  },
};

export default function ClientesPage() {
  return <ClientesContent />;
}
