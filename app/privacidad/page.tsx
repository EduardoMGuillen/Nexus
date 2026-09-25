import type { Metadata } from "next";
import { SITE_EMAIL, SITE_URL, WHATSAPP_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo Nexus Global trata los datos que compartes por WhatsApp, correo y este sitio web.",
  alternates: { canonical: `${SITE_URL}/privacidad` },
};

const SECTIONS = [
  {
    h: "Quiénes somos",
    p: [
      `Nexus Global (nexusglobalsuministros.com) es un estudio de desarrollo web y soluciones empresariales en Honduras. Contacto: ${SITE_EMAIL} o WhatsApp ${WHATSAPP_DISPLAY}.`,
    ],
  },
  {
    h: "Qué datos recogemos",
    p: [
      "El formulario de este sitio no guarda información: arma un mensaje y abre WhatsApp en tu dispositivo. Los datos que nos envíes por WhatsApp, Instagram o correo (nombre, negocio, teléfono y mensaje) los usamos solo para responderte y dar seguimiento a tu proyecto.",
      "Si en el pasado realizaste un pago con PayPal, los datos de pago viven en los servidores de PayPal. Nexus no almacena números de tarjeta.",
    ],
  },
  {
    h: "Cookies y analítica",
    p: [
      "Usamos Google Analytics (G-7TYVWC1F92) para entender las visitas de forma agregada. Puedes bloquear las cookies desde tu navegador.",
    ],
  },
  {
    h: "Conservación y seguridad",
    p: [
      "El sitio se sirve por HTTPS. No vendemos ni compartimos listas de contactos. Conservamos las conversaciones el tiempo necesario para atenderte o por obligación legal.",
    ],
  },
  {
    h: "Tus derechos",
    p: [`Puedes pedir acceso, corrección o borrado de tus datos escribiendo a ${SITE_EMAIL}.`],
  },
];

export default function PrivacidadPage() {
  return (
    <main className="pb-24 pt-36">
      <article className="container-x max-w-3xl">
        <h1 className="h-display text-4xl sm:text-5xl">Política de privacidad</h1>
        <p className="mt-3 text-sm text-slate-500">Última actualización: 24 de septiembre de 2026</p>
        <div className="prose-nexus mt-6">
          {SECTIONS.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
