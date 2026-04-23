import type { HeroData, PainPoint, WaMessages } from "@/types/content";

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
  ctaText: "Começar grátis",
};

export const homePainPoints: PainPoint[] = [
  {
    icon: "chart-down",
    text: "Meu perfil no Google está parado há meses.",
  },
  {
    icon: "trophy",
    text: "Meu concorrente aparece antes de mim.",
  },
  {
    icon: "robot",
    text: "Não sei se a IA me menciona quando alguém pergunta pelo meu serviço.",
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
