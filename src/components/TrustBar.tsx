const ITEMS = [
  "Primeiro mês por nossa conta",
  "Sem cartão. PIX só quando fizer sentido.",
  "Sem fidelidade, cancela em 1 mensagem",
] as const;

export default function TrustBar() {
  return (
    <section
      aria-label="Nossos compromissos"
      className="relative overflow-hidden border-y border-line bg-surface-alt"
    >
      {/* Desktop: estática, centrada */}
      <div className="mx-auto hidden max-w-6xl px-6 py-4 md:block">
        <ul className="flex items-center justify-center gap-8 text-base text-ink">
          {ITEMS.map((text) => (
            <li key={text} className="flex items-center gap-2">
              <Check />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile: marquee horizontal */}
      <div className="overflow-hidden py-3 md:hidden" aria-hidden="false">
        <div className="marquee-track">
          <ul className="flex shrink-0 items-center gap-6 px-3 text-sm text-ink">
            {ITEMS.map((text) => (
              <li key={text} className="flex shrink-0 items-center gap-2">
                <Check />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          {/* Clone for seamless loop — hidden from assistive tech */}
          <ul
            aria-hidden="true"
            className="flex shrink-0 items-center gap-6 px-3 text-sm text-ink"
          >
            {ITEMS.map((text) => (
              <li key={`${text}-clone`} className="flex shrink-0 items-center gap-2">
                <Check />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-success"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}
