"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Search, Server, Users, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PaginasWebPage() {
  const features = [
    {
      icon: Globe,
      title: "Diseño Web Profesional",
      description: "Páginas web modernas, responsive y optimizadas. Diseño personalizado que refleja la identidad de tu marca y convierte visitantes en clientes.",
    },
    {
      icon: Search,
      title: "Anuncios de Google",
      description: "Configuración y gestión de campañas de Google Ads. Optimización de palabras clave, seguimiento de conversiones y maximización de ROI.",
    },
    {
      icon: Server,
      title: "Hosting Optimizado",
      description: "Hosteo rápido y confiable con SSL incluido, backups automáticos y soporte técnico. Tu sitio siempre disponible y seguro.",
    },
    {
      icon: Users,
      title: "CRM Integrado",
      description: "Sistemas de gestión de clientes integrados. Seguimiento de leads, automatización de marketing y análisis de comportamiento.",
    },
  ];

  const services = [
    "Diseño web responsive y moderno",
    "Optimización SEO",
    "Configuración de Google Ads",
    "Hosting y dominio incluidos",
    "Certificado SSL gratuito",
    "Backups automáticos",
    "Integración de CRM",
    "Formularios de contacto",
    "Analytics y reportes",
    "Soporte y mantenimiento",
  ];

  const benefits = [
    {
      title: "Mayor Visibilidad",
      description: "Aparece en los primeros resultados de búsqueda y atrae más clientes potenciales.",
    },
    {
      title: "Conversión Optimizada",
      description: "Diseño enfocado en convertir visitantes en clientes reales.",
    },
    {
      title: "Gestión Simplificada",
      description: "Panel de control fácil de usar para gestionar tu presencia online.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/#proyectos"
              className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver a proyectos
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 mb-6">
              <Globe className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Páginas Web</span>{" "}
              <span className="gradient-text">para Negocios</span>
            </h1>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Soluciones completas de presencia online. Diseño profesional, anuncios de Google, 
              hosteo optimizado y CRM integrado. Todo lo que necesitas para hacer crecer tu negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-dark-700 hover:border-primary-500/50 transition-all"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-dark-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">Lo que</span>{" "}
              <span className="gradient-text">Incluimos</span>
            </h2>
            <p className="text-dark-300">
              Un paquete completo para tu presencia online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center space-x-3 p-4 bg-dark-800/50 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-dark-200">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">Beneficios</span>{" "}
              <span className="gradient-text">Clave</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-dark-800/50 rounded-xl border border-dark-700"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-dark-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-white">Haz crecer tu</span>{" "}
              <span className="gradient-text">Negocio Online</span>
            </h2>
            <p className="text-dark-300 mb-8 text-lg">
              Contáctanos y comencemos a construir tu presencia digital hoy mismo
            </p>
            <motion.a
              href="/#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold text-lg shadow-lg shadow-primary-500/50"
            >
              Solicitar Cotización
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
