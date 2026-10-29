import Link from "next/link";
import {
  ArrowRight,
  Compass,
  FileText,
  MessageCircleQuestion,
  Route,
  Sparkles,
} from "lucide-react";
import PageBanner from "../components/layout/PageBanner";
import InternshipInterestSection from "../components/sections/InternshipInterestSection";
import { GuidanceRequestForm } from "../components/sections/CareerForms";
import { careerFaqs } from "../data/careers";

const guidanceServices = [
  {
    icon: Compass,
    title: "Career Direction & Planning",
    description:
      "Explore roles that may fit your interests and map practical next steps.",
  },
  {
    icon: FileText,
    title: "Resume & Portfolio Review",
    description:
      "Get constructive feedback on how clearly your experience and work are presented.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Interview Preparation",
    description:
      "Practice explaining your experience and prepare for common interview conversations.",
  },
  {
    icon: Route,
    title: "Skills & Learning Roadmaps",
    description:
      "Identify relevant skills and organize learning into manageable milestones.",
  },
  {
    icon: Sparkles,
    title: "Career Transition Guidance",
    description:
      "Consider how existing experience may transfer as you explore a different path.",
  },
];

const internshipSteps = [
  "Submit your application.",
  "Application review.",
  "Discussion or assessment, if applicable.",
  "Receive an update on next steps.",
];

const guidanceSteps = [
  "Share your goals.",
  "Request a session.",
  "Confirm the arrangements.",
  "Work through your next steps.",
];

const sectionEyebrow =
  "text-[11px] font-bold uppercase tracking-[0.2em] text-[#78b7ff]";
const sectionTitle =
  "mb-0 mt-5 text-[clamp(36px,4.7vw,58px)] leading-[1.07] tracking-[-0.055em]";

export default function CareersPage() {
  return (
    <div className="careers-cosmic-page pb-10">
      <PageBanner
        eyebrow="CAREERS, INTERNSHIPS & GUIDANCE"
        title="Your potential deserves a place to grow."
        description="Whether you're beginning your professional journey or looking for direction, CoefficientSoft helps you explore opportunities, develop practical skills, and take your next step with confidence."
        variant="careers"
        action={{ label: "Apply for an Internship", href: "#internship-application" }}
        secondaryAction={{
          label: "Explore Career Guidance",
          href: "#career-guidance",
        }}
      />

      <main>
        <InternshipInterestSection />

        <section
          className="mx-auto grid w-full max-w-[1200px] gap-8 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-28"
          id="who-can-apply"
        >
          <div data-reveal>
            <span className={sectionEyebrow}>A PLACE TO BEGIN</span>
            <h2 className={sectionTitle}>
              Who can{" "}
              <span className="text-[#8995a6]">get in touch?</span>
            </h2>
          </div>
          <div className="border-l border-[#53d7ff]/45 pl-5 md:pl-8" data-reveal>
            <p className="mt-0 text-[16px] leading-[1.85] text-[#d9e1ec]">
              Students, recent graduates, self-taught learners, and people
              exploring a career change are welcome to share their interests.
              Tell us what you have been learning, what kind of work motivates
              you, and what you hope to explore.
            </p>
            <h3 className="mb-2 mt-7 text-[18px] font-semibold">
              Build a learning path around your goals
            </h3>
            <p className="mb-0 text-[15px] leading-[1.8] text-muted">
              Start with fundamentals, practice through small projects, ask for
              feedback, and keep a portfolio of work you can explain. The most
              useful next skill depends on the role and experience you want to
              pursue—there is no single required path for everyone.
            </p>
          </div>
        </section>

        <section
          className="border-y border-white/10 bg-[radial-gradient(ellipse_at_18%_35%,rgba(139,46,255,0.12),transparent_42%),rgba(7,8,18,0.22)] py-20 md:py-28"
          id="career-guidance"
        >
          <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
            <div className="mb-10 max-w-[740px] md:mb-14" data-reveal>
              <span className={sectionEyebrow}>PRACTICAL CAREER SUPPORT</span>
              <h2 className={sectionTitle}>
                Clarity for your{" "}
                <span className="text-[#8995a6]">next career move.</span>
              </h2>
              <p className="mb-0 mt-5 text-[16px] leading-[1.85] text-muted">
                Not sure which direction to take? Get guidance to help you
                understand your options, identify skill gaps, and make a
                practical plan for your next step.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {guidanceServices.map(({ icon: Icon, title, description }) => (
                <article
                  className="h-full"
                  key={title}
                  data-reveal
                >
                  <div className="card-depth h-full border border-white/10 bg-[#0b0e1c]/95 p-5 backdrop-blur-md sm:p-6">
                    <div className="mb-4 flex min-w-0 items-center gap-3">
                      <span className="grid size-11 shrink-0 place-items-center border border-[#53d7ff]/35 bg-[#53d7ff]/[0.08] text-[#53d7ff]">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <h3 className="m-0 min-w-0 text-[17px] font-semibold leading-[1.3] tracking-[-0.02em] text-white sm:text-[19px]">
                        {title}
                      </h3>
                    </div>
                    <p className="mb-0 text-[14px] leading-[1.75] text-[#c2ccdc]">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12" id="guidance-request-form">
              <div className="lg:sticky lg:top-28 lg:self-start" data-reveal>
                <h3 className="mb-3 text-[clamp(28px,3.8vw,40px)] leading-[1.12] tracking-[-0.045em]">
                  Request a guidance session
                </h3>
                <p className="mb-5 text-[15px] leading-[1.8] text-muted">
                  Choose the topic that would be most useful and tell us what
                  you hope to work through. The team will follow up to clarify
                  whether guidance is available and discuss arrangements.
                </p>
                <p className="mb-0 border-l-2 border-[#8a70ff]/70 pl-4 text-[13px] leading-[1.75] text-[#c5cede]">
                  This is practical, career-focused guidance—not clinical or
                  mental-health counselling. No job or employment outcome is
                  guaranteed. Please do not include sensitive personal or
                  medical details.
                </p>
              </div>
              <GuidanceRequestForm />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
          <div className="mb-10 max-w-[700px] md:mb-14" data-reveal>
            <span className={sectionEyebrow}>WHAT TO EXPECT</span>
            <h2 className={sectionTitle}>
              A clear next step,{" "}
              <span className="text-[#8995a6]">without the guesswork.</span>
            </h2>
            <p className="mb-0 mt-5 text-[16px] leading-[1.85] text-muted">
              Each enquiry is reviewed on its own merits. The steps below
              explain the process without promising a particular outcome or
              response timeline.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-6">
            {[
              {
                title: "Internship interest",
                description:
                  "An expression of interest is not an application to an open position.",
                steps: internshipSteps,
              },
              {
                title: "Career guidance",
                description:
                  "Requests are confirmed only after availability and arrangements are discussed.",
                steps: guidanceSteps,
              },
            ].map((journey) => (
              <div className="border-t border-[#53d7ff]/40 pt-5" key={journey.title}>
                <h3 className="mb-2 text-[24px] tracking-[-0.035em]">
                  {journey.title}
                </h3>
                <p className="mb-6 text-[14px] leading-[1.75] text-muted">
                  {journey.description}
                </p>
                <ol className="grid gap-3">
                  {journey.steps.map((step, index) => (
                    <li
                      className="flex items-start gap-4 border border-white/10 bg-[#101020]/75 px-4 py-4"
                      key={step}
                    >
                      <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[#53d7ff]/30 text-[11px] font-bold text-[#9ce7ff]">
                        0{index + 1}
                      </span>
                      <span className="pt-1 text-[14px] leading-[1.65] text-[#d9e1ef]">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[rgba(7,8,18,0.22)] py-20 md:py-28">
          <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-5 sm:px-8 md:grid-cols-[0.72fr_1.28fr] md:gap-16">
            <div data-reveal>
              <span className={sectionEyebrow}>GOOD TO KNOW</span>
              <h2 className={sectionTitle}>
                Questions,{" "}
                <span className="text-[#8995a6]">answered.</span>
              </h2>
              <p className="mb-0 mt-5 text-[15px] leading-[1.8] text-muted">
                We keep the details clear and will confirm specifics directly
                when an opportunity or guidance arrangement is available.
              </p>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {careerFaqs.map(({ question, answer }) => (
                <details className="group py-5" key={question}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[16px] font-semibold leading-[1.5] text-white marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#53d7ff]">
                    {question}
                    <span
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-white/15 text-[#9ce7ff] transition group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mb-0 mt-4 max-w-[720px] pr-10 text-[14px] leading-[1.8] text-muted">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
          <div className="relative overflow-hidden border border-[#53d7ff]/25 bg-[radial-gradient(ellipse_at_85%_12%,rgba(8,127,255,0.18),transparent_42%),radial-gradient(ellipse_at_8%_100%,rgba(139,46,255,0.16),transparent_45%),rgba(16,16,32,0.9)] p-7 sm:p-10 md:p-14" data-reveal>
            <div className="relative z-10 max-w-[720px]">
              <span className={sectionEyebrow}>YOUR NEXT STEP STARTS HERE</span>
              <h2 className="mb-4 mt-5 text-[clamp(36px,5vw,58px)] leading-[1.06] tracking-[-0.055em]">
                Start with a conversation.
              </h2>
              <p className="mb-7 max-w-[600px] text-[16px] leading-[1.8] text-muted">
                Share an area you would like to explore or a career question
                you are working through. We will be clear about what can
                happen next.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  className="inline-flex min-h-12 items-center justify-center gap-2.5 border border-blue bg-blue px-5 text-[14px] font-semibold text-white transition hover:bg-[#2690ff]"
                  href="#internship-application"
                >
                  Share internship interest <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link
                  className="inline-flex min-h-12 items-center justify-center border border-white/20 px-5 text-[14px] font-semibold text-white transition hover:border-[#53d7ff]/60"
                  href="#guidance-request-form"
                >
                  Request career guidance
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
