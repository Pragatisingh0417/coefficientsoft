"use client";

import { usePathname } from "next/navigation";
import PageExperience from "./PageExperience";

export default function RouteExperience() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <PageExperience fullPage variant="homeBackground" />;
  }

  if (pathname === "/services") {
    return <PageExperience fullPage variant="servicesBackground" />;
  }

  if (pathname !== "/about") return null;

  return <PageExperience fullPage variant="about" />;
}
