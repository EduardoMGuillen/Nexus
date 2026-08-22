import type { Metadata } from "next";
import DashboardContent from "./DashboardContent";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dashboard empresarial Honduras — Sistemas de gestión",
  description:
    "Software a medida en Honduras: comandas, facturación e inventario para restaurantes, hoteles y retail. Automatiza tu operación.",
  keywords: [
    "software empresarial Honduras",
    "sistema POS Honduras",
    "dashboard restaurante Honduras",
  ],
  alternates: { canonical: `${SITE_URL}/dashboard` },
  openGraph: {
    title: "Dashboard empresarial | Nexus Global Honduras",
    description: "Sistemas de gestión con comandas, facturación e inventario.",
    url: `${SITE_URL}/dashboard`,
    locale: "es_HN",
    images: [
      {
        url: "/NexusGPTHD.png",
        width: 1200,
        height: 630,
        alt: "Dashboard empresarial Nexus Global",
      },
    ],
  },
};

export default function DashboardPage() {
  return <DashboardContent />;
}
