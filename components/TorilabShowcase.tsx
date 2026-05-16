"use client";

import { useState } from "react";
import Image from "next/image";

const apps = [
  {
    id: "soulriza",
    name: "Soulriza",
    tagline: "AI companion RPG experience",
    description:
      "Tracked user engagement, session depth, and AI character interaction metrics for Soulriza. Built Looker dashboards that gave the product team real-time visibility into how users form bonds with AI companions and where they drop off.",
    role: "Monitored retention cohorts, session patterns, and feature-level engagement to help the team understand what keeps users coming back to their AI companions.",
    image: "/images/torilab-soulriza.png",
    metrics: ["Retention cohort tracking", "Session depth analysis", "AI interaction dashboards"],
    badge: null,
  },
  {
    id: "ai-avatar",
    name: "AI Avatar",
    tagline: "AI-powered avatar creation",
    description:
      "Tracked the full avatar creation funnel, from first open to first creation, across 20+ user-facing features. Built instrumentation standards and self-serve LookML dashboards so product managers can access adoption data without writing a query.",
    role: "Designed and implemented event tracking for 60+ features across AI Avatar, Soulriza, and Twomi, improving feature-adoption visibility by 40% across all three products.",
    image: "/images/torilab-ai-avatar.jpg",
    metrics: ["60+ events tracked", "40% visibility boost", "Self-serve adoption dashboards"],
    badge: null,
  },
  {
    id: "twomi",
    name: "Twomi",
    tagline: "AI personalization, born from a data insight",
    description:
      "Twomi exists because of data. Through bi-weekly business reporting, I identified a rising trend in AI Companion apps and personalization features across the competitive market. I surfaced this signal to senior stakeholders, and the insight directly triggered the decision to build and launch Twomi as TORILAB's newest AI personalization app.",
    role: "Discovered the AI Companion and personalization trend through competitive market analysis in bi-weekly reports. Presented findings to C-suite, which informed the product decision to create Twomi. Now tracks Twomi's growth and engagement post-launch.",
    image: "/images/torilab-twomi.png",
    metrics: ["Trend discovery → product launch", "15% marketing ROI uplift", "50% DAU increase"],
    badge: "Origin Story",
  },
];

export default function TorilabShowcase() {
  const [activeId, setActiveId] = useState("twomi");
  const current = apps.find((a) => a.id === activeId)!;

  return (
    <div className="border border-[#D8DFEA] rounded-2xl bg-white overflow-hidden mb-10">
      {/* Card header + tab bar */}
      <div className="px-6 pt-6 pb-0 border-b border-[#D8DFEA]">
        <p className="text-xs font-semibold text-[#5A2E12] uppercase tracking-wide mb-1">
          TORILAB · March 2025 – Present
        </p>
        <p className="text-sm text-[#05070D] mb-5">
          At TORILAB I support three AI-powered apps with data analytics, BI dashboards, and product intelligence.
        </p>
        <div className="flex gap-0 -mb-px">
          {apps.map((app) => (
            <button
              key={app.id}
              onClick={() => setActiveId(app.id)}
              className={`relative flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeId === app.id
                  ? "border-[#0A7BFF] text-[#0A7BFF]"
                  : "border-transparent text-[#5A2E12] hover:text-[#05070D]"
              }`}
            >
              {app.name}
              {app.badge && (
                <span className="text-[10px] bg-[#0A7BFF] text-white px-1.5 py-0.5 rounded-full leading-none">
                  {app.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="p-6 flex flex-col md:flex-row gap-6">
        {/* App image */}
        <div className="md:w-1/2 relative rounded-xl overflow-hidden aspect-video img-zoom shrink-0 bg-[#F5F7FA] border border-[#D8DFEA]">
          <Image
            src={current.image}
            alt={current.name}
            fill
            className="object-contain p-2"
          />
        </div>

        {/* Details */}
        <div className="md:w-1/2 space-y-4">
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#05070D]">
              {current.name}
            </h3>
            <p className="text-sm text-[#0A7BFF] font-medium mt-0.5">{current.tagline}</p>
          </div>
          <p className="text-sm text-[#05070D] leading-relaxed">{current.description}</p>
          <div>
            <p className="text-xs font-semibold text-[#5A2E12] uppercase tracking-wide mb-1.5">
              My contribution
            </p>
            <p className="text-sm text-[#05070D] leading-relaxed">{current.role}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#5A2E12] uppercase tracking-wide mb-2">
              Key outcomes
            </p>
            <ul className="space-y-1.5">
              {current.metrics.map((m) => (
                <li
                  key={m}
                  className="text-xs font-medium text-[#0A7BFF] bg-[#F5F7FA] px-3 py-1.5 rounded-lg"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
