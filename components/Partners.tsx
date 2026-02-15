"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const partners = [
  {
    name: "Astro, Casablanca y Studio54",
    url: "https://www.lagrancasablanca.com",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Stellare",
    url: "https://www.stellare.co",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    name: "InmoModerna",
    url: "https://www.inmobiliariamodernahn.com",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    name: "TeamLink",
    url: "https://www.teamlink.lat",
    gradient: "from-green-500 to-teal-600",
  },
  {
    name: "BizzTrack",
    url: "https://www.bizztrack.pro",
    gradient: "from-rose-500 to-pink-600",
  },
];

// Duplicate the list to create a seamless infinite loop
const marqueePartners = [...partners, ...partners];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="partners"
      ref={ref}
      className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-dark-900 dark:to-dark-800 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-slate-900 dark:text-white">Nuestros</span>{" "}
            <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-slate-600 dark:text-dark-300 text-lg max-w-2xl mx-auto">
            Empresas que confían en nosotros para impulsar su presencia digital
          </p>
        </motion.div>
      </div>

      {/* Marquee Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative group"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-slate-50 dark:from-dark-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-slate-100 dark:from-dark-800 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {marqueePartners.map((partner, index) => (
            <a
              key={`${partner.name}-${index}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-4"
            >
              <div className="relative flex items-center gap-3 px-8 py-5 bg-white dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 group/card">
                {/* Gradient dot */}
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-br ${partner.gradient} flex-shrink-0`}
                />

                {/* Name */}
                <span className="text-lg font-semibold text-slate-800 dark:text-white whitespace-nowrap">
                  {partner.name}
                </span>

                {/* External link icon */}
                <ExternalLink className="w-4 h-4 text-slate-400 dark:text-dark-500 group-hover/card:text-primary-500 transition-colors flex-shrink-0" />

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
