import type { Metadata } from "next";
import EcommerceContent from "./EcommerceContent";

export const metadata: Metadata = {
  title: "E-commerce Moderno - Tiendas Online con Shopify",
  description: "Desarrollo de tiendas en línea con Shopify, WooCommerce y plataformas personalizadas. Soluciones completas de e-commerce con integración de pagos, gestión de inventario y optimización de conversiones.",
  keywords: [
    "e-commerce",
    "tiendas online",
    "Shopify",
    "WooCommerce",
    "desarrollo e-commerce",
    "tienda virtual",
    "comercio electrónico",
    "pagos online",
    "gestión de inventario",
    "optimización de ventas",
  ],
  openGraph: {
    title: "E-commerce Moderno - Tiendas Online con Shopify | Nexus Global",
    description: "Desarrollo de tiendas en línea profesionales con Shopify, WooCommerce y plataformas personalizadas. Soluciones completas para vender en línea.",
    url: "https://nexusglobal.com/ecommerce",
    images: [
      {
        url: "/NexusGPTHD.png",
        width: 1200,
        height: 630,
        alt: "Nexus Global - E-commerce",
      },
    ],
  },
};

export default function EcommercePage() {
  return <EcommerceContent />;
}
