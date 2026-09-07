import { Award, Users, Wrench, Star } from "lucide-react";

export function Metrics() {
  const stats = [
    { icon: Award, value: "20+", label: "anos de experiência" },
    { icon: Users, value: "1.000+", label: "clientes atendidos" },
    { icon: Wrench, value: "1.000+", label: "serviços realizados" },
    { icon: Star, value: "5.0", label: "satisfação dos clientes" },
  ];

  return (
    <section id="resultados" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-3xl bg-navy px-8 py-12 shadow-lift md:px-14">
          <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-cta text-cta-foreground">
                  <Icon className="size-6" strokeWidth={2.25} />
                </span>
                <p className="mt-4 text-4xl font-extrabold tracking-tight text-navy-foreground md:text-5xl">
                  {value}
                </p>
                <p className="mt-1 text-sm font-semibold text-navy-foreground/70">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}