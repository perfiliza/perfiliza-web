export default function GoogleMapsScene() {
  return (
    <div className="relative h-full w-full bg-[#E8EEE4]">
      {/* Roads */}
      <svg viewBox="0 0 400 260" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 80 L140 80 L140 20 L260 20 L260 120 L400 120" fill="none" stroke="#FFFFFF" strokeWidth="8" />
        <path d="M0 180 L100 180 L100 260" fill="none" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M200 140 L300 140 L300 260" fill="none" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M60 0 L60 200 L360 200 L360 260" fill="none" stroke="#D9E5F2" strokeWidth="4" />
        <path d="M0 40 L400 40" fill="none" stroke="#D9E5F2" strokeWidth="2" strokeDasharray="4 6" />
        {/* Park */}
        <rect x="165" y="145" width="90" height="70" fill="#C9E4C0" rx="4" />
        <circle cx="185" cy="175" r="5" fill="#82C17C" />
        <circle cx="215" cy="165" r="4" fill="#82C17C" />
        <circle cx="235" cy="190" r="5" fill="#82C17C" />
        {/* Water */}
        <path d="M0 240 Q40 220 80 240 T160 240 T240 240 L240 260 L0 260 Z" fill="#AECEF2" />
      </svg>

      {/* Other pins (competitors) */}
      <Pin left="18%" top="35%" tone="muted" />
      <Pin left="68%" top="62%" tone="muted" />
      <Pin left="82%" top="32%" tone="muted" />

      {/* Highlighted pin (the business) */}
      <div className="absolute left-[40%] top-[42%] -translate-x-1/2 -translate-y-full">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-full h-6 w-6 -translate-x-1/2 -translate-y-3 rounded-full bg-primary/30 blur-md"
        />
        <svg viewBox="0 0 32 40" className="relative h-10 w-8" aria-hidden="true">
          <path
            d="M16 0C7 0 0 7 0 16c0 12 16 24 16 24s16-12 16-24C32 7 25 0 16 0Z"
            fill="#1A73E8"
          />
          <circle cx="16" cy="16" r="6" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Business card preview */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2.5 rounded-xl border border-line bg-surface p-2.5 shadow-lg">
        <div className="h-10 w-10 shrink-0 rounded-md bg-gradient-to-br from-mesh-1 to-mesh-2" />
        <div className="min-w-0 flex-1">
          <div className="h-2 w-28 rounded-sm bg-ink" />
          <div className="mt-1.5 flex items-center gap-1">
            <span className="text-[9px] font-bold text-ink">4.9</span>
            <span className="flex gap-0.5" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} viewBox="0 0 24 24" className="h-2 w-2 text-[#F4B400]" fill="currentColor">
                  <path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 3Z" />
                </svg>
              ))}
            </span>
            <span className="text-[8px] text-muted">· 0,4 km</span>
          </div>
          <div className="mt-0.5 text-[8px] text-success">Aberto · Fecha 19h</div>
        </div>
      </div>
    </div>
  );
}

function Pin({ left, top, tone }: { left: string; top: string; tone: "muted" | "primary" }) {
  const color = tone === "muted" ? "#9AA0A6" : "#1A73E8";
  return (
    <svg
      viewBox="0 0 32 40"
      className="absolute h-5 w-4"
      style={{ left, top, transform: "translate(-50%, -100%)" }}
      aria-hidden="true"
    >
      <path
        d="M16 0C7 0 0 7 0 16c0 12 16 24 16 24s16-12 16-24C32 7 25 0 16 0Z"
        fill={color}
      />
      <circle cx="16" cy="16" r="5" fill="#FFFFFF" />
    </svg>
  );
}
