import Image from "next/image";
import { stats } from "@/data/content";

export default function Hero() {
  return (
    <header className="px-16 pb-[88px] pt-24">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[1fr_380px] items-center gap-16">
        <div>
          <div className="animate-fadeUp font-mono text-sm font-medium text-rust">
            {"// Hi, I'm Azhar Uddin"} <span className="animate-blink">▌</span>
          </div>
          <h1 className="animate-fadeUp mt-5 text-balance font-display text-[62px] font-extrabold leading-[1.06] tracking-tight [animation-delay:0.08s]">
            I build WordPress plugins that power real stores.
          </h1>
          <p className="animate-fadeUp mt-7 max-w-[640px] text-pretty text-lg leading-relaxed text-[#57534E] [animation-delay:0.16s]">
            Software Engineer with 4+ years in PHP, Laravel, WordPress &amp;
            WooCommerce. I&apos;ve shipped custom plugins, CRM integrations, and
            conversion-tracking setups for stores that sell every day — and I
            contribute to plugins used by millions, like MetForm and ShopEngine.
          </p>
          <div className="animate-fadeUp mt-10 flex gap-4 [animation-delay:0.24s]">
            <a
              href="#projects"
              className="rounded-full bg-rust px-8 py-[15px] text-base font-bold text-[#FFF7ED] no-underline hover:bg-rust-dark hover:text-[#FFF7ED]"
            >
              See my work
            </a>
            <a
              href="mailto:azhar64100@gmail.com"
              className="rounded-full border-2 border-ink px-8 py-[13px] text-base font-bold text-ink no-underline hover:bg-ink hover:text-[#FFF7ED]"
            >
              azhar64100@gmail.com
            </a>
            <a
              href="/azhar-cv.pdf"
              download
              className="flex items-center gap-2 rounded-full border-2 border-rust px-8 py-[13px] text-base font-bold text-rust no-underline hover:bg-rust hover:text-[#FFF7ED]"
            >
              Download CV ↓
            </a>
          </div>
        </div>
        <div className="animate-fadeUp relative [animation-delay:0.2s]">
          <Image
            src="/images/hero-azhar-uddin.png"
            alt="Azhar Uddin"
            width={380}
            height={380}
            className="block aspect-square w-full rounded-[20px] border border-border object-cover shadow-[0_24px_56px_rgba(28,25,23,0.16)]"
            priority
          />
          <div className="absolute bottom-5 left-5 rounded-xl bg-ink/85 px-4 py-[10px] font-mono text-[12.5px] text-cream backdrop-blur-sm">
            Software Engineer @ Roxnor
          </div>
        </div>
        <div className="animate-fadeUp col-span-full mt-2 flex gap-10 [animation-delay:0.32s]">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-border pl-5">
              <div className="font-display text-[34px] font-extrabold">{s.num}</div>
              <div className="mt-1 text-[13px] font-medium text-[#78716C]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
