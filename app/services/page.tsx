import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BriefcaseBusiness,
  Building2,
  Check,
  Code2,
  GraduationCap,
  Link2,
  RefreshCw,
  ShoppingBag,
  Sparkles,
  Workflow,
} from "lucide-react";
import AssetFrame from "../components/layout/AssetFrame";
import ContactForm from "../components/sections/ContactForm";
import ServicesHeroBanner from "../components/sections/ServicesHeroBanner";
import { services } from "../data/services";

const challenges = [
  {
    icon: Workflow,
    title: "Manual, repetitive work",
    description:
      "Reduce avoidable busywork by improving workflows and connecting the tools your team already relies on.",
    number: "01",
  },
  {
    icon: Code2,
    title: "A website that is not working hard enough",
    description:
      "Create a clearer, more useful web experience that helps visitors understand what you offer and what to do next.",
    number: "02",
  },
  {
    icon: Link2,
    title: "Disconnected systems and data",
    description:
      "Make information easier to move between business applications with fit-for-purpose integrations.",
    number: "03",
  },
  {
    icon: Sparkles,
    title: "Inconsistent digital visibility",
    description:
      "Bring your website, content, and digital campaigns into a more coherent plan for reaching the right audience.",
    number: "04",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your goals, users, workflows, and constraints.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Plan",
    description: "Define a practical scope, priorities, and a clear path forward.",
    icon: Blocks,
  },
  {
    number: "03",
    title: "Build",
    description: "Design, develop, and test in focused, reviewable steps.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch and improve",
    description: "Prepare for release and support the next useful improvements.",
    icon: RefreshCw,
  },
];

const reasons = [
  {
    title: "Tailored to the work",
    description:
      "Scope and technology choices start with your business needs, not a one-size-fits-all package.",
  },
  {
    title: "Clear communication",
    description:
      "Shared priorities, milestones, and feedback help keep the work understandable as it progresses.",
  },
  {
    title: "Built to be maintained",
    description:
      "We aim for practical, scalable foundations that teams can operate and evolve.",
  },
  {
    title: "Connected capabilities",
    description:
      "Software, business systems, web, mobile, and digital growth support can be considered together.",
  },
];

const industries = [
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description:
      "Web experiences, commerce workflows, and integrations for online selling.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional services",
    description:
      "Websites, client journeys, and operational tools for service-led teams.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Digital platforms and workflows that help people access information and services.",
  },
  {
    icon: Building2,
    title: "Startups and small businesses",
    description:
      "Right-sized digital products and systems that can develop as needs change.",
  },
];

const faqs = [
  {
    question: "How long does a project usually take?",
    answer:
      "Timing depends on the scope, dependencies, and feedback cycles. After understanding your goals, we can outline practical milestones and a delivery plan.",
  },
  {
    question: "How is project pricing decided?",
    answer:
      "Pricing depends on the work involved and the agreed scope. We start by understanding the need, then discuss a suitable approach before work begins.",
  },
  {
    question: "Can you improve or rebuild an existing website?",
    answer:
      "Yes. We can review an existing website and discuss improvements, a redesign, or a rebuild based on its goals, content, and technical needs.",
  },
  {
    question: "Can you build a custom CRM or connect existing tools?",
    answer:
      "We can discuss custom business software, CRM-related workflows, and integrations. The right option depends on your processes and the systems involved.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Support and ongoing improvements can be discussed as part of the project plan so responsibilities after launch are clear.",
  },
  {
    question: "How do we get started?",
    answer:
      "Share a little about your goals and current challenge using the enquiry form below. We can use that context to begin a useful conversation.",
  },
];

export default function ServicesPage() {
  return (
    <div className="services-cosmic-page pb-16">
      <ServicesHeroBanner />

      <main>
        <section
          id="what-we-do"
          className="border-b border-white/10 bg-transparent px-5 py-20 sm:px-8 md:py-28"
        >
          <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-end md:gap-16">
            <div data-reveal>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#53d7ff]">
                WHAT WE DO
              </span>
              <h2 className="mb-0 mt-4 max-w-[720px] text-[clamp(38px,5vw,64px)] leading-[1.04] tracking-[-0.06em]">
                Technology built around your{" "}
                <span className="bg-gradient-to-r from-[#53d7ff] to-[#ff28b9] bg-clip-text text-transparent">
                  business goals.
                </span>
              </h2>
            </div>
            <div data-reveal>
              <p className="mb-0 max-w-[560px] text-[15px] leading-[1.9] text-[#c2c9d7]">
                CoefficientSoft is a digital engineering partner connecting
                software development, business systems, and digital growth.
                Start with one challenge or bring us a broader idea—we&apos;ll
                help define a practical next step.
              </p>
              <Link
                className="mt-6 inline-flex items-center gap-2 border-b border-[#53d7ff]/50 pb-1.5 text-[13px] font-medium text-[#d5e8ff] transition hover:gap-3 hover:border-[#ff28b9] hover:text-white"
                href="#service-list"
              >
                Explore our services <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-5 pb-16 pt-20 sm:px-8 md:pb-24 md:pt-28">
          <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-11" data-reveal>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#53d7ff]">AREAS OF SUPPORT</span>
              <h2 className="mb-0 mt-4 text-[clamp(40px,5vw,65px)] leading-[1.06] tracking-[-0.055em]">
                Six services.
                <br />
                <span className="bg-gradient-to-r from-[#53d7ff] to-[#ff28b9] bg-clip-text text-transparent">One thoughtful approach.</span>
              </h2>
            </div>
            <p className="mb-1 max-w-[355px] text-[14px] leading-[1.9] text-muted">
              Every engagement starts with your context. We will clarify scope and
              options before recommending a path.
            </p>
          </div>

          <div id="service-list" className="flex scroll-mt-28 flex-col gap-14 md:gap-[72px]">
            {services.map(({ id, number, title, detail, outcome, image, icon: Icon }, index) => (
              <article
                id={id}
                className="grid scroll-mt-28 grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-12 lg:gap-20"
                key={id}
                data-reveal
              >
                <AssetFrame
                  asset={image}
                  className={`aspect-[3/2] w-full border border-white/15 bg-[#101020] shadow-[0_18px_55px_rgba(0,0,0,0.18)] ${index % 2 === 1 ? "md:order-2" : ""}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  fallback={
                    <div className={`absolute inset-0 grid place-items-center bg-gradient-to-br ${index % 2 === 0 ? "from-[#16182c] via-[#0b0c19] to-[#101020]" : "from-[#1a1230] via-[#0b0c19] to-[#121629]"}`}>
                      <span className="absolute left-4 top-4 text-[10px] tracking-[0.1em] text-[#bec9d8]">{number}</span>
                      <span className="absolute inset-[16%_14%] -skew-y-[6deg] border border-blue/30 bg-gradient-to-br from-white/[0.04] to-transparent" />
                      <span className="relative grid size-[76px] place-items-center rounded-full border border-[#53d7ff]/50 bg-[#101020]/90 text-[#53d7ff]">
                        <Icon size={34} strokeWidth={1.2} aria-hidden="true" />
                      </span>
                    </div>
                  }
                />
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7d8999]">SERVICE {number}</span>
                  <h3 className="mb-3.5 mt-4 text-[clamp(29px,3.6vw,44px)] leading-[1.06] tracking-[-0.055em]">{title}</h3>
                  <p className="max-w-[480px] text-[14px] leading-[1.85] text-muted">{detail}</p>
                  <p className="mt-4 max-w-[480px] text-[14px] leading-[1.85] text-[#d1d9e5]">{outcome}</p>
                  <Link className="mt-5 inline-flex items-center gap-2 text-[12px] text-[#d5e8ff] transition-all hover:gap-3 hover:text-white" href="#services-enquiry">
                    Ask about this service <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="problems-we-solve"
          className="border-y border-white/10 bg-[linear-gradient(120deg,rgba(9,12,25,0.72),rgba(13,15,32,0.5))] px-5 py-20 sm:px-8 md:py-28"
        >
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="mb-10 max-w-[720px]" data-reveal>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff55c7]">
                PROBLEMS WE HELP SOLVE
              </span>
              <h2 className="mb-0 mt-4 text-[clamp(36px,5vw,60px)] leading-[1.05] tracking-[-0.06em]">
                Start with what&apos;s getting in your way.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {challenges.map(({ icon: Icon, title, description, number }) => (
                <article
                  className="min-h-[230px]"
                  key={number}
                  data-reveal
                >
                  <div className="card-depth h-full border border-white/10 bg-[#090c18]/95 p-5 backdrop-blur-md sm:p-6">
                    <div className="flex min-w-0 items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="grid size-10 shrink-0 place-items-center border border-[#53d7ff]/30 bg-[#087fff]/[0.09] text-[#75caff]">
                          <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
                        </span>
                        <h3 className="m-0 min-w-0 text-[16px] font-semibold leading-[1.3] tracking-[-0.03em] sm:text-[18px]">
                          {title}
                        </h3>
                      </div>
                      <span className="shrink-0 text-[10px] tracking-[0.16em] text-[#8997ad]">
                        {number}
                      </span>
                    </div>
                    <p className="mb-0 mt-5 text-[14px] leading-[1.75] text-[#c2ccdc]">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="how-we-work"
          className="border-b border-white/10 bg-transparent px-5 py-20 sm:px-8 md:py-28"
        >
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div data-reveal>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#53d7ff]">
                  HOW WE WORK
                </span>
                <h2 className="mb-0 mt-4 text-[clamp(38px,5vw,62px)] leading-[1.04] tracking-[-0.06em]">
                  A clear path from idea to launch.
                </h2>
              </div>
              <p className="mb-1 max-w-[360px] text-[14px] leading-[1.8] text-muted" data-reveal>
                The right details change by project, but the work stays visible
                and collaborative at each step.
              </p>
            </div>
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[7%] right-[7%] top-8 hidden h-px bg-gradient-to-r from-[#53d7ff]/10 via-[#53d7ff]/50 to-[#ff28b9]/30 lg:block"
              />
              <ol className="grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
                {processSteps.map(({ number, title, description, icon: Icon }) => (
                  <li
                    className="relative"
                    key={number}
                    data-reveal
                  >
                    <div className="card-depth relative h-full border border-white/10 bg-[#090c18]/95 p-5 backdrop-blur-md sm:p-6">
                      <div className="relative z-10 flex items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-3">
                          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#53d7ff]/40 bg-[#0b1020] text-[10px] font-semibold text-[#71cbff]">
                            {number}
                          </span>
                          <h3 className="m-0 text-[17px] font-semibold leading-[1.25] tracking-[-0.035em] sm:text-[19px]">
                            {title}
                          </h3>
                        </div>
                        <Icon
                          className="shrink-0 text-[#53d7ff]"
                          size={18}
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                      </div>
                      <p className="mb-0 mt-5 text-[14px] leading-[1.75] text-[#c2ccdc]">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          id="why-coefficientsoft"
          className="border-y border-white/10 bg-[linear-gradient(110deg,rgba(9,12,25,0.74),rgba(16,12,31,0.6))] px-5 py-20 sm:px-8 md:py-28"
        >
          <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div data-reveal>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#53d7ff]">
                WHY COEFFICIENTSOFT?
              </span>
              <h2 className="mb-0 mt-4 text-[clamp(38px,5vw,60px)] leading-[1.05] tracking-[-0.06em]">
                An approach built around your needs.
              </h2>
              <p className="mb-0 mt-5 max-w-[440px] text-[14px] leading-[1.85] text-muted">
                We focus on how the work gets done—not unsupported promises or
                one-size-fits-all claims.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {reasons.map(({ title, description }, index) => (
                <article
                  className="h-full"
                  key={title}
                  data-reveal
                >
                  <div className="card-depth h-full border border-white/10 bg-[#090c18]/95 p-5 backdrop-blur-md sm:p-6">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="grid size-8 shrink-0 place-items-center border border-[#53d7ff]/35 text-[#65c4ff]">
                        <Check size={16} aria-hidden="true" />
                      </span>
                      <h3 className="m-0 min-w-0 text-[16px] font-semibold leading-[1.3] tracking-[-0.025em] sm:text-[17px]">
                        {title}
                      </h3>
                    </div>
                    <p className="mb-0 mt-4 text-[14px] leading-[1.7] text-[#c2ccdc]">
                      {description}
                    </p>
                    <span aria-hidden="true" className="sr-only">Reason {index + 1}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="industries"
          className="border-b border-white/10 bg-transparent px-5 py-20 sm:px-8 md:py-28"
        >
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="mb-10 max-w-[700px]" data-reveal>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff55c7]">
                INDUSTRIES &amp; USE CASES
              </span>
              <h2 className="mb-0 mt-4 text-[clamp(38px,5vw,60px)] leading-[1.05] tracking-[-0.06em]">
                Useful technology for different kinds of work.
              </h2>
              <p className="mb-0 mt-4 text-[14px] leading-[1.8] text-muted">
                Illustrative areas where our services can be applied—not a claim
                of prior client work.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map(({ icon: Icon, title, description }, index) => (
                <article
                  className="h-full"
                  key={title}
                  data-reveal
                >
                  <div className="card-depth h-full border border-white/10 bg-[#090c18]/95 p-5 backdrop-blur-md sm:p-6">
                    <div className="flex min-w-0 items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <Icon
                          size={22}
                          strokeWidth={1.5}
                          className="shrink-0 text-[#75caff]"
                          aria-hidden="true"
                        />
                        <h3 className="m-0 min-w-0 text-[16px] font-semibold leading-[1.3] tracking-[-0.03em] sm:text-[18px]">
                          {title}
                        </h3>
                      </div>
                      <span className="shrink-0 text-[10px] tracking-[0.15em] text-[#8997ad]">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mb-0 mt-5 text-[14px] leading-[1.75] text-[#c2ccdc]">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services-faq"
          className="border-y border-white/10 bg-[linear-gradient(120deg,rgba(9,12,25,0.7),rgba(13,15,32,0.58))] px-5 py-20 sm:px-8 md:py-28"
        >
          <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
            <div data-reveal>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#53d7ff]">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="mb-0 mt-4 text-[clamp(38px,5vw,58px)] leading-[1.05] tracking-[-0.06em]">
                A few helpful details.
              </h2>
              <p className="mb-0 mt-4 text-[14px] leading-[1.8] text-muted">
                Don&apos;t see your question? Send us a note and tell us what
                you&apos;re considering.
              </p>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqs.map(({ question, answer }, index) => (
                <details
                  className="group py-5"
                  key={question}
                  open={index === 0}
                  data-reveal
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-[#e5eaf2] marker:hidden [&::-webkit-details-marker]:hidden">
                    {question}
                    <span className="grid size-7 shrink-0 place-items-center border border-white/15 text-[#70c9ff] transition-transform group-open:rotate-45">
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </span>
                  </summary>
                  <p className="mb-0 max-w-[650px] pr-8 pt-3 text-[13px] leading-[1.8] text-muted">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services-enquiry"
          className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28"
        >
          <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div data-reveal>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#53d7ff]">
                A GOOD PLACE TO START
              </span>
              <h2 className="mb-0 mt-4 text-[clamp(38px,5vw,60px)] leading-[1.04] tracking-[-0.06em]">
                Tell us what you want to make work better.
              </h2>
              <p className="mb-0 mt-5 max-w-[430px] text-[14px] leading-[1.85] text-muted">
                Share what you&apos;re working on and what you need. We&apos;ll
                use the details to start a focused conversation.
              </p>
              <div className="mt-8 space-y-3 text-[13px] text-[#cbd3df]">
                {[
                  "No commitment required to enquire.",
                  "Tell us if you are unsure which service fits.",
                  "We will use your details to respond to your enquiry.",
                ].map((note) => (
                  <p className="mb-0 flex items-start gap-2.5" key={note}>
                    <Check size={15} className="mt-0.5 shrink-0 text-[#53d7ff]" aria-hidden="true" />
                    {note}
                  </p>
                ))}
              </div>
            </div>
            <div
              className="border border-white/10 bg-[linear-gradient(145deg,rgba(13,20,39,0.94),rgba(8,10,22,0.96))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-8"
              data-reveal
            >
              <div className="mb-6 border-b border-white/10 pb-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#53d7ff]">
                  COEFFICIENTSOFT PROJECT ENQUIRY
                </span>
                <p className="mb-0 mt-2 text-[13px] leading-[1.7] text-muted">
                  A few details will help us understand what you need.
                </p>
              </div>
              <ContactForm
                compact
                defaultBudget="Not sure yet"
                defaultService="Website Development"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
