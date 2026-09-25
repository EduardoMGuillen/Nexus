import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, DollarSign, Globe2, MapPin, Video } from "lucide-react";
import { PageHero, SectionHeader } from "@/components/ui";
import { WhatsAppIcon } from "@/components/icons";
import Faq from "@/components/home/Faq";
import ContactSection from "@/components/home/ContactSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, SERVICES } from "@/lib/jsonld";
import { CENTRAL_AMERICA, SITE_URL, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diseño web, CRM a medida y libro de marca en Centroamérica",
  description:
    "Estudio de diseño y desarrollo web en Honduras que trabaja con empresas de Guatemala, El Salvador, Nicaragua, Costa Rica y Panamá. Webs desde $150, CRM a medida y libro de marca.",
  alternates: { canonical: `${SITE_URL}/centroamerica` },
  openGraph: {
    title: "Diseño web y CRM a medida en Centroamérica | Nexus Global",
    description: "Webs desde $150 con libro de marca, CRM y sistemas a medida para toda Centroamérica.",
    url: `${SITE_URL}/centroamerica`,
  },
};

const HOW = [
  { icon: Video, title: "100% remoto", text: "Reuniones por videollamada y seguimiento diario por WhatsApp. No necesitas viajar ni imprimir nada." },
  { icon: Clock, title: "Tu misma zona horaria", text: "Centroamérica comparte horario (Panamá va una hora adelante), así que respondemos en tu jornada laboral." },
  { icon: DollarSign, title: "Precios en dólares", text: "Planes claros desde $150, pago único y alcance por escrito antes de empezar." },
  { icon: Globe2, title: "Dominio de tu país", text: "Te ayudamos a registrar tu dominio .hn, .gt, .sv, .ni, .cr, .pa o .com a tu nombre." },
];

const FAQS = [
  {
    q: "¿Nexus Global trabaja con empresas fuera de Honduras?",
    a: "Sí. Nexus Global es un estudio hondureño de diseño y desarrollo web que trabaja de forma remota con negocios de Guatemala, El Salvador, Nicaragua, Costa Rica, Panamá y otros países, como España.",
  },
  {
    q: "¿Cuánto cuesta una página web para una empresa en Centroamérica?",
    a: "Con Nexus los precios son los mismos en toda la región: la Web Esencial cuesta 150 USD y la Web Pro 350 USD, ambas con libro de marca incluido. Para tiendas en línea, CRM o sistemas, con Tu Web, Tu Presupuesto armamos el alcance según tu inversión.",
  },
  {
    q: "¿Cómo se coordina un proyecto a distancia?",
    a: "Empezamos con una llamada o chat por WhatsApp para entender tu negocio, te enviamos el alcance y el precio por escrito, y durante el desarrollo revisas avances en enlaces en vivo. Todas las rondas de ajustes necesarias están incluidas.",
  },
  {
    q: "¿Pueden hacer un CRM a medida para mi empresa en otro país?",
    a: "Sí. El CRM funciona en la nube, así que tu equipo lo usa desde cualquier país. Lo adaptamos a tu moneda (dólares, lempiras, quetzales, colones o córdobas), tus etapas de venta y tus usuarios.",
  },
];

export default function CentroamericaPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Centroamérica", path: "/centroamerica" }])}
      />
      <PageHero
        eyebrow="Desde Honduras para Centroamérica"
        title={
          <>
            Diseño web y sistemas a medida <span className="text-glow">para toda Centroamérica</span>
          </>
        }
        text="Somos un estudio hondureño de desarrollo web y soluciones empresariales. Creamos páginas web con libro de marca, CRM a medida y marketing para negocios de toda la región."
      >
        <a
          href={waLink("Hola Nexus, tengo un negocio en Centroamérica y quiero cotizar una web.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full sm:w-auto"
        >
          <WhatsAppIcon className="h-4 w-4" /> Cotizar desde mi país
        </a>
        <Link href="/#planes" className="btn-ghost w-full sm:w-auto">
          Ver planes y precios
        </Link>
      </PageHero>

      <section className="pb-10">
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CENTRAL_AMERICA.map((c, i) => (
            <div key={c.code} data-reveal style={{ ["--reveal-delay" as string]: `${(i % 3) * 100}ms` }} className="card p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl font-semibold text-white">{c.name}</h2>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs font-semibold text-primary-300">{c.tld}</span>
              </div>
              <p className="mt-3 flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-300" />
                {c.cities}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Páginas web, CRM a medida y libro de marca para negocios de {c.name}, con precios en dólares y atención por
                WhatsApp.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Cómo trabajamos"
            title={
              <>
                Trabajar a distancia <span className="text-glow">sin complicaciones</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HOW.map((h, i) => (
              <div key={h.title} data-reveal style={{ ["--reveal-delay" as string]: `${i * 100}ms` }} className="card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300 ring-1 ring-primary-400/30">
                  <h.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Servicios"
            title={
              <>
                Lo que hacemos <span className="text-glow">para tu empresa</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <Link key={s.path} href={s.path} data-reveal className="card group flex items-start justify-between gap-6 p-7 transition hover:border-primary-400/40">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-primary-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Faq faqs={FAQS} />

      <ContactSection
        title={
          <>
            ¿Tu negocio está en <span className="text-glow">Centroamérica</span>?
          </>
        }
        text="Escríbenos desde cualquier país de la región y te respondemos el mismo día con una recomendación y precio exacto."
      />
    </main>
  );
}
