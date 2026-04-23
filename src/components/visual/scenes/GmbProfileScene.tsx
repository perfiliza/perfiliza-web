export default function GmbProfileScene() {
  return (
    <div className="flex h-full w-full flex-col bg-surface text-ink">
      {/* Status bar */}
      <div
        aria-hidden="true"
        className="flex items-center justify-between px-5 pt-2.5 text-[9px] font-semibold text-ink"
      >
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
          <span className="h-2 w-3 rounded-sm border border-ink" />
        </span>
      </div>

      {/* Cover photo — gradient */}
      <div className="relative mx-2.5 mt-3 h-20 overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-mesh-1 via-primary to-mesh-2" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
        <div className="absolute right-1.5 top-1.5 rounded-sm bg-ink-900/60 px-1 py-0.5 text-[7px] text-white">
          1 / 24
        </div>
      </div>

      {/* Name + rating */}
      <div className="px-4 pt-3">
        <div className="h-2.5 w-3/4 rounded-sm bg-ink" />
        <div className="mt-2 flex items-center gap-1.5">
          <span className="text-[11px] font-bold text-ink">4.9</span>
          <span className="flex gap-0.5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} viewBox="0 0 24 24" className="h-2.5 w-2.5 text-[#F4B400]" fill="currentColor">
                <path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 3Z" />
              </svg>
            ))}
          </span>
          <span className="text-[9px] text-muted">(312)</span>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-1 text-[9px] text-muted">
          <span>Aberto agora</span>
          <span>·</span>
          <span>Fecha às 19h</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-3 grid grid-cols-4 gap-1.5 px-3">
        {[
          { label: "Chamar", icon: "phone" },
          { label: "Rota", icon: "route" },
          { label: "Salvar", icon: "bookmark" },
          { label: "Site", icon: "globe" },
        ].map((b) => (
          <div
            key={b.label}
            className="flex flex-col items-center gap-1 rounded-md border border-line bg-surface-alt py-1.5"
          >
            <ActionIcon name={b.icon} />
            <span className="text-[7.5px] font-medium text-primary">{b.label}</span>
          </div>
        ))}
      </div>

      {/* Tab bar */}
      <div className="mt-3 flex gap-4 border-b border-line px-4 text-[9px] font-medium">
        <span className="border-b-2 border-primary pb-1 text-primary">Visão geral</span>
        <span className="pb-1 text-muted">Avaliações</span>
        <span className="pb-1 text-muted">Fotos</span>
      </div>

      {/* Post card (latest) */}
      <div className="mx-2.5 mt-3 rounded-lg border border-line bg-surface p-2">
        <div className="flex items-center gap-1.5">
          <span className="rounded-sm bg-primary/10 px-1 py-0.5 text-[7px] font-semibold text-primary">
            NOVO
          </span>
          <span className="text-[7.5px] text-muted">há 2 dias</span>
        </div>
        <div className="mt-1.5 space-y-1">
          <div className="h-1.5 w-full rounded-sm bg-ink/80" />
          <div className="h-1.5 w-5/6 rounded-sm bg-ink/60" />
          <div className="h-1.5 w-4/6 rounded-sm bg-ink/40" />
        </div>
        <div className="mt-2 flex gap-1">
          <div className="h-6 flex-1 rounded-sm bg-gradient-to-br from-mesh-2/40 to-mesh-1/40" />
          <div className="h-6 flex-1 rounded-sm bg-gradient-to-br from-mesh-3/40 to-mesh-1/40" />
          <div className="h-6 flex-1 rounded-sm bg-gradient-to-br from-mesh-1/40 to-mesh-2/40" />
        </div>
      </div>

      {/* Review preview */}
      <div className="mx-2.5 mt-2 rounded-lg border border-line bg-surface p-2">
        <div className="flex items-center gap-1.5">
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-mesh-2 to-primary text-[7px] font-bold text-white">
            M
          </div>
          <span className="flex gap-0.5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} viewBox="0 0 24 24" className="h-2 w-2 text-[#F4B400]" fill="currentColor">
                <path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 3Z" />
              </svg>
            ))}
          </span>
        </div>
        <div className="mt-1.5 space-y-1">
          <div className="h-1.5 w-full rounded-sm bg-ink/60" />
          <div className="h-1.5 w-4/5 rounded-sm bg-ink/40" />
        </div>
        <div className="mt-2 rounded border-l-2 border-primary bg-primary/5 p-1.5">
          <div className="text-[6.5px] font-semibold text-primary">Resposta do proprietário</div>
          <div className="mt-0.5 h-1 w-3/4 rounded-sm bg-ink/40" />
        </div>
      </div>
    </div>
  );
}

function ActionIcon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-3 w-3 text-primary",
    fill: "none",
    stroke: "currentColor" as const,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
        </svg>
      );
    case "route":
      return (
        <svg {...common}>
          <circle cx="6" cy="19" r="2" />
          <circle cx="18" cy="5" r="2" />
          <path d="M12 19h4a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h4" />
        </svg>
      );
    case "bookmark":
      return (
        <svg {...common}>
          <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16l7-5 7 5Z" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    default:
      return null;
  }
}
