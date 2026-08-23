import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { BLOG_POSTS, getPost } from "@/lib/blog";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { SITE_NAME, SITE_URL } from "@/lib/site";

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
      images: [{ url: post.image, width: 1376, height: 768, alt: post.imageAlt }],
    },
  };
}

export default function BlogArticlePage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, logo: `${SITE_URL}/logo-nexus.png` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    inLanguage: "es-HN",
    keywords: post.keywords.join(", "),
  };

  return (
    <main className="page-shell">
      <JsonLd data={articleLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <Header />
      <article className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <Link href="/blog" className="text-sm text-primary-400 hover:text-primary-300">
            ← Blog
          </Link>
          <p className="mt-6 text-xs uppercase tracking-wide text-primary-400">
            {post.category} · {post.date} · {post.readMinutes} min de lectura
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold ink mt-3 mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg ink-muted mb-8">{post.description}</p>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-dark-600 mb-12">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          {post.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-2xl font-bold ink mb-4">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="ink-muted leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </section>
          ))}
          <div className="rounded-2xl border border-primary-500/30 bg-primary-500/10 p-6 sm:p-8 text-center mb-14">
            <p className="ink font-semibold mb-2">¿Listo para tu sitio?</p>
            <p className="ink-muted text-sm mb-5">
              Planes desde 300 USD o un alcance a tu presupuesto. Honduras, atención nacional.
            </p>
            <Link
              href="/paginas-web#ofertas"
              className="inline-flex px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-500"
            >
              Ver planes
            </Link>
          </div>
          <h2 className="text-xl font-bold ink mb-4">Más artículos</h2>
          <ul className="space-y-3">
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="text-primary-400 hover:text-primary-300">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
      <Footer />
    </main>
  );
}
