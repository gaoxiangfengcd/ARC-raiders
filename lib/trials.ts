export const week = {
  season: "Season 6",
  label: "Week 2",
  starts: "2026-10-13",
  ends: "2026-10-19",
  source: "https://arcraiders.wiki/wiki/Trials",
};

export const scoring = [
  "Trials unlock at level 15.",
  "Each week lists five challenges. Read them in the Trials menu.",
  "Only your best score in each challenge is kept.",
  "The score is counted when you extract.",
  "1,000, 2,000, and 3,000 points grant a random Uncommon, Rare, and Epic item or blueprint. Each tier is claimed once per challenge per week, on extract.",
];

export interface TrialSection {
  heading: string;
  lines: string[];
  rows?: { label: string; value: string }[];
}

export interface Trial {
  slug: string;
  name: string;
  answer: string;
  known: string[];
  unknown: string;
  sections?: TrialSection[];
}

const waiting = "The points for this week's line are not in the challenge table yet. They will be added after the Trials menu is checked.";

export const trials: Trial[] = [
  {
    slug: "open-containers-in-the-comissary-supermarket",
    name: "Open Containers in the Comissary Supermarket",
    answer:
      "Open containers inside the Commissary Supermarket on Pendola Pass. Containers in any other building do not count. The weekly list spells the building “Comissary.”",
    known: [
      "The supermarket is on Pendola Pass.",
      "Only containers inside that building count.",
    ],
    unknown: waiting,
    sections: [
      {
        heading: "Where",
        lines: [
          "The Commissary Supermarket is on Pendola Pass. The quest Exploring Pendola Pass, from Celeste, sends you to search 3 containers inside that supermarket, on the same map.",
          "Pendola Pass unlocks after 25 rounds. The weekly list spells the building “Comissary”; the quest spells it “Commissary.”",
        ],
      },
      {
        heading: "What counts",
        lines: [
          "Open containers in that supermarket. Your best run is the one that counts, and the score is kept when you extract.",
          "Containers in other buildings on Pendola Pass, and containers on other maps, do not count for this line.",
        ],
      },
      {
        heading: "Older container trials",
        lines: [
          "Past Open Containers lines named a different place each time: Spaceport, the Hospital in Buried City, the Swamp on Dam Battlegrounds, the hotel on Riven Tides, the traffic tunnels on The Blue Gate, and the Medical Research wing on Stella Montis.",
          "Those buildings belonged to those lines. A guide that still sends this week to one of them is using an old challenge name.",
        ],
      },
    ],
  },
  {
    slug: "harvest-plants",
    name: "Harvest plants",
    answer:
      "Harvest plants on any map. Each plant that counts is worth 250 points. Four plants is one star, eight is two, twelve is three.",
    known: [
      "250 points per plant that counts.",
      "Agave, Candleberries, Great Mullein, Moss, and Mushroom count.",
      "Apricot, Fertilizer, Lemon, Olives, Prickly Pear, and Roots do not.",
    ],
    unknown:
      "If this week's Trials menu names one map, only that map counts. The standing rule is every map.",
    sections: [
      {
        heading: "Points",
        lines: [
          "250 points per harvested plant that is on the counting list. Milestones are 1,000, 2,000, and 3,000 points, so that is 4, 8, and 12 plants.",
          "Only your best score is kept, and it counts when you extract. Trials unlock at level 15.",
          "A major map condition used to double points. That bonus was removed in patch 1.26.0. Do not plan the run around a doubled week.",
        ],
        rows: [
          { label: "Per plant", value: "250" },
          { label: "One star", value: "4 plants" },
          { label: "Two stars", value: "8 plants" },
          { label: "Three stars", value: "12 plants" },
          { label: "Maps", value: "Any, unless the menu names one" },
        ],
      },
      {
        heading: "Plants that count",
        lines: [
          "Agave, Candleberries, Great Mullein, Moss, and Mushroom.",
          "Candleberries count on every map, including The Blue Gate, since patch 1.21.0.",
        ],
      },
      {
        heading: "Plants that do not count",
        lines: [
          "Apricot, Fertilizer, Lemon, Olives, Prickly Pear, and Roots. Picking these spends the time and adds nothing to the trial.",
        ],
      },
      {
        heading: "How to run it",
        lines: [
          "Plants do not grow back after a harvest, so everyone in the raid is picking from the same spots.",
          "Adrenaline shots cover the distance. Stopping to fight every ARC that sees you wastes the score. Lure grenades pull a persistent machine off you.",
          "A published three-star route is Galleria in Buried City, then the lowest floor of Space Travel nearby, then Marano Park. Those spots are well known, so move first.",
        ],
      },
    ],
  },
  {
    slug: "damage-bullies",
    name: "Damage Bullies",
    answer:
      "Damage Bullies by shooting the leg joints, or the head while it is firing. The head only opens as a weak spot during the shotgun blast.",
    known: [
      "Heavy armor. Weak points are the leg joints and the open head.",
      "It fires a shotgun blast and throws exploding clusters.",
    ],
    unknown: waiting,
    sections: [
      {
        heading: "How to damage one",
        lines: [
          "Shoot the weak points on the legs. When the Bully fires, the head opens and that opening is the other weak spot.",
          "It is a medium ARC with heavy armor, fast for its size. It fires a shotgun blast and throws exploding clusters. Standing in front of it to shoot the body wastes ammo.",
        ],
      },
      {
        heading: "What you get for killing one",
        lines: [
          "Destroying a Bully is listed at +500 XP. Scavenging the parts is listed at +200 or +250 XP, still marked to be confirmed.",
          "The parts on the body are ARC Alloy, an Advanced ARC Powercell, and a Bully Fragmenter. The Fragmenter is an epic recycle item. Couriers can also carry one.",
        ],
      },
      {
        heading: "Where this week sends you",
        lines: [
          "This week's line does not name a map.",
          "One location note under Bully says Piazza della Rupe on Pendola Pass, but the sentence there is written for Bombardiers. Do not treat that square as the required map for this trial until the Trials menu names it.",
        ],
      },
    ],
  },
  {
    slug: "deal-damage-using-skulker-targeter",
    name: "Deal Damage using Skulker Targeter",
    answer:
      "Deploy Skulker Targeters. Damage from the deployed item is what this line is asking for. It is not a gun you shoot.",
    known: [
      "Uncommon deployable, 9 damage, 25 m range.",
      "Scavenged from Skulkers and Couriers. Stacks to 3.",
    ],
    unknown: waiting,
    sections: [
      {
        heading: "How the item scores",
        lines: [
          "Place the Skulker Targeter. The item is built to target Raiders and ARC nearby. The trial line is “deal damage using” it, so shots from your other guns are not a substitute.",
          "The 9 damage on the item page is the item's own damage figure. It is not the trial's points-per-hit. Those points are not published for this line yet.",
        ],
      },
      {
        heading: "Stats",
        lines: ["Uncommon. Weight 1. One stack holds 3. Sell price 1,000."],
        rows: [
          { label: "Damage", value: "9" },
          { label: "Range", value: "25 m" },
          { label: "Stack", value: "3" },
          { label: "Sell", value: "1,000" },
          { label: "Recycle", value: "1 Simple Gun Part + 1 ARC Alloy" },
          { label: "Salvage", value: "1 ARC Alloy" },
        ],
      },
      {
        heading: "Where to get one",
        lines: [
          "Scavenge it from a destroyed Skulker or from a Courier.",
          "A Skulker is a small ground ARC added in Frozen Trail 2.0. It waits, strikes with a tail weapon, then glides away. It is associated with low visibility — hurricanes, blizzards, electromagnetic storms, sandstorms — and with the Turbine and the Frigate. Armor is listed as light and still marked to be confirmed.",
          "Bring more than one into the raid if you already have them. A stack of 3 is the carry limit, and a single deployment may not be the whole score.",
        ],
      },
    ],
  },
  {
    slug: "damage-arc-using-a-bantam",
    name: "Damage ARC using a Bantam",
    answer:
      "Shoot ARC with a Bantam. It is a heavy-ammo hand cannon with strong ARC armor penetration, so the rounds are meant to count on armored machines.",
    known: [
      "Uncommon double-action hand cannon. Heavy ammo, 8 rounds, 24 damage, strong ARC armor penetration.",
      "Craft Bantam I at Gunsmith 1 with a blueprint: 4 Simple Gun Parts and 4 Mechanical Components.",
    ],
    unknown:
      "Points per damage for this exact line are not published. Do not copy the 0.7 from “Damage ARC using Heavy Ammo Weapons.” That is a different challenge.",
    sections: [
      {
        heading: "Why this gun",
        lines: [
          "The Bantam has strong ARC armor penetration. Guns below moderate penetration bounce off armored plating, so a sidearm with weak penetration can hit a machine and still add nothing useful.",
          "It is a short-barrel revolver: varied fire rate, good handling, high damage, and low accuracy, control, and range. Get closer than you would with a rifle.",
        ],
      },
      {
        heading: "Stats",
        lines: ["Uncommon hand cannon. The sell price listed for Bantam I is 3,800. Higher tiers are not filled in."],
        rows: [
          { label: "Ammo", value: "Heavy" },
          { label: "Magazine", value: "8" },
          { label: "Fire mode", value: "Double-action" },
          { label: "Damage", value: "24" },
          { label: "ARC armor pen", value: "Strong" },
          { label: "Fire rate", value: "23.3" },
          { label: "Range", value: "32.4" },
          { label: "Weight", value: "3" },
        ],
      },
      {
        heading: "How to get one",
        lines: [
          "Bantam I is crafted at Gunsmith 1 after the blueprint is learned: 4 Simple Gun Parts and 4 Mechanical Components. It can also be scavenged.",
          "No current quest grants a Bantam. Upgrades stay at Gunsmith 1.",
          "Pack Heavy Ammo. An empty revolver does not score.",
        ],
      },
      {
        heading: "Do not borrow another trial's points",
        lines: [
          "“Damage ARC using Heavy Ammo Weapons” is a different line, listed at 0.7 points per damage. “Damage ARC using a single Trailblazer” is listed at 5 per damage. Neither number belongs on the Bantam line.",
          "The Bantam's own points are not in the challenge table yet.",
        ],
      },
    ],
  },
];

export function trialBySlug(slug: string) {
  return trials.find((trial) => trial.slug === slug);
}

const notes = new Map(trials.map((trial) => [trial.name, trial]));

function sectionsFor(trial: Pick<Trial, "known" | "sections">): TrialSection[] {
  if (trial.sections && trial.sections.length > 0) return trial.sections;
  return [{ heading: "What is already known", lines: trial.known }];
}

export function notesFor(name: string): {
  answer: string;
  known: string[];
  unknown: string;
  sections: TrialSection[];
} {
  const found = notes.get(name);
  if (found) {
    return {
      answer: found.answer,
      known: found.known,
      unknown: found.unknown,
      sections: sectionsFor(found),
    };
  }
  const known = [
    `The challenge to run is “${name}”.`,
    "Trials unlock at level 15. Only your best score in this challenge is kept, and it counts when you extract.",
    "1,000, 2,000, and 3,000 points grant a random Uncommon, Rare, and Epic item or blueprint.",
  ];
  return {
    answer: `The challenge is “${name}”. The map and the points are not checked.`,
    known,
    unknown: "The map and the points are not checked.",
    sections: [{ heading: "Rules", lines: known }],
  };
}
