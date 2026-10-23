import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Gauge,
  ShieldCheck,
  Waypoints,
} from "lucide-react";
import PageBanner from "../components/layout/PageBanner";
import AssetFrame from "../components/layout/AssetFrame";
import { siteImages } from "../data/site-images";

const principles = [
  {
    number: "01",
    title: "Start with the real problem",
    description:
      "Understand the people, workflow, and constraints before choosing what to build.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Make complexity clearer",
    description:
      "Shape interfaces and systems so teams can use, operate, and maintain them.",
    icon: Waypoints,
  },
  {
    number: "03",
    title: "Move in useful steps",
    description:
      "Break ambitious ideas into clear decisions and manageable increments.",
    icon: Gauge,
  },
  {
    number: "04",
    title: "Build with care",
    description:
      "Treat accessibility, reliability, and communication as part of the product.",
    icon: ShieldCheck,
  },
];

const process = [
  ["01", "Understand", "Get context on the people, goals, and current workflow."],
  ["02", "Shape", "Agree on priorities, scope, and a practical direction."],
  ["03", "Create", "Design and develop in focused, reviewable steps."],
  ["04", "Support", "Prepare the agreed work for release and what comes next."],
];

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2.5 border border-blue bg-blue px-5 text-[14px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#2690ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue";

export default function AboutPage() {
  return (
    <div className="pb-10">
      <PageBanner
        eyebrow="ABOUT COEFFICIENTSOFT"
        title="Engineering shaped around real work."
        description="CoefficientSoft brings product thinking, design, and software delivery together to help turn meaningful ideas into useful digital experiences."
        variant="about"
        action={{ label: "Discuss a project", href: "/contact" }}
        secondaryAction={{ label: "Explore services", href: "/services" }}
        image={siteImages.aboutCollaboration}
      />

      <main>
        <section className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-28">
          <div data-reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#78b7ff]">
              OUR POINT OF VIEW
            </span>
            <h2 className="mb-0 mt-5 max-w-[470px] text-[clamp(38px,5vw,62px)] leading-[1.06] tracking-[-0.055em]">
              Better work starts with{" "}
              <span className="text-[#8995a6]">better questions.</span>
            </h2>
          </div>
          <div className="border-l border-blue/55 pl-5 md:pl-8" data-reveal>
            <p className="m-0 max-w-[690px] text-[17px] leading-[1.85] text-[#d9e1ec] md:text-[18px]">
              The best next step is not always the most complicated one. We take
              time to understand how a business works, what its users need, and
              where software can make a meaningful difference.
            </p>
            <p className="mb-0 mt-5 max-w-[660px] text-[16px] leading-[1.9] text-muted">
              From that shared context, we can make clearer product decisions,
              choose practical technology, and create an outcome that makes
              sense in day-to-day use.
            </p>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[radial-gradient(ellipse_at_8%_18%,rgba(8,127,255,0.11),transparent_38%),#101020] py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
            <div className="mb-10 grid grid-cols-1 gap-5 md:mb-14 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-12" data-reveal>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#78b7ff]">
                  HOW WE APPROACH THE WORK
                </span>
                <h2 className="mb-0 mt-5 max-w-[670px] text-[clamp(38px,5vw,62px)] leading-[1.06] tracking-[-0.055em]">
                  Thoughtful by design.
                  <br />
                  <span className="text-[#8995a6]">Practical by default.</span>
                </h2>
              </div>
              <p className="mb-1 max-w-[450px] text-[16px] leading-[1.85] text-muted">
                These principles guide how we work through product, engineering,
                and business challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <article className="relative flex min-h-[340px] flex-col justify-between overflow-hidden border border-[#53d7ff]/20 bg-[#101020] p-7 sm:p-9" data-reveal>
                <div className="absolute -right-12 -top-12 size-64 rounded-full border border-[#53d7ff]/15" aria-hidden="true" />
                <div className="absolute -right-1 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#ff28b9]/30 to-transparent" aria-hidden="true" />
                <div className="relative">
                  <span className="grid size-12 place-items-center border border-[#53d7ff]/45 bg-blue/10 text-[#53d7ff]">
                    <Compass size={24} aria-hidden="true" />
                  </span>
                  <span className="mt-8 block text-[11px] font-semibold tracking-[0.18em] text-[#53d7ff]">
                    01 / BEGIN WITH CONTEXT
                  </span>
                  <h3 className="mb-3 mt-3 max-w-[420px] text-[30px] leading-tight tracking-[-0.04em] sm:text-[36px]">
                    Keep the work connected to the people it serves.
                  </h3>
                </div>
                <p className="relative mb-0 max-w-[470px] text-[16px] leading-[1.8] text-muted">
                  Understand the workflow and constraints first. Choose
                  technology to serve the work, not the other way around.
                </p>
              </article>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {principles.slice(1).map(({ number, title, description, icon: Icon }) => (
                  <article className="grid min-h-[148px] grid-cols-[52px_1fr] gap-4 border border-white/10 bg-[#0c0d1a] p-5 sm:p-6" key={number} data-reveal>
                    <span className="grid size-11 place-items-center border border-[#53d7ff]/35 bg-blue/[0.07] text-[#53d7ff]">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <div>
                      <span className="text-[10px] font-semibold tracking-[0.16em] text-[#77869b]">
                        {number}
                      </span>
                      <h3 className="mb-2 mt-1 text-[20px] leading-[1.25] tracking-[-0.03em]">
                        {title}
                      </h3>
                      <p className="m-0 text-[15px] leading-[1.75] text-muted">
                        {description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[radial-gradient(ellipse_at_84%_50%,rgba(255,40,185,0.1),transparent_40%),#0b0c19]">
          <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-9 px-5 py-16 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-24">
            <div data-reveal>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#78b7ff]">
                ENGINEERING WITH CURIOSITY
              </span>
              <h2 className="mb-0 mt-5 max-w-[510px] text-[clamp(36px,4.6vw,58px)] leading-[1.05] tracking-[-0.06em]">
                Ideas take shape
                <br />
                <span className="text-[#8995a6]">through thoughtful work.</span>
              </h2>
              <p className="mb-0 mt-5 max-w-[460px] text-[16px] leading-[1.85] text-muted">
                We explore what is possible, test what is useful, and turn
                emerging ideas into intelligent products built for real needs.
              </p>
            </div>
            <div className="relative" data-reveal>
              <AssetFrame
                asset={siteImages.aboutSphere}
                className="aspect-[4/3] w-full border border-white/10 bg-[#080a0f]"
                sizes="(max-width: 768px) 100vw, 50vw"
                fallback={
                  <div className="absolute inset-0 grid place-items-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_52%,rgba(8,127,255,0.17),transparent_54%),#080a0f]">
                    <svg
                      className="h-[78%] w-[78%] max-w-[430px]"
                      viewBox="0 0 440 330"
                      fill="none"
                      aria-hidden="true"
                    >
                      <defs>
                        <radialGradient id="about-sphere" cx="0" cy="0" r="1" gradientTransform="matrix(130 180 -180 130 162 95)" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#BDE2FF" />
                          <stop offset=".36" stopColor="#378DE4" />
                          <stop offset=".78" stopColor="#0C4F91" />
                          <stop offset="1" stopColor="#071629" />
                        </radialGradient>
                        <linearGradient id="sphere-ribbon" x1="90" x2="360" y1="90" y2="264" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#D7EEFF" stopOpacity=".56" />
                          <stop offset=".48" stopColor="#78B7FF" stopOpacity=".12" />
                          <stop offset="1" stopColor="#087FFF" stopOpacity=".48" />
                        </linearGradient>
                      </defs>
                      <circle cx="220" cy="165" r="108" fill="url(#about-sphere)" />
                      <path d="M108 149c43-79 149-112 229-49 40 31 50 83 21 123-24 33-62 49-107 44 51-18 74-61 55-98-25-48-91-60-198-20Z" fill="url(#sphere-ribbon)" />
                      <ellipse cx="220" cy="165" rx="108" ry="42" stroke="#A6D6FF" strokeOpacity=".38" transform="rotate(-24 220 165)" />
                      <ellipse cx="220" cy="165" rx="96" ry="58" stroke="#78B7FF" strokeOpacity=".22" transform="rotate(43 220 165)" />
                    </svg>
                  </div>
                }
              />
              <span className="absolute bottom-4 left-4 text-[9px] font-medium uppercase tracking-[0.18em] text-[#b9d8fb]">
                EXPLORE · ENGINEER · REFINE
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
          <div className="mb-10 grid grid-cols-1 gap-5 md:mb-14 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-12" data-reveal>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#78b7ff]">
                A CLEAR WAY THROUGH
              </span>
              <h2 className="mb-0 mt-5 max-w-[680px] text-[clamp(38px,5vw,62px)] leading-[1.06] tracking-[-0.055em]">
                From first questions
                <br />
                <span className="text-[#8995a6]">to considered delivery.</span>
              </h2>
            </div>
            <p className="mb-1 max-w-[420px] text-[16px] leading-[1.85] text-muted">
              Each step makes room for clear decisions and feedback as the work
              takes shape.
            </p>
          </div>
          <ol className="grid grid-cols-1 border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, description]) => (
              <li className="min-h-[210px] border-b border-white/10 px-4 py-6 sm:border-b-0 lg:border-l lg:border-white/10 lg:pl-6 lg:first:border-l-0 lg:first:pl-0" key={number} data-reveal>
                <span className="grid size-10 place-items-center rounded-full border border-blue/50 bg-[#0a111b] text-[12px] font-semibold text-[#78b7ff]">
                  {number}
                </span>
                <h3 className="mb-2 mt-5 text-[22px] font-medium tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="mb-0 max-w-[250px] text-[15px] leading-[1.8] text-muted">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto mb-12 w-full max-w-[1200px] px-5 sm:px-8" data-reveal>
          <div className="flex flex-col gap-6 border border-white/10 bg-[#0c111a] p-6 sm:p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#78b7ff]">
                HAVE A CHALLENGE IN MIND?
              </span>
              <h2 className="mb-0 mt-3 max-w-[690px] text-[clamp(28px,4vw,42px)] leading-[1.15] tracking-[-0.045em]">
                Let&apos;s find a useful place to start.
              </h2>
            </div>
            <Link href="/contact" className={primaryButton}>
              Start a conversation <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
