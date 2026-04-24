import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import NicheChooser from "@/components/NicheChooser";
import PainPoints from "@/components/PainPoints";
import HowItWorks from "@/components/HowItWorks";
import GbpFeatures from "@/components/GbpFeatures";
import WhereTheyFindYou from "@/components/WhereTheyFindYou";
import Pricing from "@/components/Pricing";
import VideoSection from "@/components/VideoSection";
import ProofSection from "@/components/ProofSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import JsonLd from "@/components/seo/JsonLd";
import {
  faqPageSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo/schemas";
import { faqCommon, nicheCards } from "@/content/_shared";
import {
  homeHero,
  homeMeta,
  homePainPoints,
  homeWaMessages,
} from "@/content/home";

export const metadata: Metadata = {
  title: homeMeta.title,
  description: homeMeta.description,
  keywords: homeMeta.keywords,
  alternates: { canonical: homeMeta.path },
  openGraph: {
    title: homeMeta.title,
    description: homeMeta.description,
    url: homeMeta.path,
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: homeMeta.title,
    description: homeMeta.description,
  },
};

export default function HomePage() {
  const ldData = [
    webPageSchema({
      title: homeMeta.title,
      description: homeMeta.description,
      path: homeMeta.path,
    }),
    serviceSchema({
      name: "Gestão de Google Meu Negócio + GEO",
      description:
        "Gestão semanal do seu Google Meu Negócio e trabalho de GEO para você ser recomendado por ChatGPT, Gemini e Perplexity.",
      path: homeMeta.path,
    }),
    faqPageSchema(faqCommon, homeMeta.path),
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <Hero
          title={homeHero.title}
          subtitle={homeHero.subtitle}
          ctaText={homeHero.ctaText}
          waMessage={homeWaMessages.hero}
          landing="home"
        />
        <TrustBar />
        <NicheChooser title="Qual o seu negócio?" niches={nicheCards} />
        <PainPoints items={homePainPoints} />
        <HowItWorks />
        <GbpFeatures />
        <WhereTheyFindYou />
        <Pricing waMessage={homeWaMessages.precos} landing="home" />
        <VideoSection videoUrl={null} />
        <ProofSection />
        <FAQ items={faqCommon} />
        <FinalCTA waMessage={homeWaMessages.cta_final} landing="home" />
      </main>
      <Footer />
      <StickyMobileCTA
        waMessage={homeWaMessages.sticky_mobile}
        landing="home"
      />
      <JsonLd id="ld-home" data={ldData} />
    </>
  );
}
