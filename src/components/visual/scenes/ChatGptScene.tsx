export default function ChatGptScene() {
  return (
    <div className="flex h-full w-full flex-col gap-2.5 overflow-hidden bg-surface px-3 py-3.5">
      {/* User bubble */}
      <div className="ml-auto flex max-w-[82%] items-start gap-1.5">
        <div className="rounded-2xl rounded-tr-sm bg-ink-900 px-3 py-2 text-[10px] leading-snug text-white">
          Qual o melhor lugar perto de mim com 5 estrelas?
        </div>
      </div>

      {/* AI bubble */}
      <div className="mr-auto flex max-w-[90%] items-start gap-1.5">
        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-mesh-1 to-mesh-3 text-[8px] font-bold text-white">
          AI
        </div>
        <div className="rounded-2xl rounded-tl-sm bg-surface-alt px-3 py-2 text-[10px] leading-snug text-ink">
          <span>Encontrei boas opções na sua região. A mais bem avaliada é:</span>
          <div className="mt-2 rounded-lg border-2 border-primary/30 bg-surface p-2">
            <div className="flex items-center gap-1.5">
              <div className="h-5 w-5 rounded-md bg-gradient-to-br from-mesh-1 to-mesh-2" />
              <div className="flex-1">
                <div className="h-1.5 w-20 rounded-sm bg-ink" />
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
            </div>
            <div className="mt-1.5 space-y-0.5">
              <div className="h-1 w-full rounded-sm bg-ink/50" />
              <div className="h-1 w-4/5 rounded-sm bg-ink/40" />
            </div>
            <div className="mt-1.5 flex items-center gap-1 text-[7px]">
              <span className="rounded bg-success/15 px-1 py-0.5 font-semibold text-success">
                Aberto
              </span>
              <span className="text-muted">· 0,4 km · responde rápido</span>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-[8px] text-muted">
            <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
              <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799" strokeLinecap="round" />
              <circle cx="10" cy="10" r="3" />
            </svg>
            <span>fonte: Perfiliza</span>
          </div>
        </div>
      </div>

      {/* typing */}
      <div className="mr-auto mt-auto flex items-center gap-1 rounded-full bg-surface-alt px-2.5 py-1.5">
        <span className="h-1 w-1 animate-bounce rounded-full bg-muted" style={{ animationDelay: "0ms" }} />
        <span className="h-1 w-1 animate-bounce rounded-full bg-muted" style={{ animationDelay: "120ms" }} />
        <span className="h-1 w-1 animate-bounce rounded-full bg-muted" style={{ animationDelay: "240ms" }} />
      </div>
    </div>
  );
}
