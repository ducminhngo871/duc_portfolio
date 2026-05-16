"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ClickableProfilePhoto({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View full photo of ${alt}`}
        className="group relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg ring-4 ring-white shrink-0 img-zoom focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0A7BFF]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          priority
        />
        <span className="absolute inset-x-0 bottom-0 px-2 py-1.5 bg-gradient-to-t from-black/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="block text-white text-[10px] font-medium text-center">
            Click to view full photo
          </span>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/88 flex items-center justify-center p-6"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Profile photo lightbox"
        >
          <div
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-9 right-0 text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              Close ✕
            </button>
            <div className="relative w-full h-[80vh] rounded-xl overflow-hidden shadow-2xl bg-black">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 448px"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
