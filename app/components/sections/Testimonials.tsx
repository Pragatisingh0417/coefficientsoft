import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="border-t border-white/10 bg-[#0a0d13] py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="mb-9 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between" data-reveal>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">CLIENT PERSPECTIVES</span>
            <h2 className="mb-0 mt-4 text-[clamp(40px,5vw,65px)] leading-[1.06] tracking-[-0.055em]">
              Words from
              <br />
              <span className="text-[#707988]">real collaborations.</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map(({ quote, name, role, company }) => {
            const context = [role, company].filter(Boolean).join(" · ");
            return (
              <figure className="m-0 border-l border-blue/60 bg-gradient-to-r from-blue/[0.06] to-transparent p-7" key={`${name}-${quote}`} data-reveal>
                <blockquote className="m-0 text-[clamp(18px,2vw,24px)] leading-[1.55] tracking-[-0.02em] text-[#e2e8f1]">
                  {quote}
                </blockquote>
                <figcaption className="mt-6 flex flex-col gap-1">
                  <cite className="text-[13px] font-semibold not-italic text-white">{name}</cite>
                  {context && <span className="text-[12px] text-[#8f9bad]">{context}</span>}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
