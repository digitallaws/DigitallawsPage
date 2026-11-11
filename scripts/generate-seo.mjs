import { mkdir, readFile, writeFile } from "node:fs/promises";
import { render } from "../dist-server/entry-server.js";

const pages = JSON.parse(
  await readFile(new URL("../src/seo/pages.json", import.meta.url), "utf8"),
);
const site = JSON.parse(
  await readFile(new URL("../src/seo/site.json", import.meta.url), "utf8"),
);
const origin = new URL(site.url);
if (origin.protocol !== "https:" || origin.origin !== site.url) {
  throw new Error("El dominio SEO debe ser un origen HTTPS sin barra final.");
}
const escapeXml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const urls = Object.keys(pages)
  .map((path) => `  <url><loc>${escapeXml(`${site.url}${path}`)}</loc></url>`)
  .join("\n");
const template = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
for (const [path, page] of Object.entries(pages)) {
  const html = template
    .replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${page.description}" />`)
    .replace("</head>", `  <link rel="canonical" href="${site.url}${path}" />\n  <meta property="og:title" content="${page.title}" />\n  <meta property="og:description" content="${page.description}" />\n  <meta property="og:type" content="website" />\n  <meta property="og:url" content="${site.url}${path}" />\n  <meta name="twitter:card" content="summary" />\n  <script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:site.name,url:`${site.url}/`})}</script>\n</head>`);
  const outputPath = path === "/" ? new URL("../dist/index.html", import.meta.url) : new URL(`../dist${path}/index.html`, import.meta.url);
  if (path !== "/") await mkdir(new URL(`../dist${path}/`, import.meta.url), { recursive: true });
  await writeFile(outputPath, html);
}
await writeFile(
  new URL("../dist/sitemap.xml", import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
await writeFile(
  new URL("../dist/robots.txt", import.meta.url),
  `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
);
console.log(
  `SEO: robots.txt y sitemap.xml generados con ${Object.keys(pages).length} rutas.`,
);
