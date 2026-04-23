import type { NicheContent } from "@/types/content";
import SiteHeader from "./SiteHeader";
import Hero from "./Hero";
import TrustBar from "./TrustBar";
import PainPoints from "./PainPoints";
import HowItWorks from "./HowItWorks";
import GbpFeatures from "./GbpFeatures";
import WhereTheyFindYou from "./WhereTheyFindYou";
import Pricing from "./Pricing";
import VideoSection from "./VideoSection";
import ProofSection from "./ProofSection";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";
import StickyMobileCTA from "./StickyMobileCTA";
import { faqCommon } from "@/content/_shared";

interface Props {
  content: NicheContent;
}

export default function NichePage({ content }: Props) {
  const {
    key,
    hero,
    painPoints,
    gbpIntro,
    gbpFeatureDescriptions,
    whereText,
    faqExtra,
    nicheDisclaimer,
    waMessages,
    videoUrl,
  } = content;

  return (
    <>
      <SiteHeader />
      <main>
        <Hero
          title={hero.title}
          subtitle={hero.subtitle}
          ctaText={hero.ctaText}
          waMessage={waMessages.hero}
          landing={key}
        />
        <TrustBar />
        <PainPoints items={painPoints} />
        <HowItWorks />
        <GbpFeatures
          intro={gbpIntro}
          featureDescriptions={gbpFeatureDescriptions}
        />
        <WhereTheyFindYou googleText={whereText.google} aiText={whereText.ai} />
        <Pricing waMessage={waMessages.precos} landing={key} />
        <VideoSection videoUrl={videoUrl} />
        <ProofSection />
        <FAQ items={[...faqCommon, ...faqExtra]} />
        <FinalCTA waMessage={waMessages.cta_final} landing={key} />
      </main>
      <Footer nicheDisclaimer={nicheDisclaimer} />
      <StickyMobileCTA
        waMessage={waMessages.sticky_mobile}
        landing={key}
      />
    </>
  );
}
