interface Passo {
  numero: number;
  titulo: string;
  descricao: string;
}

const passos: Passo[] = [
  {
    numero: 1,
    titulo: "Você fala comigo no WhatsApp",
    descricao:
      "[A DEFINIR — descrição do passo 1: contato inicial pelo WhatsApp]",
  },
  {
    numero: 2,
    titulo: "Eu diagnostico e mando proposta",
    descricao:
      "[A DEFINIR — descrição do passo 2: análise do perfil e proposta]",
  },
  {
    numero: 3,
    titulo: "Executo e entrego o perfil pronto",
    descricao:
      "[A DEFINIR — descrição do passo 3: execução e entrega; pagamento via Mercado Pago só após entrega]",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl flex flex-col gap-10">
        <header className="flex flex-col gap-3 max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">
            Como funciona
          </h2>
          <p className="text-base sm:text-lg text-muted">
            [A DEFINIR — subtítulo da seção Como funciona]
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
                {p.numero}
              </span>
              <h3 className="font-display text-lg text-ink">{p.titulo}</h3>
              <p className="text-sm text-muted">{p.descricao}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
