"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, CreditCard, Package, TrendingUp, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function EcommerceContent() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Tiendas en Línea Completas",
      description: "Desarrollamos tiendas online profesionales con Shopify, WooCommerce y plataformas personalizadas. Desde la configuración inicial hasta el lanzamiento.",
    },
    {
      icon: CreditCard,
      title: "Integración de Pagos",
      description: "Conectamos múltiples métodos de pago: Stripe, PayPal, tarjetas de crédito y métodos locales. Proceso de checkout optimizado para maximizar conversiones.",
    },
    {
      icon: Package,
      title: "Gestión de Inventario",
      description: "Sistemas automatizados para control de stock, alertas de inventario bajo, sincronización multi-canal y gestión de variantes de productos.",
    },
    {
      icon: TrendingUp,
      title: "Optimización de Conversiones",
      description: "A/B testing, optimización de velocidad, diseño responsive y UX mejorada para aumentar tus ventas y reducir el abandono del carrito.",
    },
  ];

  const services = [
    "Configuración de tienda Shopify/WooCommerce",
    "Diseño personalizado y branding",
    "Integración de pasarelas de pago",
    "Sistemas de gestión de inventario",
    "Optimización SEO para productos",
    "Configuración de envíos y logística",
    "Panel de administración completo",
    "Integración con redes sociales",
    "Apps y extensiones personalizadas",
    "Soporte y mantenimiento continuo",
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
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6">
              <ShoppingCart className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">E-commerce</span>{" "}
              <span className="gradient-text">Moderno</span>
            </h1>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Soluciones completas de comercio electrónico con Shopify y plataformas personalizadas. 
              Todo lo que necesitas para vender en línea de manera exitosa.
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
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
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
              Un servicio completo de principio a fin
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
              <span className="text-white">¿Listo para vender</span>{" "}
              <span className="gradient-text">en línea?</span>
            </h2>
            <p className="text-dark-300 mb-8 text-lg">
              Contáctanos y comencemos a construir tu tienda online hoy mismo
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
