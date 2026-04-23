import Link from "next/link";
import type { ReactNode } from "react";
import BrandLogo from "./BrandLogo";
import Footer from "./Footer";

interface Props {
  title: string;
  updatedAt: string;
  children: ReactNode;
}

export default function LegalLayout({ title, updatedAt, children }: Props) {
  return (
    <>
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 md:px-6 md:py-5">
          <Link
            href="/"
            aria-label="Perfiliza — página inicial"
            className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <BrandLogo />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-muted hover:text-ink"
          >
            ← Voltar
          </Link>
        </div>
      </header>
      <main className="bg-surface">
        <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          <h1 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-muted">
            Última atualização: {updatedAt}
          </p>
          <div className="prose-legal mt-10 space-y-6 text-ink">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
