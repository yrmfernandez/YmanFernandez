import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.role}`,
    short_name: site.shortName,
    description: site.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#f0f1ec",
    theme_color: "#2f6f5e",
    icons: [{ src: "/icon", sizes: "32x32", type: "image/png" }],
  };
}
