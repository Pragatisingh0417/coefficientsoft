
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 md:py-32">
      <div className="mb-9 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-11" data-reveal>
        <div>
          <span className="inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">WHAT WE DO</span>
          <h2 className="mb-0 mt-4 text-[clamp(40px,5vw,65px)] leading-[1.06] tracking-[-0.055em]">
            Six ways to move
            <br />
            <span className="text-[#707988]">good ideas forward.</span>
          </h2>
        </div>
        <p className="mb-1 max-w-[355px] text-[14px] leading-[1.9] text-muted">
          From product engineering to digital growth, choose the support that fits
          the work in front of you.
        </p>
      </div>

      <div className="grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ id, number, title, summary, icon: Icon }) => (
          <article
            className="relative min-h-[260px] border-b border-white/10 py-6 sm:px-5 lg:px-6"
            key={id}
            data-reveal
          >
            <span className="mb-6 block text-[11px] tracking-[0.12em] text-[#748092]">{number}</span>
            <Icon className="absolute right-0 top-6 text-[#68aeff] sm:right-5 lg:right-6" size={22} strokeWidth={1.5} aria-hidden="true" />
            <h3 className="mb-2.5 max-w-[290px] text-[20px] leading-[1.25] tracking-[-0.03em]">{title}</h3>
            <p className="min-h-[66px] max-w-[350px] text-[13px] leading-[1.75] text-muted">{summary}</p>
            <Link className="mt-4 inline-flex items-center gap-2 text-[12px] text-[#d5e8ff] transition-all hover:gap-3 hover:text-white" href={`/services#${id}`} aria-label={`Explore ${title}`}>
              Explore service <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
