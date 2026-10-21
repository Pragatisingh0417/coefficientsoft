import PageBanner from "../components/layout/PageBanner";
import ContactForm from "../components/sections/ContactForm";
import { siteImages } from "../data/site-images";

export default function ContactPage() {
  return (
    <div className="pb-16">
      <PageBanner
        eyebrow="CONTACT"
        title="Tell us what you’re building."
        description="Share a few details about the problem, the project direction, and the kind of support you need. We’ll help you find a useful place to start."
        variant="contact"
        secondaryAction={{ label: "Explore services", href: "/services" }}
        image={siteImages.contactConversation}
      />

      <main className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-start gap-8 px-5 pt-20 sm:px-8 md:grid-cols-[0.88fr_1.12fr] md:gap-8 md:pt-28">
        <div className="pt-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">PROJECT INQUIRIES</span>
          <h2 className="mb-4 mt-4 text-[clamp(36px,4vw,54px)] leading-[1.08] tracking-[-0.055em]">
            We&apos;re happy to hear where the challenge is and what kind of support
            would help.
          </h2>
          <p className="mb-4 text-[14px] leading-[1.9] text-muted">
            Tell us what you are trying to solve, what you have already explored,
            and what kind of help would be useful.
          </p>
          <p className="border-l border-blue/50 bg-white/[0.02] px-4 py-3 text-[13px] leading-[1.8] text-muted">
            Inquiries are sent through the configured email provider. If delivery
            is not configured, the form will clearly report that it is unavailable.
          </p>
        </div>
        <ContactForm />
      </main>
    </div>
  );
}
