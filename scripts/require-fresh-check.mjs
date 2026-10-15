import fs from "fs";

const src = fs.readFileSync(new URL("../lib/site.ts", import.meta.url), "utf8");
const checked = src.match(/checked: "(\d{4}-\d{2}-\d{2})"/)?.[1];
const reviewDays = Number(src.match(/reviewDays: (\d+)/)?.[1] ?? 14);

if (!checked) {
  console.error("lib/site.ts is missing checked: \"YYYY-MM-DD\".");
  process.exit(1);
}

const days = (Date.now() - new Date(`${checked}T00:00:00`).getTime()) / 86_400_000;
if (days > reviewDays) {
  console.error(
    `Content check ${checked} is ${Math.floor(days)} days old. Re-read the keys index, maps index, and Locked Gate page, then update checked in lib/site.ts.`,
  );
  process.exit(1);
}

console.log(
  `Content check ${checked} is ${Math.floor(days)} day(s) old. Trial names are reread from the wiki about once an hour.`,
);
