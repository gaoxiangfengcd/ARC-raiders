import type { ListedTrial, ListedWeek } from "@/lib/live-week";

export const trialName = {
  bullies: "Damage Bullies",
  targeter: "Deal Damage using Skulker Targeter",
  bantam: "Damage ARC using a Bantam",
  plants: "Harvest plants",
  commissary: "Open Containers in the Comissary Supermarket",
} as const;

const savedNames = new Set<string>(Object.values(trialName));

export interface BoardTrial {
  slug: string;
  name: string;
}

export interface BoardRow {
  id: string;
  queue: number;
  title: string;
  trials: BoardTrial[];
  map: string;
  mapSlug?: string;
  mapDetail?: string;
  unlock: string;
  bring: string;
  stars: string;
  starsNote?: string;
  extract: string;
  how: string[];
  conditionSlugs: string[];
  conditionNote?: string;
  rankNote?: string;
  footnote?: string;
}

const extract = "The score counts when you extract.";

function linked(names: string[], trials: ListedTrial[]): BoardTrial[] {
  return names.flatMap((name) => {
    const trial = trials.find((item) => item.name === name);
    return trial ? [{ name, slug: trial.slug }] : [];
  });
}

function bullyRow(present: string[], trials: ListedTrial[]): BoardRow {
  const has = (name: string) => present.includes(name);
  const full = has(trialName.bullies) && has(trialName.targeter) && has(trialName.bantam);
  const how: string[] = [];
  if (has(trialName.bullies) && has(trialName.bantam)) {
    how.push(
      "Shoot Bullies in the leg joints with the Bantam. The head opens while it fires. The body is a waste of ammo.",
    );
  } else if (has(trialName.bullies)) {
    how.push("Shoot Bullies in the leg joints. The head opens while it fires. The body is a waste of ammo.");
  } else if (has(trialName.bantam)) {
    how.push("Shoot ARC with the Bantam. Pack Heavy Ammo. Get closer than you would with a rifle.");
  }
  if (has(trialName.targeter)) {
    how.push(
      "Deploy Targeters so damage from the deployed item hits ARC. Shots from other guns do not substitute for the Targeter line.",
    );
  }
  if (has(trialName.bullies) && has(trialName.bantam)) {
    how.push("Bantam damage to ARC counts for the Bantam line, so Bullies are the overlap of the two gun lines.");
  }
  if (has(trialName.targeter)) {
    how.push("One deployment may not be the whole Targeter score.");
  }

  const bringParts: string[] = [];
  if (has(trialName.bantam)) {
    bringParts.push(
      "Bantam plus Heavy Ammo if crafted (Bantam I at Gunsmith 1 after the blueprint: 4 Simple Gun Parts and 4 Mechanical Components).",
    );
  }
  if (has(trialName.targeter)) {
    bringParts.push(
      "Skulker Targeters, stack of 3, scavenged from Skulkers or Couriers. If the stash has no Targeters, the first raid is only to loot them.",
    );
  }

  return {
    id: "bully-gun",
    queue: 2,
    title: full ? "Bantam, Bullies, and Skulker Targeters" : present.join(" · "),
    trials: linked(present, trials),
    map: "No map named this week.",
    unlock: "Trials at level 15. No extra map lock.",
    bring: bringParts.join(" ") || "No extra gear named.",
    stars: "3-star unknown",
    starsNote: has(trialName.bantam)
      ? "Do not copy 0.7 from Heavy Ammo Weapons or 5 from Trailblazer."
      : undefined,
    extract,
    how,
    conditionSlugs: has(trialName.targeter) ? ["hurricane", "electromagnetic-storm", "cold-snap"] : [],
    conditionNote: has(trialName.targeter)
      ? "For finding Skulkers. Low visibility. The trial text does not require them."
      : undefined,
  };
}

function plantsRow(trials: ListedTrial[]): BoardRow {
  return {
    id: "plants",
    queue: 1,
    title: "Harvest plants",
    trials: linked([trialName.plants], trials),
    map: "Buried City",
    mapSlug: "buried-city",
    mapDetail: "Any map counts unless the Trials menu names one.",
    unlock: "8 rounds, per the maps index",
    bring: "Adrenaline shots. Lure grenades if a machine will not leave. Do not clear ARC.",
    stars: "12 plants",
    starsNote: "250 each. 4 / 8 / 12 plants for one / two / three stars.",
    extract,
    how: [
      "Galleria in Buried City, then the lowest floor of Space Travel nearby, then Marano Park.",
      "Plants do not regrow. Other raiders share the spots. Move first.",
      "Count Agave, Candleberries, Great Mullein, Moss, and Mushroom. Candleberries count on every map since patch 1.21.0.",
      "Do not count Apricot, Fertilizer, Lemon, Olives, Prickly Pear, or Roots.",
      "The old double-points bonus was removed in patch 1.26.0.",
    ],
    conditionSlugs: ["lush-blooms"],
    conditionNote: "Plants are denser.",
  };
}

function commissaryRow(trials: ListedTrial[]): BoardRow {
  return {
    id: "commissary",
    queue: 3,
    title: "Commissary containers",
    trials: linked([trialName.commissary], trials),
    map: "Pendola Pass",
    mapSlug: "pendola-pass",
    mapDetail: "Commissary Supermarket only.",
    unlock: "25 rounds. Under 25 rounds, you cannot run it.",
    bring: "No extra gear named.",
    stars: "3-star unknown",
    extract,
    how: [
      "Open containers inside the Commissary Supermarket on Pendola Pass.",
      "Containers in other buildings or on other maps do not count.",
    ],
    conditionSlugs: [],
    footnote:
      "The weekly list spells the building Comissary. The quest Exploring Pendola Pass spells Commissary.",
  };
}

function singletonRow(trial: ListedTrial, queue: number): BoardRow {
  const rows = trial.sections.flatMap((section) => section.rows ?? []);
  const mapRow = rows.find((row) => row.label === "Map" || row.label === "Maps");
  const starRow = rows.find((row) => row.label === "Three stars");
  const unchecked = /not checked/i.test(trial.unknown);
  const pointsOpen = /not published|not in the challenge table|will be added/i.test(trial.unknown);
  return {
    id: `trial-${trial.slug}`,
    queue,
    title: trial.name,
    trials: [{ slug: trial.slug, name: trial.name }],
    map: mapRow?.value ?? "not checked",
    unlock: "Trials at level 15",
    bring: "not checked",
    stars: starRow?.value ?? (unchecked ? "not checked" : pointsOpen ? "3-star unknown" : "not checked"),
    extract,
    how: [`Run “${trial.name}”.`],
    conditionSlugs: [],
  };
}

const plans: { names: string[]; make: (present: string[], trials: ListedTrial[]) => BoardRow }[] = [
  { names: [trialName.plants], make: (_present, trials) => plantsRow(trials) },
  { names: [trialName.bullies, trialName.targeter, trialName.bantam], make: bullyRow },
  { names: [trialName.commissary], make: (_present, trials) => commissaryRow(trials) },
];

export function savedPlanMatches(week: ListedWeek) {
  if (week.trials.length !== savedNames.size) return false;
  return week.trials.every((trial) => savedNames.has(trial.name));
}

export function buildBoard(week: ListedWeek): BoardRow[] {
  const names = new Set(week.trials.map((trial) => trial.name));
  const rows: BoardRow[] = [];
  const used = new Set<string>();

  for (const plan of plans) {
    const present = plan.names.filter((name) => names.has(name));
    if (present.length === 0) continue;
    for (const name of present) used.add(name);
    rows.push(plan.make(present, week.trials));
  }

  rows.sort((a, b) => a.queue - b.queue);
  const plantOn = rows.some((row) => row.id === "plants");
  for (const row of rows) {
    if (row.id === "bully-gun" && plantOn) {
      const names = new Set(row.trials.map((trial) => trial.name));
      const gearOn = names.has(trialName.bantam) && names.has(trialName.targeter);
      row.rankNote = gearOn
        ? "Run this after the plant raid unless the stash already has a Bantam and Targeters."
        : "Run this after the plant raid.";
    }
    if (row.id === "commissary" && plantOn) {
      row.rankNote = "Run this after the plant raid.";
    }
  }

  week.trials.forEach((trial, index) => {
    if (used.has(trial.name)) return;
    rows.push(singletonRow(trial, 100 + index));
  });
  return rows;
}

export function raidsForMap(board: BoardRow[], mapSlug: string) {
  return board.filter((row) => row.mapSlug === mapSlug);
}
