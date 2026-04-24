import type { Metadata } from "next";
import NichePage from "@/components/NichePage";
import JsonLd from "@/components/seo/JsonLd";
import { odonto } from "@/content/odonto";
import { faqCommon } from "@/content/_shared";
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: odonto.metadata.title,
  description: odonto.metadata.description,
  keywords: odonto.metadata.keywords,
  alternates: { canonical: odonto.metadata.path },
  openGraph: {
    title: odonto.metadata.title,
    description: odonto.metadata.description,
    url: odonto.metadata.path,
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: odonto.metadata.title,
    description: odonto.metadata.description,
  },
};

export default function ClinicasOdontologicasPage() {
  const path = odonto.metadata.path;
  const breadcrumb = breadcrumbSchema(
    [
      { name: "Início", path: "/" },
      { name: "Clínicas odontológicas", path },
    ],
    path
  );
  const ldData = [
    webPageSchema({
      title: odonto.metadata.title,
      description: odonto.metadata.description,
      path,
      breadcrumbId: `${breadcrumb["@id"]}`,
    }),
    serviceSchema({
      name: "Gestão de Google Meu Negócio para clínicas odontológicas",
      description: odonto.metadata.description,
      path,
      audience: "Clínicas odontológicas e consultórios de dentistas",
      serviceType:
        "Gerenciamento de Perfil Google Meu Negócio para clínica odontológica",
    }),
    breadcrumb,
    faqPageSchema([...faqCommon, ...odonto.faqExtra], path),
  ];
  return (
    <>
      <NichePage content={odonto} />
      <JsonLd id="ld-odonto" data={ldData} />
    </>
  );
}
