import type { FaqItem } from "@/types/content";

interface Props {
  items: FaqItem[];
}

export default function FAQ({ items }: Props) {
  return (
    <section id="faq" className="reveal bg-surface-alt scroll-mt-20">
      <div className="mx-auto max-w-3xl px-6 py-14 md:py-24">
        <h2 className="text-center text-3xl font-bold tracking-normal text-ink md:tracking-tight md:text-4xl">
          Perguntas que todo mundo faz.
        </h2>
        <ul className="mt-12 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-lift)]">
          {items.map((item, idx) => (
            <li key={idx}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-ink transition-colors hover:bg-surface-alt [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-all group-open:rotate-45 group-open:border-primary group-open:bg-primary group-open:text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
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
