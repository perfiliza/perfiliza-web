"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BrandLogo from "./BrandLogo";

const NAV = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    function onDocClick(event: MouseEvent) {
      const target = event.target as Node;
      if (
        panelRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    }

    function onEsc(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/85 backdrop-blur supports-[backdrop-filter]:bg-surface/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 md:px-6 md:py-3">
        <Link
          href="/"
          aria-label="Perfiliza — página inicial"
          className="shrink-0 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <BrandLogo />
        </Link>

        <div className="relative">
          <button
            ref={buttonRef}
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((prev) => !prev)}
            className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <BurgerMorph open={open} />
          </button>

          {/* Mobile backdrop */}
          <div
            aria-hidden="true"
            className={`fixed inset-0 z-[-1] bg-ink-900/20 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
              open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
            }`}
            onClick={() => setOpen(false)}
          />

          <div
            ref={panelRef}
            id="site-menu"
            role="menu"
            aria-hidden={!open}
            className={`absolute right-0 top-[calc(100%+0.5rem)] w-64 origin-top-right overflow-hidden rounded-2xl border border-line bg-surface shadow-lg transition-all duration-150 ${
              open
                ? "pointer-events-auto scale-100 opacity-100"
                : "pointer-events-none scale-95 opacity-0"
            }`}
          >
            <nav aria-label="Seções" className="flex flex-col py-2">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-surface-alt"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function BurgerMorph({ open }: { open: boolean }) {
  const bar =
    "absolute left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-current transition-transform duration-200 ease-out";
  return (
    <span aria-hidden="true" className="relative block h-5 w-5">
      <span
        className={bar}
        style={{
          top: open ? "50%" : "30%",
          transform: open
            ? "translate(-50%, -50%) rotate(45deg)"
            : "translate(-50%, 0)",
        }}
      />
      <span
        className={`${bar} transition-opacity duration-150`}
        style={{
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: open ? 0 : 1,
        }}
      />
      <span
        className={bar}
        style={{
          top: open ? "50%" : "70%",
          transform: open
            ? "translate(-50%, -50%) rotate(-45deg)"
            : "translate(-50%, 0)",
        }}
      />
    </span>
  );
}
