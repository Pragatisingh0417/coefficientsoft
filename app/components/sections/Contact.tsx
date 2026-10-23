import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#101020] py-24 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_42%,rgba(8,127,255,0.18),transparent_38%),radial-gradient(ellipse_at_90%_85%,rgba(255,40,185,0.12),transparent_38%),linear-gradient(110deg,#101020,#0a0b18)]" />
      <div className="pointer-events-none absolute right-[12%] top-1/2 -z-10 size-[420px] -translate-y-1/2 rounded-full border border-[#53d7ff]/10 [transform:translateY(-50%)_rotateX(65deg)] max-md:hidden" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
       <div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#53d7ff]">HAVE AN IDEA?</span>
        <h2 className="mb-0 mt-7 text-[clamp(48px,6vw,78px)] leading-[0.98] tracking-[-0.065em]">
          Let&apos;s build
          <br />
          something{" "}
          <span className="bg-gradient-to-r from-[#53d7ff] via-[#087fff] to-[#ff28b9] bg-clip-text text-transparent">
            meaningful.
          </span>
        </h2>
        <p className="mb-0 mt-6 max-w-[480px] text-[16px] leading-[1.9] text-muted">
          Tell us what you are working on and where the friction is. We&apos;ll
          explore how careful product design and engineering can move the work
          forward.
        </p>
       </div>
        <Link
          className="inline-flex min-h-14 items-center justify-center gap-2.5 self-start rounded-md border border-[#53d7ff]/40 bg-[#087fff] px-6 text-[14px] font-semibold text-white shadow-[0_10px_36px_rgba(8,127,255,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2690ff] md:self-end"
          href="/contact"
        >
          Start a conversation <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
