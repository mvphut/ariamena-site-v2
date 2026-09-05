import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const routes = ["", "/capabilities", "/industries", "/work", "/method", "/responsible-data", "/about", "/contact", "/privacy", "/terms", "/accessibility"];
  const now = new Date();
  return routes.map((r) => ({ url: `${base}${r}`, lastModified: now, changeFrequency: r === "" ? "weekly" : "monthly", priority: r === "" ? 1 : r === "/contact" ? 0.8 : 0.6 }));
}
