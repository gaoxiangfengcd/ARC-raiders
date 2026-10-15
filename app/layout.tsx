import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { FreshnessBanner } from "@/components/FreshnessBanner";
import { Footer, Header } from "@/components/Chrome";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { JsonLd } from "@/components/JsonLd";
import { adsenseClient, gaMeasurementId, googleSiteVerification, site, siteUrl } from "@/lib/site";

const homeTitle = "ARC Raiders trials this week";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  robots: { index: true, follow: true },
  openGraph: {
    title: homeTitle,
    description: site.description,
    type: "website",
    url: "/",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: homeTitle,
    description: site.description,
  },
  ...(googleSiteVerification ? { verification: { google: googleSiteVerification } } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,560&family=Public+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: siteUrl,
            description: site.description,
            inLanguage: "en",
          }}
        />
        {gaMeasurementId ? <GoogleAnalytics measurementId={gaMeasurementId} /> : null}
        {adsenseClient ? (
          <Script
            id="adsense"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        ) : null}
        <div className="shell">
          <Header />
          <main className="book">
            <FreshnessBanner checked={site.checked} reviewDays={site.reviewDays} />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
