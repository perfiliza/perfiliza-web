import Hero from "@/components/sections/Hero";
import Servicos from "@/components/sections/Servicos";
import ComoFunciona from "@/components/sections/ComoFunciona";
import FaqCta from "@/components/sections/FaqCta";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Servicos />
      <ComoFunciona />
      <FaqCta />
    </main>
  );
}
