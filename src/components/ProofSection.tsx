import AnimatedCounter from "./visual/AnimatedCounter";
import MeshGradient from "./visual/MeshGradient";

const DELIVERABLES = [
  {
    to: 4,
    suffix: " posts",
    label: "Redigidos, formatados e publicados com foto por nós.",
  },
  {
    to: 100,
    suffix: "%",
    label: "Das avaliações respondidas, revisadas por humano.",
  },
  {
    to: 20,
    suffix: " perguntas",
    label: "Testadas em ChatGPT, Gemini e Perplexity todo mês (Growth).",
  },
] as const;

export default function ProofSection() {
  return (
    <section className="reveal noise relative overflow-hidden bg-surface">
      <MeshGradient variant="section" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 md:py-24">
        <h2 className="text-center text-3xl font-bold tracking-normal text-ink md:tracking-tight md:text-4xl">
          O que entra no seu Google todo mês.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-muted md:text-lg">
          Feito, não prometido. Igual pra todo cliente, todo mês.
        </p>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {DELIVERABLES.map((item) => (
            <li
              key={item.suffix}
              className="relative overflow-hidden rounded-2xl border border-line bg-surface p-7 text-center shadow-[var(--shadow-lift)]"
            >
              <div
                aria-hidden="true"
                className="absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-primary/5 blur-2xl"
              />
              <div className="relative">
                <div className="font-display text-6xl leading-none tracking-tight md:text-7xl">
                  <span className="bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent">
                    <AnimatedCounter to={item.to} suffix={item.suffix} />
                  </span>
                </div>
                <p className="mt-4 text-ink">{item.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
