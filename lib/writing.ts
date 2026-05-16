import posts from "@/data/substack-posts.json";

export type WritingPost = {
  title: string;
  slug: string;
  sourceUrl: string;
  date: string;
  description: string;
  image: string;
  category: string;
  author: string;
  contentHtml: string;
};

const archivedPosts = posts as WritingPost[];

export function getWritingPosts() {
  return [...archivedPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getWritingPost(slug: string) {
  return getWritingPosts().find((post) => post.slug === slug);
}

export function formatPostDate(date: string, style: "short" | "long" = "short") {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en", {
    month: style === "short" ? "short" : "long",
    day: "numeric",
    year: style === "long" ? "numeric" : undefined,
  })
    .format(parsedDate)
    .toUpperCase();
}

export function getPreviewText(text: string, maxLength = 92) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trim()}...`;
}

export function getReadingTime(html: string) {
  const words = html.replace(/<[^>]*>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(2, Math.ceil(words / 220))} min read`;
}
