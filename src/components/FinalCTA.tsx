import WhatsAppButton from "./WhatsAppButton";
import MeshGradient from "./visual/MeshGradient";
import type { NicheKey } from "@/types/content";

interface Props {
  waMessage: string;
  landing: NicheKey;
}

export default function FinalCTA({ waMessage, landing }: Props) {
  return (
    <section className="reveal noise-dark relative overflow-hidden">
      <MeshGradient variant="cta" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <h2 className="font-display text-4xl leading-[1.08] text-white md:text-6xl">
          Começa hoje, sem cartão.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 md:text-lg">
          Me chame no WhatsApp com o link do seu Google. Eu te devolvo um PDF
          grátis com o diagnóstico completo — problemas, prioridades e o que
          mudaria já nas primeiras semanas.
        </p>
        <div className="relative mt-10 flex flex-col items-center gap-4">
          <ArrowDoodle />
          <div className="pulse-glow inline-flex">
            <WhatsAppButton
              waMessage={waMessage}
              landing={landing}
              posicao="cta_final"
              size="lg"
            >
              Quero meu diagnóstico gratuito
            </WhatsAppButton>
          </div>
          <p className="text-sm text-white/85">
            <a
              href="mailto:contato@perfiliza.com"
              className="font-medium text-white underline decoration-white/40 underline-offset-2 hover:decoration-white"
            >
              contato@perfiliza.com
            </a>
          </p>
        </div>
        <p className="mx-auto mt-12 max-w-xl text-sm text-white/70">
          Perfiliza — Consultoria de Google Meu Negócio + GEO para pequenos e
          médios negócios brasileiros.
        </p>
      </div>
    </section>
  );
}

function ArrowDoodle() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 140 80"
      className="pointer-events-none absolute -top-6 right-[-8rem] hidden h-20 w-36 text-white/50 md:block"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 6c22 4 44 18 52 38 4 10-2 22-14 22-14 0-18-16-8-22 18-10 52-6 76 18" />
      <path d="M104 54l14 12-2-18" />
    </svg>
  );
}
