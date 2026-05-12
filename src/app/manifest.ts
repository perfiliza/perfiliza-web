import type { MetadataRoute } from "next";
import {
  BRAND_DESCRIPTION,
  BRAND_NAME,
  BRAND_THEME_COLOR,
  SITE_LANGUAGE,
} from "@/lib/seo/constants";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BRAND_NAME} — Veja seu site pronto antes de pagar`,
    short_name: BRAND_NAME,
    description: BRAND_DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#FFFFFF",
    theme_color: BRAND_THEME_COLOR,
    lang: SITE_LANGUAGE,
    dir: "ltr",
    categories: ["business", "productivity", "marketing"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
