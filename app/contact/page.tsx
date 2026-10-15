import type { Metadata } from "next";
import { contactEmail } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "How to reach the person who publishes Hatchbook.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <h1>Contact</h1>
      <p className="lede">
        Hatchbook is published by an independent fan. Embark Studios does not
        operate this site.
      </p>
      <div className="panel">
        {contactEmail ? (
          <p>
            Email <a href={`mailto:${contactEmail}`}>{contactEmail}</a> about a
            correction, a privacy question, or an advertising question.
          </p>
        ) : (
          <p>
            A public email address is added here before the site is submitted
            to Google. Until then, this page is the contact point and it has no
            address yet.
          </p>
        )}
        <p>The site does not offer game support, account recovery, or code sales.</p>
      </div>
    </>
  );
}
