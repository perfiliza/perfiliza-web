import type { PainPoint, PainPointIcon } from "@/types/content";

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
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <h2 className="text-center text-3xl font-bold tracking-normal text-ink md:tracking-tight md:text-4xl">
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
                className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
              >
                <PainIcon name={item.icon} />
              </span>
              <p className="text-base text-ink md:text-lg">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PainIcon({ name }: { name: PainPointIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor" as const,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "chart-down":
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="m7 14 4-4 3 3 6-7" />
          <path d="M20 10V6h-4" />
        </svg>
      );
    case "trophy":
      return (
        <svg {...common}>
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
          <path d="M17 5h3v2a3 3 0 0 1-3 3" />
          <path d="M7 5H4v2a3 3 0 0 0 3 3" />
        </svg>
      );
    case "robot":
      return (
        <svg {...common}>
          <rect x="4" y="7" width="16" height="12" rx="2" />
          <path d="M12 3v4" />
          <circle cx="9" cy="13" r="1" />
          <circle cx="15" cy="13" r="1" />
          <path d="M9 17h6" />
          <path d="M2 13h2M20 13h2" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18" />
          <path d="M8 3v4M16 3v4" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 3Z" />
        </svg>
      );
    case "smartphone":
      return (
        <svg {...common}>
          <rect x="6" y="2" width="12" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      );
    case "camera":
      return (
        <svg {...common}>
          <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
          <circle cx="12" cy="13" r="3.5" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1Z" />
          <path d="M8 10h8M8 13h5" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
          <path d="M9 4v14M15 6v14" />
        </svg>
      );
    case "magnifier":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-4.3-4.3" />
        </svg>
      );
    case "tag":
      return (
        <svg {...common}>
          <path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9Z" />
          <circle cx="8" cy="8" r="1.5" />
        </svg>
      );
  }
}
