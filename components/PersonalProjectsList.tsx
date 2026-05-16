"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  period: string;
  description: string;
  tags: string[];
  tools: string[];
  link?: string;
  image?: string;
  emoji?: string;
};

const projects: Project[] = [
  {
    id: "substack",
    title: "Still Here, Duc (Substack)",
    period: "Feb 2026 – Present",
    description:
      "I write about analytics, learning, career, and things I'm figuring out as I go. A place for longer reflections that don't fit in a dashboard or a slide deck.",
    tags: ["Writing"],
    tools: ["Substack"],
    link: "https://stillhereduc.substack.com/",
    image: "/images/substack-logo.jpg",
  },
  {
    id: "youtube",
    title: "Piano Recordings (YouTube)",
    period: "2023 – Present",
    description:
      "I play piano and sometimes record pieces I'm working through. A completely different kind of practice from data work.",
    tags: ["Music"],
    tools: ["YouTube"],
    link: "https://www.youtube.com/@ducducngo98977",
    image: "/images/youtube-logo.png",
  },
  {
    id: "stock-picking-ml",
    title: "Stock Picking with Machine Learning",
    period: "March 2022 – May 2022",
    description:
      "Built a financial dataset for S&P 500 companies from 1999 to 2021 by scraping Yahoo Finance. Evaluated Lasso, Random Forest, and Stacking models based on backtested returns. The top 20 picks returned 47.35% in 2021, beating the S&P 500 by 21%.",
    tags: ["Python", "Finance", "Machine Learning"],
    tools: ["Python", "Lasso", "Random Forest", "Stacking", "Selenium"],
    link: "https://sp500predictionprofit.netlify.app/",
    image: "/images/stock-ml.png",
  },
  {
    id: "soccer-spatial",
    title: "Mapping Spatial Patterns in Soccer",
    period: "March 2022 – May 2022",
    description:
      "Used the Wyscout dataset covering five major European leagues in 2018. Applied linear mixed-effects models and created 100+ animated graphs with ggsoccer and gganimate to reveal stylistic differences between teams and leagues.",
    tags: ["R", "Sports Analytics"],
    tools: ["R", "ggsoccer", "gganimate", "Wyscout"],
    link: "https://nolan-meyer.github.io/correlated_capstone_proj/",
    image: "/images/soccer-analysis.png",
  },
];

const allTags = ["All", "Writing", "Music", "Python", "R", "Finance", "Machine Learning", "Sports Analytics"];

export default function PersonalProjectsList() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <div>
      {/* Filter tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              activeTag === tag
                ? "bg-[#0A7BFF] text-white border-[#0A7BFF]"
                : "border-[#D8DFEA] text-[#5A2E12] bg-white hover:border-[#0A7BFF] hover:text-[#0A7BFF]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Vertical list */}
      <div className="divide-y divide-[#D8DFEA]">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row gap-6 py-10"
          >
            {/* Left: period + tags */}
            <div className="md:w-36 shrink-0">
              <p className="text-sm text-[#5A2E12] mb-3">{project.period}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium text-[#0A7BFF] bg-[#F5F7FA] px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Center: content */}
            <div className="flex-1">
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#05070D] mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-[#05070D] leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-[#F5F7FA] border border-[#D8DFEA] text-[#5A2E12] px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#0A7BFF] font-medium hover:underline"
                >
                  View project →
                </a>
              )}
            </div>

            {/* Right: image or emoji */}
            <div className="md:w-44 shrink-0">
              {project.image ? (
                <div className="relative h-32 rounded-xl overflow-hidden bg-white border border-[#D8DFEA] img-zoom">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-3"
                  />
                </div>
              ) : project.emoji ? (
                <div className="h-32 flex items-center justify-center bg-[#F5F7FA] rounded-xl text-4xl border border-[#D8DFEA]">
                  {project.emoji}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
