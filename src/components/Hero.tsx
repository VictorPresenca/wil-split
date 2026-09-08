import { BadgeCheck, Users, MapPin, ShieldCheck, Star } from "lucide-react";
import { CtaButton } from "./CtaButton";
import imgHero from "../assets/manutencao-ar-condicionado-teto.webp";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <BadgeCheck className="size-4" /> 20+ anos de experiência
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy md:text-5xl lg:text-6xl">
            Climatização profissional com{" "}
            <span className="text-primary">quem entende</span> de ar-condicionado
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-navy/70 md:text-lg">
            Seu ar-condicionado parou no calor ou está gastando energia demais?
            A Wil Split resolve: instalação, manutenção preventiva e corretiva
            com atendimento técnico especializado em São Paulo e região.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaButton className="px-8 py-4 text-base">
              Solicitar Orçamento Grátis
            </CtaButton>
            <a
              href="#servicos"
              className="text-sm font-bold text-navy underline decoration-primary decoration-2 underline-offset-4 hover:text-primary"
            >
              Conhecer serviços
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {[
              { icon: Users, text: "1.000+ clientes atendidos" },
              { icon: MapPin, text: "Atendimento em SP e região" },
              { icon: ShieldCheck, text: "Serviço com garantia" },
            ].map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="flex items-center gap-2 text-sm font-semibold text-navy/75"
              >
                <Icon className="size-4.5 text-primary" /> {text}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={imgHero}
              alt="Técnico da Wil Split instalando ar-condicionado split"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-card px-5 py-4 shadow-soft md:-left-8">
            <span className="grid size-11 place-items-center rounded-full bg-cta text-cta-foreground">
              <Star className="size-5" strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-xl font-extrabold text-navy">1.000+</p>
              <p className="text-xs font-semibold text-navy/60">
                serviços com sucesso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}