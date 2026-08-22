"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useMessages } from "@/components/LocaleProvider";

export default function PrivacidadContent() {
  const p = useMessages().privacy;

  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Header />
      <article className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <Link href="/" className="text-sm text-primary-400 hover:text-primary-300">
            ← {p.back}
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-6 mb-3">{p.title}</h1>
          <p className="text-dark-400 text-sm mb-10">{p.updated}</p>
          {p.sections.map((s) => (
            <section key={s.h} className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">{s.h}</h2>
              {s.p.map((para) => (
                <p key={para.slice(0, 48)} className="text-dark-300 leading-relaxed mb-3">
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
      <Footer />
    </main>
  );
}
