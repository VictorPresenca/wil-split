import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
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

      {/* Renderiza o drawer direto na raiz do body com Portal */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[100] md:hidden ${
              open ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            {/* Backdrop escuro */}
            <div
              onClick={() => setOpen(false)}
              className={`absolute inset-0 bg-navy/60 backdrop-blur-sm transition-opacity duration-300 ${
                open ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Painel lateral opaco ocupando 100vh */}
            <aside
              className={`absolute right-0 top-0 flex h-screen w-4/5 max-w-xs flex-col justify-between bg-background p-6 shadow-2xl transition-transform duration-300 ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="flex items-center gap-2 text-lg font-extrabold text-navy">
                    <Snowflake className="size-5 text-primary" /> Wil Split
                  </span>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Fechar menu"
                    className="grid size-9 place-items-center rounded-lg border border-border bg-card text-navy"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
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
                </nav>
              </div>

              <div onClick={() => setOpen(false)} className="w-full">
                <CtaButton className="w-full">
                  Falar no WhatsApp
                </CtaButton>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </header>
  );
}