import Link from "next/link";

interface Props {
  nicheDisclaimer?: string;
}

export default function Footer({ nicheDisclaimer }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold text-ink">Perfiliza</p>
            <p className="mt-2 text-sm text-muted">
              Cuidamos do seu Google.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Nichos atendidos</p>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              <li>
                <Link
                  href="/clinicas-odontologicas"
                  className="hover:text-ink"
                >
                  Clínicas odontológicas
                </Link>
              </li>
              <li>
                <Link href="/clinicas-esteticas" className="hover:text-ink">
                  Clínicas de estética
                </Link>
              </li>
              <li>
                <Link href="/restaurantes" className="hover:text-ink">
                  Restaurantes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Legal e contato</p>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              <li>
                <Link href="/privacidade" className="hover:text-ink">
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-ink">
                  Termos de uso
                </Link>
              </li>
              <li className="pt-1">
                LGPD: pedidos de exclusão em{" "}
                <a
                  href="mailto:contato@perfiliza.com"
                  className="hover:text-ink"
                >
                  contato@perfiliza.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        {nicheDisclaimer && (
          <p className="mt-8 border-t border-line pt-6 text-sm text-muted">
            {nicheDisclaimer}
          </p>
        )}
        <p className="mt-8 text-center text-xs text-muted">
          Perfiliza © {year} · perfiliza.com · contato@perfiliza.com
        </p>
      </div>
      {/* Espaço pro StickyMobileCta não cobrir o footer em mobile */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </footer>
  );
}
