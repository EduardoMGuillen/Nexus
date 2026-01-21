"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Code, Zap, Palette, Smartphone, Database } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Páginas Web",
    description: "Diseñamos y desarrollamos sitios web modernos, rápidos y optimizados para convertir visitantes en clientes.",
    features: ["Diseño Responsive", "SEO Optimizado", "Alta Velocidad", "Seguro y Confiable"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code,
    title: "Plataformas Web Personalizadas",
    description: "Creamos sistemas web a medida que se adaptan perfectamente a las necesidades específicas de tu negocio.",
    features: ["Desarrollo a Medida", "Escalable", "Integraciones", "Soporte Continuo"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Soluciones Digitales",
    description: "Transformamos procesos complejos en soluciones digitales intuitivas y eficientes.",
    features: ["Automatización", "Optimización", "Analítica", "Innovación"],
    color: "from-yellow-500 to-orange-500",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            <span className="text-slate-900 dark:text-white">Nuestros</span>{" "}
            <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-slate-600 dark:text-dark-300 text-lg max-w-2xl mx-auto">
            Soluciones digitales completas para llevar tu negocio al siguiente nivel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 relative z-10`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-dark-300 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-slate-600 dark:text-dark-400 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


