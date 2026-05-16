import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  formatPostDate,
  getPreviewText,
  getReadingTime,
  getWritingPosts,
} from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing | Duc (Daniel) Ngo",
  description:
    "Essays from Still Here, Duc, archived locally and readable on this website.",
};

const FEATURED_SLUG = "iran-venezuela-va-cai-ich-lon-hon";

export default function WritingPage() {
  const posts = getWritingPosts();
  const featured = posts.find((post) => post.slug === FEATURED_SLUG) ?? posts[0];
  const sidePosts = posts.filter((post) => post.slug !== featured.slug).slice(0, 4);
  const recentPosts = posts
    .filter((post) => post.slug !== featured.slug)
    .slice(4);

  return (
    <div className="bg-white">
      <nav className="border-b border-[#E5E7EB]" aria-label="Writing navigation">
        <div className="mx-auto flex h-14 w-fit items-center gap-9 px-6 text-base font-semibold text-[#05070D]">
          <Link href="/writing" className="relative flex h-full items-center text-[#05070D]">
            Home
            <span className="absolute inset-x-0 bottom-0 h-1 bg-[#05070D]" />
          </Link>
          <a
            href="https://stillhereduc.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#05070D]"
          >
            Notes
          </a>
          <Link href="/about" className="hover:text-[#05070D]">
            About
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#0A7BFF]">
              Still Here, Duc
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#05070D] md:text-5xl">
              Writing
            </h1>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[#5A2E12] md:text-right">
            A local archive of essays from my Substack. Every article can be read here
            even if I later move platforms.
          </p>
        </div>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(420px,1.55fr)_minmax(0,0.8fr)] lg:gap-0">
          <div className="space-y-10 lg:border-r lg:border-[#E5E7EB] lg:pr-8">
            {sidePosts.slice(0, 2).map((post) => (
              <PostCard key={post.slug} post={post} size="compact" />
            ))}
          </div>

          <div className="lg:px-10">
            <Link href={`/writing/${featured.slug}`} className="group block text-center">
              <div className="relative mb-10 aspect-[16/10] overflow-hidden rounded-sm bg-[#F5F7FA]">
                {featured.image && (
                  <Image
                    src={featured.image}
                    alt=""
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 680px, 100vw"
                  />
                )}
              </div>
              <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight text-[#05070D] md:text-5xl">
                {featured.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-[#05070D]">
                {featured.description}
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-[#8A8A8A]">
                {formatPostDate(featured.date)} · {featured.author}
              </p>
              <div className="mt-5 flex items-center justify-center gap-5 text-sm text-[#8A8A8A]">
                <span className="text-[#EF4444]">♥ 32</span>
                <span>○ 16</span>
                <span>{getReadingTime(featured.contentHtml)}</span>
              </div>
            </Link>
          </div>

          <div className="space-y-10 lg:border-l lg:border-[#E5E7EB] lg:pl-8">
            {sidePosts.slice(2, 4).map((post) => (
              <PostCard key={post.slug} post={post} size="compact" />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="mb-9 text-4xl font-bold tracking-tight text-[#05070D]">
            Recent posts
          </h2>
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} size="grid" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

type Post = ReturnType<typeof getWritingPosts>[number];

function PostCard({ post, size }: { post: Post; size: "compact" | "grid" }) {
  return (
    <Link href={`/writing/${post.slug}`} className="group block">
      <div
        className={`relative mb-5 overflow-hidden rounded-sm bg-[#F5F7FA] ${
          size === "compact" ? "aspect-[3/2]" : "aspect-[16/10]"
        }`}
      >
        {post.image && (
          <Image
            src={post.image}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={size === "compact" ? "(min-width: 1024px) 280px, 100vw" : "(min-width: 1024px) 360px, 100vw"}
          />
        )}
      </div>
      <h3
        className={`font-[family-name:var(--font-playfair)] font-bold leading-tight text-[#05070D] ${
          size === "compact" ? "text-2xl" : "text-3xl"
        }`}
      >
        {post.title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-[#05070D]">
        {getPreviewText(post.description, size === "compact" ? 72 : 86)}
      </p>
      <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-[#8A8A8A]">
        {formatPostDate(post.date)} · {post.author}
      </p>
    </Link>
  );
}
