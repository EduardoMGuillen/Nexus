import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Blog — Páginas web, IA y SEO en Honduras",
  description:
    "Guías de Nexus Global: cuánto cuesta una página web en Honduras, sitios para inmobiliarias y clínicas, inteligencia artificial para pymes y cómo rankear en Google e IA.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog Nexus Global | Web, IA y SEO Honduras",
    description:
      "Artículos detallados para negocios hondureños que quieren aparecer en Google y en buscadores con inteligencia artificial.",
    url: `${SITE_URL}/blog`,
    locale: "es_HN",
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <Header />
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <p className="text-primary-400 text-sm font-medium mb-3">Nexus Global · Honduras</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-dark-300 text-lg max-w-2xl mb-12">
            Guías para crear página web en Honduras, noticias de inteligencia artificial para
            negocios y SEO/GEO para que Google y la IA sepan quién eres.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-dark-600 bg-dark-800/50 overflow-hidden hover:border-primary-500/40 transition-colors"
              >
                <div className="relative h-52">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wide text-primary-400 mb-2">
                    {post.category} · {post.readMinutes} min
                  </p>
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-dark-300 leading-relaxed">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
