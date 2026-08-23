"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, CheckCircle } from "lucide-react";
import { useMessages } from "@/components/LocaleProvider";

export default function SeoHn() {
  const { seoLocal: s } = useMessages();

  return (
    <section
      id="honduras"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-900 border-y border-slate-200 dark:border-dark-700"
      aria-labelledby="seo-hn-heading"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 mb-3">
            <MapPin className="w-4 h-4" />
            {s.badge}
          </p>
          <h2
            id="seo-hn-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {s.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-dark-300 max-w-3xl mx-auto">{s.lead}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {s.points.map((point) => (
            <div
              key={point}
              className="flex gap-3 p-5 rounded-2xl border border-slate-200 dark:border-dark-700 bg-slate-50 dark:bg-dark-800/50"
            >
              <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
              <p className="text-slate-700 dark:text-dark-200 text-sm sm:text-base">{point}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-300 dark:border-dark-600 bg-white dark:bg-dark-800 p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-6">{s.faqTitle}</h3>
          <dl className="space-y-6">
            {s.faqs.map((faq) => (
              <div key={faq.q}>
                <dt className="font-semibold text-brand-navy dark:text-white mb-2">{faq.q}</dt>
                <dd className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
          <Link
            href="/crear-pagina-web-honduras"
            className="inline-flex mt-8 text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 font-semibold"
          >
            {s.moreCta} →
          </Link>
          <Link
            href="/nexus-honduras"
            className="inline-flex mt-4 ml-0 sm:ml-6 text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 font-semibold"
          >
            Nexus Honduras →
          </Link>
        </div>
      </div>
    </section>
  );
}
