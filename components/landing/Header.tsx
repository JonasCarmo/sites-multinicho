"use client";

import { useState } from "react";
import { NICHE_LIST, type NicheConfig, type NicheId, whatsappUrl } from "@/lib/niches";
import { WhatsAppIcon } from "./icons";

const NAV = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

type HeaderProps = {
  niche: NicheConfig;
  activeId: NicheId;
  onNicheChange: (id: NicheId) => void;
};

export function Header({ niche, activeId, onNicheChange }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5">
          <span
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-bold text-white shadow-sm"
            style={{ backgroundColor: "var(--brand)" }}
          >
            {niche.brandName.slice(0, 1)}
          </span>
          <span className="truncate text-base font-semibold tracking-tight text-zinc-900">
            {niche.brandName}
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-zinc-900">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl(niche)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 sm:inline-flex"
            style={{ backgroundColor: "var(--brand)" }}
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-zinc-200 text-zinc-800 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className="border-t border-zinc-100 bg-white/90 px-4 py-2 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <p className="hidden text-xs font-semibold tracking-wide text-zinc-500 uppercase sm:block">
            Nicho
          </p>
          <NicheSwitcher
            activeId={activeId}
            onNicheChange={(id) => {
              onNicheChange(id);
              setOpen(false);
            }}
          />
        </div>
      </div>

      {open ? (
        <div className="border-t border-zinc-100 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-zinc-700">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={whatsappUrl(niche)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white sm:hidden"
            style={{ backgroundColor: "var(--brand)" }}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>
      ) : null}
    </header>
  );
}

function NicheSwitcher({
  activeId,
  onNicheChange,
}: {
  activeId: NicheId;
  onNicheChange: (id: NicheId) => void;
}) {
  return (
    <div
      className="flex w-full flex-wrap gap-1 rounded-full border border-zinc-200 bg-zinc-50 p-1 sm:w-auto"
      role="group"
      aria-label="Selecionar nicho"
    >
      {NICHE_LIST.map((item) => {
        const active = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onNicheChange(item.id)}
            className={`flex-1 rounded-full px-2 py-1.5 text-[11px] font-semibold transition sm:flex-none sm:px-2.5 sm:text-[13px] ${
              active ? "text-white shadow-sm" : "text-zinc-600 hover:bg-white hover:text-zinc-900"
            }`}
            style={active ? { backgroundColor: "var(--brand)" } : undefined}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
