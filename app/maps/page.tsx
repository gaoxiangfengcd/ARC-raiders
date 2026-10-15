import type { Metadata } from "next";
import Link from "next/link";
import { loadCurrentWeek } from "@/lib/live-week";
import { buildBoard, raidsForMap } from "@/lib/raids";
import { pageMetadata } from "@/lib/seo";
import { maps, site } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = pageMetadata({
  title: "Maps",
  description: "Every ARC Raiders map: unlock, raid length, and which trial sends you there this week.",
  path: "/maps",
});

export default async function MapsPage() {
  const week = await loadCurrentWeek();
  const board = buildBoard(week);
  return (
    <>
      <p className="kicker">
        <span className="stamp">Checked {site.checked}</span>
        <span className="chip">{week.label}</span>
      </p>
      <h1>Maps</h1>
      <p className="lede">Unlock, raid length, and which raid uses the map this week.</p>
      <div className="grid">
        {maps.map((map) => {
          const here = raidsForMap(board, map.slug);
          return (
            <Link className="card" href={`/maps/${map.slug}`} key={map.slug}>
              <h3>{map.name}</h3>
              <p>Unlock: {map.unlock}</p>
              <p className="muted">Raid: {map.raid}</p>
              {here.length === 0 ? (
                <p>No trial sends you here this week.</p>
              ) : (
                <ul className="card-points">
                  {here.map((row) => (
                    <li key={row.id}>{row.title}</li>
                  ))}
                </ul>
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}
