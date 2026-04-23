import type { Metadata } from "next";
import NichePage from "@/components/NichePage";
import { odonto } from "@/content/odonto";

export const metadata: Metadata = {
  title: odonto.metadata.title,
  description: odonto.metadata.description,
  alternates: { canonical: odonto.metadata.path },
  openGraph: {
    title: odonto.metadata.title,
    description: odonto.metadata.description,
    url: odonto.metadata.path,
  },
};

export default function ClinicasOdontologicasPage() {
  return <NichePage content={odonto} />;
}
