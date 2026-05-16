import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatPostDate,
  getReadingTime,
  getWritingPost,
  getWritingPosts,
} from "@/lib/writing";

type WritingPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getWritingPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: WritingPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getWritingPost(slug);

  if (!post) {
    return {
      title: "Writing | Duc (Daniel) Ngo",
    };
  }

  return {
    title: `${post.title} | Duc (Daniel) Ngo`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
      type: "article",
    },
  };
}

export default async function WritingPostPage({ params }: WritingPostPageProps) {
  const { slug } = await params;
  const post = getWritingPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link
          href="/writing"
          className="mb-10 inline-flex text-sm font-medium text-[#5A2E12] hover:text-[#0A7BFF]"
        >
          ← Writing
        </Link>

        <header className="mb-10 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#8A8A8A]">
            {formatPostDate(post.date, "long")} · {post.author} ·{" "}
            {getReadingTime(post.contentHtml)}
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight text-[#05070D] md:text-6xl">
            {post.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-[#05070D]">
            {post.description}
          </p>
          <div className="mt-7 flex items-center justify-center gap-4 text-sm">
            <span className="rounded-full bg-[#F5F7FA] px-3 py-1 font-medium text-[#0A7BFF]">
              {post.category}
            </span>
            <a
              href={post.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#5A2E12] hover:text-[#0A7BFF]"
            >
              Original on Substack →
            </a>
          </div>
        </header>

        {post.image && (
          <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-sm bg-[#F5F7FA]">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
        )}

        <div
          className="writing-article"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </article>
  );
}
