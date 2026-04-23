import Link from "next/link";
import type { NicheCard } from "@/types/content";

interface Props {
  title?: string;
  niches: NicheCard[];
}

export default function NicheChooser({
  title = "O seu negócio está aqui?",
  niches,
}: Props) {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <h2 className="text-center text-3xl font-bold tracking-normal text-ink md:tracking-tight md:text-4xl">
          {title}
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {niches.map((n) => (
            <li key={n.key}>
              <Link
                href={n.href}
                className="group block h-full rounded-2xl border border-line bg-surface-alt p-6 transition-colors hover:border-primary hover:bg-surface"
              >
                <h3 className="text-xl font-semibold text-ink">{n.title}</h3>
                <p className="mt-2 text-muted">{n.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Ver página
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
