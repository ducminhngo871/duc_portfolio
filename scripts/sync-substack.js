/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("node:fs");
const https = require("node:https");
const path = require("node:path");
const sanitizeHtml = require("sanitize-html");

const FEED_URL = "https://stillhereduc.substack.com/feed";
const OUTFILE = path.join(process.cwd(), "data", "substack-posts.json");

const REQUEST_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
    "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  Accept: "application/rss+xml, application/xml, text/xml, */*",
  "Accept-Language": "en-US,en;q=0.9",
};

// Public raw passthrough proxies. Substack sits behind Cloudflare, which
// 403s datacenter IP ranges (e.g. GitHub Actions runners) regardless of
// headers. When a direct fetch fails we retry through these, which return
// the original RSS bytes unchanged so downstream parsing is unaffected.
const FETCH_PROXIES = [
  (u) => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
  (u) => `https://corsproxy.io/?url=${encodeURIComponent(u)}`,
  (u) => `https://thingproxy.freeboard.io/fetch/${u}`,
];

function httpGet(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: REQUEST_HEADERS }, (response) => {
        if (
          response.statusCode &&
          response.statusCode >= 300 &&
          response.statusCode < 400 &&
          response.headers.location
        ) {
          httpGet(response.headers.location).then(resolve, reject);
          return;
        }

        if (response.statusCode !== 200) {
          reject(new Error(`Request failed with ${response.statusCode}`));
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

async function fetchText(url) {
  try {
    return await httpGet(url);
  } catch (directError) {
    for (const makeProxyUrl of FETCH_PROXIES) {
      try {
        const body = await httpGet(makeProxyUrl(url));
        if (body && body.trim()) {
          console.log(`Fetched via proxy: ${makeProxyUrl(url).split("?")[0]}`);
          return body;
        }
      } catch {
        // try the next proxy
      }
    }
    throw new Error(
      `Feed request failed (direct: ${directError.message}; all proxies failed)`,
    );
  }
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

function sanitizeContentHtml(html) {
  return sanitizeHtml(html, {
    allowedTags: [
      "p", "br", "hr", "div", "span", "blockquote", "pre", "code",
      "h1", "h2", "h3", "h4", "h5", "h6",
      "ul", "ol", "li", "strong", "em", "b", "i", "u", "s",
      "a", "img", "figure", "figcaption", "iframe",
      "table", "thead", "tbody", "tr", "th", "td",
    ],
    allowedAttributes: {
      a: ["href", "name", "title"],
      img: ["src", "alt", "title", "width", "height"],
      iframe: ["src", "width", "height", "allow", "allowfullscreen", "title"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    allowProtocolRelativeUrls: false,
    allowedIframeHostnames: [
      "www.youtube-nocookie.com",
      "youtube-nocookie.com",
      "www.youtube.com",
      "youtube.com",
      "player.vimeo.com",
      "stillhereduc.substack.com",
    ],
    transformTags: {
      a: (tagName, attribs) => ({
        tagName,
        attribs: {
          ...attribs,
          target: "_blank",
          rel: "noopener noreferrer",
        },
      }),
    },
  });
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
        contentHtml: sanitizeContentHtml(
          simplifyContentHtml(getTagValue(item, "content:encoded")),
        ),
      };
    })
    .filter((post) => post.title && post.slug && post.contentHtml);

  // Merge with previously-synced posts so articles that have scrolled out of
  // the (capped ~20-item) RSS feed are never lost. Fresh feed data wins for
  // posts still present; older posts are preserved as last captured.
  let existing = [];
  if (fs.existsSync(OUTFILE)) {
    try {
      existing = JSON.parse(fs.readFileSync(OUTFILE, "utf8"));
    } catch {
      existing = [];
    }
  }

  const bySlug = new Map();
  for (const post of existing) {
    if (post && post.slug) bySlug.set(post.slug, post);
  }
  let added = 0;
  for (const post of posts) {
    if (!bySlug.has(post.slug)) added += 1;
    bySlug.set(post.slug, post);
  }

  const merged = Array.from(bySlug.values()).sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  fs.mkdirSync(path.dirname(OUTFILE), { recursive: true });
  fs.writeFileSync(OUTFILE, `${JSON.stringify(merged, null, 2)}\n`);
  console.log(
    `Wrote ${merged.length} posts to ${OUTFILE} ` +
      `(${added} new, ${merged.length - added} retained)`,
  );
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = { sanitizeContentHtml };
