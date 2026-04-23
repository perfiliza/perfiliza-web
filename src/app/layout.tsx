import type { Metadata, Viewport } from "next";
import { Geist, Fraunces } from "next/font/google";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MetaPixel from "@/components/analytics/MetaPixel";
import RevealMount from "@/components/visual/RevealMount";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://perfiliza.com"),
  title: {
    default: "Perfiliza — seu Google Meu Negócio cuidado toda semana",
    template: "%s · Perfiliza",
  },
  description:
    "Cuidamos do seu Google Meu Negócio toda semana e ajudamos a IA a te recomendar. Primeiro mês por nossa conta, sem fidelidade.",
  openGraph: {
    title: "Perfiliza",
    description:
      "Cuidamos do seu Google Meu Negócio toda semana e ajudamos a IA a te recomendar. Primeiro mês por nossa conta, sem fidelidade.",
    url: "https://perfiliza.com",
    siteName: "Perfiliza",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfiliza",
    description:
      "Cuidamos do seu Google Meu Negócio toda semana e ajudamos a IA a te recomendar.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A73E8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-surface text-ink font-sans">
        {children}
        <RevealMount />
        <GoogleAnalytics />
        <MetaPixel />
      </body>
    </html>
  );
}
