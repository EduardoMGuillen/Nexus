import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui";
import BlogCover from "@/components/blog/BlogCover";
import PostCard, { formatDate } from "@/components/blog/PostCard";
import JsonLd from "@/components/JsonLd";
import { BLOG_POSTS } from "@/lib/blog";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog: IA, páginas web y negocios en Honduras",
  description:
    "Noticias de inteligencia artificial (Claude Opus 5.5, GPT-5.6, Gemini 3.8) explicadas para negocios, y guías de páginas web, branding y marketing en Honduras.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog de Nexus Global: IA, web y negocios",
    description: "Noticias de IA y guías prácticas para vender más en línea desde Honduras.",
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog de Nexus Global",
          url: `${SITE_URL}/blog`,
          inLanguage: "es-HN",
          blogPost: BLOG_POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${SITE_URL}/blog/${p.slug}`,
            datePublished: p.date,
          })),
        }}
      />
      <PageHero
        eyebrow="Blog"
        title={
          <>
            IA, web y negocios, <span className="text-glow">sin tecnicismos</span>
          </>
        }
        text="Lo último en inteligencia artificial explicado para dueños de negocio, y guías prácticas para vender más en línea desde Honduras."
      />

      <section className="pb-24">
        <div className="container-x">
          <Link
            href={`/blog/${featured.slug}`}
            data-reveal
            className="group card grid overflow-hidden transition hover:border-primary-400/30 lg:grid-cols-2"
          >
            <div className="aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[380px]">
              <div className="h-full w-full transition duration-700 group-hover:scale-[1.03]">
                <BlogCover label={featured.coverLabel} category={featured.category} accent={featured.accent} size="lg" />
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="w-fit rounded-full bg-primary-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#03161a]">
                Lo más nuevo
              </span>
              <p className="mt-5 text-xs text-slate-500">
                {formatDate(featured.date)} · {featured.readMinutes} min de lectura
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">{featured.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">{featured.description}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-300">
                Leer artículo <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <PostCard key={p.slug} post={p} delay={(i % 3) * 100} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
