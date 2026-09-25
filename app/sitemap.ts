import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/paginas-web", priority: 0.95, changeFrequency: "weekly" },
    { path: "/crm", priority: 0.8, changeFrequency: "monthly" },
    { path: "/marketing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/clientes", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/nosotros", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacidad", priority: 0.3, changeFrequency: "monthly" },
  ];

  return [
    ...pages.map((p) => ({
      url: `${SITE_URL}${p.path || "/"}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T12:00:00`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
