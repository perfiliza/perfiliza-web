import type { PainPoint } from "@/types/content";

interface Props {
  title?: string;
  subtitle?: string;
  items: PainPoint[];
}

export default function PainPoints({
  title = "Você sente isso?",
  subtitle = "A gente ouve essas frases toda semana. Veja se alguma combina com você.",
  items,
}: Props) {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          {subtitle}
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 rounded-xl border border-line bg-surface-alt p-5"
            >
              <span
                aria-hidden="true"
                className="text-2xl leading-none mt-0.5"
              >
                {item.icon}
              </span>
              <p className="text-base text-ink md:text-lg">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
