/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("node:fs");
const https = require("node:https");
const path = require("node:path");

const FEED_URL = "https://stillhereduc.substack.com/feed";
const OUTFILE = path.join(process.cwd(), "data", "substack-posts.json");

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        if (
          response.statusCode &&
          response.statusCode >= 300 &&
          response.statusCode < 400 &&
          response.headers.location
        ) {
          fetchText(response.headers.location).then(resolve, reject);
          return;
        }

        if (response.statusCode !== 200) {
          reject(new Error(`Feed request failed with ${response.statusCode}`));
          return;
        }

        let body = "";
        response.setEncoding("utf8");
        response.on("data", (chunk) => {
          body += chunk;
        });
        response.on("end", () => resolve(body));
      })
      .on("error", reject);
  });
}

function decodeHtml(value = "") {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function stripHtml(value = "") {
  return decodeHtml(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getTagValue(xml, tag) {
  return (xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`)) || [])[1] || "";
}

function getSlug(link) {
  return link.split("/p/")[1]?.split(/[?#]/)[0] || "";
}

function inferCategory(title) {
  if (title.startsWith("[Still Here")) {
    return "Still Here Series";
  }

  return "Geopolitics";
}

function simplifyContentHtml(html) {
  const withoutEditorMetadata = html
    .replace(/\sdata-attrs="[^"]*"/gi, "")
    .replace(/\sdata-component-name="[^"]*"/gi, "")
    .replace(/\ssrcset="[^"]*"/gi, "")
    .replace(/\ssizes="[^"]*"/gi, "");

  return decodeHtml(withoutEditorMetadata)
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<div class="subscription-widget-wrap-editor"[\s\S]*?<\/form><\/div><\/div>/gi, "")
    .replace(/<div class="image-link-expand"[\s\S]*?<\/div><\/div><\/div>/gi, "")
    .replace(/<button[\s\S]*?<\/button>/gi, "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "")
    .replace(/\s(?:class|style|data-[\w-]+|tabindex|fetchpriority|loading|decoding)="[^"]*"/gi, "")
    .replace(/<a\s+[^>]*class="image-link[^"]*"[^>]*>/gi, "")
    .replace(/<\/a><\/figure>/gi, "</figure>")
    .replace(/<picture>\s*(?:<source[^>]*>\s*)*/gi, "")
    .replace(/<\/picture>/gi, "")
    .replace(/<div>\s*<hr>\s*<\/div>/gi, "<hr>")
    .replace(/<p>\s*<\/p>/gi, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

async function main() {
  const xml = await fetchText(FEED_URL);
  const posts = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/g))
    .map((match) => {
      const item = match[1];
      const title = decodeHtml(getTagValue(item, "title"));
      const link = decodeHtml(getTagValue(item, "link"));

      return {
        title,
        slug: getSlug(link),
        sourceUrl: link,
        date: decodeHtml(getTagValue(item, "pubDate")),
        description: stripHtml(getTagValue(item, "description")),
        image: (item.match(/<enclosure[^>]*url="([^"]+)"/) || [])[1] || "",
        category: inferCategory(title),
        author: stripHtml(getTagValue(item, "dc:creator")) || "Still Here, Duc",
        contentHtml: simplifyContentHtml(getTagValue(item, "content:encoded")),
      };
    })
    .filter((post) => post.title && post.slug && post.contentHtml);

  fs.mkdirSync(path.dirname(OUTFILE), { recursive: true });
  fs.writeFileSync(OUTFILE, `${JSON.stringify(posts, null, 2)}\n`);
  console.log(`Wrote ${posts.length} posts to ${OUTFILE}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
