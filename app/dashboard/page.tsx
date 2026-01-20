import type { Metadata } from "next";
import DashboardContent from "./DashboardContent";

export const metadata: Metadata = {
  title: "Dashboard Empresarial - Sistemas de Gestión Personalizados",
  description: "Sistemas de gestión empresarial personalizados: comandas a cocina, manejo de cuentas, facturación automatizada y control de inventario. Soluciones integradas para restaurantes, hoteles y retail.",
  keywords: [
    "dashboard empresarial",
    "sistema de gestión",
    "comandas digitales",
    "facturación electrónica",
    "control de inventario",
    "sistema POS",
    "gestión de restaurantes",
    "software empresarial",
    "automatización empresarial",
  ],
  openGraph: {
    title: "Dashboard Empresarial - Sistemas de Gestión Personalizados | Nexus Global",
    description: "Sistemas de gestión empresarial personalizados con comandas, facturación y control de inventario. Todo en una plataforma integrada.",
    url: "https://nexusglobal.com/dashboard",
    images: [
      {
        url: "/NexusGPTHD.png",
        width: 1200,
        height: 630,
        alt: "Nexus Global - Dashboard Empresarial",
      },
    ],
  },
};

export default function DashboardPage() {
  return <DashboardContent />;
}
