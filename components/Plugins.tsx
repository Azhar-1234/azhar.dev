import Image from "next/image";
import { plugins, roxnorPlugins } from "@/data/content";

export default function Plugins() {
  return (
    <section id="plugins" className="bg-cream-dark px-6 py-16 md:px-16 md:py-[88px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="font-mono text-[13px] font-medium text-rust">03 — PLUGINS</div>
        <h2 className="mt-3.5 mb-3 font-display text-[30px] font-bold tracking-tight sm:text-[36px] md:text-[44px]">
          Plugins I&apos;ve built &amp; shipped
        </h2>
        <p className="mb-12 max-w-[620px] text-base leading-relaxed text-[#57534E] md:text-[17px]">
          From my own approved WordPress.org plugin to custom WooCommerce
          extensions running on live stores.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {plugins.map((pl) => (
            <div
              key={pl.name}
              className="flex flex-col gap-3.5 rounded-2xl border border-border bg-cream-light p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(28,25,23,0.10)] md:p-[30px]"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="rounded-full bg-[#FFF1E4] px-3 py-[5px] font-mono text-xs font-semibold text-rust">
                  {pl.tag}
                </div>
              </div>
              <div className="font-display text-xl font-bold leading-tight">{pl.name}</div>
              <p className="m-0 text-[14.5px] leading-relaxed text-[#57534E]">{pl.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-gold bg-[#F7F0E2] px-5 py-7 md:px-9 md:py-8">
          <div className="flex flex-wrap items-baseline gap-4">
            <div className="font-mono text-[13px] font-semibold text-[#92400E]">
              CORE CONTRIBUTOR @ ROXNOR · 3+ YEARS
            </div>
            <div className="text-[14.5px] text-[#57534E]">
              Plugins with millions of combined installs that I help build and maintain:
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {roxnorPlugins.map((rp) => (
              <div
                key={rp.name}
                className="flex flex-col items-center gap-3.5 rounded-2xl border border-border bg-cream-light px-3 pb-5 pt-[26px] transition-transform duration-200 hover:-translate-y-[3px] hover:border-rust"
              >
                {rp.src && (
                  <Image
                    src={rp.src}
                    alt={rp.name}
                    width={64}
                    height={64}
                    unoptimized
                    className="h-16 w-16 rounded-[10px] object-contain"
                  />
                )}
                <div className="text-center text-[13.5px] font-semibold text-[#44403C]">
                  {rp.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
