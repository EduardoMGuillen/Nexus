"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import { useMessages } from "./LocaleProvider";

const TEMPLATE_LINKS = [
  {
    url: "https://constructora-template-pink.vercel.app",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-600",
    isLive: false,
  },
  {
    url: "https://cafe-template-mauve.vercel.app",
    gradient: "from-violet-500 via-purple-500 to-indigo-600",
    isLive: false,
  },
  {
    url: "https://dentista-template.vercel.app",
    gradient: "from-sky-500 via-cyan-500 to-teal-600",
    isLive: false,
  },
  {
    url: "https://inmobiliaria-template.vercel.app",
    gradient: "from-emerald-500 via-green-500 to-lime-600",
    isLive: false,
  },
  {
    url: "https://www.martamartinezestetica.com",
    gradient: "from-amber-500 via-orange-500 to-rose-600",
    isLive: true,
  },
] as const;

export default function TemplateShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const m = useMessages();
  const t = m.templateShowcase;

  return (
    <section
      id="plantillas"
      ref={ref}
      className="py-24 bg-gradient-to-b from-slate-100 to-white dark:from-dark-900 dark:to-dark-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.12] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.35) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex p-3 rounded-xl bg-primary-500/15 border border-primary-500/30 mb-5">
            <Sparkles className="w-8 h-8 text-primary-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-slate-900 dark:text-white">{t.titleOur}</span>{" "}
            <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-dark-300 text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.items.map((item, index) => {
            const meta = TEMPLATE_LINKS[index];
            if (!meta) return null;
            return (
              <motion.article
                key={item.name + meta.url}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col rounded-2xl border border-slate-200 dark:border-dark-700 bg-white/80 dark:bg-dark-800/60 backdrop-blur-sm overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-none hover:border-primary-500/40 transition-all duration-300"
              >
                <div
                  className={`h-36 bg-gradient-to-br ${meta.gradient} relative shrink-0`}
                  aria-hidden
                >
                  <div className="absolute inset-0 bg-dark-900/10 group-hover:bg-dark-900/0 transition-colors" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                        meta.isLive
                          ? "bg-white/95 text-emerald-800 dark:bg-dark-900/90 dark:text-primary-300"
                          : "bg-black/35 text-white backdrop-blur-sm"
                      }`}
                    >
                      {meta.isLive ? t.badgeLive : t.badgeDemo}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 dark:text-dark-300 text-sm leading-relaxed flex-1 mb-6">
                    {item.description}
                  </p>
                  <motion.a
                    href={meta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.ariaOpen}: ${item.name}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-slate-900 dark:bg-dark-700 text-white font-semibold text-sm hover:bg-primary-600 dark:hover:bg-primary-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 shrink-0" />
                    {t.ctaLive}
                  </motion.a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
