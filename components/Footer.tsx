import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import {
  INSTAGRAM_HANDLE,
  SITE_EMAIL,
  SITE_INSTAGRAM,
  WHATSAPP_DISPLAY,
  waLink,
} from "@/lib/site";

const COLUMNS = [
  {
    title: "Servicios",
    links: [
      { name: "Páginas web", href: "/paginas-web" },
      { name: "Planes y precios", href: "/#planes" },
      { name: "Libro de marca", href: "/#libro-de-marca" },
      { name: "CRM a medida", href: "/crm" },
      { name: "Marketing digital", href: "/marketing" },
    ],
  },
  {
    title: "Nexus",
    links: [
      { name: "Clientes", href: "/clientes" },
      { name: "Blog", href: "/blog" },
      { name: "Nosotros", href: "/nosotros" },
      { name: "Privacidad", href: "/privacidad" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#04070d]">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="container-x relative pb-10 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Estudio hondureño de desarrollo web y soluciones empresariales. Páginas web,
              libro de marca, CRM y marketing para negocios que quieren verse y vender mejor.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-[#25D366]/60 hover:text-[#25D366]"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={SITE_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-pink-400/60 hover:text-pink-300"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={`mailto:${SITE_EMAIL}`}
                aria-label="Correo"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-primary-400/60 hover:text-primary-300"
              >
                <Mail className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-slate-300 transition hover:text-primary-300">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Contacto</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-300">
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={SITE_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-300">
                  <InstagramIcon className="h-4 w-4 text-pink-300" /> {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="flex items-center gap-2 break-all hover:text-primary-300">
                  <Mail className="h-4 w-4 shrink-0 text-primary-300" /> {SITE_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="h-4 w-4 text-primary-300" /> Honduras · Atendemos en todo el país
              </li>
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="pointer-events-none mt-16 select-none bg-gradient-to-b from-white/[0.09] to-transparent bg-clip-text text-center font-display text-[18vw] font-bold leading-none tracking-tighter text-transparent lg:text-[210px]"
        >
          NEXUS
        </p>

        <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Nexus Global. Hecho en Honduras.</p>
          <p>Desarrollo web · Libro de marca · CRM · Marketing</p>
        </div>
      </div>
    </footer>
  );
}
