import type { MetadataRoute } from "next";
import { BRAND } from "@/config/brand";
import { ARTICLES, articleHref } from "@/content/articles";

const STATIC = [
  "",
  "/creators",
  "/businesses",
  "/platforms",
  "/api-gateway",
  "/platform",
  "/network",
  "/vaults",
  "/dripscript",
  "/use-cases",
  "/streaming-payroll",
  "/invoice-flows",
  "/treasury-sweeps",
  "/smart-wallets",
  "/tax-reserves",
  "/news",
  "/media-centre",
  "/about-us",
  "/partners",
  "/associations",
  "/careers",
  "/contact",
  "/legal",
  "/privacy-policy",
  "/terms-of-use",
  "/trademarks",
  "/unsolicited-ideas-submission-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...STATIC.map((p) => ({ url: `${BRAND.url}${p}` })),
    ...ARTICLES.map((a) => ({ url: `${BRAND.url}${articleHref(a)}`, lastModified: a.date })),
  ];
}
