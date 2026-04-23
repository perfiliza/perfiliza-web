import type { FaqItem } from "@/types/content";

interface Props {
  items: FaqItem[];
}

export default function FAQ({ items }: Props) {
  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Perguntas que todo mundo faz.
        </h2>
        <ul className="mt-10 divide-y divide-line rounded-2xl border border-line bg-surface">
          {items.map((item, idx) => (
            <li key={idx}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-muted">{item.a}</div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
