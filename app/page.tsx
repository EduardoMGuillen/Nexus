import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Showcase = dynamic(() => import("@/components/Showcase"), {
  loading: () => null,
});

const Process = dynamic(() => import("@/components/Process"), {
  loading: () => null,
});

const Technologies = dynamic(() => import("@/components/Technologies"), {
  loading: () => null,
});

const Partners = dynamic(() => import("@/components/Partners"), {
  loading: () => null,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => null,
});

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
      <Showcase />
      <Process />
      <Technologies />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
