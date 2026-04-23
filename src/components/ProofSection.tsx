import type { ProofStat } from "@/types/content";

interface Props {
  stats: ProofStat[];
  disclaimer: string;
}

export default function ProofSection({ stats, disclaimer }: Props) {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-ink md:text-4xl">
          O que costuma acontecer nos primeiros 60 dias.
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-muted">
          Estamos no beta — ainda não temos case público. Os números abaixo são
          projeção de benchmarks setoriais, não garantia. Quando tivermos o
          primeiro cliente com permissão de divulgação, substituímos isso por
          depoimento real.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <li
              key={i}
              className="rounded-2xl border border-line bg-surface-alt p-6 text-center"
            >
              <div className="text-4xl font-bold tracking-tight text-primary">
                {s.value}
              </div>
              <p className="mt-2 text-ink">{s.label}</p>
              <p className="mt-3 text-xs italic text-muted">
                *Projeção baseada em benchmarks setoriais. Não é garantia de
                resultado.
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-sm italic text-muted">
          {disclaimer}
        </p>
      </div>
    </section>
  );
}
