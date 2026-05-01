import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/constants";

const LANDING_MODIFIED = new Date();
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
      url: `${SITE_URL}/privacidade`,
      lastModified: LEGAL_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
