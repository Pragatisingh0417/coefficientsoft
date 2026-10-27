"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import AssetFrame from "../layout/AssetFrame";
import { siteImages } from "../../data/site-images";

function TechnologyArtwork() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1600 800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="tech-aura">
          <stop stopColor="#087FFF" stopOpacity=".5" />
          <stop offset=".48" stopColor="#8B2EFF" stopOpacity=".2" />
          <stop offset="1" stopColor="#070812" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tech-facet" x1="865" y1="155" x2="1241" y2="660">
          <stop stopColor="#53D7FF" />
          <stop offset=".48" stopColor="#087FFF" />
          <stop offset="1" stopColor="#FF28B9" />
        </linearGradient>
        <linearGradient id="tech-lines" x1="520" y1="100" x2="1490" y2="730">
          <stop stopColor="#53D7FF" stopOpacity="0" />
          <stop offset=".5" stopColor="#53D7FF" stopOpacity=".54" />
          <stop offset="1" stopColor="#FF28B9" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path fill="#080a16" d="M0 0h1600v800H0z" />
      <ellipse cx="1080" cy="405" rx="555" ry="490" fill="url(#tech-aura)" />
      <g stroke="url(#tech-lines)" strokeWidth="1">
        <path d="M410 640 785 520l240-400 294 106 206 337-260 193-432-8-267-108Z" />
        <path d="m410 640 423 108 226-336 260-186" />
        <path d="m785 520 514 236 226-193M1025 120l34 292 260 186" />
        <path d="m1319 226-486 522m192-628L833 748m492-7L785 520" />
        <path d="M485 714h1000M570 82v640m862-627v592" strokeOpacity=".32" />
      </g>
      <circle cx="1080" cy="405" r="276" fill="url(#tech-aura)" />
      <path
        d="m1081 156 161 92 56 177-108 170-197 5-111-173 49-177 150-94Z"
        fill="#10152a"
        fillOpacity=".84"
        stroke="url(#tech-facet)"
        strokeWidth="2"
      />
      <path
        d="m1081 156 3 242-202 29m202-29 161-150m-161 150 167 27m-167-27-57 199m57-199-197 5m197 194 110-173m-110 173-111-173m-46-177 157 153"
        stroke="url(#tech-facet)"
        strokeOpacity=".7"
        strokeWidth="1.5"
      />
      <path
        d="m1081 156 3 242 161-150-108-170-56-177Zm3 242 167 27 47-177-53 150Zm0 0-57 199 167-172-110-27Zm-57 199-111-173 168-26-57 199Zm-111-173 49-177 62 151-111 26Zm49-177 116-91-54 242-62-151Z"
        fill="url(#tech-facet)"
        fillOpacity=".11"
      />
      {[
        [410, 640],
        [785, 520],
        [1025, 120],
        [1319, 226],
        [1525, 563],
        [1265, 756],
        [833, 748],
      ].map(([cx, cy], index) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={index % 2 === 0 ? 4 : 3}
          fill={index % 2 === 0 ? "#53D7FF" : "#FF28B9"}
        />
      ))}
    </svg>
  );
}

export default function TechnologySpotlight() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home-technology" className="relative isolate min-h-[520px] overflow-hidden border-y border-white/10 bg-transparent sm:min-h-[580px]">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.34]"
        initial={reduceMotion ? false : { opacity: 0.34, scale: 1.035 }}
        whileInView={reduceMotion ? undefined : { opacity: 0.34, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <AssetFrame
          asset={siteImages.homepageTechnology}
          className="relative h-full min-h-[520px] w-full sm:min-h-[580px]"
          sizes="100vw"
          fallback={<TechnologyArtwork />}
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,8,18,0.9)_0%,rgba(7,8,18,0.77)_35%,rgba(7,8,18,0.3)_72%,rgba(7,8,18,0.16)_100%),linear-gradient(0deg,rgba(7,8,18,0.4),transparent_55%)]" />
      <div className="relative mx-auto flex min-h-[520px] w-full max-w-[1320px] items-center px-5 py-20 sm:min-h-[580px] sm:px-8 md:py-24">
        <div className="max-w-[570px]" data-reveal>
          <span className="inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#53d7ff]">
            <span className="size-1.5 rounded-full bg-[#ff28b9]" />
            BUILT FOR WHAT&apos;S NEXT
          </span>
          <h2 className="mb-0 mt-5 text-[clamp(42px,6.2vw,76px)] font-semibold leading-[0.98] tracking-[-0.065em]">
            Turn bold ideas into{" "}
            <span className="bg-gradient-to-r from-[#53d7ff] to-[#ff28b9] bg-clip-text text-transparent">
              useful technology.
            </span>
          </h2>
          <p className="mb-0 mt-6 max-w-[440px] text-[15px] leading-[1.9] text-[#c0c7d7]">
            Thoughtful engineering brings ambitious products to life—with
            technology shaped around real people and needs.
          </p>
          <Link
            className="mt-8 inline-flex min-h-12 items-center gap-3 border border-white/20 bg-white/[0.06] px-5 text-[13px] font-semibold text-white transition-colors hover:border-[#53d7ff]/60 hover:bg-[#087fff]/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#53d7ff]"
            href="/about"
          >
            How we approach engineering
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-5 right-5 hidden text-[9px] tracking-[0.18em] text-white/55 sm:block md:right-8">
        IDEAS, ENGINEERED INTO REALITY
      </div>
    </section>
  );
}
