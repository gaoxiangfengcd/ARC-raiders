import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RaidFacts } from "@/components/RaidBoard";
import { WeekBanner } from "@/components/WeekBanner";
import { loadCurrentWeek } from "@/lib/live-week";
import { buildBoard } from "@/lib/raids";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { scoring } from "@/lib/trials";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const week = await loadCurrentWeek();
  return week.trials.map((trial) => ({ slug: trial.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const week = await loadCurrentWeek();
  const trial = week.trials.find((item) => item.slug === slug);
  if (!trial) return { title: "Trial" };
  return pageMetadata({
    title: trial.name,
    description: `${trial.answer} ARC Raiders trial for ${week.starts} to ${week.ends}.`,
    path: `/trials/${trial.slug}`,
  });
}

export default async function TrialPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const week = await loadCurrentWeek();
  const trial = week.trials.find((item) => item.slug === slug);
  if (!trial) notFound();
  const board = buildBoard(week);
  const row = board.find((item) => item.trials.some((entry) => entry.slug === trial.slug));
  const others = week.trials.filter((item) => item.slug !== trial.slug);
  const editorial = /will be added after the Trials menu is checked/i.test(trial.unknown);

  return (
    <>
      <WeekBanner ends={week.ends} source={week.source} checked={site.checked} />
      <p className="crumbs">
        <Link href="/">This week</Link>
      </p>
      <p className="kicker">
        <span className="stamp">
          {week.starts} – {week.ends}
        </span>
        <span className="chip">{week.label}</span>
        {week.source === "saved" ? <span className="chip">Saved list</span> : null}
      </p>
      <h1>{trial.name}</h1>
      <p className="lede">
        <Link href="/">Back to this week&apos;s raids.</Link>
      </p>
      {row && row.trials.length > 1 ? (
        <p className="raid-trials">
          {row.trials.map((item) => (
            <Link href={`/trials/${item.slug}`} key={item.slug}>
              {item.name}
            </Link>
          ))}
        </p>
      ) : null}
      {row ? <RaidFacts row={row} /> : null}
      {trial.unknown && !editorial ? <p className="fine">{trial.unknown}</p> : null}
      <nav className="toc">
        {trial.sections.map((section) => (
          <a key={section.heading} href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
            {section.heading}
          </a>
        ))}
      </nav>
      {trial.sections.map((section) => {
        const id = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        return (
          <section className="panel" id={id} key={section.heading}>
            <h2>{section.heading}</h2>
            {section.rows ? (
              <dl className="facts">
                {section.rows.map((fact) => (
                  <span className="fact" key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </span>
                ))}
              </dl>
            ) : null}
            <ul>
              {section.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>
        );
      })}
      <div className="panel">
        <h2>Scoring</h2>
        <ul>
          {scoring.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
      <h2>Also this week</h2>
      <ul className="related">
        {others.map((item) => (
          <li key={item.slug}>
            <Link href={`/trials/${item.slug}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
