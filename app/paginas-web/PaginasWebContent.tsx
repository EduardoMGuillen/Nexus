"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/#proyectos"
              className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {m.common.backToProjects}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 mb-6">
              <Globe className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">{p.heroTitle1}</span>{" "}
              <span className="gradient-text">{p.heroTitle2}</span>
            </h1>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">{p.heroSubtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {p.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/30">
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

      <section className="py-20 px-4 sm:px-6 lg:px-8">
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-dark-700/80 bg-dark-900/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 mb-6">
              <LayoutTemplate className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">{p.basicTitle1}</span>{" "}
              <span className="gradient-text">{p.basicTitle2}</span>
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto mb-8">{p.basicSubtitle}</p>
            <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-x-8 sm:gap-y-2 text-sm text-dark-200 mb-8">
              {p.basicFeatures.map((item) => (
                <li key={item} className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <PayPalBasicWebsiteHosted />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-dark-700/80 bg-dark-900/40">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary-600 to-emerald-600 mb-6">
              <Server className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">{p.subscribeTitle1}</span>{" "}
              <span className="gradient-text">{p.subscribeTitle2}</span>
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto mb-8">{p.subscribeSubtitle}</p>
            <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-x-8 sm:gap-y-2 text-sm text-dark-200 mb-4">
              {p.subscribeFeatures.map((item) => (
                <li key={item} className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <PayPalMaintenanceSubscribe />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
