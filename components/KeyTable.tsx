"use client";

import Link from "next/link";
import { useState } from "react";
import { packVerdict, type Entry, type Status } from "@/lib/site";

const validityText = {
  "in-raid": "This raid",
  "raid-only": "Expires on extract",
  dead: "No use",
  unconfirmed: "Unconfirmed",
} as const;

export interface PackGear {
  slug: string;
  name: string;
  href?: string;
  map: string;
  mapSlugs: string[];
  verdict: string;
  note: string;
  tone: Status;
}

type Row = Entry & { map: string };

type View = {
  slug: string;
  name: string;
  href?: string;
  map: string;
  mapSlugs: string[];
  verdict: string;
  note: string;
  tone: string;
};

export function KeyTable({
  rows,
  maps,
  gear = [],
  mode = "index",
  omitSlugs = [],
  placeholder = "Search a key or a door",
}: {
  rows: Row[];
  maps: { slug: string; name: string }[];
  gear?: PackGear[];
  mode?: "index" | "pack";
  omitSlugs?: string[];
  placeholder?: string;
}) {
  const [q, setQ] = useState("");
  const [map, setMap] = useState("all");
  const pack = mode === "pack";

  const view: View[] = [
    ...(pack
      ? gear.map((item) => ({
          slug: item.slug,
          name: item.name,
          href: item.href,
          map: item.map,
          mapSlugs: item.mapSlugs,
          verdict: item.verdict,
          note: item.note,
          tone: item.tone,
        }))
      : []),
    ...rows
      .filter((row) => !omitSlugs.includes(row.slug))
      .map((row) => ({
        slug: row.slug,
        name: row.name,
        href: `/keys/${row.slug}`,
        map: row.map,
        mapSlugs: row.mapSlugs,
        verdict: pack ? packVerdict[row.status] : validityText[row.status],
        note: pack && row.status === "in-raid" ? `Single-use. ${row.opens}` : row.opens,
        tone: row.status,
      })),
  ];

  const qNorm = q.trim().toLowerCase();
  const shown = view.filter((row) => {
    const hay = `${row.name} ${row.note} ${row.map} ${row.verdict}`.toLowerCase();
    if (!hay.includes(qNorm)) return false;
    if (map === "all") return true;
    if (row.mapSlugs.length === 0) return qNorm.length > 0;
    return row.mapSlugs.includes(map);
  });

  return (
    <div>
      <div className="tools">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={placeholder}
          aria-label={pack ? "Search the pack" : "Search keys"}
        />
        <select value={map} onChange={(e) => setMap(e.target.value)} aria-label="Filter by map">
          <option value="all">All maps</option>
          {maps.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>{pack ? "Item" : "Key"}</th>
              <th>Map</th>
              <th>{pack ? "Verdict" : "Still good?"}</th>
              <th>{pack ? "Note" : "Opens"}</th>
            </tr>
          </thead>
          <tbody>
            {shown.map((row) => (
              <tr key={row.slug}>
                <td>{row.href ? <Link href={row.href}>{row.name}</Link> : row.name}</td>
                <td>{row.map}</td>
                <td>
                  <span className={`badge ${row.tone}${row.verdict.length > 48 ? " long" : ""}`}>{row.verdict}</span>
                </td>
                <td>{row.note}</td>
              </tr>
            ))}
            {shown.length === 0 && (
              <tr>
                <td colSpan={4}>{pack ? "Nothing in the pack matches that search." : "No key matches that search."}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
