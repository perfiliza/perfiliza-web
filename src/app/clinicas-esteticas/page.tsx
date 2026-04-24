import type { Metadata } from "next";
import NichePage from "@/components/NichePage";
import JsonLd from "@/components/seo/JsonLd";
import { estetica } from "@/content/estetica";
import { faqCommon } from "@/content/_shared";
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: estetica.metadata.title,
  description: estetica.metadata.description,
  keywords: estetica.metadata.keywords,
  alternates: { canonical: estetica.metadata.path },
  openGraph: {
    title: estetica.metadata.title,
    description: estetica.metadata.description,
    url: estetica.metadata.path,
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: estetica.metadata.title,
    description: estetica.metadata.description,
  },
};

export default function ClinicasEsteticasPage() {
  const path = estetica.metadata.path;
  const breadcrumb = breadcrumbSchema(
    [
      { name: "Início", path: "/" },
      { name: "Clínicas de estética", path },
    ],
    path
  );
  const ldData = [
    webPageSchema({
      title: estetica.metadata.title,
      description: estetica.metadata.description,
      path,
      breadcrumbId: `${breadcrumb["@id"]}`,
    }),
    serviceSchema({
      name: "Gestão de Google Meu Negócio para clínicas de estética",
      description: estetica.metadata.description,
      path,
      audience: "Clínicas de estética e centros de beleza",
      serviceType:
        "Gerenciamento de Perfil Google Meu Negócio para clínica de estética",
    }),
    breadcrumb,
    faqPageSchema([...faqCommon, ...estetica.faqExtra], path),
  ];
  return (
    <>
      <NichePage content={estetica} />
      <JsonLd id="ld-estetica" data={ldData} />
    </>
  );
}
