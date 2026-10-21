import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#0c1018] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_40%,rgba(8,127,255,0.13),transparent_40%)]" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">HAVE AN IDEA?</span>
        <h2 className="mb-0 mt-7 text-[clamp(40px,5vw,65px)] leading-[1.06] tracking-[-0.055em]">
          Let&apos;s build
          <br />
          something{" "}
          <span className="bg-gradient-to-r from-[#65b7ff] via-blue to-[#a5d6ff] bg-clip-text text-transparent">
            meaningful.
          </span>
        </h2>
        <p className="mb-7 mt-6 max-w-[460px] text-[14px] leading-[1.9] text-muted">
          Tell us what you are working on and where the friction is. We&apos;ll
          explore how careful product design and engineering can move the work
          forward.
        </p>
        <Link
          className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-blue bg-blue px-5 text-[13px] font-semibold text-white shadow-[0_0_28px_rgba(8,127,255,0.15)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2690ff]"
          href="/contact"
        >
          Start a conversation <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
