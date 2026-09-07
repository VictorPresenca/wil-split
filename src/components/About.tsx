import { BadgeCheck } from "lucide-react";
// import willianImg from "@/assets/willian.jpg";
import { CtaButton } from "./CtaButton";

export function About() {
  return (
    <section id="quem-somos" className="bg-secondary/60 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[2fr_3fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src=""
              alt="Willian Rodrigo, técnico principal da Wil Split"
              loading="lazy"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-2xl bg-navy px-6 py-3 text-center shadow-lift">
            <p className="text-sm font-extrabold text-navy-foreground">
              Willian Rodrigo
            </p>
            <p className="text-xs font-semibold text-navy-foreground/70">
              Técnico Principal
            </p>
          </div>
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Quem somos
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Atendimento técnico personalizado, de quem vive climatização há 20 anos
          </h2>
          <p className="mt-5 leading-relaxed text-navy/70">
            A Wil Split nasceu da experiência de Willian Rodrigo, técnico com
            mais de duas décadas de mercado. Aqui, quem atende, executa e
            garante o serviço é sempre um especialista — sem intermediários, sem
            improviso.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Diagnóstico honesto e transparente",
              "Orçamento sem compromisso",
              "Pontualidade e respeito ao seu espaço",
              "Peças e materiais de qualidade",
              "Garantia em todos os serviços",
              "Atendimento direto com o técnico",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-navy">
                <BadgeCheck className="mt-0.5 size-4.5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <CtaButton className="mt-8">Falar com o Willian</CtaButton>
        </div>
      </div>
    </section>
  );
}