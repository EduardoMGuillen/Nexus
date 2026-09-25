import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Check, Kanban, MessageCircle, UserRound } from "lucide-react";
import { PageHero, SectionHeader } from "@/components/ui";
import { WhatsAppIcon } from "@/components/icons";
import CrmDashboardDemo from "@/components/CrmDashboardDemo";
import ContactSection from "@/components/home/ContactSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, servicePageJsonLd } from "@/lib/jsonld";
import { SITE_URL, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "CRM a medida en Honduras y Centroamérica",
  description:
    "Desarrollo de CRM a medida para empresas en Honduras y Centroamérica: pipeline de ventas, leads de tu web y WhatsApp, tareas, reportes e IA. Un sistema tuyo, sin licencias por usuario.",
  alternates: { canonical: `${SITE_URL}/crm` },
  openGraph: {
    title: "CRM a medida en Honduras y Centroamérica | Nexus Global",
    description: "Pipeline, WhatsApp, reportes e IA en un CRM hecho para tu operación.",
    url: `${SITE_URL}/crm`,
  },
};

const FEATURES = [
  { icon: Kanban, title: "Pipeline a tu flujo", text: "Las etapas reales de tu venta, desde el primer mensaje hasta el cierre. Sin perder ningún trato." },
  { icon: UserRound, title: "Ficha del cliente", text: "Historial, valor, notas, tareas y responsable. Un solo lugar para ventas y gerencia." },
  { icon: MessageCircle, title: "WhatsApp y formularios", text: "Los leads de tu web y WhatsApp entran solos al tablero, con recordatorios de seguimiento." },
  { icon: BarChart3, title: "Reportes que importan", text: "Cuántos entran, cuánto hay en pipeline, conversión y cierres del mes." },
];

const BULLETS = [
  "Tablero tipo kanban con tus etapas",
  "Usuarios, permisos y dueño de cada lead",
  "Valores en USD o lempiras",
  "Integración con tu web y formularios",
  "WhatsApp Business o API según el proyecto",
  "IA que prioriza leads y sugiere el siguiente paso",
  "Hosting, SSL y copias de seguridad",
  "Capacitación a tu equipo",
];

const STEPS = [
  { title: "Diagnóstico", text: "Mapeamos cómo vendes hoy y dónde se pierden los leads." },
  { title: "Diseño a medida", text: "Campos, etapas y roles según tu negocio, no una plantilla rígida." },
  { title: "Construcción", text: "Desarrollamos, integramos y dejamos todo listo para tu equipo." },
  { title: "Acompañamiento", text: "Ajustes, capacitación y nuevas funciones cuando creces." },
];

export default function CrmPage() {
  return (
    <main>
      <JsonLd data={servicePageJsonLd("/crm")} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "CRM", path: "/crm" }])} />
      <PageHero
        eyebrow="CRM a medida · Honduras"
        title={
          <>
            Un CRM hecho <span className="text-glow">para tu operación</span>
          </>
        }
        text="Deja el Excel y los chats perdidos. Construimos un CRM a la medida de tu equipo: pipeline, seguimiento, WhatsApp, reportes e IA."
      >
        <a
          href={waLink("Hola Nexus, quiero cotizar un CRM a medida para mi negocio.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full sm:w-auto"
        >
          <WhatsAppIcon className="h-4 w-4" /> Hablar de mi CRM
        </a>
        <Link href="#demo" className="btn-ghost w-full sm:w-auto">
          Ver el demo
        </Link>
      </PageHero>

      <section id="demo" className="scroll-mt-24 pb-10">
        <div className="container-x">
          <div data-reveal className="relative">
            <div className="pointer-events-none absolute -inset-16 bg-[radial-gradient(closest-side,rgba(0,186,196,0.12),transparent)]" />
            <div className="relative">
              <CrmDashboardDemo />
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            Demo ilustrativa. Tu CRM usa tus etapas, campos y reglas.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Qué incluye"
            title={
              <>
                Todo tu proceso de venta <span className="text-glow">en un solo lugar</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <div key={f.title} data-reveal style={{ ["--reveal-delay" as string]: `${i * 100}ms` }} className="card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300 ring-1 ring-primary-400/30">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <div data-reveal>
            <span className="eyebrow">A medida, no enlatado</span>
            <h2 className="h-display mt-5 text-3xl leading-tight sm:text-4xl">
              Para inmobiliarias, clínicas, agencias, distribuidoras y equipos de venta
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-500/15">
                    <Check className="h-3 w-3 text-primary-300" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <ol data-reveal className="space-y-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="card flex gap-5 p-6">
                <span className="font-display text-2xl font-bold text-primary-400">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactSection
        title={
          <>
            Deja el Excel. <span className="text-glow">Vende con un sistema tuyo.</span>
          </>
        }
        text="Cuéntanos cómo vendes hoy y te proponemos un CRM a medida, sin licencias mensuales genéricas."
      />
    </main>
  );
}
