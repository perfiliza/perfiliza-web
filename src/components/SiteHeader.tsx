import Link from "next/link";
import BrandLogo from "./BrandLogo";
import WhatsAppButton from "./WhatsAppButton";
import type { NicheKey } from "@/types/content";

interface Props {
  waMessage: string;
  landing: NicheKey;
}

const NAV = [
  { href: "#como-funciona", label: "Como funciona", showOnMobile: false },
  { href: "#planos", label: "Planos", showOnMobile: true },
  { href: "#faq", label: "FAQ", showOnMobile: true },
];

export default function SiteHeader({ waMessage, landing }: Props) {
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
        <nav
          aria-label="Seções"
          className="flex items-center gap-0.5 text-sm md:gap-1"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`inline-flex h-10 items-center rounded-full px-2.5 text-[0.8125rem] font-medium text-muted transition-colors hover:text-ink md:px-3 md:text-sm ${
                item.showOnMobile ? "" : "hidden md:inline-flex"
              }`}
            >
              {item.label}
            </a>
          ))}
          <span className="ml-1 hidden lg:inline-flex">
            <WhatsAppButton
              waMessage={waMessage}
              landing={landing}
              posicao="header"
              size="md"
            >
              Começar grátis
            </WhatsAppButton>
          </span>
        </nav>
      </div>
    </header>
  );
}
