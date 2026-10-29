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

  if (pathname === "/about") {
    return <PageExperience fullPage variant="about" />;
  }

  if (pathname === "/careers") {
    return <PageExperience fullPage variant="careers" />;
  }

  if (pathname === "/contact") {
    return <PageExperience fullPage variant="contact" />;
  }

  return null;
}
