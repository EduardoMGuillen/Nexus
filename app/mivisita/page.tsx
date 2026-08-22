import type { Metadata } from "next";
import MiVisitaContent from "./MiVisitaContent";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "MiVisita Honduras — Control de visitas residencial con QR",
  description:
    "App de acceso residencial para urbanizaciones y apartamentos en Honduras: anuncia visitas con QR y valida ingresos en el portón.",
  keywords: [
    "control de visitas Honduras",
    "acceso residencial Tegucigalpa",
    "seguridad residencial Honduras",
    "MiVisita",
  ],
  alternates: { canonical: `${SITE_URL}/mivisita` },
  openGraph: {
    title: "MiVisita | Acceso residencial en Honduras",
    description:
      "Gestiona visitas con QR en conjuntos y apartamentos hondureños.",
    url: `${SITE_URL}/mivisita`,
    locale: "es_HN",
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
