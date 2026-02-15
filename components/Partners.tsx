"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const partners = [
  {
    name: "Astro",
    logo: "/partners/astrologo.png",
    url: "https://www.lagrancasablanca.com",
  },
  {
    name: "Casablanca",
    logo: "/partners/casablancadorado.png",
    url: "https://www.lagrancasablanca.com",
  },
  {
    name: "Studio 54",
    logo: "/partners/studio54logo.png",
    url: "https://www.lagrancasablanca.com",
  },
  {
    name: "Stellare",
    logo: "/partners/stellarelogo.png",
    url: "https://www.stellare.co",
  },
  {
    name: "InmoModerna",
    logo: "/partners/inmomodernalogo.png",
    url: "https://www.inmobiliariamodernahn.com",
  },
  {
    name: "TeamLink",
    logo: "/partners/teamlinklogo.png",
    url: "https://www.teamlink.lat",
  },
  {
    name: "BizzTrack",
    logo: "/partners/Bizztracklogo.png",
    url: "https://www.bizztrack.pro",
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
        <div className="flex items-center animate-marquee group-hover:[animation-play-state:paused]">
          {marqueePartners.map((partner, index) => (
            <a
              key={`${partner.name}-${index}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-6 sm:mx-10"
            >
              <div className="relative flex items-center justify-center px-8 py-6 bg-white dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 group/card w-44 sm:w-52">
                {/* Logo */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 96px, 112px"
                  />
                </div>

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
