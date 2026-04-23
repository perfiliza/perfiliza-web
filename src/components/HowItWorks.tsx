const STEPS = [
  {
    num: 1,
    title: "Mande um WhatsApp",
    body: "Abre o WhatsApp com a mensagem pronta e manda o link do seu Google. A gente responde com um diagnóstico em PDF.",
  },
  {
    num: 2,
    title: "Você me adiciona como Administrador",
    body: "Em 2 minutos, pelo painel do Google. Sem senha, sem fricção. Você remove quando quiser.",
  },
  {
    num: 3,
    title: "A gente cuida por 30 dias",
    body: "No dia 30, você recebe um relatório do que mudou. Continua por PIX se fez sentido. Se não, a gente se despede.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="reveal relative overflow-hidden bg-surface-alt scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-24">
        <h2 className="text-center text-3xl font-bold tracking-normal text-ink md:tracking-tight md:text-4xl">
          Como a gente começa.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          3 passos, sem cartão de crédito, sem contrato.
        </p>

        {/* Mobile: timeline vertical com linha conectora */}
        <ol className="relative mt-12 space-y-8 md:hidden">
          <span
            aria-hidden="true"
            className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent"
          />
          {STEPS.map((step) => (
            <li key={step.num} className="relative flex gap-5">
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-surface">
                <span className="font-display text-2xl text-primary">
                  {step.num}
                </span>
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Desktop: 3 colunas com conector horizontal */}
        <div className="relative mt-16 hidden md:block">
          <span
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-7 h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0"
          />
          <ol className="grid grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <li key={step.num} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-surface shadow-[var(--shadow-lift)]">
                  <span className="font-display text-2xl text-primary">
                    {step.num}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
