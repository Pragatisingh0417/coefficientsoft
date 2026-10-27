"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { useState } from "react";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;
  const previousIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  const initials = (name: string) =>
    name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");

  const previewCard = (index: number, direction: "previous" | "next") => {
    const testimonial = testimonials[index];
    if (!testimonial) return null;

    return (
      <button
        type="button"
        aria-label={`Show ${direction} client perspective from ${testimonial.name}`}
        className="group hidden min-h-[280px] flex-col items-center justify-center border border-white/10 bg-[#101020]/65 px-5 py-8 text-center opacity-55 transition hover:opacity-85 md:flex"
        onClick={() => setActiveIndex(index)}
      >
        <span className="mb-5 grid size-12 place-items-center rounded-full border border-[#53d7ff]/30 bg-[#0b1020] text-[12px] font-semibold text-[#a6cfff]">
          {initials(testimonial.name)}
        </span>
        <p aria-hidden="true" className="line-clamp-4 text-[14px] leading-[1.7] text-[#c2c9d7]">
          “{testimonial.quote}”
        </p>
        <span className="mt-4 text-[11px] font-semibold text-white">{testimonial.name}</span>
      </button>
    );
  };

  return (
    <section id="client-perspectives" className="relative isolate overflow-hidden border-y border-white/10 bg-transparent py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-0 -z-10 size-[500px] rounded-full bg-[radial-gradient(circle,rgba(8,127,255,0.12),rgba(139,46,255,0.04)_44%,transparent_72%)] blur-2xl"
      />
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

        {total === 0 ? (
          <div
            className="relative mx-auto grid min-h-[330px] max-w-[780px] grid-cols-1 justify-items-center gap-3 overflow-hidden border border-white/10 bg-[linear-gradient(145deg,rgba(13,20,39,0.88),rgba(8,10,22,0.82))] px-6 pb-8 pt-10 text-center shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:px-10"
            data-testid="testimonials-empty-state"
            data-reveal
          >
            <span className="grid size-[68px] -translate-y-1/2 place-items-center rounded-full border border-[#53d7ff]/40 bg-[#0b1020] text-[#53d7ff] shadow-[0_0_35px_rgba(8,127,255,0.2)]">
              <Quote size={27} strokeWidth={1.4} aria-hidden="true" />
            </span>
            <div className="-mt-6">
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#53d7ff]">
                CLIENT PERSPECTIVES
              </span>
              <h3 className="mb-2 mt-3 text-[clamp(23px,3vw,30px)] font-medium tracking-[-0.035em]">
                Real words. Shared with permission.
              </h3>
              <p className="mx-auto mb-0 max-w-[520px] text-[14px] leading-[1.8] text-muted">
                We don&apos;t publish invented reviews. When clients approve
                their feedback for sharing, their stories will take center stage here.
              </p>
            </div>
            <Link
              className="mt-3 inline-flex min-h-11 w-fit items-center gap-2 border border-[#53d7ff]/30 px-4 text-[12px] font-medium text-[#d5e8ff] transition-colors hover:border-[#53d7ff]/60 hover:bg-[#53d7ff]/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
              href="/contact"
            >
              Start a conversation <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <div aria-hidden="true" className="mt-4 flex items-center gap-2">
              {[0, 1, 2].map((dot) => (
                <span
                  className={`size-1.5 rounded-full ${dot === 1 ? "bg-[#53d7ff]" : "bg-white/25"}`}
                  key={dot}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[0.8fr_1.25fr_0.8fr]">
              {total > 1 ? previewCard(previousIndex, "previous") : <div className="hidden md:block" />}
              {(() => {
                const { id, quote, name, role, company } = testimonials[activeIndex];
                const context = [role, company].filter(Boolean).join(" · ");
                return (
                  <figure
                    className="relative m-0 flex min-h-[330px] flex-col items-center border border-white/10 bg-[linear-gradient(145deg,rgba(14,24,46,0.96),rgba(8,11,24,0.94))] px-6 pb-8 pt-12 text-center shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:px-10"
                    key={id}
                    data-reveal
                  >
                    <span className="-mt-20 mb-5 grid size-[68px] place-items-center rounded-full border border-[#53d7ff]/45 bg-[#0b1020] text-[14px] font-semibold text-[#bfe7ff] shadow-[0_0_28px_rgba(8,127,255,0.18)]">
                      {initials(name)}
                    </span>
                    <cite className="text-[12px] font-semibold not-italic text-white">{name}</cite>
                    {context && <span className="mt-1 text-[11px] text-[#8f9bad]">{context}</span>}
                    <Quote size={20} strokeWidth={1.4} className="mb-2 mt-5 text-[#53d7ff]" aria-hidden="true" />
                    <blockquote className="m-0 text-[clamp(17px,2vw,21px)] italic leading-[1.65] tracking-[-0.02em] text-[#e2e8f1]">
                      {quote}
                    </blockquote>
                  </figure>
                );
              })()}
              {total > 1 ? previewCard(nextIndex, "next") : <div className="hidden md:block" />}
            </div>
            <div className="mt-7 flex items-center justify-center gap-5">
              {total > 1 && (
                <button
                  type="button"
                  aria-label="Previous client perspective"
                  className="grid size-9 place-items-center border border-white/15 text-[#c4ccd8] transition hover:border-[#53d7ff]/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                  onClick={() => setActiveIndex(previousIndex)}
                >
                  <ArrowLeft size={16} aria-hidden="true" />
                </button>
              )}
              <div aria-label={`Slide ${activeIndex + 1} of ${total}`} className="flex items-center gap-2">
                {testimonials.map(({ id }, index) => (
                  <button
                    type="button"
                    aria-label={`Show client perspective ${index + 1}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    className={`size-2 rounded-full transition ${index === activeIndex ? "scale-125 bg-[#53d7ff]" : "bg-white/30 hover:bg-white/60"}`}
                    key={id}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
              {total > 1 && (
                <button
                  type="button"
                  aria-label="Next client perspective"
                  className="grid size-9 place-items-center border border-white/15 text-[#c4ccd8] transition hover:border-[#53d7ff]/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                  onClick={() => setActiveIndex(nextIndex)}
                >
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
