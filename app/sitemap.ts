import { SITE_URL } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    "",
    "/paginas-web",
    "/crear-pagina-web-honduras",
    "/nexus-honduras",
    "/clientes",
    "/ecommerce",
    "/dashboard",
    "/mivisita",
    "/miporton",
    "/nosotros",
    "/privacidad",
    "/blog",
    "/blog/cuanto-cuesta-pagina-web-honduras",
    "/blog/paginas-web-inmobiliaria-clinica-floristeria",
    "/blog/inteligencia-artificial-negocios-honduras",
    "/blog/como-google-e-ia-eligen-agencia-web",
    "/blog/que-es-nexus-honduras",
  ];

  return paths.map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    lastModified,
    changeFrequency:
      path === "/crear-pagina-web-honduras" ||
      path === "/paginas-web" ||
      path === "/nexus-honduras"
        ? "weekly"
        : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/paginas-web" ||
            path === "/crear-pagina-web-honduras" ||
            path === "/nexus-honduras"
          ? 0.95
          : 0.7,
  }));
}
