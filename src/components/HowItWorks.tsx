const STEPS = [
  {
    num: 1,
    title: "Mande um WhatsApp",
    body: "Abre o WhatsApp com a mensagem pronta e manda o link do seu Google. A gente responde com um diagnóstico em PDF.",
  },
  {
    num: 2,
    title: "Nos adicione como Administrador",
    body: "Em 2 minutos, pelo painel do Google. Sem senha, sem fricção. Remove quando quiser.",
  },
  {
    num: 3,
    title: "A gente cuida por 30 dias",
    body: "No dia 30, você recebe um relatório do que mudou. Continua por PIX se fez sentido. Se não, a gente se despede.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-surface-alt scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <h2 className="text-center text-3xl font-bold tracking-normal text-ink md:tracking-tight md:text-4xl">
          Como a gente começa.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          3 passos, sem cartão de crédito, sem contrato.
        </p>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.num}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                {step.num}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink md:text-xl">
                {step.title}
              </h3>
              <p className="mt-2 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
