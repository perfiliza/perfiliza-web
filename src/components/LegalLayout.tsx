import Link from "next/link";
import type { ReactNode } from "react";
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
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-bold text-ink">
            Perfiliza
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-muted hover:text-ink"
          >
            ← Voltar à home
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
