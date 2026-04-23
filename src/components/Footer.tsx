import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { buildWaUrl } from "@/lib/whatsapp";

interface Props {
  nicheDisclaimer?: string;
}

export default function Footer({ nicheDisclaimer }: Props) {
  const year = new Date().getFullYear();
  const footerWaUrl = buildWaUrl(
    "Oi! Vim pelo rodapé do site da Perfiliza. Quero o diagnóstico gratuito do meu Google.",
  );

  return (
    <footer className="bg-surface border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <BrandLogo />
            <p className="mt-3 text-sm text-muted">
              Cuidamos do seu Google.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Nichos atendidos</p>
            <ul className="mt-2 text-sm text-muted">
              <li>
                <Link
                  href="/clinicas-odontologicas"
                  className="block py-1.5 hover:text-ink"
                >
                  Clínicas odontológicas
                </Link>
              </li>
              <li>
                <Link
                  href="/clinicas-esteticas"
                  className="block py-1.5 hover:text-ink"
                >
                  Clínicas de estética
                </Link>
              </li>
              <li>
                <Link
                  href="/restaurantes"
                  className="block py-1.5 hover:text-ink"
                >
                  Restaurantes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Legal e contato</p>
            <ul className="mt-2 text-sm text-muted">
              <li>
                <a
                  href={footerWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-1.5 hover:text-ink"
                >
                  Falar no WhatsApp
                </a>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="block py-1.5 hover:text-ink"
                >
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="block py-1.5 hover:text-ink">
                  Termos de uso
                </Link>
              </li>
              <li className="pt-2">
                LGPD: pedidos de exclusão em{" "}
                <a
                  href="mailto:contato@perfiliza.com"
                  className="inline-block py-1 hover:text-ink"
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
