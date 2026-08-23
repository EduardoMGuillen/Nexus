"use client";

import { useState } from "react";
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
  Layers,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { useMessages } from "@/components/LocaleProvider";
import PayPalMaintenanceSubscribe from "@/components/PayPalMaintenanceSubscribe";
import PayPalBasicWebsiteHosted from "@/components/PayPalBasicWebsiteHosted";
import PayPalPremiumWebsiteHosted from "@/components/PayPalPremiumWebsiteHosted";
import { PayPalOffersSdkProvider } from "@/components/PayPalOffersSdkProvider";
import OfferCheckoutModal, {
  type CheckoutPackage,
} from "@/components/OfferCheckoutModal";
import type { PurchaseCustomerDetails } from "@/lib/purchase-customer";

const featureIcons = [Globe, Search, Server, Users] as const;

const emptyCustomer = (): PurchaseCustomerDetails => ({
  name: "",
  email: "",
  phone: "",
  filesUrl: "",
});

export default function PaginasWebContent() {
  const m = useMessages();
  const p = m.paginasWeb;

  const [basicCustomer, setBasicCustomer] = useState(emptyCustomer);
  const [premiumCustomer, setPremiumCustomer] = useState(emptyCustomer);
  const [subCustomer, setSubCustomer] = useState(emptyCustomer);
  const [checkoutOpen, setCheckoutOpen] = useState<CheckoutPackage | null>(null);

  const purchaseFieldLabels = {
    title: p.purchaseDataTitle,
    name: p.purchaseNameLabel,
    email: p.purchaseEmailLabel,
    phone: p.purchasePhoneLabel,
    files: p.purchaseFilesLabel,
    filesHint: p.purchaseFilesHint,
    enablePayHint: p.purchaseEnablePayHint,
  };

  const checkoutPlanTitle = (kind: CheckoutPackage) =>
    kind === "basic"
      ? `${p.basicTitle1} ${p.basicTitle2}`
      : kind === "premium"
        ? `${p.premiumTitle1} ${p.premiumTitle2}`
        : `${p.subscribeTitle1} ${p.subscribeTitle2}`;

  const checkoutCustomerPair = (kind: CheckoutPackage) =>
    kind === "basic"
      ? { customer: basicCustomer, onCustomerChange: setBasicCustomer }
      : kind === "premium"
        ? { customer: premiumCustomer, onCustomerChange: setPremiumCustomer }
        : { customer: subCustomer, onCustomerChange: setSubCustomer };

  return (
    <main className="page-shell">
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
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 mb-5">
              <Globe className="w-11 h-11 sm:w-12 sm:h-12 text-white" />
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="ink">{p.heroTitle1}</span>{" "}
              <span className="gradient-text">{p.heroTitle2}</span>
            </h1>
            <p className="text-lg sm:text-xl ink-muted max-w-2xl mx-auto">{p.heroSubtitle}</p>
            <Link
              href="/crear-pagina-web-honduras"
              className="inline-block mt-4 text-sm text-primary-400 hover:text-primary-300"
            >
              {m.footer.localSeo} →
            </Link>
          </motion.div>
        </div>
      </section>

      <section
        id="ofertas"
        className="px-4 sm:px-6 lg:px-8 pb-14 sm:pb-16"
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
              <span className="ink">{p.offersTitle1}</span>{" "}
              <span className="gradient-text">{p.offersTitle2}</span>
            </h2>
            <p className="ink-muted text-sm sm:text-base max-w-2xl mx-auto">
              {p.offersSubtitle}
            </p>
          </motion.div>

          <PayPalOffersSdkProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-2xl border border-slate-200 dark:border-primary-500/35 bg-white dark:bg-dark-800/50 p-7 sm:p-8 shadow-lg shadow-black/10 dark:shadow-black/20 flex flex-col min-h-[28rem]"
            >
              <div className="flex flex-col items-start gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600">
                  <Wallet className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-left font-bold">
                  <span className="block ink text-2xl leading-tight">{p.budgetTitle1}</span>
                  <span className="block gradient-text text-xl mt-1">{p.budgetTitle2}</span>
                </h3>
              </div>
              <p className="ink-muted text-sm mb-4 text-left leading-relaxed">{p.budgetSubtitle}</p>
              <ul className="flex flex-col gap-2.5 mb-6 text-left flex-1">
                {p.budgetFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm ink-soft">
                    <CheckCircle className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/#contacto"
                className="w-full mt-auto py-3.5 px-4 rounded-xl font-semibold text-center text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 transition shadow-lg shadow-black/25"
              >
                {p.budgetCta}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-2xl border border-slate-200 dark:border-dark-600 bg-white dark:bg-dark-800/50 p-7 sm:p-8 shadow-lg shadow-black/10 dark:shadow-black/20 flex flex-col min-h-[28rem]"
            >
              <div className="flex flex-col items-start gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700">
                  <LayoutTemplate className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-left font-bold">
                  <span className="block ink text-2xl leading-tight">{p.basicTitle1}</span>
                  <span className="block gradient-text text-xl mt-1">{p.basicTitle2}</span>
                </h3>
              </div>
              <p className="ink-muted text-sm mb-4 text-left leading-relaxed">{p.basicSubtitle}</p>
              <ul className="flex flex-col gap-2.5 mb-6 text-left flex-1">
                {p.basicFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm ink-soft">
                    <CheckCircle className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setCheckoutOpen("basic")}
                className="w-full mt-auto py-3.5 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-400 hover:to-primary-600 transition shadow-lg shadow-black/25 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-dark-800"
              >
                {p.purchaseBuyCta}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-slate-200 dark:border-dark-600 bg-white dark:bg-dark-800/50 p-7 sm:p-8 shadow-lg shadow-black/10 dark:shadow-black/20 flex flex-col min-h-[28rem] md:col-span-2 xl:col-span-1"
            >
              <div className="flex flex-col items-start gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800">
                  <Layers className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-left font-bold">
                  <span className="block ink text-2xl leading-tight">{p.premiumTitle1}</span>
                  <span className="block gradient-text text-xl mt-1">{p.premiumTitle2}</span>
                </h3>
              </div>
              <p className="ink-muted text-sm mb-4 text-left leading-relaxed">{p.premiumSubtitle}</p>
              <ul className="flex flex-col gap-2.5 mb-6 text-left flex-1">
                {p.premiumFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm ink-soft">
                    <CheckCircle className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setCheckoutOpen("premium")}
                className="w-full mt-auto py-3.5 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-500 hover:to-primary-700 transition shadow-lg shadow-black/25 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-dark-800"
              >
                {p.purchaseBuyCta}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="rounded-2xl border border-slate-200 dark:border-dark-600 bg-white dark:bg-dark-800/50 p-7 sm:p-8 shadow-lg shadow-black/10 dark:shadow-black/20 flex flex-col md:col-span-2 xl:col-span-3 xl:max-w-2xl xl:mx-auto xl:w-full"
            >
              <div className="flex flex-col items-start gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800">
                  <Server className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-left font-bold">
                  <span className="block ink text-2xl leading-tight">{p.subscribeTitle1}</span>
                  <span className="block gradient-text text-xl mt-1">{p.subscribeTitle2}</span>
                </h3>
              </div>
              <p className="ink-muted text-sm mb-4 text-left leading-relaxed">{p.subscribeSubtitle}</p>
              <ul className="flex flex-col gap-2.5 mb-6 text-left flex-1">
                {p.subscribeFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm ink-soft">
                    <CheckCircle className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setCheckoutOpen("subscription")}
                className="w-full mt-auto py-3.5 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-500 hover:to-primary-700 transition shadow-lg shadow-black/25 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-dark-800"
              >
                {p.purchaseBuyCta}
              </button>
            </motion.div>
          </div>
          {checkoutOpen !== null && (
            <OfferCheckoutModal
              open
              onClose={() => setCheckoutOpen(null)}
              packageKind={checkoutOpen}
              planTitle={checkoutPlanTitle(checkoutOpen)}
              intro={p.purchaseModalIntro}
              closeLabel={p.purchaseModalClose}
              paySectionTitle={p.purchaseCheckoutPaypalTitle}
              labels={purchaseFieldLabels}
              {...checkoutCustomerPair(checkoutOpen)}
            />
          )}
          </PayPalOffersSdkProvider>
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
                  className="p-8 bg-white dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-dark-700 hover:border-primary-500/50 transition-all"
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

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-dark-800/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="ink">{p.includeTitle1}</span>{" "}
              <span className="gradient-text">{p.includeTitle2}</span>
            </h2>
            <p className="ink-muted">{p.includeSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {p.servicesList.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center space-x-3 p-4 bg-white dark:bg-dark-800/50 rounded-lg border border-slate-200 dark:border-transparent"
              >
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="ink-soft">{service}</span>
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
              <span className="ink">{p.benefitsTitle1}</span>{" "}
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
                className="p-6 bg-white dark:bg-dark-800/50 rounded-xl border border-slate-200 dark:border-dark-700"
              >
                <h3 className="text-xl font-bold ink mb-3">{benefit.title}</h3>
                <p className="ink-muted">{benefit.description}</p>
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
              <span className="ink">{p.ctaTitle1}</span>{" "}
              <span className="gradient-text">{p.ctaTitle2}</span>
            </h2>
            <p className="ink-muted mb-8 text-lg">{p.ctaSubtitle}</p>
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
