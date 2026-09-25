import { BookOpen, Check, Clock, Plus } from "lucide-react";
import { SectionHeader } from "../ui";
import { WhatsAppIcon } from "../icons";
import { PLANS, PLAN_EXTRAS } from "@/lib/plans";
import { waLink } from "@/lib/site";

export default function Plans({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section id="planes" className="section scroll-mt-24">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-primary-500/[0.07] blur-[120px]" />
      <div className="container-x relative">
        {showHeader && (
          <SectionHeader
            eyebrow="Planes y precios"
            title={
              <>
                Una web profesional <span className="text-glow">al alcance de tu negocio</span>
              </>
            }
            text="Precios claros, pago único y sin letras pequeñas. Todos los planes incluyen tu libro de marca."
          />
        )}

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <article
              key={plan.id}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
              className={`relative flex flex-col rounded-3xl p-7 sm:p-8 ${
                plan.featured
                  ? "shine-border bg-gradient-to-b from-primary-500/[0.16] via-[#0b1626] to-[#0b1322] shadow-[0_30px_100px_-30px_rgba(0,186,196,0.55)] lg:-my-4 lg:py-12"
                  : "card"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#03161a] shadow-[0_8px_30px_-6px_rgba(0,186,196,0.9)]">
                  Recomendado
                </span>
              )}
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-300">{plan.name}</p>
              <div className="mt-5 flex flex-wrap items-end gap-x-2 gap-y-1">
                <span
                  className={`whitespace-nowrap font-display font-bold tracking-tight text-white ${
                    plan.price.startsWith("$") ? "text-5xl" : "text-4xl sm:text-[2.6rem]"
                  }`}
                >
                  {plan.price}
                </span>
                <span className="pb-1.5 text-sm text-slate-400">{plan.priceNote}</span>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{plan.tagline}</p>
              <p className="mt-2 text-xs text-slate-500">Ideal para: {plan.idealFor}</p>

              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-primary-400/25 bg-primary-500/[0.08] p-4">
                <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-primary-300" />
                <p className="text-sm leading-snug text-primary-100">{plan.brandBook}</p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-500/15">
                      <Check className="h-3 w-3 text-primary-300" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-6 flex items-center gap-2 text-xs text-slate-400">
                <Clock className="h-3.5 w-3.5" /> {plan.delivery}
              </p>
              <a
                href={waLink(plan.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 w-full ${plan.featured ? "btn-primary" : "btn-ghost"}`}
              >
                <WhatsAppIcon className="h-4 w-4" />
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <div data-reveal className="mx-auto mt-12 flex max-w-4xl flex-col gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
          {PLAN_EXTRAS.map((e) => (
            <p key={e} className="flex items-center gap-2 text-sm text-slate-400">
              <Plus className="h-4 w-4 text-primary-400" /> {e}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
