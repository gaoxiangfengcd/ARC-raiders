import Link from "next/link";

export function Header() {
  return (
    <header className="top">
      <Link className="brand" href="/">
        <strong>Hatchbook</strong>
        <span>ARC Raiders trials this week</span>
      </Link>
      <nav className="nav">
        <Link href="/">This week</Link>
        <Link href="/maps">Maps</Link>
        <Link href="/pack">Pack</Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <p>
        Fan guide, not affiliated with Embark Studios. This week&apos;s trial
        names refresh about once an hour. A map or a score that is not checked
        yet stays marked. Keys and map conditions were checked on 13 Oct 2026.{" "}
        <Link href="/conditions">Conditions</Link>
        {" · "}
        <Link href="/updates">Updates</Link>
        {" · "}
        <Link href="/about">About</Link>
        {" · "}
        <Link href="/contact">Contact</Link>
        {" · "}
        <Link href="/privacy">Privacy</Link>
        {" · "}
        <Link href="/terms">Terms</Link>
      </p>
    </footer>
  );
}
