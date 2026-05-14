import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://akilaexecutive.com";

const ROUTES: { path: string; changefreq: string; priority: string }[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/diagnostico", changefreq: "monthly", priority: "0.9" },
  { path: "/reposicionamento", changefreq: "monthly", priority: "0.9" },
  { path: "/mentoria-executiva", changefreq: "monthly", priority: "0.9" },
  { path: "/mentoria-negocios", changefreq: "monthly", priority: "0.9" },
  { path: "/imersao", changefreq: "monthly", priority: "0.8" },
  { path: "/comunicador", changefreq: "monthly", priority: "0.8" },
  { path: "/palestrante", changefreq: "monthly", priority: "0.8" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = ROUTES.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
