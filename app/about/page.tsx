import Link from "next/link";
import { ArrowUpRight, Compass, Gauge, ShieldCheck, Waypoints } from "lucide-react";
import PageBanner from "../components/layout/PageBanner";
import { siteImages } from "../data/site-images";

const principles = [
  {
    title: "Keep it practical",
    description:
      "Start with the workflow and the people involved. Choose technology to serve the work, not the other way around.",
    icon: Compass,
  },
  {
    title: "Design for clarity",
    description:
      "Make interfaces easier to understand and systems easier for teams to operate and maintain.",
    icon: Waypoints,
  },
  {
    title: "Ship with intent",
    description:
      "Break down complex work into understandable decisions, useful increments, and clear milestones.",
    icon: Gauge,
  },
  {
    title: "Build for trust",
    description:
      "Treat accessibility, reliability, and straightforward communication as part of the product.",
    icon: ShieldCheck,
  },
];

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-blue bg-blue px-5 text-[13px] font-semibold text-white shadow-[0_0_28px_rgba(8,127,255,0.15)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2690ff]";

export default function AboutPage() {
  return (
    <div className="pb-16">
      <PageBanner
        eyebrow="ABOUT COEFFICIENTSOFT"
        title="A considered approach to engineering useful things."
        description="We work with people who want technology to solve a real problem. Our focus is clear thinking, careful design, and software that makes sense in day-to-day use."
        variant="about"
        action={{ label: "Work with us", href: "/contact" }}
        secondaryAction={{ label: "View services", href: "/services" }}
        image={siteImages.aboutCollaboration}
      />

      <main>
        <section className="mx-auto w-full max-w-[1200px] px-5 pb-20 pt-20 sm:px-8 md:pb-24 md:pt-28">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-9" data-reveal>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">OUR POINT OF VIEW</span>
              <h2 className="mb-0 mt-4 text-[clamp(40px,5vw,62px)] leading-[1.06] tracking-[-0.055em]">
                Good software
                <br />
                <span className="text-[#707988]">starts with listening.</span>
              </h2>
            </div>
            <p className="m-0 text-[16px] leading-[1.9] text-muted md:text-[17px]">
              The best next step is not always the most complicated one. We take
              time to understand how a business works, what its users need, and
              where software can make a meaningful difference. Then we work
              together to turn that understanding into a useful product or
              improvement.
            </p>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0a0d13] py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
            <div className="mb-9 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between" data-reveal>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">HOW WE THINK</span>
                <h2 className="mb-0 mt-4 text-[clamp(40px,5vw,62px)] leading-[1.06] tracking-[-0.055em]">
                  Clear work,
                  <br />
                  <span className="text-[#707988]">done with care.</span>
                </h2>
              </div>
              <p className="max-w-[355px] text-[14px] leading-[1.9] text-muted">
                These principles shape how we approach product decisions,
                collaboration, and delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
              {principles.map(({ title, description, icon: Icon }) => (
                <article className="min-h-[220px] bg-[#0c1018] p-6" key={title} data-reveal>
                  <span className="mb-5 grid size-11 place-items-center border border-blue/45 bg-blue/[0.08] text-blue">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mb-3 text-[22px] leading-[1.2] tracking-[-0.04em]">{title}</h3>
                  <p className="m-0 text-[14px] leading-[1.8] text-muted">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 md:py-28" data-reveal>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">WORKING TOGETHER</span>
          <h2 className="mb-4 mt-5 max-w-[670px] text-[clamp(37px,4.6vw,58px)] leading-[1.04] tracking-[-0.06em]">
            Shared context makes better decisions.
          </h2>
          <p className="mb-7 max-w-[620px] text-[15px] leading-[1.9] text-muted">
            We collaborate openly: align on the problem, make trade-offs visible,
            and check the work with the people it is meant to help. That keeps
            the result grounded in real constraints and easier to carry forward.
          </p>
          <Link href="/contact" className={primaryButton}>
            Start a conversation <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </section>
      </main>
    </div>
  );
}
