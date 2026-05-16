"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/work", label: "Portfolio" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F5F7FA]/90 backdrop-blur border-b border-[#D8DFEA]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-[#05070D] text-sm tracking-tight hover:text-[#0A7BFF] transition-colors"
        >
          Duc (Daniel) Ngo
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-[#0A7BFF] font-medium"
                  : "text-[#5A2E12] hover:text-[#05070D]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:ducminhngo871@gmail.com"
            className="text-sm bg-[#0A7BFF] text-white px-4 py-1.5 rounded-full hover:bg-[#0646B8] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#5A2E12] hover:text-[#05070D] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4l12 12M16 4L4 16" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 5h14M3 10h14M3 15h14" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#D8DFEA] bg-[#F5F7FA]">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm py-1 transition-colors ${
                  pathname === link.href
                    ? "text-[#0A7BFF] font-medium"
                    : "text-[#5A2E12] hover:text-[#05070D]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:ducminhngo871@gmail.com"
              className="text-sm text-[#0A7BFF] font-medium py-1"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
