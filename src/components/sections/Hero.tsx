import Image from "next/image";
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
            Apareça no Google quando o cliente procurar perto de você
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-xl">
            Cuido do seu Perfil da Empresa no Google de ponta a ponta — criação,
            otimização ou recuperação de perfis suspensos. Você só paga depois
            que está pronto.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <WhatsAppCTA
              section="hero"
              service="geral"
              message="Olá! Vim do site da Perfiliza e quero entender qual serviço faz sentido pro meu negócio."
            >
              Falar agora no WhatsApp
            </WhatsAppCTA>
          </div>
        </div>
        <Image
          src="/images/hero.webp"
          alt="Tela de celular mostrando um Perfil da Empresa no Google completo, com fotos, avaliações e botão de chamar no WhatsApp em destaque."
          width={2528}
          height={1696}
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="w-full h-auto rounded-2xl"
        />
      </div>
    </section>
  );
}
