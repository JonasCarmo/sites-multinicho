import type { NicheConfig } from "@/lib/niches";

export function About({ niche }: { niche: NicheConfig }) {
  return (
    <section id="sobre" className="scroll-mt-28 py-16 sm:py-20" style={{ backgroundColor: "var(--brand-soft)" }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold" style={{ color: "var(--brand)" }}>
            Sobre a empresa
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {niche.about.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-700">{niche.about.body}</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {niche.about.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <p className="text-2xl font-semibold sm:text-3xl" style={{ color: "var(--brand-dark)" }}>
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-4 text-zinc-600 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials({ niche }: { niche: NicheConfig }) {
  return (
    <section id="depoimentos" className="scroll-mt-28 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          {niche.testimonialsTitle}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {niche.testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="flex flex-col rounded-2xl border border-zinc-100 bg-zinc-50 p-6"
            >
              <p className="flex-1 text-sm leading-6 text-zinc-700">“{item.quote}”</p>
              <footer className="mt-5">
                <p className="text-sm font-semibold text-zinc-900">{item.name}</p>
                <p className="text-xs text-zinc-500">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
