"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const connections = [
  "M92 302 C205 300 196 132 338 134",
  "M92 302 C220 302 224 300 378 300",
  "M92 302 C205 304 196 470 338 468",
  "M908 302 C788 300 812 132 662 134",
  "M908 302 C790 302 775 300 622 300",
  "M908 302 C788 304 812 470 662 468",
  "M338 134 C416 134 420 220 472 244",
  "M338 468 C416 468 420 382 472 358",
  "M662 134 C584 134 580 220 528 244",
  "M662 468 C584 468 580 382 528 358",
  "M378 300 C428 300 432 300 472 300",
  "M622 300 C572 300 568 300 528 300",
];

const stations = [
  { x: 92, y: 302, label: "PEOPLE" },
  { x: 338, y: 134, label: "PRODUCT" },
  { x: 338, y: 468, label: "DATA" },
  { x: 662, y: 134, label: "PLATFORMS" },
  { x: 662, y: 468, label: "SYSTEMS" },
  { x: 908, y: 302, label: "CUSTOMERS" },
];

export default function NetworkStory() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#0d1119]">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-10 px-5 py-20 sm:px-8 md:gap-16 md:py-28 lg:grid-cols-[0.72fr_1.28fr]">
        <div data-reveal>
          <span className="inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c6a76a]">
            CONNECTED BY DESIGN
          </span>
          <h2 className="mb-0 mt-5 text-[clamp(38px,4.7vw,60px)] leading-[1.04] tracking-[-0.06em]">
            Better digital
            <br />
            <span className="text-[#7b8798]">work works together.</span>
          </h2>
          <p className="mb-0 mt-5 max-w-[390px] text-[14px] leading-[1.9] text-muted">
            Products, people, data, and platforms are connected. We help make
            those connections easier to understand, use, and improve.
          </p>
          <Link
            className="mt-7 inline-flex items-center gap-2 border-b border-blue/60 pb-1.5 text-[12px] font-medium text-[#e1e9f4] transition-colors hover:border-[#c6a76a] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
            href="/services#custom-software-integrations"
          >
            Explore connected systems <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div
          className="relative min-h-[290px] border-y border-white/10 bg-[radial-gradient(ellipse_at_50%_50%,rgba(8,127,255,0.12),transparent_52%),linear-gradient(110deg,rgba(8,127,255,0.025),transparent_48%,rgba(198,167,106,0.025))] sm:min-h-[390px]"
          aria-label="Animated illustration of people, products, data, platforms, and systems connected"
          role="img"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1000 600"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <radialGradient id="network-core">
                <stop stopColor="#087FFF" stopOpacity="0.34" />
                <stop offset="1" stopColor="#087FFF" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="500" cy="300" r="175" fill="url(#network-core)" />
            {connections.map((path, index) => (
              <motion.path
                key={path}
                d={path}
                stroke={index === 7 || index === 8 ? "#C6A76A" : "#398FE2"}
                strokeOpacity="0.38"
                strokeWidth="1.15"
                initial={false}
                animate={
                  reduceMotion
                    ? { strokeOpacity: 0.38 }
                    : { strokeOpacity: [0.2, 0.72, 0.2], pathLength: [0.82, 1, 0.82] }
                }
                transition={{
                  duration: 5.5 + (index % 4) * 0.9,
                  delay: index * 0.12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            <circle
              cx="500"
              cy="300"
              r="57"
              fill="#080A0F"
              stroke="#78B7FF"
              strokeOpacity="0.75"
            />
            <circle cx="500" cy="300" r="44" stroke="#78B7FF" strokeOpacity="0.2" />
            <text
              x="500"
              y="318"
              fill="#F5F7FB"
              fontSize="48"
              fontWeight="600"
              letterSpacing="-5"
              textAnchor="middle"
              className="font-sans"
            >
              C
            </text>
            {stations.map(({ x, y, label }, index) => (
              <g key={label}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r="7"
                  fill={index === 2 ? "#C6A76A" : "#78B7FF"}
                  animate={
                    reduceMotion
                      ? { opacity: 1 }
                      : { opacity: [0.55, 1, 0.55], scale: [0.82, 1.12, 0.82] }
                  }
                  transition={{
                    duration: 3.8 + index * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.22,
                  }}
                />
                <circle
                  cx={x}
                  cy={y}
                  r="14"
                  stroke={index === 2 ? "#C6A76A" : "#78B7FF"}
                  strokeOpacity="0.32"
                />
                <text
                  x={x}
                  y={y + (y < 300 ? -25 : 34)}
                  fill="#B9C6D8"
                  fontSize="11"
                  letterSpacing="2"
                  textAnchor="middle"
                  className="font-sans"
                >
                  {label}
                </text>
              </g>
            ))}
          </svg>
          <div className="absolute bottom-3 left-0 right-0 flex justify-between text-[8px] tracking-[0.16em] text-[#79889d] sm:bottom-4 sm:text-[9px]">
            <span>FROM DISCOVERY</span>
            <span>TO USEFUL OUTCOMES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
