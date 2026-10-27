"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 32,
            opacity: 0,
            scale: 0.94,
            rotationX: 2.5,
            transformPerspective: 900,
            transformOrigin: "center bottom",
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              end: "top 65%",
              scrub: 0.7,
            },
          }
        );
      });
    });

    return () => context.revert();
  }, [pathname]);

  return null;
}
