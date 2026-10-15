import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import {
  entries,
  entryBySlug,
  mapBySlug,
  mapLabel,
  placeBySlug,
  site,
  statusLabel,
} from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return entries.map((entry) => ({ slug: entry.slug }));
}

export function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const entry = entryBySlug(slug);
    if (!entry) return { title: "Key" };
    return pageMetadata({
      title: `${entry.name} — what it opens`,
      description: `${entry.name} opens ${entry.opens} ${entry.where}`,
      path: `/keys/${entry.slug}`,
    });
  });
}

export default async function KeyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = entryBySlug(slug);
  if (!entry) notFound();
  const place = placeBySlug(entry.placeSlug);
  const related = entries
    .filter((item) => item.slug !== entry.slug && item.mapSlugs.some((slug) => entry.mapSlugs.includes(slug)))
    .filter((item) => item.slug !== "raider-hatch-key");
  const dead = entry.status === "dead";

  return (
    <>
      <p className="crumbs">
        <Link href="/pack">Pack</Link>
        {" / "}
        {entry.mapSlugs.length === 1 ? (
          <Link href={`/maps/${entry.mapSlugs[0]}`}>{mapBySlug(entry.mapSlugs[0])?.name}</Link>
        ) : (
          <Link href="/maps">Maps</Link>
        )}
      </p>
      <p className="kicker">
        <span className={`badge ${entry.status}`}>{statusLabel[entry.status]}</span>
        <span className="stamp">Checked {site.checked}</span>
        <span className="chip">{site.patch}</span>
      </p>
      <h1>{entry.name}</h1>
      <div className="answer">
        <p>
          <strong>{dead ? "Does not work." : entry.opens}</strong> {entry.validity}
        </p>
      </div>
      <AdSlot />
      <div className="split">
        <section className="panel">
          <h2>What the item text says</h2>
          <dl className="facts">
            <dt>Where</dt>
            <dd>{entry.where}</dd>
            <dt>Map</dt>
            <dd>{mapLabel(entry)}</dd>
            <dt>Place</dt>
            <dd>
              {place ? <Link href={`/locations/${place.slug}`}>{place.name}</Link> : entry.opens}
            </dd>
            <dt>Do not</dt>
            <dd>{entry.hold}</dd>
          </dl>
          {place ? <p>{place.note}</p> : null}
          <p className="muted">
            Checked {site.checked} against the public wiki keys index, the maps
            index, and the Locked Gate page. A door prompt on your screen wins
            if they disagree.
          </p>
        </section>
        <aside className="panel">
          <h2>Same map</h2>
          <ul className="related">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/keys/${item.slug}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}
