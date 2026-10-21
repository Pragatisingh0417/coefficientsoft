"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HeroScene = dynamic(() => import("../three/HeroScene"), {
  ssr: false,
  loading: () => <div className="relative z-[2] h-[340px] w-full md:h-[460px]" />,
});

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-blue bg-blue px-5 text-[13px] font-semibold text-white shadow-[0_0_28px_rgba(8,127,255,0.15)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2690ff]";
const secondaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-white/10 bg-white/[0.025] px-5 text-[13px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-blue/60";
const eyebrow = "inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      if (reduceMotion) return;

      const createSequence = (pinVisual: boolean) => {
        const visual = section.querySelector<HTMLElement>(".hero-visual");
        if (!visual) return;

        gsap.fromTo(
          ".hero-copy > *",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.07, ease: "power3.out" }
        );
        gsap.fromTo(
          ".hero-visual",
          { y: 18, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.1 }
        );

        if (pinVisual) {
          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: () =>
              `+=${Math.max(1, section.clientHeight - visual.offsetTop - visual.offsetHeight - 24)}`,
            pin: visual,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });
        }

        const transition = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });

        transition
          .to(".hero-visual", {
            yPercent: -5,
            rotation: 2,
            scale: 0.94,
            duration: 0.8,
            ease: "none",
          })
          .to(".hero-visual", {
            opacity: 0,
            scale: 0.9,
            duration: 0.52,
            ease: "none",
          }, 0.28);

        gsap.to(".hero-bottom-line", {
          y: -10,
          opacity: 0.7,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });
      };

      media.add("(min-width: 768px)", () => createSequence(true));
      media.add("(max-width: 767px)", () => createSequence(false));
    }, section);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto grid min-h-[max(680px,calc(100svh-76px))] w-full max-w-[1200px] grid-cols-1 items-center gap-5 px-5 pb-24 pt-14 sm:px-8 md:grid-cols-[1.02fr_0.98fr] md:gap-0"
    >
      <div className="hero-copy relative z-[2] pb-5">
        <div className={eyebrow}>
          <span className="size-[7px] rounded-full bg-blue shadow-[0_0_14px_rgba(8,127,255,0.8)]" />
          SOFTWARE · SAAS · AI SOLUTIONS
        </div>

        <h1 className="my-6 text-[clamp(52px,7.2vw,88px)] font-semibold leading-[0.99] tracking-[-0.065em]">
          Engineering
          <br />
          ideas into
          <br />
          <span className="bg-gradient-to-r from-[#65b7ff] via-blue to-[#a5d6ff] bg-clip-text text-transparent">reality.</span>
        </h1>

        <p className="max-w-[445px] text-[15px] leading-[1.9] text-muted">
          We design and build digital products that help businesses solve complex
          problems, work smarter, and grow with confidence.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a className={primaryButton} href="#services">
            Explore our services <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <Link className={secondaryButton} href="/contact">Start a project</Link>
        </div>

        <a href="#services" className="mt-9 inline-flex items-center gap-2.5 text-[11px] text-[#818a99] md:mt-14">
          <ArrowDown size={15} className="text-blue" aria-hidden="true" /> Scroll to explore
        </a>
      </div>

      <div className="hero-visual relative grid min-h-[340px] min-w-0 place-items-center md:min-h-[480px]">
        <div className="pointer-events-none absolute aspect-square w-[min(90%,440px)] rounded-full border border-blue/20 [transform:perspective(600px)_rotateX(68deg)_rotate(-25deg)] max-md:hidden" />
        <div className="pointer-events-none absolute aspect-square w-[min(72%,350px)] rounded-full border border-white/10 [transform:perspective(600px)_rotateX(68deg)_rotate(35deg)] max-md:hidden" />
        <HeroScene />
        <p className="absolute bottom-0 right-[3%] z-[3] flex max-w-[90%] items-center gap-2.5 text-[11px] text-[#aeb8c8] md:text-[12px]">
          <span className="size-1.5 shrink-0 rounded-full bg-blue" />
          Connected ideas, engineered into products.
        </p>
      </div>

      <div className="hero-bottom-line absolute bottom-5 left-5 right-5 flex justify-between gap-4 border-t border-white/10 pt-4 text-[8px] tracking-[0.12em] text-[#707a8a] sm:left-8 sm:right-8 md:text-[9px]">
        <span>INDEPENDENT TECHNOLOGY STUDIO</span>
        <span>IDEAS → PRODUCTS → IMPACT</span>
      </div>
    </section>
  );
}
