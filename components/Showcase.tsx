"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code } from "lucide-react";
import Link from "next/link";
import { useMessages } from "./LocaleProvider";

const projectStyle = [
  { gradient: "from-blue-500 to-purple-600", link: "/ecommerce", image: "/project-1.jpg" },
  { gradient: "from-green-500 to-teal-600", link: "/dashboard", image: "/project-2.jpg" },
  { gradient: "from-orange-500 to-red-600", link: "/paginas-web", image: "/project-3.jpg" },
  { gradient: "from-cyan-500 to-blue-600", link: "/mivisita", image: "/mivista.png" },
] as const;

export default function Showcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const m = useMessages();

  return (
    <section
      id="proyectos"
      ref={ref}
      className="py-24 bg-gradient-to-b from-white to-slate-100 dark:from-dark-800 dark:to-dark-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-slate-900 dark:text-white">{m.showcase.titleOur}</span>{" "}
            <span className="gradient-text">{m.showcase.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-dark-300 text-lg max-w-2xl mx-auto">
            {m.showcase.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {m.showcase.projects.map((project, index) => {
            const style = projectStyle[index];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-dark-700 hover:border-primary-500/50 transition-all duration-300">
                  <div
                    className={`h-64 bg-gradient-to-br ${style.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-32 h-32 border-4 border-white/20 rounded-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Code className="w-16 h-16 text-white/30" />
                      </div>
                    </div>

                    <Link href={style.link}>
                      <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 cursor-pointer">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold flex items-center space-x-2"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>{m.showcase.ctaDetails}</span>
                        </motion.div>
                      </div>
                    </Link>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-dark-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-dark-700 text-dark-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold text-lg shadow-lg shadow-primary-500/50"
          >
            {m.showcase.ctaQuestion}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
