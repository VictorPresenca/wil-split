import { useState } from "react";
import { Snowflake, Phone, MapPin, Clock, X } from "lucide-react";
import { NAV_LINKS } from "./Header";

export function Footer() {
  const [modal, setModal] = useState<"privacidade" | "termos" | null>(null);

  return (
    <footer className="bg-navy py-12 text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3">
        <div>
          <span className="flex items-center gap-2 text-lg font-extrabold">
            <Snowflake className="size-5 text-cta" /> Wil Split
          </span>
          <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">
            Instalação e manutenção de ar-condicionado com mais de 20 anos de
            experiência e 1.000+ serviços realizados em São Paulo e região.
          </p>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wider">Links rápidos</p>
          <nav className="mt-4 grid gap-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-navy-foreground/70 transition-colors hover:text-cta"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wider">Contato</p>
          <div className="mt-4 space-y-2 text-sm font-semibold text-navy-foreground/70">
            <p className="flex items-center gap-2">
              <Phone className="size-4 text-cta" /> (11) 94729-0421
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="size-4 text-cta" /> São Paulo e Grande SP
            </p>
            <p className="flex items-center gap-2">
              <Clock className="size-4 text-cta" /> Aberto 24h
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-navy-foreground/15 px-5 pt-6 text-xs font-semibold text-navy-foreground/60">
        <p>© {new Date().getFullYear()} Wil Split. Todos os direitos reservados.</p>
        <div className="flex gap-5">
          <button onClick={() => setModal("privacidade")} className="hover:text-cta">
            Política de Privacidade
          </button>
          <button onClick={() => setModal("termos")} className="hover:text-cta">
            Termos de Uso
          </button>
        </div>
      </div>

      {modal && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-navy/50 p-5 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-3xl bg-card p-7 text-navy shadow-lift"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-extrabold">
                {modal === "privacidade" ? "Política de Privacidade" : "Termos de Uso"}
              </h3>
              <button
                onClick={() => setModal(null)}
                aria-label="Fechar"
                className="grid size-8 shrink-0 place-items-center rounded-lg border border-border"
              >
                <X className="size-4" />
              </button>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy/70">
              {modal === "privacidade"
                ? "As informações enviadas por este site (nome, telefone e mensagem) são utilizadas exclusivamente para responder à sua solicitação de orçamento. Não compartilhamos seus dados com terceiros e você pode pedir a exclusão dos seus dados a qualquer momento pelo nosso WhatsApp."
                : "Os orçamentos solicitados pelo site são gratuitos e sem compromisso. Os serviços da Wil Split seguem os prazos e condições combinados diretamente com o cliente, sempre com garantia do trabalho executado."}
            </p>
            <button
              onClick={() => setModal(null)}
              className="mt-6 w-full rounded-full bg-cta px-5 py-3 text-sm font-extrabold text-cta-foreground hover:brightness-95"
            >
              Entendi
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}