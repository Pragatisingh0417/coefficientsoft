import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We map the current workflow, the friction points, and the outcomes the product needs to enable.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We agree on scope, priorities, technical direction, and a realistic path through the work.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We make the key journeys and product decisions clear before they become expensive to change.",
  },
  {
    number: "04",
    title: "Engineering",
    description:
      "We build in manageable steps, keeping the system understandable and the feedback loop open.",
  },
  {
    number: "05",
    title: "Delivery",
    description:
      "We prepare the agreed work for release and leave a clear foundation for what comes next.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />

      <section className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 md:py-28" data-reveal>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">OUR APPROACH</span>
        <p className="mb-0 mt-6 max-w-[900px] text-[clamp(30px,4vw,48px)] font-medium leading-[1.35] tracking-[-0.045em]">
          Good technology is not just about code. It is about making useful ideas
          work in the real world—with clarity, care, and business intent behind
          every decision.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <div className="mb-9 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between md:gap-11" data-reveal>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">HOW WE WORK</span>
            <h2 className="mb-0 mt-4 text-[clamp(40px,5vw,65px)] leading-[1.06] tracking-[-0.055em]">
              From first questions
              <br />
              <span className="text-[#707988]">to considered delivery.</span>
            </h2>
          </div>
          <p className="mb-1 max-w-[355px] text-[14px] leading-[1.9] text-muted">
            A straightforward sequence keeps the work grounded in real needs,
            visible decisions, and practical milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map(({ number, title, description }) => (
            <article className="min-h-[220px] border-t border-white/15 bg-white/[0.02] px-5 py-6" key={number} data-reveal>
              <span className="grid size-10 place-items-center rounded-full border border-blue/45 text-[12px] font-bold text-blue">{number}</span>
              <h3 className="mb-2.5 mt-5 text-[21px] font-semibold tracking-[-0.04em]">{title}</h3>
              <p className="text-[13px] leading-[1.8] text-muted">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[radial-gradient(ellipse_at_10%_30%,rgba(8,127,255,0.07),transparent_36%)] py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 px-5 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div data-reveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">WHAT GUIDES THE WORK</span>
            <h2 className="mb-4 mt-5 text-[clamp(37px,4.6vw,58px)] leading-[1.04] tracking-[-0.06em]">
              Clear principles,
              <br />
              <span className="text-[#707988]">not borrowed promises.</span>
            </h2>
            <p className="max-w-[430px] text-[14px] leading-[1.85] text-muted">
              We do not publish unverified endorsements. Here is what we aim to
              bring to every collaboration.
            </p>
          </div>
          <div className="border-t border-white/10">
            {[
              "Make the problem clear.",
              "Keep decisions practical.",
              "Build for the people using it.",
            ].map((principle, index) => (
              <div className="grid min-h-[82px] grid-cols-[52px_1fr] items-center border-b border-white/10" key={principle} data-reveal>
                <span className="text-[11px] text-[#6e7a8d]">0{index + 1}</span>
                <h3 className="text-[clamp(17px,2vw,21px)] font-medium tracking-[-0.02em]">{principle}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Contact />
    </main>
  );
}
