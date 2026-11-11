import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import pages from "../seo/pages.json";
import site from "../seo/site.json";

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const page = pages[path as keyof typeof pages];
    const title = page?.title ?? "Página no encontrada | Digitallaws";
    const description =
      page?.description ??
      "La página solicitada no existe. Explora las soluciones de software de Digitallaws.";
    document.title = title;
    document.documentElement.lang = "es-CO";

    function meta(
      attribute: "name" | "property",
      key: string,
      content: string,
    ) {
      let element = document.head.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${key}"]`,
      );
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.append(element);
      }
      element.content = content;
    }

    meta("name", "description", description);
    meta("name", "robots", page ? "index, follow" : "noindex, follow");
    meta("property", "og:title", title);
    meta("property", "og:description", description);
    meta("property", "og:type", "website");
    meta("property", "og:site_name", site.name);
    meta("property", "og:locale", "es_CO");
    meta("name", "twitter:card", "summary");
    meta("name", "twitter:title", title);
    meta("name", "twitter:description", description);

    document.head.querySelector('link[rel="canonical"]')?.remove();
    document.head.querySelector('meta[property="og:url"]')?.remove();
    if (page) {
      const canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = `${site.url}${path}`;
      document.head.append(canonical);
      meta("property", "og:url", canonical.href);
    }

    document.getElementById("organization-schema")?.remove();
    if (page) {
      const schema = document.createElement("script");
      schema.id = "organization-schema";
      schema.type = "application/ld+json";
      schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: `${site.url}/`,
        description:
          "Empresa colombiana de desarrollo de software a medida e integración de sistemas. Desarrolladora de DIMAIL y aliada tecnológica de ALFAMENSAJES.",
      });
      document.head.append(schema);
    }
  }, [pathname]);

  return null;
}
