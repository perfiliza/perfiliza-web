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

function MapPinHouseIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7 sm:h-8 sm:w-8 text-primary"
    >
      <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
      <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
      <path d="M18 22v-3" />
      <circle cx="10" cy="10" r="3" />
    </svg>
  );
}

function formatWhatsAppDisplay(raw: string | undefined): string {
  if (!raw) return "WhatsApp";
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 13 && digits.startsWith("55")) {
    const ddd = digits.slice(2, 4);
    const part1 = digits.slice(4, 9);
    const part2 = digits.slice(9, 13);
    return `${ddd} ${part1}-${part2}`;
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
        <header className="border-b border-line bg-bg">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 sm:py-5">
            <a
              href="/"
              aria-label={`${BRAND_NAME} — página inicial`}
              className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-md"
            >
              <MapPinHouseIcon />
              <span className="font-display text-2xl sm:text-3xl text-ink">
                {BRAND_NAME}
              </span>
            </a>
          </div>
        </header>
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
