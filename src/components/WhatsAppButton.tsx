"use client";

import type { ReactNode } from "react";
import { buildWaUrl } from "@/lib/whatsapp";
import { fireCTAEvents } from "@/lib/tracking";
import type { CtaPosition, NicheKey } from "@/types/content";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

interface Props {
  waMessage: string;
  landing: NicheKey;
  posicao: CtaPosition;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-action";

const variants: Record<Variant, string> = {
  primary: "bg-action text-white hover:bg-[#1FBA58]",
  secondary:
    "bg-white text-ink border border-line hover:bg-surface-alt",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-4 text-sm sm:px-5 sm:text-base",
  lg: "h-12 px-5 text-base sm:h-14 sm:px-7 sm:text-lg",
};

export default function WhatsAppButton({
  waMessage,
  landing,
  posicao,
  variant = "primary",
  size = "lg",
  className = "",
  children,
}: Props) {
  const fallbackHref = buildWaUrl(waMessage);

  return (
    <a
      href={fallbackHref}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp"
      data-cta-position={posicao}
      onClick={(e) => {
        const utms =
          typeof window !== "undefined"
            ? new URLSearchParams(window.location.search)
            : null;
        (e.currentTarget as HTMLAnchorElement).href = buildWaUrl(
          waMessage,
          utms,
        );
        fireCTAEvents({ landing, posicao });
      }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.49 0 .17 5.32.17 11.87c0 2.09.55 4.13 1.59 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.69 1.45h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.23-6.15-3.4-8.44ZM12.05 21.5h-.01a9.6 9.6 0 0 1-4.89-1.34l-.35-.21-3.77.99 1-3.67-.23-.38a9.64 9.64 0 1 1 8.25 4.61Zm5.28-7.22c-.29-.15-1.71-.85-1.98-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.51-.17-.01-.36-.01-.56-.01-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.02.15.19 2.07 3.16 5.02 4.43.7.3 1.25.48 1.67.62.7.22 1.34.19 1.85.12.56-.08 1.71-.7 1.95-1.37.24-.68.24-1.26.17-1.37-.07-.12-.27-.19-.56-.34Z" />
    </svg>
  );
}
