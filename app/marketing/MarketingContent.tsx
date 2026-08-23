"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Share2,
  Target,
  BookOpen,
  Megaphone,
  Search,
  Package,
} from "lucide-react";
import Link from "next/link";
import { useMessages } from "@/components/LocaleProvider";

const serviceIcons = [Share2, Target, BookOpen, Megaphone, Search, Package] as const;

export default function MarketingContent() {
  const m = useMessages();
  const mk = m.marketing;

  return (
    <main className="page-shell">
      <Header />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-wide text-primary-500 mb-4">
            {mk.heroKicker}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="ink">{mk.heroTitle1}</span>{" "}
            <span className="gradient-text">{mk.heroTitle2}</span>
          </h1>
          <p className="text-xl ink-muted max-w-2xl mx-auto mb-8">{mk.heroLead}</p>
          <Link
            href="/#contacto"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            {mk.ctaPrimary}
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="ink">{mk.servicesTitle1}</span>{" "}
            <span className="gradient-text">{mk.servicesTitle2}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mk.services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white dark:bg-dark-800/50 rounded-2xl border border-slate-200 dark:border-dark-700"
                >
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold ink mb-3">{service.title}</h3>
                  <p className="ink-muted text-sm">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="ink">{mk.processTitle1}</span>{" "}
            <span className="gradient-text">{mk.processTitle2}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mk.steps.map((step, i) => (
              <div
                key={step.title}
                className="p-6 rounded-2xl border border-slate-200 dark:border-dark-700 bg-white dark:bg-dark-800/50"
              >
                <span className="text-primary-500 font-bold text-sm">0{i + 1}</span>
                <h3 className="text-lg font-bold ink mt-2 mb-2">{step.title}</h3>
                <p className="ink-muted text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="ink">{mk.ctaTitle1}</span>{" "}
            <span className="gradient-text">{mk.ctaTitle2}</span>
          </h2>
          <p className="ink-muted mb-8">{mk.ctaBody}</p>
          <Link
            href="/#contacto"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold"
          >
            {mk.ctaButton}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
