import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import PageExperience from "../layout/PageExperience";
import { siteImages } from "../../data/site-images";

export default function ServicesHeroBanner() {
  const artwork = siteImages.servicesHeroArtwork;

  return (
    <header className="relative isolate min-h-[630px] overflow-hidden border-b border-white/10 bg-transparent sm:min-h-[660px] lg:min-h-[700px]">
      {artwork.src && (
        <Image
          src={artwork.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] md:object-[64%_center]"
        />
      )}
      <PageExperience variant="services" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(7,8,18,0.82)_0%,rgba(7,8,18,0.73)_30%,rgba(7,8,18,0.52)_51%,rgba(7,8,18,0.1)_78%,rgba(7,8,18,0.04)_100%),linear-gradient(0deg,rgba(7,8,18,0.3),transparent_34%,rgba(7,8,18,0.08))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_73%_38%,rgba(8,127,255,0.12),transparent_36%),radial-gradient(ellipse_at_90%_58%,rgba(139,46,255,0.11),transparent_34%),radial-gradient(ellipse_at_78%_77%,rgba(255,40,185,0.09),transparent_32%)]"
      />

      <div className="relative z-20 mx-auto flex min-h-[630px] w-full max-w-[1440px] items-center px-5 pb-20 pt-16 sm:min-h-[660px] sm:px-8 lg:min-h-[700px] lg:px-14">
        <div className="max-w-[700px]" data-reveal>
          <span className="inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#d2d7e4] sm:text-[11px]">
            <span className="size-[7px] rounded-full bg-[#53d7ff] shadow-[0_0_14px_rgba(83,215,255,0.72)]" />
            SERVICES
          </span>
          <h1 className="my-6 max-w-[680px] text-[clamp(43px,7.2vw,84px)] font-medium leading-[0.98] tracking-[-0.065em] text-white">
            Useful digital work, shaped around your next step.
          </h1>
          <p className="max-w-[520px] text-[15px] leading-[1.85] text-[#d0d5e0] sm:text-[16px] md:text-[17px]">
            Bring us a business challenge, a product idea, or a process that
            needs to work better. We’ll help define a practical way forward.
          </p>
          <Link
            href="#services-enquiry"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2.5 border border-[#53d7ff]/40 bg-[#087fff] px-5 text-[13px] font-semibold tracking-[0.015em] text-white shadow-[0_8px_30px_rgba(8,127,255,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2690ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#53d7ff]"
          >
            Discuss your project <ArrowDown size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between border-t border-white/15 pt-3 sm:left-8 sm:right-8 lg:left-14 lg:right-14"
      >
        <span className="text-[8px] tracking-[0.17em] text-white/55 sm:text-[9px]">
          THOUGHTFUL DIGITAL ENGINEERING
        </span>
        <span className="text-[8px] tracking-[0.17em] text-[#a9bbd3] sm:text-[9px]">
          COEFFICIENTSOFT
        </span>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/2 right-5 z-20 hidden translate-y-1/2 flex-col items-center gap-3 text-[8px] tracking-[0.16em] text-white/60 lg:flex"
      >
        <span className="[writing-mode:vertical-rl]">SCROLL TO EXPLORE</span>
        <span className="h-12 w-px bg-gradient-to-b from-[#53d7ff]/75 to-[#ff28b9]/15" />
      </div>
    </header>
  );
}
