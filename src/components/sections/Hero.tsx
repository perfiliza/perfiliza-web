import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

export default function Hero() {
  return (
    <section
      id="hero"
      className="px-6 pt-20 pb-16 lg:pt-32 lg:pb-24"
    >
      <div className="mx-auto max-w-2xl flex flex-col gap-5 lg:gap-6">
        <h1 className="font-display font-medium text-ink text-4xl leading-tight lg:text-6xl lg:leading-[1.1]">
          Veja seu site pronto antes de pagar.
        </h1>
        <p className="text-muted text-[17px] leading-relaxed lg:text-lg">
          A Perfiliza cria o site da sua empresa com base no que ela já tem
          online, mostra funcionando, e você decide. R$ 347 pelo ano todo,
          hospedagem incluída. Sem mensalidade, sem fidelização.
        </p>
        <WhatsAppCTA
          section="hero"
          service="geral"
          message="Olá! Vim do site da Perfiliza e quero saber mais sobre o site de R$ 347."
          className="mt-3 w-full lg:mt-4 lg:w-auto lg:self-start h-14"
        >
          Falar no WhatsApp
        </WhatsAppCTA>
      </div>
    </section>
  );
}
