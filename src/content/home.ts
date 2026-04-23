import type {
  HeroData,
  PainPoint,
  ProofStat,
  WaMessages,
} from "@/types/content";

export const homeMeta = {
  title: "Perfiliza — seu Google Meu Negócio cuidado toda semana",
  description:
    "Cuidamos do seu Google Meu Negócio toda semana e fazemos a IA te recomendar. Primeiro mês por nossa conta.",
  path: "/",
};

export const homeHero: HeroData = {
  title: "Onde seu cliente procura, você precisa aparecer.",
  subtitle:
    "Cuidamos do seu Google Meu Negócio toda semana e fazemos a IA te recomendar. Primeiro mês por nossa conta.",
  ctaText: "Quero meu diagnóstico gratuito",
};

export const homePainPoints: PainPoint[] = [
  {
    icon: "📉",
    text: "Meu perfil no Google está parado há meses.",
  },
  {
    icon: "🥈",
    text: "Meu concorrente aparece antes de mim.",
  },
  {
    icon: "🤖",
    text: "Não sei se a IA me menciona quando alguém pergunta pelo meu serviço.",
  },
];

export const homeProofStats: ProofStat[] = [
  {
    value: "+50–120%",
    label: "Cliques para rota no perfil em 60 dias de operação contínua.",
  },
  {
    value: "+15–40",
    label:
      "Avaliações novas por trimestre combinando placa no balcão e pedido no atendimento.",
  },
  {
    value: "10–20% → 50–70%",
    label:
      "Aparições em ChatGPT, Gemini e Perplexity em 90 dias (apenas Growth).",
  },
];

export const homeWaMessages: WaMessages = {
  hero: "Oi! Vim pelo site da Perfiliza. Quero o diagnóstico gratuito do meu Google.",
  precos:
    "Oi! Vim pelo site da Perfiliza, seção de planos. Posso receber o diagnóstico gratuito?",
  cta_final:
    "Oi! Vim pelo site da Perfiliza, seção de planos. Posso receber o diagnóstico gratuito?",
  sticky_mobile:
    "Oi! Vim pelo site da Perfiliza. Quero o diagnóstico gratuito do meu Google.",
};
