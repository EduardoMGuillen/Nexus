import type { BlogAccent } from "@/lib/blog";

const ACCENTS: Record<BlogAccent, { glow: string; ring: string; text: string }> = {
  teal: { glow: "0,186,196", ring: "border-primary-400/30", text: "from-white via-primary-100 to-primary-300" },
  violet: { glow: "139,92,246", ring: "border-violet-400/30", text: "from-white via-violet-100 to-violet-300" },
  amber: { glow: "245,158,11", ring: "border-amber-400/30", text: "from-white via-amber-100 to-amber-300" },
  emerald: { glow: "16,185,129", ring: "border-emerald-400/30", text: "from-white via-emerald-100 to-emerald-300" },
  rose: { glow: "244,63,94", ring: "border-rose-400/30", text: "from-white via-rose-100 to-rose-300" },
  blue: { glow: "14,165,233", ring: "border-sky-400/30", text: "from-white via-sky-100 to-sky-300" },
};

export default function BlogCover({
  label,
  category,
  accent,
  size = "md",
}: {
  label: string;
  category: string;
  accent: BlogAccent;
  size?: "md" | "lg";
}) {
  const a = ACCENTS[accent];
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#060a14]">
      <div
        className="absolute -right-1/3 -top-1/2 h-[170%] w-[110%]"
        style={{ background: `radial-gradient(closest-side, rgba(${a.glow},0.45), rgba(${a.glow},0.12) 55%, transparent)` }}
      />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className={`absolute -bottom-1/3 -left-10 aspect-square w-2/3 rounded-full border ${a.ring}`} />
      <div className={`absolute -bottom-1/4 left-8 aspect-square w-1/2 rounded-full border ${a.ring} opacity-60`} />
      <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
        <span className="w-fit rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
          {category}
        </span>
        <p
          className={`bg-gradient-to-br ${a.text} bg-clip-text font-display font-bold leading-[0.95] tracking-tight text-transparent ${
            size === "lg" ? "text-4xl sm:text-6xl" : "text-3xl sm:text-4xl"
          }`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
