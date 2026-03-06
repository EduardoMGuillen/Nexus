import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, QrCode, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MiVisita - Acceso residencial inteligente",
  description:
    "MiVisita es la app de acceso residencial inteligente para urbanizaciones y apartamentos: anuncia visitas con QR y valida ingresos en tiempo real.",
  keywords: [
    "MiVisita",
    "acceso residencial",
    "control de visitas",
    "QR de acceso",
    "seguridad residencial",
    "urbanización",
    "apartamentos",
  ],
  openGraph: {
    title: "MiVisita - Acceso residencial inteligente",
    description:
      "Gestiona visitas con QR, valida ingresos y mantente informado en tiempo real cuando tu visita llegue al portón.",
    url: "https://nexusglobal.com/miporton",
    images: [
      {
        url: "/mivista.png",
        width: 512,
        height: 512,
        alt: "Logo MiVisita",
      },
    ],
  },
};

const highlights = [
  "El residente anuncia su visita en segundos.",
  "Cada visitante recibe un QR seguro y configurable.",
  "Seguridad escanea y valida el ingreso en el portón.",
  "Notificaciones en tiempo real para mejor control.",
];

export default function MiVisitaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/#proyectos"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a proyectos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-white">MiVisita:</span>{" "}
                <span className="gradient-text">tu acceso residencial digital</span>
              </h1>
              <p className="text-lg text-dark-300 mb-6">
                MiVisita es una web app pensada para conjuntos residenciales, edificios y
                urbanizaciones. Permite que un residente anuncie a su visitante y que
                seguridad valide su ingreso escaneando un QR de forma rapida y segura.
              </p>

              <div className="space-y-3 mb-8">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                    <p className="text-dark-200">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="http://MiVisita.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 transition-all shadow-lg shadow-primary-600/30"
              >
                Ir a MiVisita
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>

            <div className="bg-dark-800/60 border border-dark-700 rounded-2xl p-6 sm:p-8">
              <div className="flex justify-center mb-8">
                <Image
                  src="/MiVisita.png"
                  alt="Logo de MiVista"
                  width={280}
                  height={280}
                  priority
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <QrCode className="w-5 h-5 text-primary-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">QR seguro</p>
                    <p className="text-dark-300">
                      Codigos con validez por uso o por tiempo para mayor control de acceso.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Proceso confiable</p>
                    <p className="text-dark-300">
                      Seguridad valida cada ingreso desde el porton sin friccion para
                      residentes y visitantes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
