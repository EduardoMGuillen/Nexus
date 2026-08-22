"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  Globe,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { hondurasFaqs } from "@/lib/jsonld";

const cities = [
  "Tegucigalpa",
  "San Pedro Sula",
  "La Ceiba",
  "Choloma",
  "Comayagua",
  "Choluteca",
  "El Progreso",
  "Danlí",
];

const benefits = [
  "Sitios rápidos, móviles y listos para Google.",
  "Copy y estructura pensados para búsquedas locales en Honduras.",
  "Precios claros en USD: Basic 300, Premium 500.",
  "Hosting, SSL y mantenimiento para que no se caiga tu web.",
  "Atención en español y entregas con revisiones incluidas.",
];

export default function HondurasLandingContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Header />

      <article className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/paginas-web"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ver planes y precios
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <p className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              Agencia de desarrollo web en Honduras
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Crear página web en Honduras
            </h1>
            <p className="text-lg sm:text-xl text-dark-300 leading-relaxed">
              Nexus Global diseña y publica sitios para negocios hondureños: clínicas, floristerías,
              inmobiliarias, restaurantes y marcas que quieren aparecer en Google cuando alguien busca
              sus servicios en Tegucigalpa, San Pedro Sula o en todo el país.
            </p>
          </motion.header>

          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Diseño web profesional sin complicaciones
            </h2>
            <p className="text-dark-300 leading-relaxed mb-4">
              Si buscas <strong className="text-white">crear una página web en Honduras</strong>,
              no hace falta una agencia en el extranjero. Trabajamos con tu marca, textos y fotos,
              y te entregamos un sitio listo para publicar: móvil, rápido y con bases de SEO local
              (títulos, descripciones, datos de contacto y llamadas a la acción claras).
            </p>
            <p className="text-dark-300 leading-relaxed">
              También ayudamos a quien necesita <strong className="text-white">hacer una página web</strong>{" "}
              por primera vez: te explicamos dominio, hosting, correos y cómo te encuentran en Maps y
              búsquedas como “diseño web Honduras” o el nombre de tu ciudad.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Qué incluye</h2>
            <ul className="space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex gap-3 text-dark-200">
                  <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ciudades donde atendemos
            </h2>
            <p className="text-dark-300 mb-6">
              Desarrollo web remoto y reuniones según el proyecto. Cubrimos las principales ciudades
              de Honduras:
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {cities.map((city) => (
                <li
                  key={city}
                  className="rounded-xl border border-dark-600 bg-dark-800/50 px-3 py-2 text-center text-sm text-white"
                >
                  {city}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14 rounded-2xl border border-primary-500/30 bg-primary-500/5 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Globe className="w-6 h-6 text-primary-400" />
              Precios para empezar
            </h2>
            <p className="text-dark-300 mb-6">
              Presencia que vende <strong className="text-white">300 USD</strong> (hasta 3 páginas) y
              Marca online completa <strong className="text-white">500 USD</strong> (hasta 10 páginas).
              Plan de mantenimiento y hosting por suscripción. Pago con PayPal.
            </p>
            <Link
              href="/paginas-web#ofertas"
              className="inline-flex px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold transition"
            >
              Ver paquetes y comprar
            </Link>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Preguntas frecuentes</h2>
            <dl className="space-y-8">
              {hondurasFaqs.map((faq) => (
                <div key={faq.q}>
                  <dt className="text-lg font-semibold text-white mb-2">{faq.q}</dt>
                  <dd className="text-dark-300 leading-relaxed">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="text-center rounded-2xl border border-dark-600 p-8">
            <MessageCircle className="w-10 h-10 text-primary-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Cuéntanos tu negocio</h2>
            <p className="text-dark-300 mb-6 max-w-xl mx-auto">
              Escríbenos y te proponemos el plan correcto para crear tu página web en Honduras.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex px-6 py-3 rounded-xl bg-white text-dark-900 font-semibold hover:bg-slate-100 transition"
            >
              Ir al formulario de contacto
            </Link>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
