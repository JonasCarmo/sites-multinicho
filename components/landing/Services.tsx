import type { NicheConfig } from "@/lib/niches";
import { ServiceIcon } from "./icons";

export function Services({ niche }: { niche: NicheConfig }) {
  return (
    <section id="servicos" className="scroll-mt-28 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold" style={{ color: "var(--brand)" }}>
            Destaques
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {niche.servicesTitle}
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-600">{niche.servicesSubtitle}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {niche.services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-5 transition hover:-translate-y-0.5 hover:border-zinc-200 hover:shadow-md"
            >
              <span
                className="grid h-11 w-11 place-items-center rounded-xl text-white"
                style={{ backgroundColor: "var(--brand)" }}
              >
                <ServiceIcon name={service.icon} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-zinc-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
