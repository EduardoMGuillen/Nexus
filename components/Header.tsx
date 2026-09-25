"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { WhatsAppIcon } from "./icons";
import { waLink } from "@/lib/site";

const NAV = [
  { name: "Planes", href: "/#planes" },
  { name: "Páginas web", href: "/paginas-web" },
  { name: "CRM", href: "/crm" },
  { name: "Marketing", href: "/marketing" },
  { name: "Clientes", href: "/clientes" },
  { name: "Blog", href: "/blog" },
  { name: "Nosotros", href: "/nosotros" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled || open
            ? "border border-white/10 bg-[#070c17]/95 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] md:bg-[#070c17]/80 md:backdrop-blur-xl"
            : "border border-transparent"
        }`}
      >
        <Logo />

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-[13.5px] font-medium transition ${
                isActive(item.href)
                  ? "bg-white/[0.08] text-white"
                  : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary-500 px-4 py-2.5 text-[13px] font-semibold text-[#03161a] shadow-[0_8px_30px_-8px_rgba(0,186,196,0.8)] transition hover:bg-primary-400 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Cotizar gratis
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#070c17]/[0.98] p-3 lg:hidden">
          <nav aria-label="Móvil" className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-slate-200 hover:bg-white/[0.05]"
              >
                {item.name}
                <ArrowUpRight className="h-4 w-4 text-primary-400" />
              </Link>
            ))}
          </nav>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-3 w-full"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Cotizar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
