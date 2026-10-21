import Link from "next/link";
import { ArrowUpRight, Compass, MessagesSquare, Sparkles } from "lucide-react";
import PageBanner from "../components/layout/PageBanner";
import InternshipRoleCard from "../components/sections/InternshipRoleCard";
import { internshipOpenings } from "../data/internships";
import { siteImages } from "../data/site-images";

const internshipPrinciples = [
  {
    title: "Learn by contributing",
    description:
      "Internships are intended to create space for practical learning through thoughtful, supported contributions.",
    icon: Compass,
  },
  {
    title: "Work with others",
    description:
      "We value clear communication, feedback, and learning alongside people with different perspectives.",
    icon: MessagesSquare,
  },
  {
    title: "Grow with curiosity",
    description:
      "Questions, reflection, and a willingness to improve matter more than pretending to know everything.",
    icon: Sparkles,
  },
];

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-blue bg-blue px-5 text-[13px] font-semibold text-white shadow-[0_0_28px_rgba(8,127,255,0.15)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2690ff]";

export default function CareersPage() {
  const applicationEmail = process.env.CAREERS_CONTACT_EMAIL?.trim();
  const applicationHref = applicationEmail
    ? `mailto:${applicationEmail}?subject=${encodeURIComponent("Internship enquiry")}`
    : "/contact";

  return (
    <div className="pb-16">
      <PageBanner
        eyebrow="CAREERS & INTERNSHIPS"
        title="Make room to learn, contribute, and grow."
        description="We believe good work grows through curiosity, shared learning, and useful contributions. Internship opportunities are announced periodically."
        variant="careers"
        action={{ label: "Ask about internships", href: applicationHref }}
        image={siteImages.careersLearning}
      />

      <main>
        <section className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
          <div className="mb-9 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between" data-reveal>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">HOW WE LEARN TOGETHER</span>
              <h2 className="mb-0 mt-4 text-[clamp(40px,5vw,62px)] leading-[1.06] tracking-[-0.055em]">
                A thoughtful place
                <br />
                <span className="text-[#707988]">to build experience.</span>
              </h2>
            </div>
            <p className="max-w-[355px] text-[14px] leading-[1.9] text-muted">
              We want learning to be grounded in real collaboration, clear
              feedback, and work with a purpose.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
            {internshipPrinciples.map(({ title, description, icon: Icon }) => (
              <article className="min-h-[230px] bg-[#0c1018] p-6" key={title} data-reveal>
                <span className="mb-5 grid size-11 place-items-center border border-blue/45 bg-blue/[0.08] text-blue">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mb-3 text-[22px] leading-[1.2] tracking-[-0.04em]">{title}</h3>
                <p className="m-0 text-[14px] leading-[1.8] text-muted">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[radial-gradient(ellipse_at_84%_50%,rgba(8,127,255,0.1),transparent_34%)] py-20 md:py-28">
          <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 px-5 sm:px-8 md:grid-cols-[1fr_0.85fr] md:gap-[72px]">
            <div data-reveal>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">INTERNSHIP OPPORTUNITIES</span>
              {internshipOpenings.length > 0 ? (
                <>
                  <h2 className="mb-0 mt-5 text-[clamp(37px,4.6vw,58px)] leading-[1.04] tracking-[-0.06em]">
                    Opportunities to
                    <br />
                    <span className="text-[#707988]">learn and contribute.</span>
                  </h2>
                  <div className="mt-7 grid gap-4">
                    {internshipOpenings.map((opening) => (
                      <InternshipRoleCard key={opening.id} opening={opening} />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h2 className="mb-4 mt-5 text-[clamp(37px,4.6vw,58px)] leading-[1.04] tracking-[-0.06em]">
                    No current openings
                    <br />
                    <span className="text-[#707988]">are listed.</span>
                  </h2>
                  <p className="max-w-[430px] text-[14px] leading-[1.85] text-muted">
                    Opportunities are announced periodically. We are not currently
                    advertising a specific role, deadline, or eligibility criteria.
                  </p>
                </>
              )}
            </div>
            <div className="border-l border-blue/55 bg-gradient-to-r from-blue/[0.07] to-transparent p-6" data-reveal>
              <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.11em] text-[#bac8da]">
                <span className="size-1.5 rounded-full bg-blue" />
                UPDATES PERIODICALLY
              </span>
              <p className="mb-6 mt-5 text-[14px] leading-[1.85] text-muted">
                If you would like to ask about internships, use the contact route
                below. If an application email is configured, the button will use
                that address instead.
              </p>
              <Link href={applicationHref} className={primaryButton}>
                Ask about opportunities <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
