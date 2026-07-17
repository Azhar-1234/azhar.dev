import { skillGroups } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="bg-ink px-16 py-[88px] text-cream">
      <div className="mx-auto max-w-[1180px]">
        <div className="font-mono text-[13px] font-medium text-amber">01 — TOOLKIT</div>
        <h2 className="mt-3.5 mb-12 font-display text-[44px] font-bold tracking-tight">
          What I work with
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border-dark bg-ink-soft p-7 hover:border-rust"
            >
              <div className="mb-3.5 font-mono text-[13px] font-semibold text-amber">
                {g.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-[#44403C] px-[14px] py-1.5 text-[13.5px] font-medium text-[#D6D3D1]"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
