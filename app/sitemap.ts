import type { MetadataRoute } from "next";
import { loadCurrentWeek } from "@/lib/live-week";
import { entries, maps, places, siteUrl } from "@/lib/site";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const week = await loadCurrentWeek();
  const lastModified = new Date();
  const paths = [
    "",
    "/maps",
    "/pack",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/updates",
    "/keys",
    "/conditions",
    ...week.trials.map((trial) => `/trials/${trial.slug}`),
    ...maps.map((map) => `/maps/${map.slug}`),
    ...entries.map((entry) => `/keys/${entry.slug}`),
    ...places.map((place) => `/locations/${place.slug}`),
  ];
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
  }));
}
