import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Nexus Global, inicio" className={`group flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-9 w-9 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-primary-500/30 blur-md transition group-hover:bg-primary-400/50" />
        <Image src="/nexus-icon.png" alt="" width={36} height={36} priority className="relative h-9 w-9" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[17px] font-bold tracking-[0.2em] text-white">NEXUS</span>
        <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.42em] text-primary-300/80">Global</span>
      </span>
    </Link>
  );
}
