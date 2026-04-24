export type NicheKey = "home" | "odonto" | "estetica" | "restaurantes";

export type CtaPosition =
  | "hero"
  | "precos"
  | "cta_final"
  | "sticky_mobile"
  | "header"
  | "footer";

export interface HeroData {
  title: string;
  subtitle: string;
  ctaText: string;
  imageSrc?: string;
  imageAlt?: string;
}

export type PainPointIcon =
  | "chart-down"
  | "trophy"
  | "robot"
  | "calendar"
  | "star"
  | "smartphone"
  | "camera"
  | "chat"
  | "map"
  | "magnifier"
  | "tag";

export interface PainPoint {
  icon: PainPointIcon;
  text: string;
}

export interface HowItWorksStep {
  num: 1 | 2 | 3;
  title: string;
  body: string;
}

export interface GbpFeature {
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  pricePeriod: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface NicheCard {
  key: Exclude<NicheKey, "home">;
  title: string;
  href: string;
  blurb: string;
}

export interface FooterContent {
  companyNote: string;
  email: string;
  legal: { privacy: string; terms: string };
  nicheDisclaimer?: string;
}

export interface WaMessages {
  hero: string;
  precos: string;
  cta_final: string;
  sticky_mobile: string;
}

import type { FeatureKey } from "@/components/GbpFeatures";

export interface NicheContent {
  key: Exclude<NicheKey, "home">;
  metadata: {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
  };
  hero: HeroData;
  painPoints: PainPoint[];
  gbpIntro: string;
  gbpFeatureDescriptions: Partial<Record<FeatureKey, string>>;
  whereText: {
    google: string;
    ai: string;
  };
  faqExtra: FaqItem[];
  nicheDisclaimer: string;
  waMessages: WaMessages;
  videoUrl?: string | null;
}
