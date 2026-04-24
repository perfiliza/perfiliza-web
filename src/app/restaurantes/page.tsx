import type { Metadata } from "next";
import NichePage from "@/components/NichePage";
import JsonLd from "@/components/seo/JsonLd";
import { restaurantes } from "@/content/restaurantes";
import { faqCommon } from "@/content/_shared";
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: restaurantes.metadata.title,
  description: restaurantes.metadata.description,
  keywords: restaurantes.metadata.keywords,
  alternates: { canonical: restaurantes.metadata.path },
  openGraph: {
    title: restaurantes.metadata.title,
    description: restaurantes.metadata.description,
    url: restaurantes.metadata.path,
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: restaurantes.metadata.title,
    description: restaurantes.metadata.description,
  },
};

export default function RestaurantesPage() {
  const path = restaurantes.metadata.path;
  const breadcrumb = breadcrumbSchema(
    [
      { name: "Início", path: "/" },
      { name: "Restaurantes", path },
    ],
    path
  );
  const ldData = [
    webPageSchema({
      title: restaurantes.metadata.title,
      description: restaurantes.metadata.description,
      path,
      breadcrumbId: `${breadcrumb["@id"]}`,
    }),
    serviceSchema({
      name: "Gestão de Google Meu Negócio para restaurantes",
      description: restaurantes.metadata.description,
      path,
      audience: "Restaurantes, bares e estabelecimentos de alimentação",
      serviceType:
        "Gerenciamento de Perfil Google Meu Negócio para restaurante",
    }),
    breadcrumb,
    faqPageSchema([...faqCommon, ...restaurantes.faqExtra], path),
  ];
  return (
    <>
      <NichePage content={restaurantes} />
      <JsonLd id="ld-restaurantes" data={ldData} />
    </>
  );
}
