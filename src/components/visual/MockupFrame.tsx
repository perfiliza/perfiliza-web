import type { ReactNode } from "react";

type MockupVariant = "phone" | "browser" | "chat" | "maps";
type MockupTone = "light" | "dark";

interface Props {
  variant: MockupVariant;
  ariaLabel: string;
  tone?: MockupTone;
  className?: string;
  children: ReactNode;
}

export default function MockupFrame({
  variant,
  ariaLabel,
  tone = "light",
  className = "",
  children,
}: Props) {
  const isDark = tone === "dark";

  if (variant === "phone") {
    return (
      <div
        role="img"
        aria-label={ariaLabel}
        className={`relative mx-auto aspect-[9/19] w-full max-w-[280px] overflow-hidden rounded-[38px] border border-line bg-ink-900 p-[6px] shadow-[var(--shadow-lift)] ${className}`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-surface">
          {/* Dynamic island */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink-900"
          />
          <div className="h-full w-full">{children}</div>
        </div>
        {/* Side button */}
        <div
          aria-hidden="true"
          className="absolute -right-0.5 top-24 h-12 w-0.5 rounded-full bg-ink-700"
        />
      </div>
    );
  }

  if (variant === "browser") {
    return (
      <div
        role="img"
        aria-label={ariaLabel}
        className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-lift)] ${className}`}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-line bg-surface-alt px-3 py-2">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <div className="ml-3 flex-1 rounded-md bg-surface px-2.5 py-0.5 text-[10px] text-muted">
            business.google.com
          </div>
        </div>
        <div className="relative h-[calc(100%-28px)] w-full overflow-hidden bg-surface">
          {children}
        </div>
      </div>
    );
  }

  if (variant === "chat") {
    return (
      <div
        role="img"
        aria-label={ariaLabel}
        className={`relative aspect-[4/5] w-full overflow-hidden rounded-2xl border shadow-[var(--shadow-lift)] ${
          isDark
            ? "border-ink-700 bg-ink-900"
            : "border-line bg-surface"
        } ${className}`}
      >
        {/* App header */}
        <div
          className={`flex items-center gap-2 border-b px-4 py-3 ${
            isDark ? "border-ink-700" : "border-line"
          }`}
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-mesh-1 to-mesh-3 text-[10px] font-bold text-white">
            AI
          </div>
          <div className={`text-xs font-semibold ${isDark ? "text-white" : "text-ink"}`}>
            ChatGPT
          </div>
          <div className="ml-auto flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            <span className={`text-[10px] ${isDark ? "text-white/60" : "text-muted"}`}>
              online
            </span>
          </div>
        </div>
        <div className="relative h-[calc(100%-49px)] w-full overflow-hidden">
          {children}
        </div>
      </div>
    );
  }

  // maps
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-lift)] ${className}`}
    >
      {/* Maps search bar */}
      <div className="absolute left-3 right-3 top-3 z-10 flex items-center gap-2 rounded-full bg-surface px-3 py-2 shadow-md">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-muted" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-4.3-4.3" />
        </svg>
        <span className="truncate text-[11px] text-muted">perto de mim</span>
      </div>
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}
