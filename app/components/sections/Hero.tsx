"use client";

import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroScene = dynamic(() => import("../three/HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />,
});

const primaryButton =
  "inline-flex min-h-13 items-center justify-center gap-2.5 rounded-md border border-[#53d7ff]/45 bg-[#087fff] px-6 text-[14px] font-semibold text-white shadow-[0_10px_36px_rgba(8,127,255,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2690ff] hover:shadow-[0_12px_42px_rgba(8,127,255,0.38)]";
const secondaryButton =
  "inline-flex min-h-13 items-center justify-center gap-2.5 rounded-md border border-white/15 bg-white/[0.035] px-6 text-[14px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#ff28b9]/65 hover:bg-[#ff28b9]/[0.07]";

const servicePhrases = [
  "Digital products",
  "Intelligent software",
  "Connected experiences",
];

function TypewriterPhrase({ reduceMotion }: { reduceMotion: boolean }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedPhrase, setDisplayedPhrase] = useState(servicePhrases[0]);
  const [deleting, setDeleting] = useState(false);
  const targetPhrase = servicePhrases[phraseIndex];

  useEffect(() => {
    if (reduceMotion) return;

    let timeout: number | undefined;
    if (!deleting && displayedPhrase === targetPhrase) {
      timeout = window.setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && displayedPhrase.length <= 1) {
      timeout = window.setTimeout(() => {
        setDisplayedPhrase("");
        setPhraseIndex((index) => (index + 1) % servicePhrases.length);
        setDeleting(false);
      }, 34);
    } else if (deleting) {
      timeout = window.setTimeout(
        () => setDisplayedPhrase((current) => current.slice(0, -1)),
        34
      );
    } else {
      timeout = window.setTimeout(
        () => setDisplayedPhrase(targetPhrase.slice(0, displayedPhrase.length + 1)),
        68
      );
    }

    return () => {
      if (timeout !== undefined) window.clearTimeout(timeout);
    };
  }, [deleting, displayedPhrase, reduceMotion, targetPhrase]);

  return (
    <span className="mt-3 block min-h-[1.7em] text-[16px] font-medium text-white sm:text-[18px]">
      <span className="sr-only">
        Digital products, Intelligent software, Connected experiences
      </span>
      <span aria-hidden="true" className="text-[#53d7ff]">
        {reduceMotion ? servicePhrases[0] : displayedPhrase}
        {!reduceMotion && !deleting && displayedPhrase !== targetPhrase && (
          <span className="ml-1 inline-block h-[1em] w-px translate-y-[0.12em] animate-pulse bg-[#ff28b9]" />
        )}
      </span>
    </span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const enter = (delay: number) =>
    reduceMotion
      ? undefined
      : {
          initial: { opacity: 1, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="home-hero" className="relative isolate overflow-hidden border-b border-white/10 bg-transparent">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 bg-[radial-gradient(ellipse_at_77%_40%,rgba(8,127,255,0.22),transparent_36%),radial-gradient(ellipse_at_88%_56%,rgba(255,40,185,0.14),transparent_34%),radial-gradient(ellipse_at_8%_100%,rgba(139,46,255,0.12),transparent_40%),linear-gradient(110deg,rgba(7,8,18,0.9)_12%,rgba(11,12,26,0.72)_56%,rgba(11,10,24,0.68)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(173,191,232,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(173,191,232,0.08)_1px,transparent_1px)] [background-size:74px_74px] [mask-image:radial-gradient(ellipse_at_62%_46%,black,transparent_72%)]" />
      <div className="relative z-10 mx-auto grid min-h-0 w-full max-w-[1400px] grid-cols-1 items-center gap-3 px-5 pb-10 pt-10 sm:px-8 sm:pb-12 md:min-h-[min(860px,calc(100svh-82px))] md:grid-cols-[1fr_1.08fr] md:gap-1 md:py-14 lg:gap-4 lg:px-12">
        <div className="relative z-10 max-w-[690px] py-5 md:py-8">
          <motion.div
            {...enter(0)}
            className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b0b7ca] sm:text-[11px]"
          >
            <span className="relative grid size-2 place-items-center rounded-full bg-[#53d7ff] shadow-[0_0_16px_rgba(83,215,255,0.8)]">
              <span className="absolute size-4 rounded-full border border-[#53d7ff]/40" />
            </span>
            INDEPENDENT DIGITAL ENGINEERING STUDIO
          </motion.div>

          <motion.h1
            {...enter(0.1)}
            className="my-6 max-w-[760px] text-[clamp(48px,12vw,68px)] font-semibold leading-[0.9] tracking-[-0.075em] sm:my-8 sm:text-[clamp(56px,8.25vw,82px)] md:text-[clamp(62px,7.25vw,106px)] lg:text-[112px]"
          >
            Engineering
            <br />
            ideas into
            <br />
            <span className="bg-gradient-to-r from-[#53d7ff] via-[#087fff] to-[#ff28b9] bg-clip-text pr-[0.08em] text-transparent">
              reality.
            </span>
          </motion.h1>

          <motion.p
            {...enter(0.2)}
            className="max-w-[460px] text-[16px] leading-[1.8] text-[#b0b7ca] sm:text-[17px]"
          >
            We build digital products, software, and connected experiences that
            make ambitious ideas useful in the real world.
            <TypewriterPhrase reduceMotion={Boolean(reduceMotion)} />
          </motion.p>

          <motion.div {...enter(0.3)} className="mt-8 flex flex-wrap gap-3">
            <Link className={primaryButton} href="/contact">
              Start a project <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link className={secondaryButton} href="/services">
              Explore services
            </Link>
          </motion.div>

          <motion.a
            {...enter(0.4)}
            href="#connected-experiences"
            className="mt-10 inline-flex items-center gap-2.5 text-[12px] text-[#9aa4bb] transition-colors hover:text-white md:mt-14"
          >
            <ArrowDown size={15} className="text-blue" aria-hidden="true" />
            Scroll to explore
          </motion.a>
        </div>

        <motion.div
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 1, scale: 0.96, y: 12 },
                animate: { opacity: 1, scale: 1, y: 0 },
                transition: { duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] },
              })}
          className="relative z-10 mx-auto block w-full max-w-[370px] md:max-w-none"
        >
          <div className="relative aspect-square w-full">
            <div className="pointer-events-none absolute inset-[15%] rounded-full bg-blue/10 blur-3xl" />
            <HeroScene />
            <div className="pointer-events-none absolute inset-[8%] rounded-full border border-[#53d7ff]/20 [transform:perspective(600px)_rotateX(68deg)_rotate(-25deg)]" />
            <div className="pointer-events-none absolute inset-[16%] rounded-full border border-[#ff28b9]/20 [transform:perspective(600px)_rotateX(68deg)_rotate(35deg)]" />
            <div className="pointer-events-none absolute left-[15%] top-[18%] size-2 rounded-full bg-[#53d7ff] shadow-[0_0_20px_5px_rgba(83,215,255,0.5)]" />
            <div className="pointer-events-none absolute right-[16%] top-[27%] size-1.5 rounded-full bg-[#ff28b9] shadow-[0_0_18px_5px_rgba(255,40,185,0.5)]" />
            <div className="pointer-events-none absolute bottom-[19%] left-[19%] size-1.5 rounded-full bg-white/90 shadow-[0_0_16px_4px_rgba(83,215,255,0.38)]" />
          </div>
          <div className="absolute bottom-[6%] right-[4%] z-[3] flex max-w-[90%] flex-col items-end gap-1.5 text-right">
            <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#53d7ff]">
              <span className="size-1.5 rounded-full bg-[#ff28b9]" />
              Form follows function
            </span>
            <span className="text-[11px] text-[#b0b7ca] md:text-[12px]">
              Connected ideas, engineered into products.
            </span>
          </div>
          <div className="absolute left-[4%] top-[18%] z-[3] hidden border-l border-[#53d7ff]/45 pl-3 text-[9px] leading-[1.8] tracking-[0.1em] text-[#aab5cb] sm:block">
            <span className="block text-[#53d7ff]">01 / BUILD</span>
            PRODUCT SYSTEMS
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] justify-between gap-4 border-t border-white/10 px-5 py-4 text-[8px] tracking-[0.12em] text-[#8690a8] sm:px-8 md:text-[9px]">
        <span>INDEPENDENT TECHNOLOGY STUDIO</span>
        <span>IDEAS → PRODUCTS → IMPACT</span>
      </div>
    </section>
  );
}
