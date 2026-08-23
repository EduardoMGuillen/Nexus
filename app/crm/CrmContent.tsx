"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Columns3,
  UserRound,
  MessageCircle,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useMessages } from "@/components/LocaleProvider";

const featureIcons = [Columns3, UserRound, MessageCircle, BarChart3] as const;

const DEMO_CARDS = [
  [
    { name: "Clínica Valle", value: "$1,200", owner: "Ana" },
    { name: "Inmobiliaria Norte", value: "$4,800", owner: "Luis" },
    { name: "Café Central", value: "$650", owner: "Ana" },
  ],
  [
    { name: "Ferretería López", value: "$2,100", owner: "María" },
    { name: "Hotel Brisas", value: "$3,400", owner: "Luis" },
  ],
  [
    { name: "Floristería Rosa", value: "$890", owner: "Ana" },
    { name: "Agencia SPS", value: "$5,200", owner: "María" },
  ],
  [{ name: "Consultorio Dental", value: "$1,750", owner: "Luis" }],
] as const;

export default function CrmContent() {
  const m = useMessages();
  const c = m.crm;
  const columns = [c.colNew, c.colContacted, c.colProposal, c.colWon];
  const kpis = [
    { label: c.kpiActive, value: "24" },
    { label: c.kpiPipeline, value: "$18.4k" },
    { label: c.kpiConversion, value: "32%" },
    { label: c.kpiClosed, value: "7" },
  ];

  return (
    <main className="page-shell">
      <Header />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-wide text-primary-500 mb-4">
            {c.heroKicker}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="ink">{c.heroTitle1}</span>{" "}
            <span className="gradient-text">{c.heroTitle2}</span>
          </h1>
          <p className="text-xl ink-muted max-w-2xl mx-auto mb-8">{c.heroLead}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contacto"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {c.ctaPrimary}
            </Link>
            <a
              href="#demo"
              className="px-8 py-3 rounded-xl border border-primary-500/40 ink font-semibold hover:border-primary-500 transition-colors"
            >
              {c.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      <section id="demo" className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold ink text-center mb-2">{c.demoTitle}</h2>
          <p className="text-center ink-muted mb-8">{c.demoHint}</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-2xl border border-slate-200 dark:border-dark-700 bg-white dark:bg-dark-800/50 p-5 text-center"
              >
                <p className="text-2xl font-bold gradient-text">{kpi.value}</p>
                <p className="text-sm ink-muted mt-1">{kpi.label}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-primary-500 mb-4 text-center">{c.aiBanner}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {columns.map((col, i) => (
              <div
                key={col}
                className="rounded-2xl border border-slate-200 dark:border-dark-700 bg-slate-50 dark:bg-dark-900/60 p-3 min-h-[280px]"
              >
                <div className="flex items-center justify-between mb-3 px-1">
                  <h3 className="font-semibold ink text-sm">{col}</h3>
                  <span className="text-xs ink-muted">{DEMO_CARDS[i].length}</span>
                </div>
                <div className="space-y-2">
                  {DEMO_CARDS[i].map((card) => (
                    <div
                      key={card.name}
                      className="rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 p-3 shadow-sm"
                    >
                      <p className="font-medium ink text-sm">{card.name}</p>
                      <div className="flex justify-between mt-2 text-xs ink-muted">
                        <span>{card.value}</span>
                        <span>{card.owner}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="ink">{c.featuresTitle1}</span>{" "}
            <span className="gradient-text">{c.featuresTitle2}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white dark:bg-dark-800/50 rounded-2xl border border-slate-200 dark:border-dark-700"
                >
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold ink mb-3">{feature.title}</h3>
                  <p className="ink-muted">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="ink">{c.processTitle1}</span>{" "}
            <span className="gradient-text">{c.processTitle2}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.steps.map((step, i) => (
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

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="ink">{c.includeTitle1}</span>{" "}
            <span className="gradient-text">{c.includeTitle2}</span>
          </h2>
          <p className="text-center ink-muted mb-8">{c.includeLead}</p>
          <ul className="space-y-3">
            {c.bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <span className="ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="ink">{c.ctaTitle1}</span>{" "}
            <span className="gradient-text">{c.ctaTitle2}</span>
          </h2>
          <p className="ink-muted mb-8">{c.ctaBody}</p>
          <Link
            href="/#contacto"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold"
          >
            {c.ctaButton}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
