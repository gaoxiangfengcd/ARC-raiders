"use client";

import Link from "next/link";

export function WeekBanner({
  ends,
  source,
  checked,
}: {
  ends: string;
  source: "wiki" | "saved";
  checked: string;
}) {
  const now = new Date();
  const today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");
  if (source === "saved") {
    return (
      <p className="stale">
        The live list could not be read. Showing the last saved week, checked on {checked}.{" "}
        <Link href="/updates">How updates work</Link>
      </p>
    );
  }
  if (today <= ends) return null;
  return (
    <p className="stale">
      The newest saved week ended {ends}. This board stays up until the next list
      is in. The Trials menu has the live wording.{" "}
      <Link href="/updates">How updates work</Link>
    </p>
  );
}
