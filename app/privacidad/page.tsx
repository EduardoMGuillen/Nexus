import type { Metadata } from "next";
import PrivacidadContent from "./PrivacidadContent";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo Nexus Global trata datos del formulario de contacto y de pagos con PayPal. Sitio servido por HTTPS.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/privacidad` },
};

export default function PrivacidadPage() {
  return <PrivacidadContent />;
}
