import type { Metadata } from "next";
import ClientesContent from "./ClientesContent";

export const metadata: Metadata = {
  title: "Clientes - Empresas que confían en Nexus Global",
  description:
    "Conoce las empresas y marcas que confían en Nexus Global: inmobiliarias, plataformas digitales, seguridad residencial y más.",
  openGraph: {
    title: "Clientes | Nexus Global",
    description:
      "Portafolio de clientes y marcas con presencia digital impulsada por Nexus Global.",
    url: "https://nexusglobal.com/clientes",
  },
};

export default function ClientesPage() {
  return <ClientesContent />;
}
