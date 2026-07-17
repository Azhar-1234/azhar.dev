import { contacts } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink px-16 py-24 text-cream">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[1fr_380px] items-start gap-16">
        <div>
          <div className="font-mono text-[13px] font-medium text-amber">05 — CONTACT</div>
          <h2 className="mt-4 font-display text-[52px] font-extrabold leading-[1.1] tracking-tight">
            Let&apos;s build something that sells.
          </h2>
          <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-[#A8A29E]">
            Open to full-time roles and freelance projects — WordPress
            plugins, WooCommerce customization, CRM integrations, or Laravel
            backends.
          </p>
          <a
            href="mailto:azhar64100@gmail.com"
            className="mt-9 inline-block rounded-full bg-rust px-9 py-4 text-[17px] font-bold text-[#FFF7ED] no-underline hover:bg-rust-light hover:text-[#FFF7ED]"
          >
            Say hello →
          </a>
        </div>
        <div className="flex flex-col gap-5 border-l border-border-dark pl-10 text-[15px]">
          {contacts.map((c) => (
            <div key={c.label}>
              <div className="mb-1 font-mono text-xs text-[#78716C]">{c.label}</div>
              <a href={c.href} className="font-semibold text-cream hover:text-amber">
                {c.value}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-[72px] flex max-w-[1180px] items-center justify-between border-t border-border-dark pt-7 font-mono text-[13px] text-[#78716C]">
        <div>© 2026 Azhar Uddin</div>
        <div>Built with React &amp; Next.js</div>
        <div>Mirpur, Dhaka, Bangladesh</div>
      </div>
    </section>
  );
}
