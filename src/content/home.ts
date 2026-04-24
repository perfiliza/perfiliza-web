import type { HeroData, PainPoint, WaMessages } from "@/types/content";

export const homeMeta = {
  title: "Perfiliza — seu Google Meu Negócio cuidado toda semana",
  description:
    "Cuidamos do seu Google Meu Negócio toda semana e ajudamos a IA a te recomendar. Primeiro mês por nossa conta, sem fidelidade.",
  path: "/",
  keywords: [
    "google meu negócio",
    "gestão google meu negócio",
    "GMB",
    "perfil do google",
    "SEO local",
    "google maps",
    "GEO",
    "AI search",
    "recomendação no ChatGPT",
    "gestão de perfil google",
  ],
};

export const homeHero: HeroData = {
  title: "Onde seu cliente procura, você precisa aparecer.",
  subtitle:
    "Cuidamos do seu Google Meu Negócio toda semana e ajudamos a IA a te recomendar. Primeiro mês por nossa conta.",
  ctaText: "Quero meu diagnóstico gratuito",
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
    text: "Meu concorrente aparece no ChatGPT. Eu não.",
  },
];

export const homeWaMessages: WaMessages = {
  hero: "Oi! Vim pelo site da Perfiliza. Quero o diagnóstico gratuito do meu Google.",
  precos:
    "Oi! Vi os planos Starter e Growth no site. Quero o diagnóstico gratuito do meu Google pra decidir.",
  cta_final:
    "Oi! Vim do CTA final do site da Perfiliza. Quero começar meu diagnóstico gratuito.",
  sticky_mobile:
    "Oi! Vim pelo site da Perfiliza. Quero o diagnóstico gratuito do meu Google.",
};
