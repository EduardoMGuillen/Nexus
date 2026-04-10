"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TemplateShowcase from "@/components/TemplateShowcase";
import {
  Globe,
  Search,
  Server,
  Users,
  CheckCircle,
  ArrowLeft,
  LayoutTemplate,
} from "lucide-react";
import Link from "next/link";
import { useMessages } from "@/components/LocaleProvider";
import PayPalMaintenanceSubscribe from "@/components/PayPalMaintenanceSubscribe";
import PayPalBasicWebsiteHosted from "@/components/PayPalBasicWebsiteHosted";

const featureIcons = [Globe, Search, Server, Users] as const;

export default function PaginasWebContent() {
  const m = useMessages();
  const p = m.paginasWeb;

  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Header />

      <section className="pt-28 pb-10 px-4 sm:px-6 lg:px-8 sm:pt-32">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Link
              href="/#proyectos"
              className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-4 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {m.common.backToProjects}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-6 sm:mb-8"
          >
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 mb-5">
              <Globe className="w-11 h-11 sm:w-12 sm:h-12 text-white" />
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">{p.heroTitle1}</span>{" "}
              <span className="gradient-text">{p.heroTitle2}</span>
            </h1>
            <p className="text-lg sm:text-xl text-dark-300 max-w-2xl mx-auto">{p.heroSubtitle}</p>
          </motion.div>
        </div>
      </section>

      <section
        id="ofertas"
        className="px-4 sm:px-6 lg:px-8 pb-14 sm:pb-16 border-b border-dark-700/70 bg-gradient-to-b from-dark-900/80 to-dark-900/40"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
              <span className="text-white">{p.offersTitle1}</span>{" "}
              <span className="gradient-text">{p.offersTitle2}</span>
            </h2>
            <p className="text-dark-300 text-sm sm:text-base max-w-2xl mx-auto">
              {p.offersSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-2xl border border-dark-600 bg-dark-800/50 p-5 sm:p-6 shadow-lg shadow-black/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                  <LayoutTemplate className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-left">
                  <span className="text-white">{p.basicTitle1}</span>{" "}
                  <span className="gradient-text">{p.basicTitle2}</span>
                </h3>
              </div>
              <p className="text-dark-300 text-sm mb-4 text-left">{p.basicSubtitle}</p>
              <ul className="flex flex-col gap-2 mb-6 text-left">
                {p.basicFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-dark-200">
                    <CheckCircle className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <PayPalBasicWebsiteHosted />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-dark-600 bg-dark-800/50 p-5 sm:p-6 shadow-lg shadow-black/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-600 to-emerald-600">
                  <Server className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-left">
                  <span className="text-white">{p.subscribeTitle1}</span>{" "}
                  <span className="gradient-text">{p.subscribeTitle2}</span>
                </h3>
              </div>
              <p className="text-dark-300 text-sm mb-4 text-left">{p.subscribeSubtitle}</p>
              <ul className="flex flex-col gap-2 mb-6 text-left">
                {p.subscribeFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-dark-200">
                    <CheckCircle className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <PayPalMaintenanceSubscribe />
            </motion.div>
          </div>
        </div>
      </section>

      <TemplateShowcase />

      <section id="servicios" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {p.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-dark-700 hover:border-primary-500/50 transition-all"
                >
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-dark-300">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">{p.includeTitle1}</span>{" "}
              <span className="gradient-text">{p.includeTitle2}</span>
            </h2>
            <p className="text-dark-300">{p.includeSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {p.servicesList.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center space-x-3 p-4 bg-dark-800/50 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-dark-200">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">{p.benefitsTitle1}</span>{" "}
              <span className="gradient-text">{p.benefitsTitle2}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {p.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-dark-800/50 rounded-xl border border-dark-700"
              >
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-dark-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-white">{p.ctaTitle1}</span>{" "}
              <span className="gradient-text">{p.ctaTitle2}</span>
            </h2>
            <p className="text-dark-300 mb-8 text-lg">{p.ctaSubtitle}</p>
            <motion.a
              href="/#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold text-lg shadow-lg shadow-primary-500/50"
            >
              {m.common.requestQuote}
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
