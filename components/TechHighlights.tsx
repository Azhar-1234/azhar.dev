import Image from "next/image";
import { techLogos } from "@/data/content";

export default function TechHighlights() {
  return (
    <section
      id="highlights"
      className="border-t border-border bg-cream-light px-16 py-[72px]"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="text-center font-mono text-[13px] font-medium text-rust">
          HIGHLIGHTS — MY STACK
        </div>
        <h2 className="mt-3 mb-11 text-center font-display text-4xl font-bold tracking-tight">
          Languages, frameworks &amp; tools I use daily
        </h2>
        <div className="grid grid-cols-7 gap-[18px]">
          {techLogos.map((tl) => (
            <div
              key={tl.name}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-cream px-3 py-[22px] transition-transform duration-200 hover:-translate-y-[3px] hover:border-rust"
            >
              {tl.src && (
                <Image
                  src={tl.src}
                  alt={tl.name}
                  width={40}
                  height={40}
                  unoptimized
                  className="h-10 w-10 object-contain"
                />
              )}
              <div className="text-[13px] font-semibold text-[#44403C]">{tl.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
