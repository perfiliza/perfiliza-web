export const SITE_URL = "https://perfiliza.com";
export const BRAND_NAME = "Perfiliza";
export const BRAND_TAGLINE =
  "Seu Google Meu Negócio cuidado toda semana";
export const BRAND_DESCRIPTION =
  "Cuidamos do seu Google Meu Negócio toda semana e ajudamos a IA a te recomendar. Primeiro mês por nossa conta, sem fidelidade.";
export const BRAND_EMAIL = "contato@perfiliza.com";
export const SITE_LOCALE = "pt_BR";
export const SITE_LANGUAGE = "pt-BR";
export const BRAND_THEME_COLOR = "#1A73E8";

export const WHATSAPP_E164 =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

// TODO: preencher URLs oficiais quando os perfis forem criados.
export const SOCIAL_PROFILES: string[] = [
  // "https://www.instagram.com/perfiliza",
  // "https://www.facebook.com/perfiliza",
];

export const PRICING = {
  currency: "BRL",
  starter: { name: "Starter", price: 197 },
  growth: { name: "Growth", price: 297 },
} as const;

export const urlFor = (path: string): string => {
  if (!path || path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};
