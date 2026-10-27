"use client";

import Link from "next/link";
import AssetFrame from "../layout/AssetFrame";
import { siteImages } from "../../data/site-images";

function NetworkArtwork() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1000 760"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="network-glow">
          <stop stopColor="#087FFF" stopOpacity=".32" />
          <stop offset="1" stopColor="#087FFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="network-line" x1="180" y1="80" x2="810" y2="650">
          <stop stopColor="#53D7FF" stopOpacity=".7" />
          <stop offset=".52" stopColor="#8B2EFF" stopOpacity=".46" />
          <stop offset="1" stopColor="#FF28B9" stopOpacity=".72" />
        </linearGradient>
      </defs>
      <path fill="#0B1020" d="M0 0h1000v760H0z" />
      <path fill="url(#network-glow)" d="M0 0h1000v760H0z" />
      <path
        d="M146 150 360 270l-16 214-201 126m711-460L640 270l16 214 201 126M360 270l140 92 140-92M344 484l156-122 156 122M500 140v222m0 0v236"
        stroke="url(#network-line)"
        strokeWidth="2"
      />
      <path
        d="m146 150 354 212 354-212M159 610l341-248 341 248"
        stroke="#A8B8D1"
        strokeOpacity=".18"
        strokeDasharray="5 12"
      />
      <circle cx="500" cy="362" r="197" fill="url(#network-glow)" />
      <circle cx="500" cy="362" r="114" fill="#101528" stroke="#53D7FF" strokeOpacity=".72" />
      <circle cx="500" cy="362" r="91" stroke="#FF28B9" strokeOpacity=".5" />
      <circle cx="500" cy="362" r="67" stroke="#53D7FF" strokeOpacity=".35" strokeDasharray="3 9" />
      <path d="M478 362h44m-22-22v44" stroke="#EAF6FF" strokeLinecap="round" strokeWidth="3" />
      {[
        [146, 150],
        [854, 150],
        [159, 610],
        [841, 610],
        [500, 140],
        [500, 584],
        [360, 270],
        [640, 270],
        [344, 484],
        [656, 484],
      ].map(([cx, cy], index) => (
        <g key={`${cx}-${cy}`}>
          <circle
            cx={cx}
            cy={cy}
            r={index < 4 ? 11 : 8}
            fill={index % 3 === 0 ? "#FF28B9" : "#53D7FF"}
          />
          <circle
            cx={cx}
            cy={cy}
            r={index < 4 ? 24 : 19}
            stroke={index % 3 === 0 ? "#FF28B9" : "#53D7FF"}
            strokeOpacity=".36"
          />
        </g>
      ))}
    </svg>
  );
}

export default function NetworkStory() {
  return (
    <section
      id="connected-experiences"
      className="relative isolate overflow-hidden border-y border-white/10 bg-transparent"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_50%,rgba(8,127,255,0.1),transparent_40%),radial-gradient(ellipse_at_95%_55%,rgba(255,40,185,0.08),transparent_35%)]" />
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:py-28">
        <div className="max-w-[540px]" data-reveal>
          <span className="inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#53d7ff]">
            <span className="size-1.5 rounded-full bg-[#ff28b9]" />
            CONNECTED BY DESIGN
          </span>
          <h2 className="mb-0 mt-5 text-[clamp(40px,5.5vw,68px)] leading-[1.01] tracking-[-0.065em]">
            Better digital experiences start with{" "}
            <span className="bg-gradient-to-r from-[#53d7ff] to-[#ff28b9] bg-clip-text text-transparent">
              better connections.
            </span>
          </h2>
          <p className="mb-0 mt-6 max-w-[430px] text-[15px] leading-[1.9] text-[#c0c7d7]">
            Products, people, data, and platforms are connected. We bring them
            together to make digital experiences clearer, more useful, and ready
            to grow.
          </p>
          <Link
            className="mt-7 inline-flex min-h-11 items-center gap-2 border-b border-[#53d7ff]/55 pb-1.5 text-[13px] font-medium text-[#e1e9f4] transition-colors hover:border-[#ff28b9] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
            href="/services#custom-software-integrations"
          >
            Explore connected systems <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="relative" data-reveal>
          <AssetFrame
            asset={siteImages.homepageNetwork}
            className="relative aspect-[4/3] min-h-[290px] w-full border border-white/10 bg-[#0d1119] shadow-[0_30px_100px_rgba(0,0,0,0.3)] sm:min-h-[380px]"
            sizes="(max-width: 1024px) 100vw, 58vw"
            fallback={<NetworkArtwork />}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,18,0.08),rgba(7,8,18,0.45)),linear-gradient(90deg,rgba(7,8,18,0.1),transparent_45%,rgba(7,8,18,0.16))]" />
          <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between border-t border-white/15 pt-3 text-[8px] font-medium tracking-[0.13em] text-[#c4cee0] sm:bottom-5 sm:left-5 sm:right-5 sm:text-[9px]">
            <span>PEOPLE · PRODUCTS · SYSTEMS</span>
            <span className="text-[#53d7ff]">CONNECTED, BY DESIGN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
