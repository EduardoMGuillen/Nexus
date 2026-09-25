import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full border border-white/10 bg-[#0b1322]/90 px-4 py-2 text-sm font-medium text-white opacity-0 shadow-xl backdrop-blur transition group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        ¿Cotizamos tu web?
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-6px_rgba(37,211,102,0.7)] transition group-hover:scale-105">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.6s]" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
    </a>
  );
}
