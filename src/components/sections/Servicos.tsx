import Card from "@/components/ui/Card";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";
import type { Service } from "@/lib/gtm";

interface Servico {
  key: Exclude<Service, "geral">;
  titulo: string;
  preco: string;
  beneficio: string;
  bullets: string[];
  ctaLabel: string;
  message: string;
}

const servicos: Servico[] = [
  {
    key: "criacao",
    titulo: "Criação de Perfil",
    preco: "R$ 497",
    beneficio: "[A DEFINIR — frase de benefício para Criação]",
    bullets: ["[A DEFINIR]", "[A DEFINIR]", "[A DEFINIR]"],
    ctaLabel: "Quero esse",
    message: "[A DEFINIR — mensagem Criação]",
  },
  {
    key: "otimizacao",
    titulo: "Otimização de Perfil",
    preco: "R$ [A DEFINIR]",
    beneficio: "[A DEFINIR — frase de benefício para Otimização]",
    bullets: ["[A DEFINIR]", "[A DEFINIR]", "[A DEFINIR]"],
    ctaLabel: "Quero esse",
    message: "[A DEFINIR — mensagem Otimização]",
  },
  {
    key: "recuperacao",
    titulo: "Recuperação de Perfil Suspenso",
    preco: "R$ 1.497",
    beneficio: "[A DEFINIR — frase de benefício para Recuperação]",
    bullets: ["[A DEFINIR]", "[A DEFINIR]", "[A DEFINIR]"],
    ctaLabel: "Quero esse",
    message: "[A DEFINIR — mensagem Recuperação]",
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="px-4 sm:px-6 py-16 sm:py-24 bg-surface-alt"
    >
      <div className="mx-auto max-w-6xl flex flex-col gap-10">
        <header className="flex flex-col gap-3 max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">
            [A DEFINIR — título da seção Serviços]
          </h2>
          <p className="text-base sm:text-lg text-muted">
            [A DEFINIR — subtítulo dos serviços]
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {servicos.map((s) => (
            <Card key={s.key} className="flex flex-col gap-4">
              <h3 className="font-display text-xl text-ink">{s.titulo}</h3>
              <p className="text-2xl font-semibold text-primary">{s.preco}</p>
              <p className="text-base text-muted">{s.beneficio}</p>
              <ul className="flex flex-col gap-2 text-sm text-ink">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden="true" className="text-action">
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <WhatsAppCTA
                  section="servicos"
                  service={s.key}
                  message={s.message}
                  size="md"
                  className="w-full"
                >
                  {s.ctaLabel}
                </WhatsAppCTA>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
