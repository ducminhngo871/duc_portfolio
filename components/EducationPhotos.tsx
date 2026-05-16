"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export type EduPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export default function EducationPhotos({
  photos,
  gridClassName = "grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6",
}: {
  photos: EduPhoto[];
  gridClassName?: string;
}) {
  const [lightbox, setLightbox] = useState<EduPhoto | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <div className={gridClassName}>
        {photos.map((photo) => (
          <button
            key={photo.src}
            onClick={() => setLightbox(photo)}
            className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A7BFF] rounded-lg"
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-sm">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-[10px] text-center font-medium">Click to enlarge</p>
              </div>
            </div>
            <p className="text-xs text-[#5A2E12] text-center mt-2 leading-snug px-1">{photo.caption}</p>
          </button>
        ))}
      </div>

      {/* Lightbox overlay */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/88 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-9 right-0 text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              Close ✕
            </button>
            <div className="relative w-full h-[84vh] rounded-xl overflow-hidden shadow-2xl bg-black">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 92vw, 1152px"
              />
            </div>
            <p className="text-white/90 text-center mt-4 text-sm font-medium">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
