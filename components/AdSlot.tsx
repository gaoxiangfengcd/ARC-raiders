import { adsenseClient } from "@/lib/site";

const adSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT ?? "";

export function AdSlot() {
  if (!adsenseClient || !adSlot) return null;
  return (
    <ins
      className="adsbygoogle ad"
      style={{ display: "block" }}
      data-ad-client={adsenseClient}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
