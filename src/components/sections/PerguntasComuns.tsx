interface QA {
  pergunta: string;
  resposta: string;
}

const faq: QA[] = [
  {
    pergunta: "E se eu não quiser o site?",
    resposta:
      "Você não paga nada. Em até 21 dias o site sai do ar e o domínio provisório é desativado. Sem letra miúda.",
  },
  {
    pergunta: "Como funciona a renovação?",
    resposta:
      "Trinta dias antes do fim do ano, a gente te avisa pelo WhatsApp. Se você quiser continuar, é novo pagamento de R$ 347 manualmente. Se não quiser, nada acontece — sem cobrança automática, sem multa.",
  },
  {
    pergunta: "Posso usar meu próprio domínio (.com.br)?",
    resposta:
      "Pode. A gente registra pra você por cerca de R$ 100/ano (custo do Registro.br) ou aponta o domínio que você já tem.",
  },
  {
    pergunta: "Vocês fazem alterações depois que o site está no ar?",
    resposta:
      "Pequenos ajustes pontuais, sim. Manutenção contínua mensal não está no pacote. Se precisar de mexidas frequentes, a gente conversa.",
  },
  {
    pergunta: "Como vocês escrevem o conteúdo do meu site?",
    resposta:
      "Usamos o que sua empresa já tem público (Google, redes sociais, avaliações) e adaptamos. Se quiser ajustar algum texto antes de publicar, é só pedir.",
  },
];

export default function PerguntasComuns() {
  return (
    <section
      id="perguntas"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl flex flex-col gap-8 lg:gap-10">
        <h2 className="font-display font-medium text-ink text-[26px] lg:text-3xl lg:text-center">
          Perguntas comuns
        </h2>
        <ul className="flex flex-col">
          {faq.map((qa, i) => (
            <li
              key={i}
              className="border-t border-line/40 last:border-b last:border-line/40"
            >
              <details className="group">
                <summary className="list-none cursor-pointer flex items-start justify-between gap-4 py-5 min-h-11">
                  <span className="font-display font-medium text-ink text-lg leading-snug">
                    {qa.pergunta}
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-2xl leading-none text-muted transition-transform duration-200 group-open:rotate-45 select-none"
                  >
                    +
                  </span>
                </summary>
                <p className="text-base text-muted leading-relaxed pb-5 -mt-1 pr-8">
                  {qa.resposta}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
