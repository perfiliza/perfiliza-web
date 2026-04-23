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
      "4 posts por mês no seu Google, escritos, formatados e publicados por nós com foto.",
      "Resposta a 100% das avaliações em até 24h, revisadas por humano antes de irem ao ar.",
      "Fotos tratadas e subidas na categoria certa (capa, equipe, interior, produto).",
      "Horários especiais atualizados antes de cada feriado.",
      "Perguntas e Respostas do perfil monitoradas e respondidas.",
      "Serviços e atributos do perfil preenchidos e mantidos.",
      "Relatório mensal em PDF com o que mudou e o que vem pela frente.",
      "Suporte direto no WhatsApp, sem formulário, sem fila.",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "R$ 297",
    period: "/mês",
    tagline: "Starter + aparecer quando alguém pergunta à IA.",
    features: [
      "Tudo do Starter.",
      "Auditoria mensal em ChatGPT, Gemini, Perplexity e Claude — testamos 20 perguntas reais e mostramos onde você aparece.",
      "Cadastro e manutenção em Foursquare, Apple Business e Bing, as fontes que alimentam as IAs.",
      "Ajustes técnicos no seu site (marcação estruturada e instrução para IA) pra elas te reconhecerem.",
      "Relatório mensal GEO mostrando ganho de visibilidade em cada IA.",
    ],
    highlighted: true,
  },
] as const;

export default function Pricing({ waMessage, landing }: Props) {
  return (
    <section id="planos" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Dois planos. Primeiro mês por nossa conta nos dois.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-muted">
          Você começa sem pagar. No dia 30, decide se continua.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PLANS.map((plan) => {
            const cardCls = plan.highlighted
              ? "border-primary shadow-[0_0_0_1px_var(--color-primary)]"
              : "border-line";
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl border bg-surface p-6 md:p-8 ${cardCls}`}
              >
                <span className="absolute -top-3 left-6 rounded-full bg-success px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Primeiro mês por nossa conta
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
                    variant={plan.highlighted ? "primary" : "secondary"}
                    size="md"
                    className="w-full"
                  >
                    Quero começar pelo diagnóstico gratuito
                  </WhatsAppButton>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          PIX mensal · sem contrato · cancelamento em 1 mensagem por WhatsApp ·
          preço legacy pra quem entra no beta (o seu preço nunca sobe).
        </p>
      </div>
    </section>
  );
}
