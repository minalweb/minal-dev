import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/demo/smartphones`, lastModified: new Date() },
    { url: `${base}/demo/fashion`, lastModified: new Date() },
    { url: `${base}/demo/accessories`, lastModified: new Date() },
    { url: `${base}/demo/saas`, lastModified: new Date() },
    { url: `${base}/demo/landing-premium`, lastModified: new Date() },
  ];
}
