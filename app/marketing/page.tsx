import type { Metadata } from "next";
import MarketingContent from "./MarketingContent";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Marketing Honduras — Redes, marca y SEO",
  description:
    "Manejo de redes sociales, posicionamiento de marca, Brand Book, campañas y SEO/GEO local en Honduras. Paquetes a medida.",
  keywords: [
    "marketing digital Honduras",
    "community manager Honduras",
    "brand book Honduras",
    "SEO local Tegucigalpa",
  ],
  alternates: { canonical: `${SITE_URL}/marketing` },
  openGraph: {
    title: "Digital Marketing | Nexus Global Honduras",
    description: "Redes, marca y presencia que vende, con paquetes a medida.",
    url: `${SITE_URL}/marketing`,
    locale: "es_HN",
    images: [
      {
        url: "/logo-nexus.png",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Nexus Global",
      },
    ],
  },
};

export default function MarketingPage() {
  return <MarketingContent />;
}
