"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Coffee,
  ExternalLink,
  Home,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { useMessages } from "./LocaleProvider";

const TEMPLATE_LINKS: {
  url: string;
  gradient: string;
  isLive: boolean;
  Icon: LucideIcon;
}[] = [
  {
    url: "https://constructora-template-pink.vercel.app",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-600",
    isLive: false,
    Icon: Building2,
  },
  {
    url: "https://cafe-template-mauve.vercel.app",
    gradient: "from-violet-500 via-purple-500 to-indigo-600",
    isLive: false,
    Icon: Coffee,
  },
  {
    url: "https://dentista-template.vercel.app",
    gradient: "from-sky-500 via-cyan-500 to-teal-600",
    isLive: false,
    Icon: Stethoscope,
  },
  {
    url: "https://inmobiliaria-template.vercel.app",
    gradient: "from-emerald-500 via-green-500 to-lime-600",
    isLive: false,
    Icon: Home,
  },
  {
    url: "https://www.martamartinezestetica.com",
    gradient: "from-amber-500 via-orange-500 to-rose-600",
    isLive: true,
    Icon: Sparkles,
  },
];

export default function TemplateShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const m = useMessages();
  const t = m.templateShowcase;

  return (
    <section
      id="plantillas"
      ref={ref}
      className="py-16 sm:py-20 border-y border-dark-700/80 bg-dark-900/35"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex p-3 rounded-xl bg-primary-500/15 border border-primary-500/25 mb-4">
            <Sparkles className="w-7 h-7 text-primary-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            <span className="text-white">{t.titleOur}</span>{" "}
            <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="text-dark-300 text-sm sm:text-base max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Una fila en desktop; scroll horizontal en pantallas pequeñas */}
        <div
          className="flex flex-nowrap gap-3 sm:gap-4 overflow-x-auto pb-3 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0 lg:snap-none lg:gap-4 max-w-[1600px] mx-auto [-webkit-overflow-scrolling:touch]"
        >
          {t.items.map((item, index) => {
            const meta = TEMPLATE_LINKS[index];
            if (!meta) return null;
            const Icon = meta.Icon;
            return (
              <motion.article
                key={item.name + meta.url}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="flex flex-col w-[min(78vw,260px)] shrink-0 snap-center sm:w-[240px] lg:w-auto lg:min-w-0 rounded-2xl border border-dark-700 bg-dark-800/55 backdrop-blur-sm overflow-hidden shadow-lg hover:border-primary-500/35 transition-colors duration-300"
              >
                <div
                  className={`relative h-28 sm:h-32 bg-gradient-to-br ${meta.gradient} flex items-center justify-center shrink-0`}
                  aria-hidden
                >
                  <Icon className="w-12 h-12 sm:w-14 sm:h-14 text-white drop-shadow-md opacity-95" />
                  <span
                    className={`absolute bottom-2 left-2 text-[10px] sm:text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                      meta.isLive
                        ? "bg-emerald-950/90 text-primary-300 border border-primary-500/40"
                        : "bg-black/40 text-white border border-white/10"
                    }`}
                  >
                    {meta.isLive ? t.badgeLive : t.badgeDemo}
                  </span>
                </div>

                <div className="p-4 flex flex-col flex-1 min-h-0">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 line-clamp-2 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-dark-300 text-xs sm:text-sm leading-snug flex-1 mb-4 line-clamp-4">
                    {item.description}
                  </p>
                  <motion.a
                    href={meta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.ariaOpen}: ${item.name}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-auto inline-flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-xl bg-dark-700 text-white text-xs sm:text-sm font-semibold hover:bg-primary-600 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
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
