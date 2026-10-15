export const scheduleNote =
  "Map conditions cycle on a timer, separately on each map. Since patch 1.42.0 that timer is offset by region. Embark said their own website tracker could disagree with the raid you are about to queue. The map select screen is the schedule. This site does not print an hourly clock.";

export interface Condition {
  slug: string;
  name: string;
  tier: "Minor" | "Major";
  summary: string;
}

export const conditions: Condition[] = [
  {
    slug: "beachcombing",
    name: "Beachcombing",
    tier: "Minor",
    summary:
      "Buried finds along the sand at Riven Tides. The maps index names the Dockmaster's Detector as the tool for them.",
  },
  {
    slug: "bird-city",
    name: "Bird City",
    tier: "Minor",
    summary: "Flocks of birds gather around chimneys in Buried City.",
  },
  {
    slug: "lush-blooms",
    name: "Lush Blooms",
    tier: "Minor",
    summary: "Plants and fruit are thriving. The point of the condition is to gather them.",
  },
  {
    slug: "prospecting-probes",
    name: "Prospecting Probes",
    tier: "Minor",
    summary: "ARC send down a lot of guarded probes.",
  },
  {
    slug: "husk-graveyard",
    name: "Husk Graveyard",
    tier: "Minor",
    summary: "Many ARC machines are already down. The husks are there to be searched for parts.",
  },
  {
    slug: "uncovered-caches",
    name: "Uncovered Caches",
    tier: "Minor",
    summary:
      "Storms uncover extra Raider Caches. They can explode if left exposed too long.",
  },
  {
    slug: "launch-tower-loot",
    name: "Launch Tower Loot",
    tier: "Minor",
    summary: "The Launch Tower is locked with loot at the top, and ARC defense around it is heavier.",
  },
  {
    slug: "harvester",
    name: "Harvester",
    tier: "Minor",
    summary: "A harvesting machine is on the map, guarded by a Queen.",
  },
  {
    slug: "matriarch",
    name: "Matriarch",
    tier: "Minor",
    summary: "A Matriarch is present. Her children are defending her.",
  },
  {
    slug: "redirection",
    name: "Redirection",
    tier: "Minor",
    summary:
      "Emperor Beacons can be looted and deployed to send a payload to your position.",
  },
  {
    slug: "night-raid",
    name: "Night Raid",
    tier: "Major",
    summary:
      "Locked doors are worth more, keys are more common, and the extra raider activity pulls in more ARC.",
  },
  {
    slug: "electromagnetic-storm",
    name: "Electromagnetic Storm",
    tier: "Major",
    summary: "Lightning hits the surface, fries electronics, and disrupts ARC.",
  },
  {
    slug: "cold-snap",
    name: "Cold Snap",
    tier: "Major",
    summary:
      "Snow and cold. Candleberry is ripe. Raider Caches lose the plants that usually mark them and have to be breached.",
  },
  {
    slug: "hidden-bunker",
    name: "Hidden Bunker",
    tier: "Major",
    summary:
      "The Outskirts Bunker needs four buttons. Spaceport raids run 40 minutes while this condition is up.",
  },
  {
    slug: "locked-gate",
    name: "Locked Gate",
    tier: "Major",
    summary:
      "The Blue Gate underground entrance stays shut until four security codes are entered. The raid runs 40 minutes, and there is no active Raider Hatch.",
  },
  {
    slug: "hurricane",
    name: "Hurricane",
    tier: "Major",
    summary: "Strong wind. Visibility and hearing are worse.",
  },
  {
    slug: "close-scrutiny",
    name: "Close Scrutiny",
    tier: "Major",
    summary: "Surveyors and Vaporizers are scanning for materials.",
  },
  {
    slug: "arc-frigate",
    name: "ARC Frigate",
    tier: "Major",
    summary: "An ARC Frigate is overhead and fires on anything it treats as resistance.",
  },
];
