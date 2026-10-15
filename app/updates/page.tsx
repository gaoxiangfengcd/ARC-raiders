import type { Metadata } from "next";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How this stays current",
  description: "When Hatchbook was last checked, and what has to be re-read before the date moves.",
  path: "/updates",
});

export default function UpdatesPage() {
  return (
    <>
      <h1>How this stays current</h1>
      <p className="lede">
        The last full check is {site.checked}, against patch {site.patch}. A
        build refuses to ship if that date is more than {site.reviewDays} days
        old. Changing the date without re-reading the sources is how the site
        goes wrong.
      </p>
      <div className="panel">
        <h2>Before you change the date</h2>
        <ol>
          <li>Trial names are read from the wiki about once an hour. Check that the newest week still has its names and a start date before trusting a blank or partial list.</li>
          <li>Re-read the maps index if a condition was added, renamed, or reworded.</li>
          <li>Re-read the keys index and note any added, renamed, or removed item.</li>
          <li>Re-read Locked Gate. Confirm the four printers, the Gate Control Room, and that extracting still creates an Expired Security Code.</li>
          <li>Skim the newest patch notes for trials, conditions, keys, or codes.</li>
          <li>Only then set <code>checked</code> in <code>lib/site.ts</code> to that day.</li>
        </ol>
        <p>Sources used on the last check:</p>
        <ul>
          {site.sources.map((url) => (
            <li key={url}>
              <a href={url}>{url}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="panel">
        <h2>What updates itself, and what does not</h2>
        <p>
          Trial names are requested about once an hour. The home board groups the
          lines that belong to one raid, and leaves any other line as its own
          row. A line without a checked map or point value is marked not
          checked. It does not reuse an older route. Keys, door text, and map
          conditions are
          not on that hourly read. After {site.reviewDays} days past {site.checked},
          a warning appears and a build refuses to ship until those pages are
          re-read. Map condition times stay on the in-game map select screen,
          because since patch 1.42.0 each region runs a different clock.
        </p>
        <p>
          Security codes are not a daily list. A live code is valid only inside
          the Locked Gate raid where you found it. Extracting ends it. There is
          nothing to refresh each morning the way a dice link would be.
        </p>
      </div>
    </>
  );
}
