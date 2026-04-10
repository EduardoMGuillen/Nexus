import type { Metadata } from "next";
import MiVisitaContent from "./MiVisitaContent";

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

export default function MiVisitaPage() {
  return <MiVisitaContent />;
}
