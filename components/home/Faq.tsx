import { Plus } from "lucide-react";
import { SectionHeader } from "../ui";
import JsonLd from "../JsonLd";
import { faqJsonLd, homeFaqs } from "@/lib/jsonld";

export default function Faq({ faqs = homeFaqs }: { faqs?: { q: string; a: string }[] }) {
  return (
    <section id="preguntas" className="section">
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          align="left"
          eyebrow="Preguntas frecuentes"
          title={
            <>
              Lo que todos nos <span className="text-glow">preguntan</span>
            </>
          }
          text="¿Tienes otra duda? Escríbenos por WhatsApp y te respondemos el mismo día."
        />
        <div data-reveal className="divide-y divide-white/[0.07] rounded-3xl border border-white/[0.08] bg-white/[0.02]">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-display text-base font-semibold text-white">
                {f.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-primary-300 transition group-open:rotate-45 group-open:bg-primary-500 group-open:text-[#03161a]">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-4 pr-10 text-sm leading-relaxed text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
