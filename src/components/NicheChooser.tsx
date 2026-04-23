import Link from "next/link";
import NicheIconScene from "./visual/scenes/NicheIconScene";
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
    <section className="reveal relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-24">
        <h2 className="text-center text-3xl font-bold tracking-normal text-ink md:tracking-tight md:text-4xl">
          {title}
        </h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
          {niches.map((n) => (
            <li key={n.key}>
              <Link
                href={n.href}
                className="group relative block h-full overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-lift)]"
              >
                <NicheIconScene niche={n.key} />
                <h3 className="mt-5 text-xl font-semibold text-ink">{n.title}</h3>
                <p className="mt-2 text-muted">{n.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
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
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/[0.04] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
