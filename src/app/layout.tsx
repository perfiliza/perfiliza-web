import type { Metadata, Viewport } from "next";
import { Geist, Lora } from "next/font/google";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";
import {
  BRAND_DESCRIPTION,
  BRAND_NAME,
  BRAND_THEME_COLOR,
  SITE_LOCALE,
  SITE_URL,
} from "@/lib/seo/constants";
import "./globals.css";

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
    default: `${BRAND_NAME} — Perfil da Empresa no Google que traz cliente`,
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
    title: BRAND_NAME,
    description: BRAND_DESCRIPTION,
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
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-sm text-muted">
            <p>© {new Date().getFullYear()} {BRAND_NAME}. [A DEFINIR — CNPJ/endereço]</p>
            <nav>
              <a href="/privacidade" className="hover:text-ink underline-offset-2 hover:underline">
                Política de privacidade
              </a>
            </nav>
          </div>
        </footer>
        <GoogleTagManager />
      </body>
    </html>
  );
}
