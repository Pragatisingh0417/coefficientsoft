"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const desktopLink =
  "relative text-[16px] text-[#c3c9d9] transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-[#53d7ff] after:to-[#ff28b9] after:transition-[width] hover:text-white hover:after:w-full";
const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-[#53d7ff]/35 bg-[#087fff] px-5 text-[14px] font-semibold text-white shadow-[0_8px_30px_rgba(8,127,255,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2690ff]";

function isLinkActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.09] bg-[#070812]/90 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[82px] w-full max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8" aria-label="Main navigation">
        <Link className="inline-flex shrink-0 items-center gap-2.5 text-[18px] font-bold tracking-[-0.05em]" href="/" aria-label="CoefficientSoft home">
          <span className="grid size-9 place-items-center rounded-[10px] border-2 border-[#f5f7fb] text-[23px] font-extrabold text-blue">C</span>
          <span>Coefficient<span className="text-blue">Soft</span></span>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => {
            const active = isLinkActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${desktopLink} ${active ? "text-white after:w-full" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link className="hidden min-h-11 items-center justify-center gap-2 rounded-md border border-[#53d7ff]/25 bg-[#101020] px-4 text-[14px] font-semibold transition hover:-translate-y-0.5 hover:border-[#ff28b9]/55 hover:bg-[#ff28b9]/[0.06] md:inline-flex" href="/contact">
          Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
        </Link>

        <button
          className="grid size-11 place-items-center rounded-lg border border-white/10 bg-[#101020] text-white transition hover:border-[#53d7ff]/50 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="flex flex-col border-t border-white/10 bg-[#0b0c1a] px-5 pb-5 pt-2 lg:hidden">
          {links.map((link) => {
            const active = isLinkActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-b border-white/10 py-4 text-[17px] text-[#b6bdc9] transition hover:text-[#53d7ff] ${active ? "text-white" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Link className={`${primaryButton} mt-4`} href="/contact" onClick={() => setOpen(false)}>
            Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      )}
    </header>
  );
}
