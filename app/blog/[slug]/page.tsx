import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import BlogCover from "@/components/blog/BlogCover";
import PostCard, { formatDate } from "@/components/blog/PostCard";
import { WhatsAppIcon } from "@/components/icons";
import { BLOG_POSTS, getPost } from "@/lib/blog";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { SITE_NAME, SITE_URL, waLink } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Artículo" };
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      locale: "es_HN",
      publishedTime: post.date,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

export default function BlogArticlePage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}/blog/${post.slug}/opengraph-image`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, logo: `${SITE_URL}/logo-nexus.png` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    inLanguage: "es-HN",
    keywords: post.keywords.join(", "),
    ...(post.sources ? { citation: post.sources.map((s) => s.url) } : {}),
  };

  return (
    <main className="pb-10 pt-32 sm:pt-36">
      <JsonLd data={articleLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <article>
        <header className="container-x max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-primary-300">
            <ArrowLeft className="h-4 w-4" /> Volver al blog
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">
            {post.category} · {formatDate(post.date)} · {post.readMinutes} min de lectura
          </p>
          <h1 className="h-display mt-4 text-balance text-3xl leading-[1.1] sm:text-5xl">{post.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">{post.description}</p>
          <div className="mt-10 aspect-[21/9] overflow-hidden rounded-3xl border border-white/10">
            <BlogCover label={post.coverLabel} category={post.category} accent={post.accent} size="lg" />
          </div>
        </header>

        <div className="container-x mt-12 max-w-3xl">
          <div className="prose-nexus">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </section>
            ))}
          </div>

          {post.sources && (
            <aside className="mt-12 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Fuentes</p>
              <ul className="mt-4 space-y-2.5">
                {post.sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary-300 hover:text-primary-200"
                    >
                      {s.label} <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <div className="shine-border relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1a2e] to-[#050810] p-8 text-center sm:p-10">
            <div className="pointer-events-none absolute left-1/2 -top-16 h-64 w-[32rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(0,186,196,0.25),transparent)]" />
            <p className="relative font-display text-2xl font-bold text-white">¿Quieres aplicar esto en tu negocio?</p>
            <p className="relative mx-auto mt-3 max-w-md text-sm text-slate-400">
              Páginas web desde $150 con libro de marca, CRM y automatizaciones con IA. Te asesoramos sin compromiso.
            </p>
            <div className="relative mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={waLink(`Hola Nexus, leí el artículo "${post.title}" y quiero asesoría.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <WhatsAppIcon className="h-4 w-4" /> Escribir por WhatsApp
              </a>
              <Link href="/#planes" className="btn-ghost">
                Ver planes
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="section">
        <div className="container-x">
          <h2 className="h-display text-2xl sm:text-3xl">Sigue leyendo</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p, i) => (
              <PostCard key={p.slug} post={p} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
