"use client";

import { useState } from "react";
import Image from "next/image";

export default function FlipPortraitToggle() {
  const [isDataMode, setIsDataMode] = useState(false);

  return (
    <div className="w-full max-w-xl">
      <button
        type="button"
        onClick={() => setIsDataMode((current) => !current)}
        className="group block w-full cursor-pointer rounded-[2rem] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0A7BFF]/40"
        aria-label={isDataMode ? "Show classic portrait" : "Show data mode portrait"}
      >
        <div style={{ perspective: "1600px" }}>
          <div
            className={`relative aspect-[4/3] w-full rounded-[2rem] transition-transform duration-700 ${
              isDataMode ? "[transform:rotateY(180deg)]" : ""
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 overflow-hidden rounded-[2rem] bg-[#F5F7FA] shadow-2xl ring-1 ring-white/60"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Image
                src="/images/classic-portrait.png"
                alt="Classic portrait of Duc (Daniel) Ngo"
                fill
                priority
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 520px, 90vw"
              />
              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-[#05070D] shadow-lg backdrop-blur-md">
                Classic
              </div>
            </div>

            <div
              className="absolute inset-0 overflow-hidden rounded-[2rem] bg-[#061B5F] shadow-2xl ring-1 ring-white/20 [transform:rotateY(180deg)]"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Image
                src="/images/data-portrait.png"
                alt="Data mode portrait of Duc (Daniel) Ngo"
                fill
                priority
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 520px, 90vw"
              />
              <div className="absolute left-5 top-5 rounded-full bg-[#0A7BFF]/90 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur-md">
                Data Mode
              </div>
            </div>
          </div>
        </div>
      </button>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setIsDataMode(false)}
          aria-pressed={!isDataMode}
          className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
            !isDataMode
              ? "bg-[#05070D] text-white shadow-lg shadow-black/20"
              : "bg-white text-[#5A2E12] shadow hover:text-[#05070D]"
          }`}
        >
          Classic
        </button>

        <button
          type="button"
          onClick={() => setIsDataMode(true)}
          aria-pressed={isDataMode}
          className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
            isDataMode
              ? "bg-[#0A7BFF] text-white shadow-lg shadow-[#0A7BFF]/30"
              : "bg-white text-[#5A2E12] shadow hover:text-[#05070D]"
          }`}
        >
          Data Mode
        </button>
      </div>
    </div>
  );
}
