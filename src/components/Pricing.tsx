import WhatsAppButton from "./WhatsAppButton";
import type { NicheKey } from "@/types/content";

interface Props {
  waMessage: string;
  landing: NicheKey;
}

const PLANS = [
  {
    name: "Starter",
    price: "R$ 197",
    period: "/mês",
    tagline: "Gestão completa do seu Google.",
    features: [
      "4 posts/mês escritos, formatados e publicados com foto.",
      "100% das avaliações respondidas, revisadas por humano.",
      "Fotos na categoria certa (capa, equipe, interior, produto).",
      "Horários especiais atualizados antes de cada feriado.",
      "Perguntas e respostas monitoradas e respondidas.",
      "Serviços e atributos preenchidos e mantidos.",
      "Relatório mensal em PDF.",
      "Suporte direto no WhatsApp — sem formulário, sem fila.",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "R$ 297",
    period: "/mês",
    tagline: "Starter + aparecer quando perguntam à IA.",
    features: [
      "Tudo do Starter.",
      "Auditoria mensal em ChatGPT, Gemini, Perplexity e Claude — 20 perguntas reais.",
      "Cadastro em Foursquare, Apple Business e Bing — as fontes da IA.",
      "Ajustes técnicos no seu site pra IA conseguir te achar.",
      "Relatório mensal de menções em IA.",
    ],
    highlighted: true,
  },
] as const;

export default function Pricing({ waMessage, landing }: Props) {
  return (
    <section id="planos" className="bg-surface scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <h2 className="text-center text-3xl font-bold tracking-normal text-ink md:tracking-tight md:text-4xl">
          Dois planos. Primeiro mês por nossa conta nos dois.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-muted md:text-lg">
          Você começa sem pagar. No dia 30, decide se continua.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PLANS.map((plan) => {
            const cardCls = plan.highlighted
              ? "border-2 border-primary"
              : "border border-line";
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl bg-surface p-5 md:p-8 ${cardCls}`}
              >
                <span
                  className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white ${
                    plan.highlighted ? "bg-primary" : "bg-success"
                  }`}
                >
                  {plan.highlighted
                    ? "Recomendado · 1º mês grátis"
                    : "1º mês por nossa conta"}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-ink">
                  {plan.name}
                </h3>
                <p className="mt-1 text-muted">{plan.tagline}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-ink">
                    {plan.price}
                  </span>
                  <span className="text-muted">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-5 w-5 shrink-0 mt-0.5 text-success"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                      <span className="text-ink">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <WhatsAppButton
                    waMessage={waMessage}
                    landing={landing}
                    posicao="precos"
                    variant="primary"
                    size="md"
                    className="w-full"
                  >
                    Quero meu diagnóstico
                  </WhatsAppButton>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          PIX mensal · sem contrato · cancelamento em 1 mensagem por WhatsApp ·
          seu preço nunca sobe enquanto você for cliente.
        </p>
      </div>
    </section>
  );
}
