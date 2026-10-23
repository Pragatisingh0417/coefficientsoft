import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  MessagesSquare,
  Wrench,
} from "lucide-react";
import PageBanner from "../components/layout/PageBanner";
import InternshipRoleCard from "../components/sections/InternshipRoleCard";
import { internshipOpenings } from "../data/internships";
import { siteImages } from "../data/site-images";

const principles = [
  {
    number: "01",
    title: "Learn through the work",
    description:
      "Build understanding by contributing to practical product and engineering work.",
    icon: BookOpenCheck,
  },
  {
    number: "02",
    title: "Share ideas early",
    description:
      "Ask questions, make decisions visible, and learn through useful feedback.",
    icon: MessagesSquare,
  },
  {
    number: "03",
    title: "Care about the details",
    description:
      "Treat quality and the experience of the people using the software as part of the craft.",
    icon: Wrench,
  },
];

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2.5 border border-blue bg-blue px-5 text-[14px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#2690ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue";

export default function CareersPage() {
  const applicationEmail = process.env.CAREERS_CONTACT_EMAIL?.trim();
  const applicationHref = applicationEmail
    ? `mailto:${applicationEmail}?subject=${encodeURIComponent("Internship enquiry")}`
    : "/contact";

  return (
    <div className="pb-10">
      <PageBanner
        eyebrow="CAREERS & INTERNSHIPS"
        title="Curiosity, craft, and room to grow."
        description="CoefficientSoft works across product thinking, design, and software delivery. We value thoughtful contributions, practical learning, and clear collaboration."
        variant="careers"
        action={{ label: "Ask about opportunities", href: applicationHref }}
        image={siteImages.careersLearning}
      />

      <main>
        <section className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-7 px-5 py-20 sm:px-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:py-28">
          <div data-reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#78b7ff]">
              WORKING AND LEARNING
            </span>
            <h2 className="mb-0 mt-5 max-w-[460px] text-[clamp(38px,5vw,60px)] leading-[1.06] tracking-[-0.055em]">
              Make useful things.{" "}
              <span className="text-[#8995a6]">Keep learning.</span>
            </h2>
          </div>
          <div className="border-l border-blue/55 pl-5 md:pl-8" data-reveal>
            <p className="m-0 max-w-[690px] text-[17px] leading-[1.85] text-[#d9e1ec] md:text-[18px]">
              Our work spans digital products, websites, mobile applications,
              and connected software. We welcome people who care about
              understanding the problem and making a considered contribution.
            </p>
            <p className="mb-0 mt-5 max-w-[650px] text-[16px] leading-[1.9] text-muted">
              Internship opportunities are announced periodically. We publish
              openings here when they are confirmed; there are no unlisted
              vacancies or hiring promises on this page.
            </p>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[radial-gradient(ellipse_at_12%_24%,rgba(255,40,185,0.09),transparent_38%),#101020] py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
            <div className="mb-9 grid grid-cols-1 gap-5 md:mb-12 md:grid-cols-[1fr_0.65fr] md:items-end md:gap-12" data-reveal>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#78b7ff]">
                  HOW WE WORK
                </span>
                <h2 className="mb-0 mt-5 max-w-[620px] text-[clamp(38px,5vw,60px)] leading-[1.06] tracking-[-0.055em]">
                  Good work grows through{" "}
                  <span className="text-[#8995a6]">shared effort.</span>
                </h2>
              </div>
              <p className="mb-1 max-w-[420px] text-[16px] leading-[1.85] text-muted">
                Learning, communication, and engineering quality are part of
                how we approach the work.
              </p>
            </div>

            <div className="grid grid-cols-1 border-t border-white/10 md:grid-cols-3 md:border-t-0">
              {principles.map(({ number, title, description, icon: Icon }) => (
                <article className="grid grid-cols-[52px_1fr] gap-4 border-b border-white/10 py-6 first:pt-6 md:min-h-[250px] md:block md:border-l md:border-t md:px-6 md:py-7 md:first:border-l-0 md:first:pl-0" key={number} data-reveal>
                  <span className="grid size-11 place-items-center border border-[#53d7ff]/40 bg-blue/[0.08] text-[#53d7ff] md:mb-8">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.16em] text-[#77869b]">
                      {number}
                    </span>
                    <h3 className="mb-2 mt-1 text-[22px] leading-[1.25] tracking-[-0.03em]">
                      {title}
                    </h3>
                    <p className="m-0 max-w-[330px] text-[15px] leading-[1.8] text-muted">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div data-reveal>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#78b7ff]">
                OPENINGS
              </span>
              {internshipOpenings.length > 0 ? (
                <>
                  <h2 className="mb-5 mt-5 text-[clamp(36px,4.5vw,56px)] leading-[1.08] tracking-[-0.055em]">
                    Opportunities to{" "}
                    <span className="text-[#8995a6]">learn and contribute.</span>
                  </h2>
                  <div className="grid gap-4">
                    {internshipOpenings.map((opening) => (
                      <InternshipRoleCard key={opening.id} opening={opening} />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h2 className="mb-4 mt-5 text-[clamp(36px,4.5vw,56px)] leading-[1.08] tracking-[-0.055em]">
                    No listed openings{" "}
                    <span className="text-[#8995a6]">right now.</span>
                  </h2>
                  <p className="mb-0 max-w-[500px] text-[16px] leading-[1.85] text-muted">
                    There are currently no confirmed roles in the openings
                    list. Check back for updates, or use the open application
                    option to introduce yourself.
                  </p>
                </>
              )}
            </div>

            <aside className="relative flex flex-col justify-between overflow-hidden border border-[#53d7ff]/25 bg-[radial-gradient(ellipse_at_82%_18%,rgba(139,46,255,0.16),transparent_42%),#101020] p-6 sm:p-8 md:min-h-[320px]" data-reveal>
              <div className="absolute -right-20 -top-20 size-72 rounded-full border border-[#ff28b9]/20" aria-hidden="true" />
              <div className="relative">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#78b7ff]">
                  OPEN APPLICATION
                </span>
                <h3 className="mb-3 mt-4 max-w-[420px] text-[clamp(28px,3.4vw,40px)] leading-[1.12] tracking-[-0.045em]">
                  Tell us what you&apos;re interested in.
                </h3>
                <p className="mb-0 max-w-[470px] text-[16px] leading-[1.85] text-muted">
                  Share the kind of work you enjoy, what you are learning, and
                  how you would like to contribute. We can only confirm
                  opportunities that are currently available.
                </p>
              </div>
              <Link href={applicationHref} className={`${primaryButton} relative mt-7 w-fit`}>
                Introduce yourself <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
