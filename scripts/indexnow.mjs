// Submits every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver).
// Run after each deploy: npm run indexnow
const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexusglobal.dev").replace(/\/$/, "");
const KEY = "6bb581ba0d2c7d9dea5b7fb30c8bf113";

const sitemap = await fetch(`${SITE}/sitemap.xml`).then((r) => {
  if (!r.ok) throw new Error(`sitemap.xml returned ${r.status}`);
  return r.text();
});
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
if (!urlList.length) throw new Error("No URLs found in sitemap.xml");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: ${res.status} ${res.statusText} — ${urlList.length} URLs submitted`);
if (res.status >= 400) {
  console.log(await res.text());
  process.exit(1);
}
