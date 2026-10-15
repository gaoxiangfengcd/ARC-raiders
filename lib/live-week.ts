import { notesFor, type TrialSection, trials, week as saved } from "@/lib/trials";

export const trialRefreshSeconds = 60 * 60;

export interface ListedTrial {
  slug: string;
  name: string;
  answer: string;
  known: string[];
  unknown: string;
  sections: TrialSection[];
}

export interface ListedWeek {
  season: string;
  label: string;
  starts: string;
  ends: string;
  trials: ListedTrial[];
  source: "wiki" | "saved";
}

export function trialSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function listed(name: string): ListedTrial {
  return { slug: trialSlug(name), name, ...notesFor(name) };
}

function savedWeek(): ListedWeek {
  return {
    season: saved.season,
    label: saved.label,
    starts: saved.starts,
    ends: saved.ends,
    source: "saved",
    trials: trials.map((trial) => ({
      slug: trial.slug,
      name: trial.name,
      answer: trial.answer,
      known: trial.known,
      unknown: trial.unknown,
      sections: trial.sections ?? [{ heading: "What is already known", lines: trial.known }],
    })),
  };
}

export async function loadCurrentWeek(): Promise<ListedWeek> {
  try {
    const url = new URL("https://arcraiders.wiki/w/api.php");
    url.searchParams.set("action", "cargoquery");
    url.searchParams.set("tables", "weeklyTrials");
    url.searchParams.set("fields", "trials,season,startDate,endDate");
    url.searchParams.set("order_by", "startDate DESC");
    url.searchParams.set("limit", "1");
    url.searchParams.set("format", "json");
    const response = await fetch(url, { next: { revalidate: trialRefreshSeconds } });
    if (!response.ok) return savedWeek();
    const data = (await response.json()) as {
      cargoquery?: { title?: { trials?: string; season?: string; startDate?: string; endDate?: string } }[];
    };
    const row = data.cargoquery?.[0]?.title;
    if (!row?.trials || !row.startDate || !row.endDate) return savedWeek();
    const names = row.trials
      .split(";")
      .map((name) => name.trim())
      .filter(Boolean);
    if (names.length === 0) return savedWeek();
    const seasonMatch = String(row.season ?? "").match(/Season\s+(\d+)\s+[—–-]\s+Week\s+(\d+)/);
    return {
      season: seasonMatch ? `Season ${seasonMatch[1]}` : "Trials",
      label: seasonMatch ? `Week ${seasonMatch[2]}` : "This week",
      starts: row.startDate,
      ends: row.endDate,
      source: "wiki",
      trials: names.map(listed),
    };
  } catch {
    return savedWeek();
  }
}
