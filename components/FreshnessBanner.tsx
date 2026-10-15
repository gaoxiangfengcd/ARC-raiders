"use client";

import Link from "next/link";

export function FreshnessBanner({
  checked,
  reviewDays,
}: {
  checked: string;
  reviewDays: number;
}) {
  const reviewed = new Date(`${checked}T00:00:00`);
  const days = Math.floor((Date.now() - reviewed.getTime()) / 86_400_000);
  if (Number.isNaN(days) || days <= reviewDays) return null;
  return (
    <p className="stale">
      Last full check was {checked}, {days} days ago. A patch may have moved a
      door or a code printer. Read the{" "}
      <Link href="/updates">update rules</Link> before you trust a prompt that
      disagrees with this page.
    </p>
  );
}
