import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms",
  description: "What Hatchbook is, who owns the game names, and what the pages do not promise.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <h1>Terms</h1>
      <div className="panel">
        <p>
          Hatchbook is an independent fan guide to ARC Raiders. It is not
          affiliated with, endorsed by, or sponsored by Embark Studios. Game
          names, item names, and map names belong to their owners.
        </p>
        <p>
          Pages can be wrong after a patch. If a door prompt or the Trials menu
          disagrees with a sentence here, the game is the one that spends the
          item or scores the point. The site does not promise that a key, a
          code, or a weekly challenge still works.
        </p>
        <p>
          Google ads may appear after a publisher id is configured. Advertising
          does not change the guide text. Details are on the{" "}
          <Link href="/privacy">privacy page</Link>.
        </p>
        <p>
          You may link to these pages. You may not copy them onto another site
          and present them as your own guide.
        </p>
      </div>
    </>
  );
}
