import Link from "next/link";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import NetworkStory from "./components/sections/NetworkStory";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import TechnologySpotlight from "./components/sections/TechnologySpotlight";
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
    title: "Strategy",
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
    title: "Development",
    description:
      "We build in manageable steps, keeping the system understandable and the feedback loop open.",
  },
  {
    number: "05",
    title: "Launch and support",
    description:
      "We prepare the agreed work for release and leave a clear foundation for what comes next.",
  },
];

export default function Home() {
  return (
    <main className="home-three-page">
      <Hero />
      <NetworkStory />
      <Services />
      <Projects />

      <section className="relative isolate mx-auto w-full max-w-[1200px] overflow-hidden px-5 py-24 sm:px-8 md:py-36" data-reveal>
        <div className="pointer-events-none absolute -right-32 top-1/2 -z-10 size-[440px] -translate-y-1/2 rounded-full bg-[#8b2eff]/[0.08] blur-[100px]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#53d7ff]">OUR APPROACH</span>
        <p className="mb-0 mt-6 max-w-[990px] text-[clamp(34px,5vw,62px)] font-medium leading-[1.2] tracking-[-0.055em]">
          Good technology is not just about code. It is about making useful ideas
          <span className="text-[#8992aa]"> work in the real world—with clarity,
          care, and business intent behind every decision.</span>
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1320px] px-5 pb-4 sm:px-8" data-reveal>
        <Link
          className="inline-flex items-center gap-2 border-b border-[#53d7ff]/50 pb-1.5 text-[13px] text-[#d5e8ff] transition-colors hover:border-[#ff28b9] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
          href="/about"
        >
          More about how we work <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <section id="home-process" className="border-y border-white/10 bg-transparent py-20 sm:px-0 md:py-28">
       <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="mb-9 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between md:gap-11" data-reveal>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff55c7]">HOW WE WORK</span>
            <h2 className="mb-0 mt-4 text-[clamp(40px,5vw,65px)] leading-[1.06] tracking-[-0.055em]">
              From first questions
              <br />
              <span className="text-[#909ab1]">to considered delivery.</span>
            </h2>
          </div>
          <p className="mb-1 max-w-[355px] text-[14px] leading-[1.9] text-muted">
            A straightforward sequence keeps the work grounded in real needs,
            visible decisions, and practical milestones.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-5 hidden h-px bg-gradient-to-r from-[#53d7ff]/20 via-blue/60 to-[#ff28b9]/55 lg:block" />
          {processSteps.map(({ number, title, description }) => (
            <article className="group relative min-h-[242px] overflow-hidden border border-white/[0.08] bg-[#0b0c19]/75 px-5 py-6 transition-colors hover:border-[#53d7ff]/35" key={number} data-reveal>
              <div className="pointer-events-none absolute -right-12 -top-16 size-40 rounded-full bg-[#087fff]/[0.09] blur-3xl transition-colors group-hover:bg-[#ff28b9]/[0.12]" />
              <span className="relative z-10 grid size-10 place-items-center rounded-full border border-[#53d7ff]/45 bg-[#101020] text-[12px] font-bold text-[#53d7ff]">{number}</span>
              <h3 className="relative mb-2.5 mt-6 text-[21px] font-semibold tracking-[-0.04em]">{title}</h3>
              <p className="relative text-[14px] leading-[1.8] text-muted">{description}</p>
            </article>
          ))}
        </div>
       </div>
      </section>

      <TechnologySpotlight />

      <section id="home-principles" className="border-y border-white/10 bg-transparent py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 px-5 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div data-reveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#53d7ff]">WHY COEFFICIENTSOFT</span>
            <h2 className="mb-4 mt-5 text-[clamp(37px,4.6vw,58px)] leading-[1.04] tracking-[-0.06em]">
              A thoughtful partner
              <br />
              <span className="text-[#909ab1]">for work that matters.</span>
            </h2>
            <p className="max-w-[430px] text-[14px] leading-[1.85] text-muted">
              Practical engineering, clear decisions, and a process shaped
              around the people and outcomes behind your product.
            </p>
          </div>
          <div className="border-t border-white/10">
            {[
              ["01", "Start with context", "We learn the workflow and constraints before recommending a solution."],
              ["02", "Choose what fits", "Technology and scope should serve the goal—not add complexity for its own sake."],
              ["03", "Make progress visible", "Focused steps and clear decisions keep the work understandable as it evolves."],
              ["04", "Build for what comes next", "Thoughtful foundations make it easier to maintain, improve, and grow the product."],
            ].map(([number, title, description]) => (
              <div className="grid min-h-[96px] grid-cols-[42px_1fr] items-start gap-3 border-b border-white/10 py-5 sm:grid-cols-[52px_1fr] sm:gap-4" key={number} data-reveal>
                <span className="pt-1 text-[11px] text-[#6e7a8d]">{number}</span>
                <div>
                  <h3 className="mb-1 text-[clamp(17px,2vw,21px)] font-medium tracking-[-0.02em]">{title}</h3>
                  <p className="mb-0 max-w-[540px] text-[13px] leading-[1.7] text-muted">{description}</p>
                </div>
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
