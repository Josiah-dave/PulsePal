import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/_next/",
        "/private/",
        "/temp/",
        "/*.pdf$",
      ],
    },
    sitemap: "https://pulsepal.com/sitemap.xml",
    host: "https://pulsepal.com",
  };
}
