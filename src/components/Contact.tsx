import { useState, type FormEvent } from "react";
import { Phone, Clock, MapPin, Mail, Send } from "lucide-react";
import { WA_LINK } from "./CtaButton";
import { FaInstagram, FaFacebook } from "react-icons/fa6";

export function Contact() {
  const [form, setForm] = useState({ nome: "", telefone: "", servico: "Instalação", mensagem: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Solicitação de orçamento — ${form.servico}`);
    const body = encodeURIComponent(
      `Olá! Vim pelo site e gostaria de mais informações sobre o serviço da Wil Split.\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nServiço: ${form.servico}\nMensagem: ${form.mensagem}`,
    );
    window.location.href = `mailto:contato@wilsplit.com.br?subject=${subject}&body=${body}`;
  };

  const inputCls =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-medium text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <section id="contato" className="pb-16 md:pb-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Contato
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Peça seu orçamento agora mesmo
          </h2>
          <p className="mt-4 leading-relaxed text-navy/70">
            Resposta rápida pelo WhatsApp ou envie sua solicitação pelo
            formulário — retornamos com o orçamento sem compromisso.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-cta text-cta-foreground">
                <Phone className="size-5.5" strokeWidth={2.25} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-extrabold text-navy">WhatsApp</p>
                <p className="truncate text-sm font-semibold text-navy/60">(11) 94729-0421</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-soft">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                <Clock className="size-5.5" strokeWidth={2.25} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-extrabold text-navy">Horário de atendimento</p>
                <p className="text-sm font-semibold text-navy/60">Seg a Sáb — 8h às 18h</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-soft">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                <MapPin className="size-5.5" strokeWidth={2.25} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-extrabold text-navy">Região de atendimento</p>
                <p className="text-sm font-semibold text-navy/60">São Paulo e Grande SP</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Wil Split"
              className="grid size-11 place-items-center rounded-xl bg-card text-navy shadow-soft transition-colors hover:bg-accent hover:text-primary"
            >
              <FaInstagram className="size-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Wil Split"
              className="grid size-11 place-items-center rounded-xl bg-card text-navy shadow-soft transition-colors hover:bg-accent hover:text-primary"
            >
              <FaFacebook className="size-5" />
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-card p-7 shadow-soft md:p-9"
        >
          <h3 className="flex items-center gap-2 text-lg font-extrabold text-navy">
            <Mail className="size-5 text-primary" /> Solicite um orçamento
          </h3>
          <p className="mt-1 text-sm text-navy/60">
            Preencha e enviaremos por e-mail para a nossa equipe.
          </p>
          <div className="mt-6 space-y-4">
            <input
              required
              placeholder="Seu nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className={inputCls}
            />
            <input
              required
              placeholder="Seu telefone / WhatsApp"
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              className={inputCls}
            />
            <select
              value={form.servico}
              onChange={(e) => setForm({ ...form, servico: e.target.value })}
              className={inputCls}
            >
              <option>Instalação</option>
              <option>Manutenção Preventiva</option>
              <option>Manutenção Corretiva</option>
              <option>Outro</option>
            </select>
            <textarea
              rows={4}
              placeholder="Descreva o que você precisa..."
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className={`${inputCls} resize-none`}
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cta px-6 py-4 text-sm font-extrabold text-cta-foreground transition-transform hover:-translate-y-0.5 hover:brightness-95 cta-glow"
            >
              <Send className="size-4.5" strokeWidth={2.5} />
              Enviar solicitação
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}