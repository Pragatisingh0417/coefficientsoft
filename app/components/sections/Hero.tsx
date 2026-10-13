
"use client";

import dynamic from "next/dynamic";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const HeroScene = dynamic(() => import("../three/HeroScene"), {
  ssr: false,
  loading: () => <div className="hero-canvas" />,
});

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="status-dot" />
          SOFTWARE · SAAS · AI SOLUTIONS
        </div>

        <h1>
          Engineering
          <br />
          ideas into
          <br />
          <span className="gradient-text">reality.</span>
        </h1>

        <p className="hero-description">
          We design and build digital products that help businesses
          solve complex problems, work smarter, and grow with confidence.
        </p>

        <div className="hero-actions">
          <a className="button-primary" href="#services">
            Explore our services <ArrowUpRight size={18} />
          </a>
          <a className="button-secondary" href="#contact">
            Start a project
          </a>
        </div>

        <a href="#services" className="scroll-cue">
          <ArrowDown size={15} /> Scroll to explore
        </a>
      </div>

      <div className="hero-visual">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <HeroScene />
        <div className="hero-label">
          <span>01 / DIGITAL ENGINEERING</span>
          <span>BUILT FOR WHAT&apos;S NEXT</span>
        </div>
      </div>

      <div className="hero-bottom-line">
        <span>INDEPENDENT TECHNOLOGY STUDIO</span>
        <span>IDEAS → PRODUCTS → IMPACT</span>
      </div>
    </section>
  );
}
