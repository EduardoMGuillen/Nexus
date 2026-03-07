import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, CheckCircle, QrCode, ShieldCheck, UserCheck, Users } from "lucide-react";
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
    url: "https://nexusglobal.com/mivisita",
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

const roleFeatures = [
  {
    title: "Residente",
    icon: Users,
    points: [
      "Invitaciones QR con vigencia configurable: un uso, 1 dia, 3 dias o indefinido.",
      "Descripcion y marcador de vehiculo en cada visita, con QR facil de compartir.",
      "Reserva y cancelacion de zonas comunes, sugerencias y soporte por WhatsApp.",
    ],
  },
  {
    title: "Guardia",
    icon: UserCheck,
    points: [
      "Escaneo y validacion de QR con evidencia de identificacion.",
      "Evidencia de placa obligatoria cuando la visita llega en vehiculo.",
      "Confirmacion manual de llegada y anuncio de delivery con push inmediato.",
    ],
  },
  {
    title: "Administracion",
    icon: Building2,
    points: [
      "Gestion completa de usuarios y zonas (bloqueos, limites y reservas).",
      "Comunicados push segmentados y modulo de QR administrativo.",
      "Registros con filtros, exportacion PDF y reporte mensual con evidencias.",
    ],
  },
];

export default function MiVisitaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Header />

      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
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
                href="http://mivisita.vercel.app/"
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
                  src="/mivista.png"
                  alt="Logo de MiVisita"
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

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">Funciones clave</span>{" "}
              <span className="gradient-text">de MiVisita</span>
            </h2>
            <p className="text-dark-300 max-w-3xl mx-auto">
              Lo mas destacable, resumido por rol, para operar acceso residencial con control, rapidez y trazabilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {roleFeatures.map((role) => (
              <div
                key={role.title}
                className="bg-dark-800/60 border border-dark-700 rounded-2xl p-6"
              >
                <div className="inline-flex p-3 rounded-lg bg-primary-500/20 mb-4">
                  <role.icon className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{role.title}</h3>
                <div className="space-y-3">
                  {role.points.map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary-500 mt-1 shrink-0" />
                      <p className="text-dark-300 text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-dark-800/40 border border-dark-700 rounded-2xl p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Seguridad, evidencia y retencion
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                <p className="text-dark-300">
                  Evidencias de ingreso en base de datos: identificacion y placa.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                <p className="text-dark-300">
                  Purga automatica de bytes sensibles a los 60 dias, manteniendo el evento operativo.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                <p className="text-dark-300">
                  Control de acceso por residencial en escaneo y consultas.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                <p className="text-dark-300">
                  Si una residencial esta suspendida, solo super admin puede operar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
