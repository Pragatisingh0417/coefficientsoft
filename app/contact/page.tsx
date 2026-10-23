import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import AssetFrame from "../components/layout/AssetFrame";
import PageBanner from "../components/layout/PageBanner";
import ContactForm from "../components/sections/ContactForm";
import { siteImages } from "../data/site-images";

export default function ContactPage() {
  return (
    <div className="pb-10">
      <PageBanner
        eyebrow="CONTACT"
        title="Let’s talk about what you’re building."
        description="Share a little about the challenge, your direction, and the support you need. We’ll use that context to start the conversation."
        variant="contact"
        secondaryAction={{ label: "Explore services", href: "/services" }}
      />

      <main>
        <section className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-start gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.82fr_1.18fr] md:gap-12 md:py-24">
          <div className="md:sticky md:top-28" data-reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#78b7ff]">
              PROJECT ENQUIRIES
            </span>
            <h2 className="mb-4 mt-5 max-w-[470px] text-[clamp(34px,4.2vw,52px)] leading-[1.1] tracking-[-0.05em]">
              Start with the part you know.
            </h2>
            <p className="mb-7 max-w-[480px] text-[16px] leading-[1.85] text-muted">
              You do not need a finished brief. Tell us what you are trying to
              solve, what you have explored, and where a thoughtful technology
              partner could help.
            </p>

            <AssetFrame
              asset={siteImages.contactConversation}
              className="aspect-[4/3] w-full border border-white/10 bg-[#101020]"
              sizes="(max-width: 768px) 100vw, 38vw"
              fallback={
                <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_43%_44%,rgba(8,127,255,0.22),transparent_52%),radial-gradient(ellipse_at_70%_70%,rgba(255,40,185,0.13),transparent_48%),#101020]">
                  <span className="grid size-32 place-items-center rounded-full border border-[#53d7ff]/50 text-4xl font-semibold text-[#b9d8fb]">
                    C
                  </span>
                </div>
              }
            />

            <div className="mt-5 border-l-2 border-[#53d7ff]/70 bg-[#101020] px-5 py-4">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#b9d8fb]">
                <Check size={15} aria-hidden="true" />
                A useful first note
              </span>
              <p className="mb-0 mt-2 text-[15px] leading-[1.8] text-muted">
                A short description of your goal and the kind of support you
                need is enough to begin.
              </p>
            </div>
          </div>

          <div data-reveal>
            <div className="mb-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#78b7ff]">
                SEND AN ENQUIRY
              </span>
              <h2 className="mb-0 mt-3 text-[clamp(28px,3.4vw,40px)] leading-[1.15] tracking-[-0.04em]">
                Tell us about the project.
              </h2>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="mx-auto mb-10 w-full max-w-[1200px] px-5 sm:px-8" data-reveal>
          <div className="flex flex-col gap-5 border-y border-white/10 bg-[#101020] px-5 py-7 sm:px-7 md:flex-row md:items-center md:justify-between">
            <p className="mb-0 max-w-[700px] text-[16px] leading-[1.8] text-[#d1d9e5]">
              Still shaping the idea? Explore the{" "}
              <Link
                className="text-[#78b7ff] underline decoration-blue/50 underline-offset-4 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                href="/services"
              >
                services
              </Link>{" "}
              or share what you know so far.
            </p>
            <Link
              className="inline-flex min-h-11 w-fit shrink-0 items-center gap-2 border border-blue/55 px-4 text-[14px] font-semibold text-white transition hover:border-blue hover:bg-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
              href="/services"
            >
              View services <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
