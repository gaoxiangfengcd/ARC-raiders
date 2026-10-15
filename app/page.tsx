import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { JsonLd } from "@/components/JsonLd";
import { RaidBoard } from "@/components/RaidBoard";
import { WeekBanner } from "@/components/WeekBanner";
import { loadCurrentWeek } from "@/lib/live-week";
import { buildBoard } from "@/lib/raids";
import { pageMetadata } from "@/lib/seo";
import { site, siteUrl } from "@/lib/site";
import { scoring } from "@/lib/trials";

export const revalidate = 3600;

export const metadata: Metadata = pageMetadata({
  title: "ARC Raiders trials this week",
  description: site.description,
  path: "/",
});

export default async function HomePage() {
  const week = await loadCurrentWeek();
  const board = buildBoard(week);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `ARC Raiders trials ${week.starts} to ${week.ends}`,
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: week.trials.length,
          itemListElement: week.trials.map((trial, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: trial.name,
            url: `${siteUrl}/trials/${trial.slug}`,
          })),
        }}
      />
      <WeekBanner ends={week.ends} source={week.source} checked={site.checked} />
      <p className="kicker">
        <span className="stamp">
          {week.starts} – {week.ends}
        </span>
        <span className="chip">{week.season}</span>
        <span className="chip">{week.label}</span>
        {week.source === "saved" ? <span className="chip">Saved list</span> : null}
      </p>
      <h1>ARC Raiders trials this week.</h1>
      <p className="lede">
        {week.starts} through {week.ends}. Five challenges. Your best score counts when you extract.
      </p>
      <RaidBoard rows={board} />
      <div className="panel">
        <h2>Scoring</h2>
        <ul>
          {scoring.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="muted">
          On Monday, rank inside your division can move you up or down. A division is 100 raiders who scored at
          least one point that week.
        </p>
      </div>
      <AdSlot />
    </>
  );
}
