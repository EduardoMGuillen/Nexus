import type { Metadata } from "next";
import EcommerceContent from "./EcommerceContent";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tienda online en Honduras — E-commerce Shopify y a medida",
  description:
    "Desarrollo de tiendas en línea en Honduras con Shopify, WooCommerce o plataformas propias. Pagos, inventario y ventas para negocios en Tegucigalpa y SPS.",
  keywords: [
    "tienda online Honduras",
    "e-commerce Honduras",
    "Shopify Honduras",
    "vender en línea Honduras",
  ],
  alternates: { canonical: `${SITE_URL}/ecommerce` },
  openGraph: {
    title: "E-commerce en Honduras | Nexus Global",
    description:
      "Tiendas online profesionales para vender en Honduras y más allá.",
    url: `${SITE_URL}/ecommerce`,
    locale: "es_HN",
    images: [
      {
        url: "/logo-nexus.png",
        width: 1200,
        height: 630,
        alt: "E-commerce Nexus Global Honduras",
      },
    ],
  },
};

export default function EcommercePage() {
  return <EcommerceContent />;
}
