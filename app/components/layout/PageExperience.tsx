"use client";

import dynamic from "next/dynamic";
import type { SceneVariant } from "../three/HeroScene";

const HeroScene = dynamic(() => import("../three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function PageExperience({
  fullPage = false,
  variant,
}: {
  fullPage?: boolean;
  variant: Exclude<SceneVariant, "home">;
}) {
  return <HeroScene fullPage={fullPage} orbitScale={0.78} variant={variant} />;
}
