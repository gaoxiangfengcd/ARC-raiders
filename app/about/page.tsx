import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "What Hatchbook will and will not claim about ARC Raiders trials and keys.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <h1>About Hatchbook</h1>
      <p className="lede">
        Hatchbook leads with this week&apos;s ARC Raiders raids. Map conditions
        and the pack sit beside that board. It is an independent fan guide, not
        an Embark Studios site.
      </p>
      <div className="panel">
        <p>
          The trial names refresh about once an hour. When a line does not have a
          checked map or point value, the page says so. It does not copy an
          older challenge onto that line. The check on{" "}
          {site.checked} covered map conditions, keys, Locked Gate, and the
          week&apos;s weapons and enemies.
        </p>
        <p>
          If a door prompt disagrees with a sentence here, the prompt is the
          one that spends the item. Pendola Pass Observatory Key and Emperor
          Gateway Conduit are marked unconfirmed because they were not on the
          keys index that day.
        </p>
        <p>Map and item names belong to their owners.</p>
        <p>
          Questions go to the <Link href="/contact">contact page</Link>.
          Advertising and cookies are described on the{" "}
          <Link href="/privacy">privacy page</Link>. Use of the guide is
          described on the <Link href="/terms">terms page</Link>.
        </p>
      </div>
    </>
  );
}
