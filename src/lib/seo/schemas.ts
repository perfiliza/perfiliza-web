import type { FaqItem } from "@/types/content";
import {
  BRAND_DESCRIPTION,
  BRAND_EMAIL,
  BRAND_NAME,
  PRICING,
  SITE_LANGUAGE,
  SITE_URL,
  SOCIAL_PROFILES,
  WHATSAPP_E164,
  urlFor,
} from "./constants";

type Json = Record<string, unknown>;

const ORG_ID = `${SITE_URL}#organization`;
const WEBSITE_ID = `${SITE_URL}#website`;

const contactPoints = (): Json[] => {
  const points: Json[] = [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: BRAND_EMAIL,
      areaServed: "BR",
      availableLanguage: ["Portuguese", "pt-BR"],
    },
  ];
  if (WHATSAPP_E164) {
    points.push({
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: `+${WHATSAPP_E164.replace(/^\+/, "")}`,
      areaServed: "BR",
      availableLanguage: ["Portuguese", "pt-BR"],
    });
  }
  return points;
};

export const organizationSchema = (): Json => {
  const base: Json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: BRAND_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/opengraph-image`,
    description: BRAND_DESCRIPTION,
    email: BRAND_EMAIL,
    areaServed: "BR",
    knowsLanguage: ["Portuguese", "pt-BR"],
    contactPoint: contactPoints(),
  };
  if (SOCIAL_PROFILES.length > 0) {
    base.sameAs = SOCIAL_PROFILES;
  }
  return base;
};

export const websiteSchema = (): Json => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: BRAND_NAME,
  description: BRAND_DESCRIPTION,
  inLanguage: SITE_LANGUAGE,
  publisher: { "@id": ORG_ID },
});

interface WebPageInput {
  title: string;
  description: string;
  path: string;
  breadcrumbId?: string;
}

export const webPageSchema = ({
  title,
  description,
  path,
  breadcrumbId,
}: WebPageInput): Json => {
  const page: Json = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${urlFor(path)}#webpage`,
    url: urlFor(path),
    name: title,
    description,
    inLanguage: SITE_LANGUAGE,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    primaryImageOfPage: `${SITE_URL}/opengraph-image`,
  };
  if (breadcrumbId) {
    page.breadcrumb = { "@id": breadcrumbId };
  }
  return page;
};

interface ServiceInput {
  name: string;
  description: string;
  path: string;
  audience?: string;
  serviceType?: string;
}

export const serviceSchema = ({
  name,
  description,
  path,
  audience,
  serviceType = "Gerenciamento de Perfil Google Meu Negócio",
}: ServiceInput): Json => {
  const service: Json = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${urlFor(path)}#service`,
    name,
    description,
    serviceType,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Brasil" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: urlFor(path),
      availableLanguage: ["Portuguese", "pt-BR"],
    },
    offers: aggregateOfferSchema(),
  };
  if (audience) {
    service.audience = { "@type": "Audience", audienceType: audience };
  }
  return service;
};

export const aggregateOfferSchema = (): Json => ({
  "@type": "AggregateOffer",
  priceCurrency: PRICING.currency,
  lowPrice: PRICING.starter.price,
  highPrice: PRICING.growth.price,
  offerCount: 2,
  availability: "https://schema.org/InStock",
  offers: [
    {
      "@type": "Offer",
      name: PRICING.starter.name,
      price: PRICING.starter.price,
      priceCurrency: PRICING.currency,
      availability: "https://schema.org/InStock",
      category: "subscription",
    },
    {
      "@type": "Offer",
      name: PRICING.growth.name,
      price: PRICING.growth.price,
      priceCurrency: PRICING.currency,
      availability: "https://schema.org/InStock",
      category: "subscription",
    },
  ],
});

export const faqPageSchema = (items: FaqItem[], path: string): Json => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${urlFor(path)}#faq`,
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
});

interface BreadcrumbEntry {
  name: string;
  path: string;
}

export const breadcrumbSchema = (
  trail: BreadcrumbEntry[],
  pagePath: string
): Json => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${urlFor(pagePath)}#breadcrumb`,
  itemListElement: trail.map((entry, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: entry.name,
    item: urlFor(entry.path),
  })),
});
