import type { Metadata } from "next";
import type { PackGear } from "@/components/KeyTable";
import { KeyTable } from "@/components/KeyTable";
import { loadCurrentWeek } from "@/lib/live-week";
import { buildBoard, trialName } from "@/lib/raids";
import { pageMetadata } from "@/lib/seo";
import { entries, mapLabel, maps, site } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = pageMetadata({
  title: "Pack",
  description:
    "What to bring this week: keys, codes, the Bantam, Skulker Targeters, and the Raider Hatch Key.",
  path: "/pack",
});

export default async function PackPage() {
  const week = await loadCurrentWeek();
  const names = new Set(buildBoard(week).flatMap((row) => row.trials.map((trial) => trial.name)));
  const bantamOn = names.has(trialName.bantam);
  const targeterOn = names.has(trialName.targeter);
  const bantamTrial = week.trials.find((trial) => trial.name === trialName.bantam);
  const targeterTrial = week.trials.find((trial) => trial.name === trialName.targeter);
  const gear: PackGear[] = [
    {
      slug: "bantam",
      name: "Bantam",
      href: bantamTrial ? `/trials/${bantamTrial.slug}` : undefined,
      map: "No map named",
      mapSlugs: [],
      verdict: bantamOn ? "Use this raid" : "Leave unused",
      note: "Craft Bantam I at Gunsmith 1 after the blueprint: 4 Simple Gun Parts and 4 Mechanical Components. Bring Heavy Ammo.",
      tone: bantamOn ? "in-raid" : "unconfirmed",
    },
    {
      slug: "skulker-targeter",
      name: "Skulker Targeter",
      href: targeterTrial ? `/trials/${targeterTrial.slug}` : undefined,
      map: "No map named",
      mapSlugs: [],
      verdict: targeterOn ? "Use this raid" : "Leave unused",
      note: "Scavenge from Skulkers or Couriers. Stack of 3. Deploy it so its damage counts.",
      tone: targeterOn ? "in-raid" : "unconfirmed",
    },
    {
      slug: "raider-hatch-key",
      name: "Raider Hatch Key",
      href: "/keys/raider-hatch-key",
      map: "All maps",
      mapSlugs: maps.map((map) => map.slug),
      verdict:
        "Burn it on a Raider Hatch during a minor condition. During Locked Gate there is no active hatch, so it cannot extract you.",
      note: "Single-use.",
      tone: "in-raid",
    },
  ];
  const rows = entries.map((entry) => ({ ...entry, map: mapLabel(entry) }));

  return (
    <>
      <p className="kicker">
        <span className="stamp">Checked {site.checked}</span>
        <span className="chip">{week.label}</span>
      </p>
      <h1>Pack</h1>
      <p className="lede">
        Search a key, a code, or the gear this week&apos;s raids ask for. The verdict is what you do with it.
      </p>
      <KeyTable
        rows={rows}
        maps={maps.map((map) => ({ slug: map.slug, name: map.name }))}
        gear={gear}
        mode="pack"
        omitSlugs={["raider-hatch-key"]}
        placeholder="Search the pack"
      />
    </>
  );
}
