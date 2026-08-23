"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ParticleNetwork from "./ParticleNetwork";
import { useMessages } from "./LocaleProvider";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const m = useMessages();

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-cloud via-white to-brand-cloud dark:from-black dark:via-dark-900 dark:to-black"
    >
      {/* Animated Background */}
      <ParticleNetwork />
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto flex items-center justify-center">
              {/* Native img keeps PNG alpha; next/image was flattening it to black */}
              <img
                src="/logo-mark.png"
                alt={m.hero.logoAlt}
                className="max-h-full max-w-full object-contain drop-shadow-[0_0_40px_rgba(0,186,196,0.35)]"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6"
        >
          <span className="text-brand-navy dark:text-white">{m.hero.titleLine1}</span>
          <br />
          <span className="gradient-text">{m.hero.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-slate-600 dark:text-dark-300 mb-12 max-w-3xl mx-auto"
        >
          {m.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold text-lg shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/50 transition-all"
          >
            {m.hero.ctaStart}
          </motion.a>
          <motion.a
            href="/paginas-web#ofertas"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white dark:bg-dark-800/50 backdrop-blur-sm text-brand-navy dark:text-white rounded-lg font-semibold text-lg border border-brand-navy/20 dark:border-dark-700 hover:border-primary-500/50 transition-all"
          >
            {m.hero.ctaServices}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}


