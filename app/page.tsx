import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/jsonld";
import { HONDURAS_KEYWORDS, SITE_URL } from "@/lib/site";

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

const SeoHn = dynamic(() => import("@/components/SeoHn"), {
  loading: () => null,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => null,
});

export const metadata: Metadata = {
  title: "Nexus Honduras | Nexus Global — crear página web en Honduras",
  description:
    "Nexus Honduras (Nexus Global): agencia de páginas web en Honduras. Diseño en Tegucigalpa, San Pedro Sula y todo el país. Sitios desde 300 USD, SEO local, hosting.",
  keywords: HONDURAS_KEYWORDS,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Nexus Honduras | Crear página web en Honduras",
    description:
      "Diseño y desarrollo web para negocios hondureños. Basic 300 USD, Premium 500 USD. Tegucigalpa, SPS y nacional.",
    url: SITE_URL,
    locale: "es_HN",
    images: [
      {
        url: "/logo-nexus.png",
        width: 1200,
        height: 630,
        alt: "Nexus Global — páginas web en Honduras",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <JsonLd data={faqJsonLd()} />
      <Header />
      <Hero />
      <Showcase />
      <SeoHn />
      <Process />
      <Technologies />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
