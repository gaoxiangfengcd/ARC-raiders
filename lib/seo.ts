import type { Metadata } from "next";
import { site } from "@/lib/site";

function clip(text: string, max = 160) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trimEnd()}…`;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const summary = clip(description);
  const socialTitle = `${title} · ${site.name}`;
  return {
    title: path === "/" ? { absolute: socialTitle } : title,
    description: summary,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description: summary,
      url: path,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description: summary,
    },
  };
}
