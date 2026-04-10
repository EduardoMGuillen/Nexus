"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLocaleContext } from "./LocaleProvider";
import Image from "next/image";
import Link from "next/link";
import { LOCALES, type Locale } from "@/lib/i18n/types";

const LOCALE_LABEL: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  fr: "FR",
  pt: "PT",
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, messages: m } = useLocaleContext();
  const nav = m.header.nav;

  const navItems = [
    { name: nav.home, href: "/#inicio" },
    { name: nav.services, href: "/#servicios" },
    { name: nav.projects, href: "/#proyectos" },
    { name: nav.templates, href: "/#plantillas" },
    { name: nav.process, href: "/#proceso" },
    { name: nav.partners, href: "/#partners" },
    { name: nav.contact, href: "/#contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-dark-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/#inicio" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-12 h-12"
            >
              <Image
                src="/NexusGPTHD.png"
                alt={m.hero.logoAlt}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <span className="text-xl font-bold gradient-text hidden sm:block">
              {m.common.brandName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-900 dark:text-dark-200 hover:text-primary-400 transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Language, Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative flex items-center">
              <Languages
                className="w-4 h-4 text-slate-500 dark:text-dark-400 absolute left-2.5 pointer-events-none hidden sm:block"
                aria-hidden
              />
              <select
                value={locale}
                onChange={(e) => setLocale(e.target.value as Locale)}
                aria-label={m.header.ariaLanguage}
                className="pl-3 sm:pl-9 pr-7 sm:pr-8 py-2 rounded-lg bg-slate-100 dark:bg-dark-800 hover:bg-slate-200 dark:hover:bg-dark-700 border-0 text-sm text-slate-900 dark:text-dark-200 cursor-pointer appearance-none transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              >
                {LOCALES.map((code) => (
                  <option key={code} value={code}>
                    {LOCALE_LABEL[code]}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 dark:text-dark-400 text-xs hidden sm:block">
                ▾
              </span>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-dark-800 hover:bg-slate-200 dark:hover:bg-dark-700 transition-colors"
              aria-label={m.header.ariaTheme}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-primary-400" />
              ) : (
                <Moon className="w-5 h-5 text-dark-600" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-dark-800 hover:bg-slate-200 dark:hover:bg-dark-700 transition-colors"
              aria-label={m.header.ariaMenu}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary-400" />
              ) : (
                <Menu className="w-6 h-6 text-primary-400" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-t border-dark-800"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-slate-900 dark:text-dark-200 hover:text-primary-400 transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
