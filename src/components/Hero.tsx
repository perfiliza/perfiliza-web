import WhatsAppButton from "./WhatsAppButton";
import MeshGradient from "./visual/MeshGradient";
import MockupFrame from "./visual/MockupFrame";
import BadgeLive from "./visual/BadgeLive";
import GmbProfileScene from "./visual/scenes/GmbProfileScene";
import type { HeroData, NicheKey } from "@/types/content";

interface Props extends HeroData {
  waMessage: string;
  landing: NicheKey;
  badgeLive?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText = "Quero meu diagnóstico gratuito",
  waMessage,
  landing,
  badgeLive,
}: Props) {
  const words = title.split(" ");
  const accentCount = Math.min(2, Math.max(1, Math.floor(words.length / 4)));
  const headWords = words.slice(0, words.length - accentCount).join(" ");
  const tailWords = words.slice(words.length - accentCount).join(" ");

  return (
    <section id="hero" className="noise relative overflow-hidden bg-surface">
      <MeshGradient variant="hero" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-14 md:pt-24 md:pb-28">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="order-1">
            {badgeLive ? (
              <div className="mb-5">
                <BadgeLive text={badgeLive} />
              </div>
            ) : null}
            <h1 className="font-display text-[2.25rem] leading-[1.05] text-ink sm:text-[2.75rem] md:text-6xl lg:text-[4rem]">
              {headWords}{" "}
              <span className="bg-gradient-to-br from-primary via-primary-dark to-mesh-2 bg-clip-text text-transparent">
                {tailWords}
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted md:text-lg lg:text-xl">
              {subtitle}
            </p>
            <div className="mt-7 flex flex-col items-start gap-3 md:mt-9">
              <WhatsAppButton
                waMessage={waMessage}
                landing={landing}
                posicao="hero"
                size="lg"
              >
                {ctaText}
              </WhatsAppButton>
              <p className="text-sm text-muted">
                <a
                  href="mailto:contato@perfiliza.com"
                  className="font-medium text-ink underline decoration-line underline-offset-2 hover:decoration-ink"
                >
                  contato@perfiliza.com
                </a>
              </p>
            </div>
          </div>

          <div className="order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-[48px] bg-gradient-to-br from-primary/20 via-mesh-2/15 to-mesh-3/15 blur-2xl"
              />
              <MockupFrame
                variant="phone"
                ariaLabel="Prévia de um perfil do Google Meu Negócio no celular, mostrando nota 4.9, botões de ação e um post recente"
              >
                <GmbProfileScene />
              </MockupFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
