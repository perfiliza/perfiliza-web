export default function TrustBar() {
  return (
    <section className="bg-surface-alt border-y border-line">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <ul className="flex flex-col items-center gap-2 text-center text-sm text-ink md:flex-row md:justify-center md:gap-8 md:text-base">
          <li className="flex items-center gap-2">
            <Check />
            <span>Primeiro mês por nossa conta</span>
          </li>
          <li className="flex items-center gap-2">
            <Check />
            <span>Sem fidelidade, cancelamento em 1 mensagem</span>
          </li>
          <li className="flex items-center gap-2">
            <Check />
            <span>Diagnóstico gratuito pelo WhatsApp em até 24h</span>
          </li>
        </ul>
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
