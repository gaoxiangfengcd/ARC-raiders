import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { loadCurrentWeek } from "@/lib/live-week";
import { buildBoard, raidsForMap } from "@/lib/raids";
import { pageMetadata } from "@/lib/seo";
import { entriesForMap, mapBySlug, maps, packVerdict, places, site } from "@/lib/site";

type Params = { slug: string };

export const revalidate = 3600;

export function generateStaticParams() {
  return maps.map((map) => ({ slug: map.slug }));
}

export function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const map = mapBySlug(slug);
    if (!map) return { title: "Map" };
    return pageMetadata({
      title: map.name,
      description: `${map.name}. Unlock: ${map.unlock}. Raid ${map.raid}.`,
      path: `/maps/${map.slug}`,
    });
  });
}

export default async function MapPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const map = mapBySlug(slug);
  if (!map) notFound();
  const week = await loadCurrentWeek();
  const here = raidsForMap(buildBoard(week), slug);
  const keys = entriesForMap(slug);
  const doors = places.filter((place) => place.mapSlug === slug);
  const plantHere = here.some((row) => row.id === "plants");

  return (
    <>
      <p className="crumbs">
        <Link href="/maps">Maps</Link>
        {" / "}
        {map.name}
      </p>
      <p className="kicker">
        <span className="stamp">Checked {site.checked}</span>
        <span className="chip">{map.raid}</span>
      </p>
      <h1>{map.name}</h1>
      <p className="lede">{map.blurb}</p>
      <section>
        <h2>This week</h2>
        {here.length === 0 ? (
          <p>No trial sends you here this week.</p>
        ) : (
          <ul className="related">
            {here.map((row) => (
              <li key={row.id}>
                <Link href={`/#${row.id}`}>{row.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="panel">
        <dl className="facts">
          <dt>Unlock</dt>
          <dd>{map.unlock}</dd>
          <dt>Raid length</dt>
          <dd>{map.raid}</dd>
        </dl>
        {slug === "buried-city" ? (
          <p>
            <Link href="/conditions#lush-blooms">Lush Blooms</Link>
            {plantHere
              ? " makes plants denser. That is the condition for the plant raid."
              : " makes plants denser."}
          </p>
        ) : null}
        {slug === "the-blue-gate" ? (
          <p>
            <Link href="/conditions#locked-gate">Locked Gate</Link> is the condition where the four
            security codes do anything. The raid runs 40 minutes. The keys index limits the Raider
            Hatch Key to minor conditions, and Locked Gate has no active Raider Hatch, so the key
            cannot extract you.
          </p>
        ) : null}
      </section>
      <AdSlot />
      <h2>Keys on this map</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Verdict</th>
              <th>Opens</th>
            </tr>
          </thead>
          <tbody>
            {keys.map((entry) => (
              <tr key={entry.slug}>
                <td>
                  <Link href={`/keys/${entry.slug}`}>{entry.name}</Link>
                </td>
                <td>
                  <span className={`badge ${entry.status}`}>{packVerdict[entry.status]}</span>
                </td>
                <td>{entry.opens}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>Doors</h2>
      <div className="grid">
        {doors.map((place) => (
          <Link className="card" key={place.slug} href={`/locations/${place.slug}`}>
            <h3>{place.name}</h3>
            <p className="muted">{place.where}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
