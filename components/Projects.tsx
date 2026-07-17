import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="px-16 py-[88px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="font-mono text-[13px] font-medium text-rust">04 — PROJECTS</div>
        <h2 className="mt-3.5 mb-12 font-display text-[44px] font-bold tracking-tight">
          Live projects
        </h2>
        <div className="flex flex-col gap-7">
          {projects.map((pr) => (
            <a
              key={pr.name}
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-[1fr_320px] gap-10 rounded-2xl border border-border bg-cream-light px-10 py-9 text-ink no-underline hover:border-rust hover:text-ink"
            >
              <div>
                <div className="flex items-baseline gap-4">
                  <div className="font-display text-[26px] font-bold">{pr.name}</div>
                  <div className="font-mono text-[13px] text-rust">{pr.host} ↗</div>
                </div>
                <p className="mt-3.5 max-w-[560px] text-[15.5px] leading-relaxed text-[#57534E]">
                  {pr.desc}
                </p>
              </div>
              <div className="flex flex-wrap content-start justify-end gap-2">
                {pr.tags.map((t) => (
                  <span
                    key={t}
                    className="h-fit rounded-full border border-border px-[14px] py-1.5 text-[13px] font-medium text-[#78716C]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
