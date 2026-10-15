import Link from "next/link";
import { conditions } from "@/lib/conditions";
import type { BoardRow } from "@/lib/raids";

function conditionName(slug: string) {
  return conditions.find((condition) => condition.slug === slug)?.name ?? slug;
}

export function RaidFacts({ row }: { row: BoardRow }) {
  return (
    <>
      {row.rankNote ? <p className="raid-rank">{row.rankNote}</p> : null}
      <dl className="stats">
        <div>
          <dt>Map</dt>
          <dd>
            {row.mapSlug ? <Link href={`/maps/${row.mapSlug}`}>{row.map}</Link> : row.map}
            {row.mapDetail ? <span className="stat-note muted">{row.mapDetail}</span> : null}
          </dd>
        </div>
        <div>
          <dt>Unlock</dt>
          <dd>{row.unlock}</dd>
        </div>
        <div>
          <dt>Bring</dt>
          <dd>{row.bring}</dd>
        </div>
        <div>
          <dt>3-star</dt>
          <dd>
            {row.stars}
            {row.starsNote ? <span className="stat-note muted">{row.starsNote}</span> : null}
          </dd>
        </div>
        <div>
          <dt>Extract</dt>
          <dd>{row.extract}</dd>
        </div>
      </dl>
      {row.conditionSlugs.length > 0 ? (
        <p className="raid-tags">
          {row.conditionSlugs.map((slug) => (
            <Link className="tag" href={`/conditions#${slug}`} key={slug}>
              {conditionName(slug)}
            </Link>
          ))}
          {row.conditionNote ? <span className="muted">{row.conditionNote}</span> : null}
        </p>
      ) : null}
      <ol className="raid-how">
        {row.how.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      {row.footnote ? <p className="raid-footnote muted">{row.footnote}</p> : null}
    </>
  );
}

export function RaidBoard({ rows }: { rows: BoardRow[] }) {
  return (
    <div className="board">
      {rows.map((row, index) => (
        <article className="raid" id={row.id} key={row.id}>
          <div className="raid-index">{String(index + 1).padStart(2, "0")}</div>
          <div className="raid-body">
            <h2>{row.title}</h2>
            <p className="raid-trials">
              {row.trials.map((trial) => (
                <Link href={`/trials/${trial.slug}`} key={trial.slug}>
                  {trial.name}
                </Link>
              ))}
            </p>
            <RaidFacts row={row} />
          </div>
        </article>
      ))}
    </div>
  );
}
