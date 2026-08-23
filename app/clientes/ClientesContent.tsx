"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useMessages } from "@/components/LocaleProvider";
import { CLIENTS, clientUsesLightPlate, type ClientCategory } from "@/lib/clients";

const CATEGORY_ORDER: ClientCategory[] = [
  "realEstate",
  "security",
  "platforms",
  "business",
  "beauty",
];

export default function ClientesContent() {
  const m = useMessages();
  const c = m.clientes;
  const [activeCategory, setActiveCategory] = useState<ClientCategory | "all">("all");

  const filteredClients = useMemo(
    () =>
      activeCategory === "all"
        ? CLIENTS
        : CLIENTS.filter((client) => client.category === activeCategory),
    [activeCategory]
  );

  const filters: { key: ClientCategory | "all"; label: string }[] = [
    { key: "all", label: c.filterAll },
    ...CATEGORY_ORDER.map((key) => ({
      key,
      label: c.categories[key],
    })),
  ];

  return (
    <main className="page-shell">
      <Header />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl relative">
          <Link
            href="/#inicio"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {c.backHome}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {c.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="ink">{c.title1}</span>{" "}
              <span className="gradient-text">{c.title2}</span>
            </h1>
            <p className="text-lg ink-muted max-w-3xl mx-auto mb-8">{c.subtitle}</p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-4 rounded-2xl bg-dark-800/60 border border-dark-700 min-w-[140px]">
                <p className="text-3xl font-bold ink">{CLIENTS.length}</p>
                <p className="text-dark-400 text-sm">{c.statClients}</p>
              </div>
              <div className="px-6 py-4 rounded-2xl bg-dark-800/60 border border-dark-700 min-w-[140px]">
                <p className="text-3xl font-bold ink">{CATEGORY_ORDER.length}</p>
                <p className="text-dark-400 text-sm">{c.statIndustries}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveCategory(filter.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === filter.key
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                    : "bg-slate-100 dark:bg-dark-800/60 ink-muted border border-slate-200 dark:border-dark-700 hover:border-primary-500/40 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredClients.map((client, index) => (
              <motion.a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col rounded-2xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 hover:border-primary-500/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div
                  className={`relative p-8 flex items-center justify-center min-h-[180px] ${
                    clientUsesLightPlate(client) ? "bg-white" : "bg-black"
                  }`}
                >
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain p-1"
                      sizes="112px"
                    />
                  </div>
                </div>

                <div className="relative p-6 flex flex-col flex-1 border-t border-slate-200 dark:border-dark-700">
                  <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-medium bg-primary-500/15 text-primary-700 dark:text-primary-400 mb-3">
                    {c.categories[client.category]}
                  </span>
                  <h2 className="text-xl font-bold ink mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                    {client.name}
                  </h2>
                  <p className="flex items-center gap-2 text-slate-500 dark:text-dark-400 text-sm mb-4">
                    <Globe className="w-4 h-4 shrink-0" />
                    {client.domain}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 text-sm font-semibold">
                    {c.visitSite}
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold ink mb-4">{c.ctaTitle}</h2>
            <p className="ink-muted mb-8 max-w-2xl mx-auto">{c.ctaBody}</p>
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 transition-all shadow-lg shadow-primary-600/30"
            >
              {c.ctaButton}
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
