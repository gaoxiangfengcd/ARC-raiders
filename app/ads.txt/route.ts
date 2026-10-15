import { adsenseClient } from "@/lib/site";

export function GET() {
  if (!adsenseClient) {
    return new Response("AdSense is not configured.\n", {
      status: 404,
      headers: { "content-type": "text/plain" },
    });
  }
  return new Response(`google.com, ${adsenseClient}, DIRECT, f08c47fec0942fa0\n`, {
    headers: { "content-type": "text/plain" },
  });
}
