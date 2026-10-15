import type { Metadata } from "next";
import { adsenseClient, contactEmail, gaMeasurementId } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy",
  description: "How Hatchbook uses server logs, cookies, Google Analytics, and Google advertising.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy</h1>
      <p className="lede">
        Hatchbook is an independent fan guide. It does not ask for an account
        and it does not take game logins.
      </p>
      <div className="panel">
        <h2>Logs</h2>
        <p>
          The host may keep ordinary server logs: IP address, browser, and the
          page requested. Those logs are used to run and protect the site.
        </p>
        <h2>Analytics</h2>
        <p>
          {gaMeasurementId
            ? "Google Analytics 4 is on. Google measures page views and may store cookies or similar identifiers."
            : "Google Analytics is not loaded until a measurement id is configured."}
        </p>
        <h2>Advertising cookies</h2>
        <p>
          Third-party vendors, including Google, use cookies to serve ads based
          on a person's prior visits to this website or other websites.
        </p>
        <p>
          Google's use of advertising cookies enables it and its partners to
          serve ads based on visits to this site and other sites on the
          Internet.
        </p>
        <p>
          {adsenseClient
            ? "Google AdSense is configured on this site, so those cookies may be set when an ad is shown."
            : "AdSense code is not loaded until a publisher id is configured. After it is turned on, the cookies described here can be set."}
        </p>
        <p>
          You can opt out of personalized advertising in{" "}
          <a href="https://adssettings.google.com">Google Ads Settings</a>. You
          can also opt out of some third-party vendors' cookies for personalized
          advertising at{" "}
          <a href="https://www.aboutads.info/choices">www.aboutads.info</a>.
        </p>
        <p>
          How Google uses data from sites that use its services is explained at{" "}
          <a href="https://policies.google.com/technologies/partner-sites">
            Google's partner-sites page
          </a>
          .
        </p>
        <h2>Visitors in Europe, the UK, and Switzerland</h2>
        <p>
          Personalized ads for people in the European Economic Area, the United
          Kingdom, and Switzerland need a consent choice from a Google-certified
          consent tool. That tool is switched on in the AdSense account. This
          page does not invent that choice.
        </p>
        {contactEmail ? (
          <p>
            Privacy questions go to <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        ) : null}
      </div>
    </>
  );
}
