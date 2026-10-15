export const site = {
  name: "Hatchbook",
  patch: "Frozen Trail 2.0",
  checked: "2026-10-13",
  reviewDays: 14,
  sources: [
    "https://arcraiders.wiki/wiki/Trials",
    "https://arcraiders.wiki/wiki/Maps",
    "https://arcraiders.wiki/wiki/Keys",
    "https://arcraiders.wiki/wiki/Locked_Gate",
    "https://arcraiders.wiki/wiki/Update:1.22.0",
    "https://arcraiders.wiki/wiki/Update:1.42.0",
    "https://arcraiders.wiki/wiki/Update:2.0",
  ],
  description:
    "ARC Raiders trials this week: the five challenges, where to go, what to bring, and the score that counts when you extract.",
};

export type Kind = "key" | "code" | "access";
export type Status = "in-raid" | "raid-only" | "dead" | "unconfirmed";

export const statusLabel: Record<Status, string> = {
  "in-raid": "Works on the prompted door",
  "raid-only": "This raid only",
  dead: "Does not work",
  unconfirmed: "Not on the keys index",
};

export const packVerdict: Record<Status, string> = {
  "in-raid": "Use on the prompted door",
  "raid-only": "Dies on extract",
  dead: "Leave it",
  unconfirmed: "Leave unused until the prompt matches",
};

export interface GameMap {
  slug: string;
  name: string;
  unlock: string;
  raid: string;
  blurb: string;
}

export interface Place {
  slug: string;
  name: string;
  mapSlug: string;
  where: string;
  note: string;
}

export interface Entry {
  slug: string;
  name: string;
  mapSlugs: string[];
  kind: Kind;
  status: Status;
  placeSlug: string;
  opens: string;
  where: string;
  validity: string;
  hold: string;
}

const door =
  "The keys index does not give a floor or a compass bearing. Spend it only when the door prompt names this item.";

const keyValidity =
  "Single-use. It works on a door that prompts for it during the raid. It is not a code, and it does not expire on a calendar date.";

export const maps: GameMap[] = [
  {
    slug: "dam-battlegrounds",
    name: "Dam Battlegrounds",
    unlock: "No unlock requirement",
    raid: "30 min",
    blurb: "Alcantara Power Plant. Open from the start.",
  },
  {
    slug: "buried-city",
    name: "Buried City",
    unlock: "8 rounds, per the maps index",
    raid: "30 min",
    blurb: "The maps index is the figure used here. A separate city article has disagreed before, so this page does not repeat a second number.",
  },
  {
    slug: "spaceport",
    name: "Spaceport",
    unlock: "12 rounds",
    raid: "30 min, 40 min during Hidden Bunker",
    blurb: "Acerra Spaceport. Hidden Bunker is the condition that lengthens the raid.",
  },
  {
    slug: "the-blue-gate",
    name: "The Blue Gate",
    unlock: "18 rounds",
    raid: "30 min, 40 min during Locked Gate",
    blurb: "Locked Gate is the only condition where the four security codes do anything.",
  },
  {
    slug: "stella-montis",
    name: "Stella Montis",
    unlock: "24 rounds",
    raid: "30 min",
    blurb: "Research facility. Unlock count is from the maps index.",
  },
  {
    slug: "riven-tides",
    name: "Riven Tides",
    unlock: "20 rounds",
    raid: "30 min",
    blurb: "Coastal resort. Most of the keycards in the index are here, including seven hotel cards.",
  },
  {
    slug: "pendola-pass",
    name: "Pendola Pass",
    unlock: "25 rounds",
    raid: "30 min",
    blurb:
      "Summit observatory. The maps index left a question mark on the duration. The unlock this site uses is 25 rounds, from the Pendola trial notes.",
  },
];

export const places: Place[] = [
  {
    slug: "raider-hatch",
    name: "Raider Hatch",
    mapSlug: "dam-battlegrounds",
    where: "Any Raider Hatch, and only while a minor condition is active, according to the keys index.",
    note: "The Locked Gate page says that condition has no active Raider Hatches. This page does not claim the same for every other major condition, because those pages were not each re-read on the check date.",
  },
  {
    slug: "buried-hospital",
    name: "Buried City Hospital",
    mapSlug: "buried-city",
    where: "A door in the Hospital in Buried City.",
    note: door,
  },
  {
    slug: "j-kozma-ventures",
    name: "J Kozma Ventures",
    mapSlug: "buried-city",
    where: "A door in the J Kozma Ventures company building in Buried City.",
    note: door,
  },
  {
    slug: "buried-apartments",
    name: "Buried City apartments",
    mapSlug: "buried-city",
    where: "Certain apartment doors in Buried City. Not every apartment.",
    note: "The item name is Residential Mastery Key. The index does not list the buildings. Use the prompt.",
  },
  {
    slug: "buried-town-hall",
    name: "Buried City Town Hall",
    mapSlug: "buried-city",
    where: "A door to the Town Hall in Buried City.",
    note: door,
  },
  {
    slug: "dam-control-tower",
    name: "Dam Control Tower",
    mapSlug: "dam-battlegrounds",
    where: "The Control Tower on Dam Battlegrounds.",
    note: "This is a different item from the Spaceport Control Tower Key. The index does not describe the climb.",
  },
  {
    slug: "research-administration",
    name: "Research and Administration",
    mapSlug: "dam-battlegrounds",
    where: "A door in the Research and Administration building on Dam Battlegrounds.",
    note: door,
  },
  {
    slug: "water-treatment",
    name: "Water Treatment Control",
    mapSlug: "dam-battlegrounds",
    where: "A door in the Water Treatment Control building.",
    note: door,
  },
  {
    slug: "testing-annex",
    name: "Testing Annex",
    mapSlug: "dam-battlegrounds",
    where: "A door in the Testing Annex on Dam Battlegrounds.",
    note: door,
  },
  {
    slug: "controlled-access",
    name: "Controlled Access Zone",
    mapSlug: "dam-battlegrounds",
    where: "A door in the Controlled Access Zone on Dam Battlegrounds.",
    note: "The index states the key opens a door here. It does not describe a switch puzzle. Do not treat a puzzle route as this key.",
  },
  {
    slug: "power-generation",
    name: "Power Generation Complex",
    mapSlug: "dam-battlegrounds",
    where: "A door on the east side of the Power Generation Complex.",
    note: "The keys index files the Power Rod under non-key items. It still opens that door.",
  },
  {
    slug: "container-storage",
    name: "Container Storage",
    mapSlug: "spaceport",
    where: "A door in Container Storage at Spaceport.",
    note: door,
  },
  {
    slug: "ground-control",
    name: "Ground Control Tower",
    mapSlug: "spaceport",
    where: "The Ground Control Tower at Spaceport.",
    note: "Not the Dam Control Tower.",
  },
  {
    slug: "trench-towers",
    name: "Trench Towers",
    mapSlug: "spaceport",
    where: "A door to the Trench Towers at Spaceport.",
    note: door,
  },
  {
    slug: "shipping-warehouse",
    name: "Shipping Warehouse",
    mapSlug: "spaceport",
    where: "A door in the Shipping Warehouse at Spaceport.",
    note: door,
  },
  {
    slug: "blue-cellars",
    name: "Blue Gate cellars",
    mapSlug: "the-blue-gate",
    where: "Certain cellar doors near The Blue Gate.",
    note: "The same key type fits more than one cellar. The index does not say it can be reused.",
  },
  {
    slug: "blue-village",
    name: "Blue Gate village",
    mapSlug: "the-blue-gate",
    where: "A door to one of the old village buildings near The Blue Gate.",
    note: door,
  },
  {
    slug: "communication-tower",
    name: "Blue Gate Communication Tower",
    mapSlug: "the-blue-gate",
    where: "A door by the Communication Tower near The Blue Gate.",
    note: "This is not a Locked Gate security code, and it is not the Spaceport tower.",
  },
  {
    slug: "confiscation-room",
    name: "Confiscation room",
    mapSlug: "the-blue-gate",
    where: "A door to the confiscated-foods area in the Blue Gate tunnels.",
    note: door,
  },
  {
    slug: "checkpoint-gate",
    name: "Checkpoint gate",
    mapSlug: "the-blue-gate",
    where: "The gate at Checkpoint, during Locked Gate only.",
    note: "Four Code Printers, one at each named location, issue the codes. All four have to be entered at a console in the Gate Control Room before the gate opens. Code locations are surrounded by buried mines. Pilgrim's Peak is protected by two Rocketeers.",
  },
  {
    slug: "patrol-cars",
    name: "Patrol cars",
    mapSlug: "the-blue-gate",
    where: "The rear door of a patrol car on The Blue Gate or Riven Tides.",
    note: "The keys index lists this item on those two maps and no others.",
  },
  {
    slug: "stella-archives",
    name: "Stella Montis Archives",
    mapSlug: "stella-montis",
    where: "A door in the Archives.",
    note: door,
  },
  {
    slug: "stella-assembly",
    name: "Stella Montis Assembly",
    mapSlug: "stella-montis",
    where: "A door in Assembly.",
    note: door,
  },
  {
    slug: "stella-medical",
    name: "Stella Montis Medical Research",
    mapSlug: "stella-montis",
    where: "A door in Medical Research.",
    note: door,
  },
  {
    slug: "stella-security",
    name: "Stella Montis Security Checkpoint",
    mapSlug: "stella-montis",
    where: "A door in the Security Checkpoint.",
    note: door,
  },
  {
    slug: "crane-houses",
    name: "Crane Houses",
    mapSlug: "riven-tides",
    where: "A door in one of the Crane Houses at Riven Tides.",
    note: door,
  },
  {
    slug: "port-authority",
    name: "Port Authority Building",
    mapSlug: "riven-tides",
    where: "Secure Storage and Classified Records are two rooms in the Port Authority Building.",
    note: "Each room has its own keycard. The index does not say one card opens both.",
  },
  {
    slug: "panorama-azzurro",
    name: "Panorama Azzurro",
    mapSlug: "riven-tides",
    where: "Hotel suites at Panorama Azzurro. The index says each numbered card opens one of the suites.",
    note: "It does not publish a map from card number to room number. Match the prompt on the door.",
  },
  {
    slug: "cielo-sereno",
    name: "Cielo Sereno Observatory",
    mapSlug: "pendola-pass",
    where: "A door reported on the Observatory Key item page, which is not the keys index.",
    note: "Confirm the prompt. If the item page and the door disagree, trust the door.",
  },
  {
    slug: "the-emperor",
    name: "The Emperor",
    mapSlug: "pendola-pass",
    where: "The Emperor, as described on the Emperor Gateway Conduit item page.",
    note: "That page is not the keys index. Treat it as unconfirmed until the prompt matches.",
  },
];

const codeValidity =
  "Only during the Locked Gate raid you found it in. Submit it at the Gate Control Room before you extract. Taking it out of the raid turns it into an Expired Security Code, which the keys index says has no practical use. Patch 1.22.0 moved these codes to Code Printers and made them expire on extraction. Older item pages still mention containers; the Locked Gate page is the later instruction.";

function code(slug: string, name: string, printer: string): Entry {
  return {
    slug,
    name,
    mapSlugs: ["the-blue-gate"],
    kind: "code",
    status: "raid-only",
    placeSlug: "checkpoint-gate",
    opens: "One of the four codes for the Checkpoint gate. The gate opens after all four are entered.",
    where: `Code Printer at ${printer}. Then a console in the Gate Control Room.`,
    validity: codeValidity,
    hold: "Do not save it for another raid. Extracting destroys the code.",
  };
}

export const entries: Entry[] = [
  {
    slug: "raider-hatch-key",
    name: "Raider Hatch Key",
    mapSlugs: maps.map((m) => m.slug),
    kind: "key",
    status: "in-raid",
    placeSlug: "raider-hatch",
    opens: "A Raider Hatch.",
    where: "The keys index limits it to minor conditions. The item page says any Raider Hatch.",
    validity: keyValidity,
    hold: "During Locked Gate the condition page says there is no active Raider Hatch, so this key cannot extract you from that raid.",
  },
  {
    slug: "buried-city-hospital-key",
    name: "Buried City Hospital Key",
    mapSlugs: ["buried-city"],
    kind: "key",
    status: "in-raid",
    placeSlug: "buried-hospital",
    opens: "A door in the Hospital in Buried City.",
    where: "The Hospital. No finer location is in the keys index.",
    validity: keyValidity,
    hold: "If the door does not name this key, do not spend it.",
  },
  {
    slug: "buried-city-jkv-employee-access-card",
    name: "Buried City JKV Employee Access Card",
    mapSlugs: ["buried-city"],
    kind: "key",
    status: "in-raid",
    placeSlug: "j-kozma-ventures",
    opens: "A door in the J Kozma Ventures company building.",
    where: "That building in Buried City.",
    validity: keyValidity,
    hold: "The index does not say which floor.",
  },
  {
    slug: "buried-city-residential-mastery-key",
    name: "Buried City Residential Mastery Key",
    mapSlugs: ["buried-city"],
    kind: "key",
    status: "in-raid",
    placeSlug: "buried-apartments",
    opens: "Certain apartment doors in Buried City.",
    where: "Apartment doors that prompt for this key.",
    validity: keyValidity,
    hold: "Several doors can accept it. The first one consumes it.",
  },
  {
    slug: "buried-city-town-hall-key",
    name: "Buried City Town Hall Key",
    mapSlugs: ["buried-city"],
    kind: "key",
    status: "in-raid",
    placeSlug: "buried-town-hall",
    opens: "A door to the Town Hall in Buried City.",
    where: "Town Hall.",
    validity: keyValidity,
    hold: "Use the prompt, not the building name alone.",
  },
  {
    slug: "dam-control-tower-key",
    name: "Dam Control Tower Key",
    mapSlugs: ["dam-battlegrounds"],
    kind: "key",
    status: "in-raid",
    placeSlug: "dam-control-tower",
    opens: "The door to the Control Tower on Dam Battlegrounds.",
    where: "Dam Control Tower, not Spaceport's Ground Control Tower.",
    validity: keyValidity,
    hold: "The Spaceport key is a different item.",
  },
  {
    slug: "dam-staff-room-key",
    name: "Dam Staff Room Key",
    mapSlugs: ["dam-battlegrounds"],
    kind: "key",
    status: "in-raid",
    placeSlug: "research-administration",
    opens: "A door in the Research and Administration building.",
    where: "That building on Dam Battlegrounds.",
    validity: keyValidity,
    hold: "It does not open the Testing Annex or the Control Tower.",
  },
  {
    slug: "dam-surveillance-key",
    name: "Dam Surveillance Key",
    mapSlugs: ["dam-battlegrounds"],
    kind: "key",
    status: "in-raid",
    placeSlug: "water-treatment",
    opens: "A door in the Water Treatment Control building.",
    where: "Water Treatment Control.",
    validity: keyValidity,
    hold: "Match the prompt inside the building.",
  },
  {
    slug: "dam-testing-annex-key",
    name: "Dam Testing Annex Key",
    mapSlugs: ["dam-battlegrounds"],
    kind: "key",
    status: "in-raid",
    placeSlug: "testing-annex",
    opens: "A door in the Testing Annex.",
    where: "Testing Annex on Dam Battlegrounds.",
    validity: keyValidity,
    hold: "The index says a door, not a list of every lock in the building.",
  },
  {
    slug: "dam-controlled-access-zone-key",
    name: "Dam Controlled Access Zone Key",
    mapSlugs: ["dam-battlegrounds"],
    kind: "key",
    status: "in-raid",
    placeSlug: "controlled-access",
    opens: "A door in the Controlled Access Zone.",
    where: "Controlled Access Zone on Dam Battlegrounds.",
    validity: keyValidity,
    hold: "A switch puzzle, if you find one, is not described as this key.",
  },
  {
    slug: "power-rod",
    name: "Power Rod",
    mapSlugs: ["dam-battlegrounds"],
    kind: "access",
    status: "in-raid",
    placeSlug: "power-generation",
    opens: "A door on the east side of the Power Generation Complex.",
    where: "Dam Battlegrounds.",
    validity: "Not filed as a key. It still opens that door. The index does not give it an expiry date.",
    hold: "Do not confuse it with a Dam key when you are counting key slots.",
  },
  {
    slug: "spaceport-container-storage-key",
    name: "Spaceport Container Storage Key",
    mapSlugs: ["spaceport"],
    kind: "key",
    status: "in-raid",
    placeSlug: "container-storage",
    opens: "A door in Container Storage.",
    where: "Container Storage at Spaceport.",
    validity: keyValidity,
    hold: "The index does not say how many entrances lead to that room.",
  },
  {
    slug: "spaceport-control-tower-key",
    name: "Spaceport Control Tower Key",
    mapSlugs: ["spaceport"],
    kind: "key",
    status: "in-raid",
    placeSlug: "ground-control",
    opens: "A door to the Ground Control Tower.",
    where: "Spaceport.",
    validity: keyValidity,
    hold: "The Dam Control Tower Key will not substitute.",
  },
  {
    slug: "spaceport-trench-tower-key",
    name: "Spaceport Trench Tower Key",
    mapSlugs: ["spaceport"],
    kind: "key",
    status: "in-raid",
    placeSlug: "trench-towers",
    opens: "A door to the Trench Towers.",
    where: "Spaceport.",
    validity: keyValidity,
    hold: "The index does not say whether one key covers every tower door.",
  },
  {
    slug: "spaceport-warehouse-key",
    name: "Spaceport Warehouse Key",
    mapSlugs: ["spaceport"],
    kind: "key",
    status: "in-raid",
    placeSlug: "shipping-warehouse",
    opens: "A door in the Shipping Warehouse.",
    where: "Spaceport.",
    validity: keyValidity,
    hold: "Containers outside a prompted door are not this lock.",
  },
  {
    slug: "blue-gate-cellar-key",
    name: "Blue Gate Cellar Key",
    mapSlugs: ["the-blue-gate"],
    kind: "key",
    status: "in-raid",
    placeSlug: "blue-cellars",
    opens: "Certain cellar doors near The Blue Gate.",
    where: "Cellar doors that prompt for this key.",
    validity: keyValidity,
    hold: "More than one cellar can show the prompt. Opening one spends the key.",
  },
  {
    slug: "blue-gate-village-key",
    name: "Blue Gate Village Key",
    mapSlugs: ["the-blue-gate"],
    kind: "key",
    status: "in-raid",
    placeSlug: "blue-village",
    opens: "A door to one of the old village buildings.",
    where: "The Blue Gate village.",
    validity: keyValidity,
    hold: "Other village doors are not automatically this key.",
  },
  {
    slug: "blue-gate-communication-tower-key",
    name: "Blue Gate Communication Tower Key",
    mapSlugs: ["the-blue-gate"],
    kind: "key",
    status: "in-raid",
    placeSlug: "communication-tower",
    opens: "A door by the Communication Tower.",
    where: "Near The Blue Gate.",
    validity: keyValidity,
    hold: "Pilgrim's Peak Security Code is a separate item and only works during Locked Gate.",
  },
  {
    slug: "blue-gate-confiscation-room-key",
    name: "Blue Gate Confiscation Room Key",
    mapSlugs: ["the-blue-gate"],
    kind: "key",
    status: "in-raid",
    placeSlug: "confiscation-room",
    opens: "A door to the confiscated-foods area in the tunnels.",
    where: "Blue Gate tunnels.",
    validity: keyValidity,
    hold: "The index does not give a wall marking or a compass point.",
  },
  code("ancient-fort-security-code", "Ancient Fort Security Code", "Ancient Fort"),
  code("pilgrims-peak-security-code", "Pilgrim's Peak Security Code", "Pilgrim's Peak"),
  code("raiders-refuge-security-code", "Raider's Refuge Security Code", "Raider's Refuge"),
  code("reinforced-reception-security-code", "Reinforced Reception Security Code", "Reinforced Reception"),
  {
    slug: "expired-security-code",
    name: "Expired Security Code",
    mapSlugs: ["the-blue-gate"],
    kind: "code",
    status: "dead",
    placeSlug: "checkpoint-gate",
    opens: "Nothing.",
    where: "It is what a live security code becomes after you extract with it.",
    validity:
      "No practical use, per the keys index. It cannot be spent next raid, and it does not open the Checkpoint gate.",
    hold: "Drop it. Keeping it does not store the code you found.",
  },
  {
    slug: "patrol-car-key",
    name: "Patrol Car Key",
    mapSlugs: ["the-blue-gate", "riven-tides"],
    kind: "key",
    status: "in-raid",
    placeSlug: "patrol-cars",
    opens: "The rear door of a patrol car.",
    where: "The Blue Gate and Riven Tides.",
    validity: keyValidity,
    hold: "The index names those two maps. It does not say the key works on any other map.",
  },
  {
    slug: "stella-montis-archives-key",
    name: "Stella Montis Archives Key",
    mapSlugs: ["stella-montis"],
    kind: "key",
    status: "in-raid",
    placeSlug: "stella-archives",
    opens: "A door in the Archives.",
    where: "Stella Montis.",
    validity: keyValidity,
    hold: "No second door is listed.",
  },
  {
    slug: "stella-montis-assembly-admin-key",
    name: "Stella Montis Assembly Admin Key",
    mapSlugs: ["stella-montis"],
    kind: "key",
    status: "in-raid",
    placeSlug: "stella-assembly",
    opens: "A door in Assembly.",
    where: "Stella Montis.",
    validity: keyValidity,
    hold: "Admin in the name is not a master key for the map.",
  },
  {
    slug: "stella-montis-medical-storage-key",
    name: "Stella Montis Medical Storage Key",
    mapSlugs: ["stella-montis"],
    kind: "key",
    status: "in-raid",
    placeSlug: "stella-medical",
    opens: "A door in Medical Research.",
    where: "Stella Montis.",
    validity: keyValidity,
    hold: "It does not open the Security Checkpoint.",
  },
  {
    slug: "stella-montis-security-checkpoint-key",
    name: "Stella Montis Security Checkpoint Key",
    mapSlugs: ["stella-montis"],
    kind: "key",
    status: "in-raid",
    placeSlug: "stella-security",
    opens: "A door in the Security Checkpoint.",
    where: "Stella Montis.",
    validity: keyValidity,
    hold: "Use the door that names this item.",
  },
  {
    slug: "riven-tides-crane-house-keycard",
    name: "Riven Tides Crane House Keycard",
    mapSlugs: ["riven-tides"],
    kind: "key",
    status: "in-raid",
    placeSlug: "crane-houses",
    opens: "A door in one of the Crane Houses.",
    where: "Riven Tides.",
    validity: keyValidity,
    hold: "The index does not say which crane. Read the prompt.",
  },
  {
    slug: "riven-tides-secure-storage-keycard",
    name: "Riven Tides Secure Storage Keycard",
    mapSlugs: ["riven-tides"],
    kind: "key",
    status: "in-raid",
    placeSlug: "port-authority",
    opens: "The Secure Storage room in the Port Authority Building.",
    where: "Riven Tides.",
    validity: keyValidity,
    hold: "Classified Records is a different keycard.",
  },
  {
    slug: "riven-tides-classified-records-keycard",
    name: "Riven Tides Classified Records Keycard",
    mapSlugs: ["riven-tides"],
    kind: "key",
    status: "in-raid",
    placeSlug: "port-authority",
    opens: "The Classified Records room in the Port Authority Building.",
    where: "Riven Tides.",
    validity: keyValidity,
    hold: "Secure Storage is a different keycard.",
  },
  ...[102, 107, 113, 205, 208, 311, 404].map(
    (n): Entry => ({
      slug: `riven-tides-hotel-keycard-${n}`,
      name: `Riven Tides Hotel Keycard No. ${n}`,
      mapSlugs: ["riven-tides"],
      kind: "key",
      status: "in-raid",
      placeSlug: "panorama-azzurro",
      opens: "One suite door at Panorama Azzurro.",
      where: `The card is numbered ${n}. The keys index does not publish a room plan, so the door prompt is the check.`,
      validity: keyValidity,
      hold: "The other numbered hotel cards are separate items.",
    }),
  ),
  {
    slug: "pendola-pass-observatory-key",
    name: "Pendola Pass Observatory Key",
    mapSlugs: ["pendola-pass"],
    kind: "key",
    status: "unconfirmed",
    placeSlug: "cielo-sereno",
    opens: "A door associated with the Cielo Sereno Observatory, on its own item page.",
    where: "Pendola Pass. Missing from the keys index checked on this date.",
    validity: "Not confirmed against the keys index. If the door prompt does not name it, do not spend it.",
    hold: "Leave it unused until the prompt matches.",
  },
  {
    slug: "emperor-gateway-conduit",
    name: "Emperor Gateway Conduit",
    mapSlugs: ["pendola-pass"],
    kind: "access",
    status: "unconfirmed",
    placeSlug: "the-emperor",
    opens: "The Emperor, according to its item page rather than the keys index.",
    where: "Pendola Pass.",
    validity: "Not on the keys index. No expiry is published here because the index does not list the item.",
    hold: "Trust the door prompt over this page.",
  },
];

export function mapBySlug(slug: string) {
  return maps.find((m) => m.slug === slug);
}

export function placeBySlug(slug: string) {
  return places.find((p) => p.slug === slug);
}

export function entryBySlug(slug: string) {
  return entries.find((e) => e.slug === slug);
}

export function entriesForMap(slug: string) {
  return entries.filter((e) => e.mapSlugs.includes(slug));
}

export function mapLabel(entry: Entry) {
  if (entry.slug === "raider-hatch-key") return "All maps";
  return entry.mapSlugs
    .map((s) => mapBySlug(s)?.name)
    .filter(Boolean)
    .join(", ");
}

export const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const gaRaw = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
export const gaMeasurementId = /^G-[A-Z0-9]+$/i.test(gaRaw) ? gaRaw : "";

export const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";
export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "gaoxiangfengcd@gmail.com";
