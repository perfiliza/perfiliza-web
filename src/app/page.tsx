import Hero from "@/components/sections/Hero";
import ComoFunciona from "@/components/sections/ComoFunciona";
import OQueEstaIncluido from "@/components/sections/OQueEstaIncluido";
import PerguntasComuns from "@/components/sections/PerguntasComuns";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ComoFunciona />
      <OQueEstaIncluido />
      <PerguntasComuns />
    </main>
  );
}
