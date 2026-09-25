import { Mail } from "lucide-react";
import ContactForm from "./ContactForm";
import { InstagramIcon, WhatsAppIcon } from "../icons";
import {
  INSTAGRAM_HANDLE,
  SITE_EMAIL,
  SITE_INSTAGRAM,
  WHATSAPP_DISPLAY,
  waLink,
} from "@/lib/site";

export default function ContactSection({
  title,
  text,
}: {
  title?: React.ReactNode;
  text?: string;
}) {
  return (
    <section id="contacto" className="section scroll-mt-24">
      <div className="container-x">
        <div
          data-reveal
          className="shine-border relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0a1a2e] via-[#07101f] to-[#050810] p-6 sm:p-10 lg:p-14"
        >
          <div className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] bg-[radial-gradient(closest-side,rgba(0,186,196,0.22),transparent)]" />
          <div className="pointer-events-none absolute -bottom-52 -right-20 h-[36rem] w-[36rem] bg-[radial-gradient(closest-side,rgba(16,40,101,0.6),transparent)]" />
          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <span className="eyebrow">Hablemos</span>
              <h2 className="h-display mt-5 text-balance text-3xl leading-tight sm:text-5xl">
                {title ?? (
                  <>
                    ¿Listo para tener una web <span className="text-glow">espectacular</span>?
                  </>
                )}
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">
                {text ??
                  "Cuéntanos de tu negocio y te respondemos con una recomendación y precio exacto. Sin compromiso y sin tecnicismos."}
              </p>
              <div className="mt-10 space-y-3">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#25D366]/50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">WhatsApp</span>
                    <span className="font-semibold text-white">{WHATSAPP_DISPLAY}</span>
                  </span>
                </a>
                <a
                  href={SITE_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-pink-400/50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-500/15 text-pink-300">
                    <InstagramIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">Instagram</span>
                    <span className="font-semibold text-white">{INSTAGRAM_HANDLE}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-primary-400/50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500/15 text-primary-300">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-500">Correo</span>
                    <span className="block truncate font-semibold text-white">{SITE_EMAIL}</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#050912]/80 p-6 sm:p-8 md:backdrop-blur">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
