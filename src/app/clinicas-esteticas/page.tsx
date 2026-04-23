import type { Metadata } from "next";
import NichePage from "@/components/NichePage";
import { estetica } from "@/content/estetica";

export const metadata: Metadata = {
  title: estetica.metadata.title,
  description: estetica.metadata.description,
  alternates: { canonical: estetica.metadata.path },
  openGraph: {
    title: estetica.metadata.title,
    description: estetica.metadata.description,
    url: estetica.metadata.path,
  },
};

export default function ClinicasEsteticasPage() {
  return <NichePage content={estetica} />;
}
