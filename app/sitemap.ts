import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/shop/", "/cart/", "/about/", "/contact/", "/privacy-policy/", "/terms/"];
  const now = new Date();
  return [
    ...routes.map((r) => ({
      url: `${SITE.domain}${r || "/"}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: r === "" ? 1 : 0.8,
    })),
    ...PRODUCTS.map((p) => ({
      url: `${SITE.domain}/product/${p.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
