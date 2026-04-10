"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Code, Zap } from "lucide-react";
import { useMessages } from "./LocaleProvider";

const icons = [Globe, Code, Zap] as const;

const gradients = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-yellow-500 to-orange-500",
] as const;

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const m = useMessages();

  return (
    <section
      id="servicios"
      ref={ref}
      className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-dark-900 dark:to-dark-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-slate-900 dark:text-white">{m.services.titleOur}</span>{" "}
            <span className="gradient-text">{m.services.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-dark-300 text-lg max-w-2xl mx-auto">
            {m.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {m.services.cards.map((service, index) => {
            const Icon = icons[index];
            const color = gradients[index];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative flex flex-col items-center text-center md:text-left md:items-start"
              >
                <div className="relative h-full p-8 bg-slate-100 dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-dark-700 hover:border-primary-500/50 transition-all duration-300 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${color} mb-6 relative z-10`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-dark-300 mb-6">{service.description}</p>

                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center justify-center md:justify-start text-slate-600 dark:text-dark-400 text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
