import type { BlogAccent } from "@/lib/blog";

const ACCENTS: Record<BlogAccent, { glow: string; ring: string; text: string }> = {
  teal: { glow: "from-primary-500/50 via-primary-700/20", ring: "border-primary-400/30", text: "from-white via-primary-100 to-primary-300" },
  violet: { glow: "from-violet-500/50 via-fuchsia-700/20", ring: "border-violet-400/30", text: "from-white via-violet-100 to-violet-300" },
  amber: { glow: "from-amber-500/45 via-orange-700/20", ring: "border-amber-400/30", text: "from-white via-amber-100 to-amber-300" },
  emerald: { glow: "from-emerald-500/45 via-emerald-700/20", ring: "border-emerald-400/30", text: "from-white via-emerald-100 to-emerald-300" },
  rose: { glow: "from-rose-500/45 via-pink-700/20", ring: "border-rose-400/30", text: "from-white via-rose-100 to-rose-300" },
  blue: { glow: "from-sky-500/45 via-blue-700/20", ring: "border-sky-400/30", text: "from-white via-sky-100 to-sky-300" },
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
      <div className={`absolute -right-1/4 -top-1/3 h-[140%] w-[90%] rounded-full bg-gradient-to-bl ${a.glow} to-transparent blur-3xl`} />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className={`absolute -bottom-1/3 -left-10 aspect-square w-2/3 rounded-full border ${a.ring}`} />
      <div className={`absolute -bottom-1/4 left-8 aspect-square w-1/2 rounded-full border ${a.ring} opacity-60`} />
      <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
        <span className="w-fit rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
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
