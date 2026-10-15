import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { KeyTable } from "@/components/KeyTable";
import { entries, mapLabel, maps, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Keys and security codes",
  description:
    "ARC Raiders keys, hotel cards, and Locked Gate security codes, with when each one stops working.",
  path: "/keys",
});

export default function KeysPage() {
  const rows = entries.map((entry) => ({ ...entry, map: mapLabel(entry) }));
  return (
    <>
      <p className="kicker">
        <span className="stamp">Checked {site.checked}</span>
        <span className="chip">{site.patch}</span>
        <span className="chip">{entries.length} keys and codes</span>
      </p>
      <h1>Which key opens that door.</h1>
      <p className="lede">
        The <Link href="/pack">pack</Link> is where you decide what to bring.
        This page is the long index: every key, hotel card, and security code.
      </p>
      <div className="answer">
        <p>
          Keys are single-use. A security code dies if you extract with it. A
          normal key does not expire on a date. It is spent when the door
          accepts it.
        </p>
      </div>
      <AdSlot />
      <h2 id="maps">Maps</h2>
      <div className="grid">
        {maps.map((map) => (
          <Link className="card" key={map.slug} href={`/maps/${map.slug}`}>
            <div className="idx">{map.unlock}</div>
            <h3>{map.name}</h3>
            <p className="muted">{map.blurb}</p>
          </Link>
        ))}
      </div>
      <h2 id="keys">Every key</h2>
      <p className="muted">
        Names follow the wiki item list. Pendola Pass Observatory Key and
        Emperor Gateway Conduit are included from their item pages; they are
        missing from that index.
      </p>
      <KeyTable rows={rows} maps={maps.map((m) => ({ slug: m.slug, name: m.name }))} />
    </>
  );
}
