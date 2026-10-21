"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { NICHES, type NicheId } from "@/lib/niches";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { About, Testimonials } from "./About";
import { Footer } from "./Footer";
import { WhatsAppIcon } from "./icons";
import { whatsappUrl } from "@/lib/niches";

const DEFAULT_NICHE: NicheId = "farmacia";

export function LandingPage() {
  const [nicheId, setNicheId] = useState<NicheId>(DEFAULT_NICHE);
  const niche = useMemo(() => NICHES[nicheId], [nicheId]);

  return (
    <div
      className="min-h-full bg-white text-zinc-900"
      style={
        {
          "--brand": niche.colors.brand,
          "--brand-dark": niche.colors.brandDark,
          "--brand-soft": niche.colors.brandSoft,
          "--accent": niche.colors.accent,
        } as CSSProperties
      }
    >
      <Header niche={niche} activeId={nicheId} onNicheChange={setNicheId} />
      <main>
        <Hero niche={niche} />
        <Services niche={niche} />
        <About niche={niche} />
        <Testimonials niche={niche} />
      </main>
      <Footer niche={niche} />

      <a
        href={whatsappUrl(niche)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg shadow-black/20 transition hover:scale-105 sm:right-6 sm:bottom-6"
        style={{ backgroundColor: "#16a34a" }}
        aria-label="Abrir conversa no WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
