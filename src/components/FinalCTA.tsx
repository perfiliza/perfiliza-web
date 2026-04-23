import WhatsAppButton from "./WhatsAppButton";
import type { NicheKey } from "@/types/content";

interface Props {
  waMessage: string;
  landing: NicheKey;
}

export default function FinalCTA({ waMessage, landing }: Props) {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-4xl px-6 py-12 text-center md:py-20">
        <h2 className="text-3xl font-bold tracking-normal text-white md:tracking-tight md:text-4xl">
          Começa hoje, sem cartão.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 md:text-lg">
          Me chame no WhatsApp com o link do seu Google. Eu te devolvo um PDF
          grátis com o diagnóstico completo — problemas, prioridades e o que
          mudaria já nas primeiras semanas.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <WhatsAppButton
            waMessage={waMessage}
            landing={landing}
            posicao="cta_final"
            size="lg"
          >
            Começar grátis
          </WhatsAppButton>
          <p className="text-sm text-white/85">
            Prefere por e-mail?{" "}
            <a
              href="mailto:contato@perfiliza.com"
              className="font-medium text-white underline decoration-white/40 underline-offset-2 hover:decoration-white"
            >
              contato@perfiliza.com
            </a>
          </p>
        </div>
        <p className="mx-auto mt-10 max-w-xl text-sm text-white/70">
          Perfiliza — Consultoria de Google Meu Negócio + GEO para pequenos e
          médios negócios brasileiros.
        </p>
      </div>
    </section>
  );
}
