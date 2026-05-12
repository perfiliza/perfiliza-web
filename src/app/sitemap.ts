import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/constants";

export const dynamic = "force-static";

const LANDING_MODIFIED = new Date();
const LEGAL_MODIFIED = new Date("2026-05-12");

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
    {
      url: `${SITE_URL}/termos`,
      lastModified: LEGAL_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
