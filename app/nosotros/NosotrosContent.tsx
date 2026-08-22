"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Lock,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useMessages } from "@/components/LocaleProvider";
import { SITE_EMAIL, SITE_INSTAGRAM } from "@/lib/site";
import { TRUST_CASES } from "@/lib/trust-cases";

export default function NosotrosContent() {
  const m = useMessages();
  const t = m.about;

  return (
    <main className="page-shell">
      <Header />
      <article className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <Link
            href="/#inicio"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.backHome}
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <p className="text-primary-400 text-sm font-medium mb-3">{t.badge}</p>
            <h1 className="text-3xl sm:text-5xl font-bold ink mb-4">{t.title}</h1>
            <p className="text-lg ink-muted max-w-3xl leading-relaxed">{t.lead}</p>
          </motion.header>

          <section className="grid sm:grid-cols-3 gap-4 mb-14">
            <div className="rounded-2xl border border-slate-200 dark:border-dark-600 bg-white dark:bg-dark-800/50 p-5">
              <MapPin className="w-5 h-5 text-primary-400 mb-3" />
              <h2 className="ink font-semibold mb-1">{t.whereTitle}</h2>
              <p className="text-sm ink-muted">{t.whereBody}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-dark-600 bg-white dark:bg-dark-800/50 p-5">
              <Mail className="w-5 h-5 text-primary-400 mb-3" />
              <h2 className="ink font-semibold mb-1">{t.contactTitle}</h2>
              <a href={`mailto:${SITE_EMAIL}`} className="text-sm text-primary-400 break-all">
                {SITE_EMAIL}
              </a>
              <p className="text-sm text-dark-400 mt-2">
                <a href={SITE_INSTAGRAM} className="hover:text-primary-300" target="_blank" rel="noopener noreferrer">
                  @nexusglobalhn
                </a>
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-dark-600 bg-white dark:bg-dark-800/50 p-5">
              <Lock className="w-5 h-5 text-primary-400 mb-3" />
              <h2 className="ink font-semibold mb-1">{t.httpsTitle}</h2>
              <p className="text-sm ink-muted">{t.httpsBody}</p>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold ink mb-3">{t.storyTitle}</h2>
            {t.story.map((p) => (
              <p key={p.slice(0, 32)} className="ink-muted leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </section>

          <section className="mb-14">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-6 h-6 text-primary-400" />
              <h2 className="text-2xl sm:text-3xl font-bold ink">{t.casesTitle}</h2>
            </div>
            <p className="ink-muted mb-8 max-w-2xl">{t.casesLead}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {TRUST_CASES.map((c, i) => {
                const copy = t.cases[i];
                return (
                  <article
                    key={c.id}
                    className="rounded-2xl border border-dark-600 bg-dark-800/40 p-5 sm:p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`relative w-16 h-16 shrink-0 ${"logoBg" in c ? c.logoBg : ""}`}>
                        <Image src={c.logo} alt="" fill className="object-contain" sizes="64px" />
                      </div>
                      <div>
                        <h3 className="ink font-bold">{copy.name}</h3>
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary-400 hover:text-primary-300"
                        >
                          {c.domain} ↗
                        </a>
                      </div>
                    </div>
                    <p className="text-xs uppercase tracking-wide text-dark-500 mb-1">{t.beforeLabel}</p>
                    <p className="text-sm ink-muted mb-4">{copy.before}</p>
                    <p className="text-xs uppercase tracking-wide text-primary-500 mb-1">{t.afterLabel}</p>
                    <p className="text-sm ink-soft mb-4">{copy.after}</p>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-primary-400 hover:text-primary-300"
                    >
                      {t.visitLive} →
                    </a>
                  </article>
                );
              })}
            </div>
          </section>

          <p className="text-center">
            <Link href="/#contacto" className="text-primary-400 hover:text-primary-300 font-semibold">
              {t.ctaContact} →
            </Link>
            <span className="text-dark-500 mx-3">·</span>
            <Link href="/privacidad" className="text-slate-500 dark:text-dark-400 hover:text-slate-800 dark:hover:text-dark-200 text-sm">
              {t.privacyLink}
            </Link>
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
