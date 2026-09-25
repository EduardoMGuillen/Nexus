import type { Metadata } from "next";
import { Eye, HeartHandshake, Rocket, ShieldCheck } from "lucide-react";
import { PageHero, SectionHeader } from "@/components/ui";
import { WhatsAppIcon } from "@/components/icons";
import ContactSection from "@/components/home/ContactSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { SITE_URL, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Nexus Global (Nexus Honduras) es un estudio hondureño de desarrollo web y soluciones empresariales. Conoce cómo trabajamos y qué nos hace diferentes.",
  alternates: { canonical: `${SITE_URL}/nosotros` },
  openGraph: {
    title: "Nosotros | Nexus Global",
    description: "Estudio hondureño de desarrollo web y soluciones empresariales.",
    url: `${SITE_URL}/nosotros`,
  },
};

const VALUES = [
  { icon: Eye, title: "Transparencia", text: "Precios publicados, alcance por escrito y cero letras pequeñas." },
  { icon: Rocket, title: "Velocidad", text: "Webs listas en días. Respondemos por WhatsApp el mismo día." },
  { icon: ShieldCheck, title: "Calidad real", text: "Cada proyecto está publicado y puedes visitarlo. Nada de promesas vacías." },
  { icon: HeartHandshake, title: "Cercanía", text: "Hablamos claro, sin tecnicismos, y acompañamos tu crecimiento." },
];

const NUMBERS = [
  { value: "14+", label: "Proyectos publicados" },
  { value: "7", label: "Industrias" },
  { value: "2", label: "Países con clientes" },
  { value: "$150", label: "Precio de entrada" },
];

export default function NosotrosPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Nosotros", path: "/nosotros" }])} />
      <PageHero
        eyebrow="Nexus Global · Honduras"
        title={
          <>
            Hacemos que los negocios hondureños <span className="text-glow">se vean de primer nivel</span>
          </>
        }
        text="Somos un estudio de desarrollo web y soluciones empresariales. Creemos que cualquier negocio, grande o pequeño, merece una presencia digital espectacular."
      >
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
          <WhatsAppIcon className="h-4 w-4" /> Conversemos
        </a>
      </PageHero>

      <section className="pb-10">
        <div className="container-x">
          <dl data-reveal className="glass-strong shine-border grid grid-cols-2 gap-6 rounded-3xl p-6 sm:p-8 lg:grid-cols-4">
            {NUMBERS.map((n) => (
              <div key={n.label} className="text-center">
                <dt className="sr-only">{n.label}</dt>
                <dd className="font-display text-4xl font-bold text-white">{n.value}</dd>
                <dd className="mt-1 text-xs uppercase tracking-wider text-slate-400">{n.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div data-reveal>
            <span className="eyebrow">Nuestra historia</span>
            <h2 className="h-display mt-5 text-3xl leading-tight sm:text-4xl">
              De páginas web a soluciones completas para vender
            </h2>
          </div>
          <div data-reveal className="space-y-5 text-base leading-relaxed text-slate-300">
            <p>
              Nexus Global nació con una idea simple: los negocios de Honduras merecen el mismo nivel de diseño y
              tecnología que las grandes marcas internacionales, a un precio que tenga sentido para su realidad.
            </p>
            <p>
              Empezamos haciendo páginas web y hoy construimos tiendas en línea, catálogos conectados a WhatsApp,
              CRM a medida, apps como MiVisita y estrategias de marketing. Trabajamos con inmobiliarias,
              floristerías, centros de entretenimiento, tiendas, estéticas y empresas de servicios, en Honduras y
              en España.
            </p>
            <p>
              Cada web que entregamos incluye un libro de marca, porque una buena web no sirve de mucho si la marca
              se ve distinta en cada lugar.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Cómo pensamos"
            title={
              <>
                Lo que nos hace <span className="text-glow">diferentes</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <div key={v.title} data-reveal style={{ ["--reveal-delay" as string]: `${i * 100}ms` }} className="card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300 ring-1 ring-primary-400/30">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
