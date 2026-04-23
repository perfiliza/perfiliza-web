const STEPS = [
  {
    num: 1,
    title: "Mande um WhatsApp",
    body: "Você clica aqui em baixo e já abre o WhatsApp com a mensagem pronta. Me conta o nome do seu negócio e manda o link do seu Google. Em até 24h você recebe um PDF grátis com o diagnóstico completo.",
  },
  {
    num: 2,
    title: "Se fizer sentido, adicione a gente como Administrador",
    body: "2 minutos pelo painel oficial do Google. Você nunca me dá senha. Só convida admin@perfiliza.com como Administrador — e pode remover a qualquer momento, do mesmo jeito.",
  },
  {
    num: 3,
    title: "A gente cuida por 30 dias, sem cobrança",
    body: "No dia 30 te mando um relatório mostrando tudo que mudou. Se fez sentido continuar, é R$ 197/mês via PIX (ou R$ 297 no Growth). Se não, a gente se despede sem cobrar nada.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-ink md:text-4xl">
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
              <h3 className="mt-4 text-xl font-semibold text-ink">
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
