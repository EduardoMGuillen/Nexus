"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Runtime" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "GraphQL", category: "API" },
  { name: "Prisma", category: "ORM" },
  { name: "Redis", category: "Cache" },
];

export default function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
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
            <span className="text-slate-900 dark:text-white">Tecnologías</span>{" "}
            <span className="gradient-text">Modernas</span>
          </h2>
          <p className="text-slate-600 dark:text-dark-300 text-lg max-w-2xl mx-auto">
            Utilizamos las mejores herramientas para crear soluciones de clase mundial
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative"
            >
              <div className="p-6 bg-slate-100 dark:bg-dark-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-dark-700 hover:border-primary-500/50 transition-all duration-300 text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:gradient-text transition-all">
                  {tech.name}
                </div>
                <div className="text-xs text-slate-600 dark:text-dark-400">{tech.category}</div>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-xl bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 dark:text-dark-400 text-sm">
            Y muchas más tecnologías según las necesidades de tu proyecto
          </p>
        </motion.div>
      </div>
    </section>
  );
}


