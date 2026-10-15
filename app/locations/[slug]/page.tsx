import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { entries, mapBySlug, placeBySlug, places, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return places.map((place) => ({ slug: place.slug }));
}

export function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const place = placeBySlug(slug);
    if (!place) return { title: "Door" };
    const map = mapBySlug(place.mapSlug);
    return pageMetadata({
      title: `${place.name} location`,
      description: `${place.name} on ${map?.name ?? "the map"}. ${place.where}`,
      path: `/locations/${place.slug}`,
    });
  });
}

export default async function LocationPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const place = placeBySlug(slug);
  if (!place) notFound();
  const map = mapBySlug(place.mapSlug);
  const keys = entries.filter((entry) => entry.placeSlug === place.slug);

  return (
    <>
      <p className="crumbs">
        <Link href="/maps">Maps</Link>
        {" / "}
        <Link href={`/maps/${place.mapSlug}`}>{map?.name}</Link>
        {" / "}
        {place.name}
      </p>
      <p className="kicker">
        <span className="stamp">Checked {site.checked}</span>
        <span className="chip">{site.patch}</span>
      </p>
      <h1>{place.name}</h1>
      <div className="answer">
        <p>
          <strong>{place.where}</strong>
        </p>
      </div>
      <AdSlot />
      <section className="panel">
        <p>{place.note}</p>
        <h2>Keys for this door</h2>
        <ul className="related">
          {keys.map((entry) => (
            <li key={entry.slug}>
              <Link href={`/keys/${entry.slug}`}>
                {entry.name} — {entry.opens}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
