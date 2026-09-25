import Image from "next/image";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div data-reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="h-display mt-5 text-balance text-3xl leading-tight sm:text-5xl">{title}</h2>
      {text && (
        <p className={`mt-5 text-balance text-base leading-relaxed text-slate-400 sm:text-lg ${centered ? "mx-auto max-w-2xl" : ""}`}>
          {text}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  text: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid mask-fade-y opacity-50" />
        <div className="absolute left-1/2 top-0 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-primary-500/[0.12] blur-[120px]" />
      </div>
      <div className="container-x relative text-center">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="h-display mx-auto mt-7 max-w-4xl text-balance text-4xl leading-[1.08] sm:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg">{text}</p>
        {children && <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">{children}</div>}
      </div>
    </section>
  );
}

export function BrowserFrame({
  src,
  alt,
  url,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  url: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0b1322] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        <span className="ml-3 truncate rounded-md bg-white/[0.05] px-3 py-1 text-[11px] text-slate-400">{host}</span>
      </div>
      <div className="relative aspect-[2/1] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}
