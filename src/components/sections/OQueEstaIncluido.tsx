import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

const itens: string[] = [
  "Site responsivo (funciona no celular)",
  "Hospedagem por 12 meses",
  "Conteúdo adaptado ao seu negócio",
  "Botão de WhatsApp direto",
  "Galeria de fotos",
  "Endereço com mapa",
  "Horários de funcionamento",
  "Formulário ou link de contato",
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0 text-primary mt-[3px]"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function OQueEstaIncluido() {
  return (
    <section
      id="incluido"
      className="px-6 py-20 sm:py-24"
    >
      <div
        className="mx-auto max-w-2xl rounded-xl bg-surface border border-[rgb(74_90_58_/_0.1)] p-8 lg:p-12 flex flex-col gap-8"
      >
        <header className="flex flex-col gap-3">
          <h2 className="font-display font-medium text-ink text-[26px] lg:text-3xl lg:text-center">
            O que está incluído por R$ 347
          </h2>
          <p className="font-medium text-ink text-[17px] lg:text-center">
            Um pagamento. Um ano completo. Sem cobrança automática depois.
          </p>
        </header>

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-[14px]">
          {itens.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-ink">
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="border-t border-line/40 pt-5">
          <p className="text-sm text-muted leading-relaxed">
            Opcional: domínio próprio (.com.br) por cerca de R$ 100/ano, cobrado
            à parte do Registro.br.
          </p>
        </div>

        <div className="flex justify-stretch lg:justify-center">
          <WhatsAppCTA
            section="preco"
            service="geral"
            message="Olá! Vim do site da Perfiliza e quero conhecer melhor o site de R$ 347."
            className="w-full lg:w-auto h-14"
          >
            Quero conhecer
          </WhatsAppCTA>
        </div>
      </div>
    </section>
  );
}
