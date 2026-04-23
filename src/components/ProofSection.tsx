const DELIVERABLES = [
  {
    value: "4 posts",
    label: "Redigidos, formatados e publicados com foto por nós.",
  },
  {
    value: "100%",
    label: "Das avaliações respondidas, revisadas por humano.",
  },
  {
    value: "20 perguntas",
    label: "Testadas em ChatGPT, Gemini e Perplexity todo mês (Growth).",
  },
] as const;

export default function ProofSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <h2 className="text-center text-3xl font-bold tracking-normal text-ink md:tracking-tight md:text-4xl">
          A entrega mensal, sem mistério.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-muted md:text-lg">
          O que a gente coloca de pé no seu Google todo mês — feito, não prometido.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {DELIVERABLES.map((item) => (
            <li
              key={item.value}
              className="rounded-2xl border border-line bg-surface-alt p-6 text-center"
            >
              <div className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                {item.value}
              </div>
              <p className="mt-2 text-ink">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
