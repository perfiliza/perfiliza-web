import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import type { HeroData, NicheKey } from "@/types/content";

interface Props extends HeroData {
  waMessage: string;
  landing: NicheKey;
}

export default function Hero({
  title,
  subtitle,
  ctaText = "Começar grátis",
  imageSrc,
  imageAlt,
  waMessage,
  landing,
}: Props) {
  return (
    <section id="hero" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 pt-8 pb-12 md:pt-20 md:pb-24">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="order-1 md:order-1">
            <h1 className="text-[1.875rem] leading-[1.15] font-bold tracking-normal text-ink sm:text-[2.25rem] md:tracking-tight md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-base text-muted md:mt-5 md:text-lg lg:text-xl">
              {subtitle}
            </p>
            <div className="mt-6 flex flex-col items-start gap-3 md:mt-8">
              <WhatsAppButton
                waMessage={waMessage}
                landing={landing}
                posicao="hero"
                size="lg"
              >
                {ctaText}
              </WhatsAppButton>
              <p className="text-sm text-muted">
                Prefere por e-mail?{" "}
                <a
                  href="mailto:contato@perfiliza.com"
                  className="font-medium text-ink underline decoration-line underline-offset-2 hover:decoration-ink"
                >
                  contato@perfiliza.com
                </a>
              </p>
            </div>
          </div>
          <div
            className={`order-2 md:order-2 ${
              imageSrc ? "" : "hidden md:block"
            }`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? ""}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <HeroPlaceholder />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 border border-line bg-gradient-to-br from-[#E8F0FE] via-[#F8FAFC] to-[#E6F4EA] flex items-center justify-center"
    >
      <div className="text-center px-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
            <path d="M12 2C7.58 2 4 5.58 4 10c0 6 8 12 8 12s8-6 8-12c0-4.42-3.58-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          </svg>
        </div>
        <p className="mt-4 text-sm text-muted">Imagem do hero</p>
      </div>
    </div>
  );
}
