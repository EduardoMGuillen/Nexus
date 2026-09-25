import { Check } from "lucide-react";
import BrandBook from "./BrandBook";
import { WhatsAppIcon } from "../icons";
import { waLink } from "@/lib/site";

const INCLUDES = [
  "Logotipo y sus versiones (color, blanco, ícono)",
  "Paleta de colores con códigos para web e impresión",
  "Tipografías y jerarquía de textos",
  "Aplicaciones: tarjetas, redes y empaques",
  "Tono de voz para redes y WhatsApp",
  "Archivos listos para usar: PDF, PNG y SVG",
];

export default function BrandBookSection() {
  return (
    <section id="libro-de-marca" className="section scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute -right-40 top-10 h-[32rem] w-[32rem] rounded-full bg-[#D9A441]/[0.07] blur-[120px]" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal>
          <span className="eyebrow">Incluido en cada web</span>
          <h2 className="h-display mt-5 text-balance text-3xl leading-tight sm:text-5xl">
            Tu web llega con su <span className="text-glow">libro de marca</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            Una marca que se ve igual en tu web, en Instagram, en tu local y en tus facturas se recuerda y
            genera confianza. Por eso cada proyecto de Nexus incluye un libro de marca: el manual que define
            cómo se ve y cómo habla tu negocio.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-500/15">
                  <Check className="h-3 w-3 text-primary-300" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={waLink("Hola Nexus, quiero una web con libro de marca para mi negocio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Quiero mi web con libro de marca
          </a>
        </div>
        <div data-reveal style={{ ["--reveal-delay" as string]: "150ms" }}>
          <BrandBook />
        </div>
      </div>
    </section>
  );
}
