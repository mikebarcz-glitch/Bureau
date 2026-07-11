import type { MetadataRoute } from "next";

const siteUrl = "https://www.thehospitalitybureau.ca";

const routes = [
  "",
  "/services",
  "/experiences",
  "/process",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
