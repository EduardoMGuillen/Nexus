import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, LayoutDashboard, Megaphone, MonitorSmartphone, Palette, Sparkles } from "lucide-react";
import Globe from "./Globe";
import { WhatsAppIcon } from "../icons";
import { waLink } from "@/lib/site";

const FLOATING = [
  {
    icon: MonitorSmartphone,
    title: "Páginas web",
    text: "Desde $150, listas en días",
    href: "/paginas-web",
    pos: "lg:left-0 lg:top-[14%]",
    delay: "0s",
  },
  {
    icon: Palette,
    title: "Libro de marca",
    text: "Incluido con cada web",
    href: "/#libro-de-marca",
    pos: "lg:left-[4%] lg:top-[58%]",
    delay: "1.5s",
  },
  {
    icon: LayoutDashboard,
    title: "CRM a medida",
    text: "Tus clientes en un solo lugar",
    href: "/crm",
    pos: "lg:right-0 lg:top-[14%]",
    delay: "0.8s",
  },
  {
    icon: Megaphone,
    title: "Marketing digital",
    text: "Redes, SEO y campañas",
    href: "/marketing",
    pos: "lg:right-[4%] lg:top-[58%]",
    delay: "2.2s",
  },
];

const AVATARS = [
  { src: "/partners/roselune.png", alt: "RoseLune", bg: "bg-neutral-900" },
  { src: "/partners/secaira-logo.png", alt: "Secaira", bg: "bg-neutral-900" },
  { src: "/partners/stellarelogo.png", alt: "Stellare", bg: "bg-white" },
  { src: "/partners/marta_martinez_estetica.png", alt: "Marta Martínez", bg: "bg-white" },
];

const STATS = [
  { value: "14+", label: "Proyectos publicados" },
  { value: "$150", label: "Precio de entrada" },
  { value: "100%", label: "Webs con libro de marca" },
  { value: "7", label: "Industrias atendidas" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid mask-fade-y opacity-60" />
        <div className="absolute left-1/2 top-[30%] h-[60rem] w-[60rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(0,186,196,0.16),transparent)]" />
        <div className="absolute -left-72 top-0 h-[40rem] w-[40rem] bg-[radial-gradient(closest-side,rgba(16,40,101,0.55),transparent)]" />
        <div className="absolute -right-72 top-20 h-[40rem] w-[40rem] bg-[radial-gradient(closest-side,rgba(16,40,101,0.45),transparent)]" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Diseño web · CRM a medida · Libro de marca
          </span>
          <h1 className="h-display mt-7 text-balance text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
            Páginas web que hacen <span className="text-glow">crecer</span> tu negocio
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
            Estudio de diseño y desarrollo web en Honduras para toda Centroamérica. Tu web, tu libro de marca y los
            sistemas que la hacen vender, desde <strong className="font-semibold text-white">$150</strong> y conectados
            a tu WhatsApp.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
              <WhatsAppIcon className="h-4 w-4" />
              Cotizar por WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/#planes" className="btn-ghost w-full sm:w-auto">
              Ver planes y precios
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-6xl lg:mt-4">
          <div className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[560px]">
            <div className="pointer-events-none absolute inset-[-8%] [perspective:1200px]">
              <div className="absolute inset-0 rounded-full border border-primary-400/20 [transform:rotateX(74deg)_rotateZ(-18deg)]">
                <div className="absolute inset-0 animate-spin-slow">
                  <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-300 shadow-[0_0_16px_4px_rgba(0,186,196,0.8)]" />
                </div>
              </div>
              <div className="absolute inset-[-12%] rounded-full border border-white/[0.07] [transform:rotateX(70deg)_rotateZ(24deg)]">
                <div className="absolute inset-0 animate-spin-slower">
                  <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-white shadow-[0_0_14px_3px_rgba(255,255,255,0.6)]" />
                </div>
              </div>
            </div>
            <Globe />
          </div>

          <div className="relative mt-8 grid grid-cols-2 gap-3 lg:absolute lg:inset-0 lg:mt-0 lg:block">
            {FLOATING.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                style={{ animationDelay: c.delay }}
                className={`group glass-strong shine-border rounded-2xl p-4 transition hover:-translate-y-0.5 hover:bg-[#0f1a2e]/90 lg:absolute lg:w-60 lg:animate-float-slow ${c.pos}`}
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/15 text-primary-300 ring-1 ring-primary-400/30">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-slate-400 transition group-hover:border-primary-400/60 group-hover:text-primary-300">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
                <p className="mt-3 font-display text-[15px] font-semibold text-white">{c.title}</p>
                <p className="mt-0.5 text-[13px] text-slate-400">{c.text}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="glass-strong shine-border relative mx-auto mt-10 max-w-6xl rounded-3xl p-5 sm:p-6 lg:-mt-6">
          <div className="grid grid-cols-2 items-center gap-6 lg:grid-cols-[1.6fr_repeat(4,1fr)]">
            <div className="col-span-2 flex items-center gap-4 lg:col-span-1">
              <div className="flex -space-x-3">
                {AVATARS.map((a) => (
                  <span key={a.alt} className={`relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-[#0b1322] ${a.bg}`}>
                    <Image src={a.src} alt={a.alt} fill sizes="44px" className="object-contain p-1.5" />
                  </span>
                ))}
              </div>
              <p className="whitespace-nowrap text-sm leading-snug text-slate-300">
                Marcas que ya
                <br />
                <span className="font-semibold text-white">confían en Nexus</span>
              </p>
            </div>
            <dl className="contents">
              {STATS.map((s) => (
                <div key={s.label} className="lg:border-l lg:border-white/10 lg:pl-6">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl font-bold text-white">{s.value}</dd>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-slate-400">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
