import { useState } from "react";
import { Snowflake, Menu, X } from "lucide-react";
import { CtaButton } from "./CtaButton";

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Snowflake className="size-5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-navy">
            Wil Split
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-navy/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <CtaButton className="px-5 py-2.5">Falar no WhatsApp</CtaButton>
        </nav>

        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          className="grid size-10 place-items-center rounded-xl border border-border bg-card text-navy md:hidden"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-navy/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-72 flex-col gap-2 bg-card p-6 shadow-lift transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="flex items-center gap-2 text-lg font-extrabold text-navy">
              <Snowflake className="size-5 text-primary" /> Wil Split
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="grid size-9 place-items-center rounded-lg border border-border text-navy"
            >
              <X className="size-5" />
            </button>
          </div>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-bold text-navy transition-colors hover:bg-accent"
            >
              {l.label}
            </a>
          ))}
          <CtaButton className="mt-4 w-full">Falar no WhatsApp</CtaButton>
        </aside>
      </div>
    </header>
  );
}