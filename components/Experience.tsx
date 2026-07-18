import { jobs } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-16 md:px-16 md:py-[88px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="font-mono text-[13px] font-medium text-rust">02 — EXPERIENCE</div>
        <h2 className="mt-3.5 mb-12 font-display text-[30px] font-bold tracking-tight sm:text-[36px] md:text-[44px]">
          Where I&apos;ve worked
        </h2>
        <div className="flex flex-col gap-7">
          {jobs.map((job) => (
            <div
              key={job.company}
              className="grid grid-cols-1 gap-6 rounded-2xl border border-border bg-cream-light px-6 py-7 md:px-10 md:py-9 lg:grid-cols-[280px_1fr] lg:gap-10"
            >
              <div>
                <div className="font-display text-2xl font-bold">{job.company}</div>
                <div className="mt-1.5 text-[15px] font-semibold text-rust">{job.role}</div>
                <div className="mt-2 font-mono text-[13px] text-[#78716C]">{job.period}</div>
              </div>
              <ul className="m-0 flex list-disc flex-col gap-2.5 pl-[18px] text-[15.5px] leading-relaxed text-[#44403C]">
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
