const links = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#plugins", label: "Plugins" },
  { href: "#projects", label: "Projects" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-cream/90 px-16 py-[22px] backdrop-blur-sm">
      <div className="font-mono text-[15px] font-semibold tracking-wide">
        azhar<span className="text-rust">.</span>dev
      </div>
      <div className="flex items-center gap-8 text-sm font-semibold">
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
    </nav>
  );
}
