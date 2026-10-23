import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="border-t border-white/10 bg-[#0a0d13] py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        <div
          className="mb-9 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between"
          data-reveal
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#53d7ff]">
              CLIENT PERSPECTIVES
            </span>
            <h2 className="mb-0 mt-4 text-[clamp(40px,5vw,65px)] leading-[1.06] tracking-[-0.055em]">
              Good work is
              <br />
              <span className="text-[#707988]">built together.</span>
            </h2>
          </div>
          <p className="mb-1 max-w-[350px] text-[14px] leading-[1.9] text-muted">
            We share client feedback only when it is genuine and approved for
            publication.
          </p>
        </div>

        {testimonials.length === 0 ? (
          <div
            className="grid min-h-36 grid-cols-[48px_1fr] items-center gap-4 border-y border-white/10 py-7 md:grid-cols-[64px_1fr_auto] md:gap-7"
            data-testid="testimonials-empty-state"
            data-reveal
          >
            <span className="grid size-11 place-items-center border border-[#ff28b9]/45 text-[#ff55c7] md:size-14">
              <Quote size={22} strokeWidth={1.4} aria-hidden="true" />
            </span>
            <div>
              <h3 className="mb-1 text-[17px] font-medium tracking-[-0.02em]">
                No public testimonials yet.
              </h3>
              <p className="mb-0 max-w-[560px] text-[13px] leading-[1.7] text-muted">
                This space is ready for approved client feedback. Nothing is
                presented as an endorsement until authentic words are supplied.
              </p>
            </div>
            <Link
              className="col-start-2 inline-flex items-center gap-2 text-[12px] text-[#d5e8ff] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue md:col-start-auto"
              href="/contact"
            >
              Start a conversation <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map(({ id, quote, name, role, company }) => {
              const context = [role, company].filter(Boolean).join(" · ");
              return (
                <figure
                  className="m-0 border-l border-[#ff28b9]/60 pl-6 md:pl-8"
                  key={id}
                  data-reveal
                >
                  <blockquote className="m-0 text-[clamp(18px,2vw,24px)] leading-[1.55] tracking-[-0.02em] text-[#e2e8f1]">
                    {quote}
                  </blockquote>
                  <figcaption className="mt-6 flex flex-col gap-1">
                    <cite className="text-[13px] font-semibold not-italic text-white">
                      {name}
                    </cite>
                    {context && (
                      <span className="text-[12px] text-[#8f9bad]">{context}</span>
                    )}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
