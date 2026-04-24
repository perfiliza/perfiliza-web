import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/constants";

const LANDING_MODIFIED = new Date("2026-04-24");
const LEGAL_MODIFIED = new Date("2026-04-23");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: LANDING_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/clinicas-odontologicas`,
      lastModified: LANDING_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/clinicas-esteticas`,
      lastModified: LANDING_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/restaurantes`,
      lastModified: LANDING_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/privacidade`,
      lastModified: LEGAL_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/termos`,
      lastModified: LEGAL_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
