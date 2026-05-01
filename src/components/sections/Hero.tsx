import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

export default function Hero() {
  return (
    <section
      id="hero"
      className="px-4 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32"
    >
      <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-6">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink">
            [A DEFINIR — headline]
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-xl">
            [A DEFINIR — subheadline com 1-2 linhas explicando o serviço.]
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <WhatsAppCTA
              section="hero"
              service="geral"
              message="[A DEFINIR — mensagem geral]"
            >
              Falar no WhatsApp
            </WhatsAppCTA>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="aspect-square w-full rounded-2xl bg-surface-alt border border-line flex items-center justify-center text-muted text-sm"
        >
          [A DEFINIR — imagem do hero]
        </div>
      </div>
    </section>
  );
}
