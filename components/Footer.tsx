"use client";

import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMessages } from "./LocaleProvider";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const m = useMessages();
  const nav = m.header.nav;

  const quickLinks = [
    { name: nav.home, href: "/#inicio" },
    { name: nav.services, href: "/paginas-web#ofertas" },
    { name: nav.projects, href: "/#proyectos" },
    { name: nav.templates, href: "/paginas-web#plantillas" },
    { name: nav.contact, href: "/#contacto" },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div>
            <Link
              href="/#inicio"
              className="flex flex-col md:flex-row items-center md:space-x-3 space-y-2 md:space-y-0 mb-4"
            >
              <div className="relative w-10 h-10">
                <Image
                  src="/NexusGPTHD.png"
                  alt={m.hero.logoAlt}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold gradient-text">{m.common.brandName}</span>
            </Link>
            <p className="text-slate-300 dark:text-dark-400 text-sm">{m.footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{m.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 dark:text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{m.footer.follow}</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                href="https://www.instagram.com/nexusglobalhn/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-dark-800 rounded-lg hover:bg-primary-500/20 transition-colors"
                aria-label={m.footer.ariaInstagram}
              >
                <Instagram className="w-5 h-5 text-primary-400" />
              </motion.a>
              <motion.a
                href="mailto:Eduardoguillendev@proton.me"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-dark-800 rounded-lg hover:bg-primary-500/20 transition-colors"
                aria-label={m.footer.ariaEmail}
              >
                <Mail className="w-5 h-5 text-primary-400" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center">
          <p className="text-slate-400 dark:text-dark-500 text-sm">
            © {currentYear} {m.common.brandName}. {m.footer.rights}
          </p>
          <p className="text-slate-400 dark:text-dark-500 text-sm mt-2 sm:mt-0">{m.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
