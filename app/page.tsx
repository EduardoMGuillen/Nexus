import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import LogoMarquee from "@/components/home/LogoMarquee";
import WorkShowcase from "@/components/home/WorkShowcase";
import Plans from "@/components/home/Plans";
import BrandBookSection from "@/components/home/BrandBookSection";
import Solutions from "@/components/home/Solutions";
import Process from "@/components/home/Process";
import BlogTeaser from "@/components/home/BlogTeaser";
import Faq from "@/components/home/Faq";
import ContactSection from "@/components/home/ContactSection";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Nexus Global | Diseño web, CRM a medida y libro de marca en Honduras" },
  alternates: { canonical: SITE_URL },
};

export default function Home() {
  return (
    <main>
      <JsonLd data={serviceJsonLd()} />
      <Hero />
      <LogoMarquee />
      <WorkShowcase />
      <Plans />
      <BrandBookSection />
      <Solutions />
      <Process />
      <BlogTeaser />
      <Faq />
      <ContactSection />
    </main>
  );
}
