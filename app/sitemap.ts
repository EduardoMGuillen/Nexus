import { SITE_URL } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    "",
    "/paginas-web",
    "/crear-pagina-web-honduras",
    "/clientes",
    "/ecommerce",
    "/dashboard",
    "/mivisita",
  ];

  return paths.map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    lastModified,
    changeFrequency: path === "/crear-pagina-web-honduras" || path === "/paginas-web" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/paginas-web" || path === "/crear-pagina-web-honduras"
          ? 0.95
          : 0.7,
  }));
}
