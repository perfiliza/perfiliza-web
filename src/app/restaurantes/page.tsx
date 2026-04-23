import type { Metadata } from "next";
import NichePage from "@/components/NichePage";
import { restaurantes } from "@/content/restaurantes";

export const metadata: Metadata = {
  title: restaurantes.metadata.title,
  description: restaurantes.metadata.description,
  alternates: { canonical: restaurantes.metadata.path },
  openGraph: {
    title: restaurantes.metadata.title,
    description: restaurantes.metadata.description,
    url: restaurantes.metadata.path,
  },
};

export default function RestaurantesPage() {
  return <NichePage content={restaurantes} />;
}
