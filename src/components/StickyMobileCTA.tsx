"use client";

import { useEffect, useState } from "react";
import WhatsAppButton from "./WhatsAppButton";
import type { NicheKey } from "@/types/content";

interface Props {
  waMessage: string;
  landing: NicheKey;
}

export default function StickyMobileCTA({ waMessage, landing }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface transition-transform duration-200 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{
        paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))",
      }}
      aria-hidden={!visible}
    >
      <div className="flex min-h-[56px] items-center justify-between gap-3 px-4 py-2">
        <p className="min-w-0 text-[0.8125rem] font-semibold leading-tight text-ink sm:text-sm">
          Grátis, em 24h.
          <span className="block text-[0.6875rem] font-normal text-muted sm:text-xs">
            Sem cartão, sem fidelidade.
          </span>
        </p>
        <WhatsAppButton
          waMessage={waMessage}
          landing={landing}
          posicao="sticky_mobile"
          size="md"
          className="shrink-0 px-4"
        >
          Quero diagnóstico
        </WhatsAppButton>
      </div>
    </div>
  );
}
