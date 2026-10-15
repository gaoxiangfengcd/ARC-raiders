import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>That page is not in the book.</h1>
      <p>
        <Link href="/">Back to this week&apos;s raids.</Link>
      </p>
    </>
  );
}
