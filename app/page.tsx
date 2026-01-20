import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Process from "@/components/Process";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Inicio - Nexus Global",
  description: "Nexus Global ofrece soluciones digitales personalizadas: desarrollo de páginas web, e-commerce con Shopify, dashboards empresariales y más. Conectamos tu negocio con el futuro digital.",
  keywords: [
    "desarrollo web",
    "páginas web",
    "e-commerce",
    "Shopify",
    "tiendas online",
    "dashboard empresarial",
    "soluciones digitales",
    "diseño web",
    "desarrollo web personalizado",
  ],
  openGraph: {
    title: "Nexus Global - Soluciones Digitales Personalizadas",
    description: "Nexus Global ofrece soluciones digitales personalizadas: desarrollo de páginas web, e-commerce con Shopify, dashboards empresariales y más.",
    url: "https://nexusglobal.com",
    images: [
      {
        url: "/NexusGPTHD.png",
        width: 1200,
        height: 630,
        alt: "Nexus Global Logo",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Showcase />
      <Process />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  );
}
