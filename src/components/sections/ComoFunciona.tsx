interface Passo {
  numero: number;
  titulo: string;
  descricao: string;
}

const passos: Passo[] = [
  {
    numero: 1,
    titulo: "Você manda mensagem no WhatsApp",
    descricao:
      "Você me conta o que precisa em 5 minutos de conversa. Sem formulário, sem cadastro, sem reunião marcada.",
  },
  {
    numero: 2,
    titulo: "Eu diagnostico e mando a proposta",
    descricao:
      "Faço um diagnóstico rápido e te envio um PDF com escopo, prazo e preço fechado. Sem letra miúda, sem surpresa depois.",
  },
  {
    numero: 3,
    titulo: "Executo e entrego pronto",
    descricao:
      "Em 7 a 15 dias úteis você recebe o trabalho concluído. Aí — e só aí — você paga via PIX ou cartão pelo Mercado Pago.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl flex flex-col gap-10">
        <header className="flex flex-col gap-3 max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">
            Simples assim, em 3 passos
          </h2>
          <p className="text-base sm:text-lg text-muted">
            Sem reunião longa, sem contrato burocrático, sem mensalidade.
          </p>
        </header>
        <ol className="grid gap-6 md:grid-cols-3">
          {passos.map((p) => (
            <li
              key={p.numero}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-primary font-bold"
              >
                {String(p.numero).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg text-ink">{p.titulo}</h3>
              <p className="text-sm text-muted">{p.descricao}</p>
            </li>
          ))}
        </ol>
        <div className="rounded-2xl bg-primary-soft p-6 sm:p-8 text-center">
          <p className="font-display text-xl sm:text-2xl text-ink">
            Pagamento 100% após a entrega
          </p>
          <p className="text-sm text-muted mt-2 max-w-2xl mx-auto">
            Você não corre risco. Se eu não entregar o combinado, você não paga.
            PIX à vista ou cartão em até 12x pelo Mercado Pago.
          </p>
        </div>
      </div>
    </section>
  );
}
