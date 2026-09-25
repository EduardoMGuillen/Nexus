import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BlogCover from "./BlogCover";
import type { BlogPost } from "@/lib/blog";

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("es-HN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function PostCard({ post, delay = 0 }: { post: BlogPost; delay?: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      data-reveal
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className="group card flex flex-col overflow-hidden transition hover:border-primary-400/30"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <div className="h-full w-full transition duration-700 group-hover:scale-[1.04]">
          <BlogCover label={post.coverLabel} category={post.category} accent={post.accent} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs text-slate-500">
          {formatDate(post.date)} · {post.readMinutes} min de lectura
        </p>
        <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-white group-hover:text-primary-200">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-400">{post.description}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-300">
          Leer artículo <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
