const HOTSPOTS = [
  { n: 1, label: "Posts" },
  { n: 2, label: "Fotos" },
  { n: 3, label: "Serviços" },
  { n: 4, label: "Q&A" },
  { n: 5, label: "Atributos" },
  { n: 6, label: "Horários" },
  { n: 7, label: "Reservas" },
  { n: 8, label: "Reviews" },
] as const;

export default function GbpDashboardScene() {
  return (
    <div className="flex h-full w-full bg-surface-alt">
      {/* Sidebar */}
      <aside className="flex w-[22%] flex-col gap-1.5 border-r border-line bg-surface px-2 py-3">
        <div className="mb-1 flex items-center gap-1.5 px-1.5">
          <div className="h-2 w-2 rounded-sm bg-primary" />
          <span className="text-[8px] font-semibold text-ink">Seu perfil</span>
        </div>
        {HOTSPOTS.map((h) => (
          <div
            key={h.n}
            className="flex items-center gap-1.5 rounded px-1.5 py-1"
          >
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary text-[7px] font-bold text-white">
              {h.n}
            </span>
            <span className="text-[8px] text-ink">{h.label}</span>
          </div>
        ))}
      </aside>

      {/* Main panel */}
      <div className="flex flex-1 flex-col p-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2 w-24 rounded-sm bg-ink" />
            <div className="mt-1 flex items-center gap-1">
              <span className="text-[8px] font-bold text-ink">4.9</span>
              <span className="flex gap-0.5" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} viewBox="0 0 24 24" className="h-1.5 w-1.5 text-[#F4B400]" fill="currentColor">
                    <path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 3Z" />
                  </svg>
                ))}
              </span>
            </div>
          </div>
          <div className="rounded bg-success/10 px-2 py-0.5 text-[7px] font-semibold text-success">
            Publicado
          </div>
        </div>

        {/* Grid de cards (8 features) */}
        <div className="mt-2.5 grid flex-1 grid-cols-4 grid-rows-2 gap-1.5">
          {HOTSPOTS.map((h) => (
            <div
              key={h.n}
              className="relative flex flex-col justify-between rounded-md border border-line bg-surface p-1.5"
            >
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-surface bg-primary text-[7px] font-bold text-white shadow">
                {h.n}
              </span>
              <div className="text-[7px] font-semibold text-ink">{h.label}</div>
              <MiniPreview kind={h.label} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MiniPreview({ kind }: { kind: string }) {
  switch (kind) {
    case "Posts":
      return (
        <div className="mt-1 space-y-0.5">
          <div className="h-0.5 w-full rounded bg-ink/60" />
          <div className="h-0.5 w-4/5 rounded bg-ink/40" />
          <div className="h-0.5 w-3/5 rounded bg-ink/40" />
        </div>
      );
    case "Fotos":
      return (
        <div className="mt-1 flex gap-0.5">
          <div className="h-3 flex-1 rounded bg-gradient-to-br from-mesh-1/60 to-mesh-2/60" />
          <div className="h-3 flex-1 rounded bg-gradient-to-br from-mesh-2/60 to-mesh-3/60" />
          <div className="h-3 flex-1 rounded bg-gradient-to-br from-mesh-3/60 to-mesh-1/60" />
        </div>
      );
    case "Serviços":
      return (
        <div className="mt-1 space-y-0.5">
          <div className="flex justify-between"><div className="h-0.5 w-2/5 rounded bg-ink/60" /><div className="h-0.5 w-1/5 rounded bg-primary/70" /></div>
          <div className="flex justify-between"><div className="h-0.5 w-3/5 rounded bg-ink/60" /><div className="h-0.5 w-1/5 rounded bg-primary/70" /></div>
        </div>
      );
    case "Q&A":
      return (
        <div className="mt-1 flex items-center gap-0.5">
          <div className="h-2 w-2 rounded-full border border-ink/40" />
          <div className="h-0.5 flex-1 rounded bg-ink/50" />
        </div>
      );
    case "Atributos":
      return (
        <div className="mt-1 flex flex-wrap gap-0.5">
          <div className="h-1 w-3 rounded bg-success/60" />
          <div className="h-1 w-4 rounded bg-success/60" />
          <div className="h-1 w-2 rounded bg-success/60" />
        </div>
      );
    case "Horários":
      return (
        <div className="mt-1 flex items-center gap-0.5">
          <svg viewBox="0 0 24 24" className="h-2 w-2 text-primary" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" strokeLinecap="round" />
          </svg>
          <div className="h-0.5 flex-1 rounded bg-ink/50" />
        </div>
      );
    case "Reservas":
      return (
        <div className="mt-1 flex h-3 items-center justify-center rounded bg-action/15">
          <span className="text-[6px] font-bold text-action">→</span>
        </div>
      );
    case "Reviews":
      return (
        <div className="mt-1 flex gap-0.5" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} viewBox="0 0 24 24" className="h-1.5 w-1.5 text-[#F4B400]" fill="currentColor">
              <path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 3Z" />
            </svg>
          ))}
        </div>
      );
    default:
      return null;
  }
}
