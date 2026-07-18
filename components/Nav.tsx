"use client";

import { useState } from "react";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#plugins", label: "Plugins" },
  { href: "#projects", label: "Projects" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-cream/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-[18px] lg:px-16 lg:py-[22px]">
        <div className="font-mono text-[15px] font-semibold tracking-wide">
          azhar<span className="text-rust">.</span>dev
        </div>
        <div className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#57534E] no-underline hover:text-rust"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/azhar-cv.pdf"
            download
            className="rounded-full border border-rust px-5 py-[9px] text-rust no-underline hover:bg-rust hover:text-[#FFF7ED]"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="rounded-full bg-ink px-5 py-[9px] text-[#FFF7ED] no-underline hover:bg-rust hover:text-[#FFF7ED]"
          >
            Hire me
          </a>
        </div>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`block h-[2px] w-6 bg-ink transition-transform duration-200 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition-transform duration-200 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-1 border-t border-border px-6 pb-6 pt-2 text-sm font-semibold lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-[#57534E] no-underline hover:bg-cream-dark hover:text-rust"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/azhar-cv.pdf"
            download
            className="mt-2 rounded-full border border-rust px-5 py-[10px] text-center text-rust no-underline hover:bg-rust hover:text-[#FFF7ED]"
          >
            Download CV
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-ink px-5 py-[10px] text-center text-[#FFF7ED] no-underline hover:bg-rust hover:text-[#FFF7ED]"
          >
            Hire me
          </a>
        </div>
      )}
    </nav>
  );
}
