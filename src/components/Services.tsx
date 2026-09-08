import { Wrench, ShieldCheck, Settings, Send } from "lucide-react";
import instalacaoImg from "../assets/compressora-fujitsu-instalada-acima-da-porta.webp";
import preventivaImg from "../assets/evaporadora-instalada-com-tubulacao-bem-instalada.webp";
import corretivaImg from "../assets/tubulacao-de-ar-condicionado-com-protecao-na-parede.webp";
import { WA_LINK } from "./CtaButton";

const SERVICES = [
  {
    img: instalacaoImg,
    icon: Wrench,
    title: "Instalação",
    desc: "Instalação completa de splits com acabamento impecável, dimensionamento correto e garantia total do serviço.",
  },
  {
    img: preventivaImg,
    icon: ShieldCheck,
    title: "Manutenção Preventiva",
    desc: "Limpeza e revisão periódica que evitam panes, reduzem a conta de energia e prolongam a vida útil do aparelho.",
  },
  {
    img: corretivaImg,
    icon: Settings,
    title: "Manutenção Corretiva",
    desc: "Diagnóstico preciso e reparo rápido para o seu ar-condicionado voltar a gelar como novo, sem dor de cabeça.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-16 scroll-mt-15 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Nossos serviços
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Tudo para o seu ar-condicionado em um só lugar
          </h2>
          <p className="mt-4 text-navy/70">
            Do primeiro parafuso ao reparo mais complexo, você conta com um
            especialista de verdade — do antes ao depois.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map(({ img, icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={img}
                  alt={`Serviço de ${title.toLowerCase()} de ar-condicionado`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5.5" />
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">{desc}</p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                >
                  Pedir orçamento <Send className="size-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}