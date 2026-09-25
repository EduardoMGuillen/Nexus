import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "../ui";
import PostCard from "../blog/PostCard";
import { BLOG_POSTS } from "@/lib/blog";

export default function BlogTeaser() {
  return (
    <section id="blog" className="section">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            align="left"
            eyebrow="Blog"
            title={
              <>
                IA, web y negocios: <span className="text-glow">lo que está pasando</span>
              </>
            }
            text="Noticias de inteligencia artificial explicadas para dueños de negocio y guías prácticas para vender más en línea."
          />
          <Link href="/blog" data-reveal className="btn-ghost shrink-0">
            Ver todos los artículos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.slice(0, 3).map((p, i) => (
            <PostCard key={p.slug} post={p} delay={i * 110} />
          ))}
        </div>
      </div>
    </section>
  );
}
