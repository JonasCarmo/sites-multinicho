import { type NicheConfig, whatsappUrl } from "@/lib/niches";
import { WhatsAppIcon } from "./icons";

export function Hero({ niche }: { niche: NicheConfig }) {
  return (
    <section id="inicio" className="relative scroll-mt-28 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(1200px 500px at 80% -10%, var(--brand-soft), transparent 60%),
            linear-gradient(180deg, #ffffff 0%, var(--brand-soft) 100%)`,
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <p
            className="inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase"
            style={{ backgroundColor: "var(--brand-soft)", color: "var(--brand-dark)" }}
          >
            {niche.hero.badge}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
            {niche.hero.title}{" "}
            <span style={{ color: "var(--brand)" }}>{niche.hero.highlight}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
            {niche.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl(niche)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:opacity-90"
              style={{ backgroundColor: "var(--brand)" }}
            >
              <WhatsAppIcon />
              {niche.hero.cta}
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400"
            >
              {niche.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-6 rounded-[2.5rem] opacity-40 blur-2xl"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-xl shadow-black/5 backdrop-blur">
            <p className="text-sm font-medium text-zinc-500">{niche.label}</p>
            <p className="mt-2 text-2xl font-semibold text-zinc-900">{niche.brandName}</p>
            <ul className="mt-6 space-y-4">
              {niche.about.stats.map((stat) => (
                <li
                  key={stat.label}
                  className="flex items-center justify-between rounded-2xl px-4 py-3"
                  style={{ backgroundColor: "var(--brand-soft)" }}
                >
                  <span className="text-sm text-zinc-600">{stat.label}</span>
                  <span className="text-lg font-semibold" style={{ color: "var(--brand-dark)" }}>
                    {stat.value}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-zinc-600">{niche.footerBlurb}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
