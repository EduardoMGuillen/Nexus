import Image from "next/image";
import { CLIENTS } from "@/lib/clients";

export default function LogoMarquee() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section aria-label="Marcas que confían en Nexus" className="relative border-y border-white/[0.06] bg-white/[0.015] py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
        Marcas que ya trabajan con Nexus
      </p>
      <div className="mask-fade-x mt-7 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-6">
          {row.map((c, i) => (
            <a
              key={`${c.name}-${i}`}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={c.name}
              tabIndex={i >= CLIENTS.length ? -1 : undefined}
              className={`relative flex h-16 w-36 shrink-0 items-center justify-center rounded-2xl border border-white/10 px-4 opacity-80 transition duration-300 hover:scale-105 hover:opacity-100 ${
                c.logoBg?.includes("bg-white")
                  ? "bg-white"
                  : c.logoBg?.includes("bg-neutral-900")
                    ? "bg-neutral-900"
                    : "bg-slate-200/[0.08]"
              }`}
            >
              <span className="relative h-10 w-full">
                <Image src={c.logo} alt={c.name} fill sizes="144px" className="object-contain" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
