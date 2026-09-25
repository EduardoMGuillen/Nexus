import { SectionHeader } from "../ui";

const STEPS = [
  {
    n: "01",
    title: "Hablamos por WhatsApp",
    text: "Nos cuentas de tu negocio, tus clientes y qué quieres lograr. Te recomendamos el plan ideal sin compromiso.",
  },
  {
    n: "02",
    title: "Creamos tu libro de marca",
    text: "Definimos logo, colores, tipografías y tono. Es la base para que todo se vea profesional y coherente.",
  },
  {
    n: "03",
    title: "Diseñamos y desarrollamos",
    text: "Construimos tu web rápida, adaptada a celular y conectada a WhatsApp. Revisas y ajustamos contigo.",
  },
  {
    n: "04",
    title: "Publicamos y crecemos",
    text: "Tu web sale en línea con SEO básico y Google configurado. Si quieres, seguimos con marketing y mantenimiento.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Cómo trabajamos"
          title={
            <>
              De la idea a tu web <span className="text-glow">en días, no meses</span>
            </>
          }
        />
        <ol className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent lg:block" />
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
              className="relative"
            >
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-400/30 bg-[#08111f] font-display text-lg font-bold text-primary-300 shadow-[0_0_30px_-6px_rgba(0,186,196,0.6)]">
                {s.n}
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
