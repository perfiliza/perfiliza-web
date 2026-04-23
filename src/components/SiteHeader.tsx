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
    <header className="sticky top-0 z-30 border-b border-line bg-surface/85 backdrop-blur supports-[backdrop-filter]:bg-surface/75">
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {open ? <CloseIcon /> : <BurgerIcon />}
          </button>

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

function BurgerIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 6l12 12M6 18L18 6" />
    </svg>
  );
}
