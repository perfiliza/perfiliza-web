import type { Metadata, Viewport } from "next";
import { Geist, Lora } from "next/font/google";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";
import {
  BRAND_DESCRIPTION,
  BRAND_EMAIL,
  BRAND_NAME,
  BRAND_THEME_COLOR,
  SITE_LOCALE,
  SITE_URL,
} from "@/lib/seo/constants";
import { buildWaUrl } from "@/lib/whatsapp";
import "./globals.css";

function formatWhatsAppDisplay(raw: string | undefined): string {
  if (!raw) return "WhatsApp";
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 13 && digits.startsWith("55")) {
    const ddd = digits.slice(2, 4);
    const part1 = digits.slice(4, 9);
    const part2 = digits.slice(9, 13);
    return `+55 (${ddd}) ${part1}-${part2}`;
  }
  return "WhatsApp";
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND_NAME} — Perfil no Google que traz cliente de verdade`,
    template: `%s · ${BRAND_NAME}`,
  },
  description: BRAND_DESCRIPTION,
  applicationName: BRAND_NAME,
  authors: [{ name: BRAND_NAME, url: SITE_URL }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  category: "business",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: `${BRAND_NAME} — Seu Perfil no Google trabalhando pra você`,
    description:
      "A gente cuida do seu Perfil da Empresa no Google pra você aparecer quando o cliente procura. Você só paga depois que entrega.",
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: SITE_LOCALE,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_NAME,
    description: BRAND_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: BRAND_THEME_COLOR,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${lora.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">
        {children}
        <footer className="mt-auto border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 text-sm text-muted">
            <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-10">
              <div className="flex flex-col gap-2">
                <p className="font-display text-lg text-ink">{BRAND_NAME}</p>
                <p>
                  Perfil da Empresa no Google
                  <br />
                  para PMEs brasileiras.
                </p>
              </div>
              <nav aria-label="Links do rodapé">
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="#hero" className="hover:text-ink hover:underline underline-offset-2">
                      Início
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-ink hover:underline underline-offset-2">
                      Serviços
                    </a>
                  </li>
                  <li>
                    <a href="#como-funciona" className="hover:text-ink hover:underline underline-offset-2">
                      Como funciona
                    </a>
                  </li>
                  <li>
                    <a href="/privacidade" className="hover:text-ink hover:underline underline-offset-2">
                      Política de privacidade
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-ink">Contato</p>
                <a
                  href={`mailto:${BRAND_EMAIL}`}
                  className="hover:text-ink hover:underline underline-offset-2"
                >
                  {BRAND_EMAIL}
                </a>
                <a
                  href={buildWaUrl("Olá! Vim do site da Perfiliza.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp"
                  data-cta-section="footer"
                  className="hover:text-ink hover:underline underline-offset-2"
                >
                  WhatsApp: {formatWhatsAppDisplay(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER)}
                </a>
              </div>
            </div>
            <p className="mt-8 border-t border-line pt-6 text-center">
              © {new Date().getFullYear()} {BRAND_NAME} · Todos os direitos reservados
            </p>
          </div>
        </footer>
        <GoogleTagManager />
      </body>
    </html>
  );
}
