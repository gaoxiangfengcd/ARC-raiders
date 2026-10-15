import type { Metadata } from "next";
import Link from "next/link";
import { conditions, scheduleNote } from "@/lib/conditions";
import { loadCurrentWeek } from "@/lib/live-week";
import { buildBoard } from "@/lib/raids";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 3600;

export const metadata: Metadata = pageMetadata({
  title: "Map conditions",
  description:
    "Conditions that help this week's raids, and what each ARC Raiders map condition changes.",
  path: "/conditions",
});

export default async function ConditionsPage() {
  const week = await loadCurrentWeek();
  const board = buildBoard(week);
  const plants = board.some((row) => row.id === "plants");
  const needsTargeters = board.some((row) => row.conditionSlugs.includes("hurricane"));
  const minor = conditions.filter((condition) => condition.tier === "Minor");
  const major = conditions.filter((condition) => condition.tier === "Major");
  return (
    <>
      <p className="crumbs">
        <Link href="/">This week</Link>
      </p>
      <h1>Map conditions</h1>
      <p className="lede">Use the condition that helps this week&apos;s raid.</p>
      <section className="panel">
        <h2>This week</h2>
        <ul>
          {plants ? (
            <li>
              <Link href="/#plants">Plant raid</Link>
              {" on Buried City · "}
              <Link href="#lush-blooms">Lush Blooms</Link>
              {": plants are denser."}
            </li>
          ) : null}
          {needsTargeters ? (
            <li>
              <Link href="/#bully-gun">Bully raid</Link>
              {", when you still need to loot Skulker Targeters: "}
              <Link href="#hurricane">Hurricane</Link>
              {", "}
              <Link href="#electromagnetic-storm">Electromagnetic Storm</Link>
              {", "}
              <Link href="#cold-snap">Cold Snap</Link>
              .
            </li>
          ) : null}
          <li>
            <Link href="/">This week&apos;s board</Link>
            {", if you are deciding whether keys are worth a slot: "}
            <Link href="#night-raid">Night Raid</Link>.
          </li>
        </ul>
        <p className="muted">{scheduleNote}</p>
      </section>
      <h2>Minor</h2>
      <p className="muted">
        Minor conditions add an event or a loot type. Some trials can only be
        finished during a named minor condition.
      </p>
      <ConditionList rows={minor} />
      <h2>Major</h2>
      <p className="muted">
        Major conditions change the raid itself: weather, extracts, or a job
        you have to finish.
      </p>
      <ConditionList rows={major} />
      <div className="panel">
        <h2>Locked Gate codes</h2>
        <p>
          When Locked Gate is the condition on The Blue Gate, the four codes
          come from Code Printers and expire if you extract:
        </p>
        <ul className="related">
          <li>
            <Link href="/keys/ancient-fort-security-code">Ancient Fort Security Code</Link>
          </li>
          <li>
            <Link href="/keys/pilgrims-peak-security-code">Pilgrim&apos;s Peak Security Code</Link>
          </li>
          <li>
            <Link href="/keys/raiders-refuge-security-code">Raider&apos;s Refuge Security Code</Link>
          </li>
          <li>
            <Link href="/keys/reinforced-reception-security-code">
              Reinforced Reception Security Code
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

function ConditionList({
  rows,
}: {
  rows: { slug: string; name: string; summary: string }[];
}) {
  return (
    <div className="grid">
      {rows.map((condition) => (
        <article className="card" key={condition.slug} id={condition.slug}>
          <h3>{condition.name}</h3>
          <p className="muted">{condition.summary}</p>
        </article>
      ))}
    </div>
  );
}
