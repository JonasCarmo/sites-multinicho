import { type NicheConfig, whatsappUrl } from "@/lib/niches";
import { WhatsAppIcon } from "./icons";

export function Footer({ niche }: { niche: NicheConfig }) {
  return (
    <footer id="contato" className="scroll-mt-28 text-white" style={{ backgroundColor: "var(--brand-dark)" }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold">{niche.brandName}</p>
          <p className="mt-3 text-sm leading-6 text-white/75">{niche.footerBlurb}</p>
          <a
            href={whatsappUrl(niche)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold"
            style={{ color: "var(--brand-dark)" }}
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li>
              <a href="#servicos" className="hover:text-white">
                Serviços
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-white">
                Sobre
              </a>
            </li>
            <li>
              <a href="#depoimentos" className="hover:text-white">
                Depoimentos
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
            Horários de funcionamento
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {niche.hours.map((row) => (
              <li key={row.days} className="flex flex-col">
                <span className="text-white/70">{row.days}</span>
                <span className="font-medium">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70">Localização</p>
          <p className="mt-4 text-sm leading-6">
            {niche.location.address}
            <br />
            {niche.location.city}
          </p>
          <a
            href={niche.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >
            Ver no mapa
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © 2026 {niche.brandName}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
