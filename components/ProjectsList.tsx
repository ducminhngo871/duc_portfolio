"use client";

import { useState } from "react";
import Image from "next/image";

export type ProjectCard = {
  title: string;
  date: string;
  tools: string[];
  tags: string[];
  summary: string;
  insight: string;
  color: string;
  image?: string;
  link?: string;
};

export default function ProjectsList({
  projects,
  filterTags,
}: {
  projects: ProjectCard[];
  filterTags: string[];
}) {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10" aria-label="Project tags">
        {filterTags.map((tag) => {
          const isActive = activeTag === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              aria-pressed={isActive}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                isActive
                  ? "bg-[#0A7BFF] text-white border-[#0A7BFF]"
                  : "border-[#D8DFEA] text-[#5A2E12] bg-white hover:border-[#0A7BFF] hover:text-[#0A7BFF]"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="space-y-6">
        {filtered.map((v) => (
          <article
            key={v.title}
            className="flex flex-col md:flex-row rounded-2xl border border-[#D8DFEA] bg-white overflow-hidden hover:border-[#0A7BFF] card-hover group"
          >
            <div
              className="relative flex min-h-64 items-center justify-center overflow-hidden md:w-80 md:min-h-72 md:shrink-0"
              style={!v.image ? { backgroundColor: v.color } : undefined}
            >
              {v.image ? (
                <div className="absolute inset-0 img-zoom">
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 320px, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>
              ) : (
                <>
                  <div className="absolute inset-0" style={{ backgroundColor: v.color }} />
                  <svg
                    className="relative text-[#0A7BFF] opacity-25 group-hover:opacity-40 transition-opacity"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect x="4" y="34" width="10" height="18" rx="2" fill="currentColor" />
                    <rect x="18" y="22" width="10" height="30" rx="2" fill="currentColor" />
                    <rect x="32" y="12" width="10" height="40" rx="2" fill="currentColor" />
                    <rect x="46" y="28" width="10" height="24" rx="2" fill="currentColor" />
                  </svg>
                </>
              )}
              <span className="absolute top-3 left-3 text-xs text-[#5A2E12] bg-white/90 px-2 py-0.5 rounded z-10">
                {v.date}
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#05070D] mb-2 leading-snug">
                {v.title}
              </h2>
              <p className="text-sm font-medium text-[#0A7BFF] mb-4">{v.summary}</p>
              <p className="text-base text-[#5A2E12] leading-relaxed mb-5">{v.insight}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {v.tools.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-[#F5F7FA] border border-[#D8DFEA] text-[#5A2E12] px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {v.link && (
                <a
                  href={v.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#0A7BFF] font-medium hover:underline link-underline"
                >
                  View project →
                </a>
              )}
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <p className="text-sm text-[#5A2E12] text-center py-12">
            No projects under this tag yet. Try another filter.
          </p>
        )}
      </div>
    </>
  );
}
