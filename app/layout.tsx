
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "./components/layout/Navbar";
import ScrollReveals from "./components/layout/ScrollReveals";
import { services } from "./data/services";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoefficientSoft | Digital Products, Software & Engineering",
  description:
    "Thoughtful engineering for ideas with somewhere to go. CoefficientSoft builds software products, websites, mobile apps, and connected digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <Navbar />
          <ScrollReveals />
          {children}
          <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#070812] text-[#b0b7ca]">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_10%,rgba(8,127,255,0.14),transparent_35%),radial-gradient(ellipse_at_88%_20%,rgba(255,40,185,0.09),transparent_34%)]" />
            <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-6 border-b border-white/10 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between md:py-14">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#53d7ff]">
                  THE NEXT IDEA STARTS HERE
                </span>
                <h2 className="mb-0 mt-3 max-w-[670px] text-[clamp(30px,4.5vw,52px)] font-medium leading-[1.06] tracking-[-0.055em] text-white">
                  Let&apos;s make something{" "}
                  <span className="bg-gradient-to-r from-[#53d7ff] to-[#ff28b9] bg-clip-text text-transparent">
                    matter.
                  </span>
                </h2>
              </div>
              <Link
                className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-2 border border-[#53d7ff]/40 bg-[#087fff] px-5 text-[14px] font-semibold text-white shadow-[0_8px_28px_rgba(8,127,255,0.2)] transition hover:-translate-y-0.5 hover:bg-[#2690ff]"
                href="/contact"
              >
                Start a project <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="mx-auto grid w-full max-w-[1320px] grid-cols-2 gap-x-7 gap-y-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[1.1fr_1.5fr_0.8fr] lg:gap-14">
              <div className="col-span-2 lg:col-span-1">
                <Link
                  className="inline-flex items-center gap-2.5 text-[18px] font-bold tracking-[-0.05em] text-white"
                  href="/"
                  aria-label="CoefficientSoft home"
                >
                  <span className="grid size-9 place-items-center rounded-[10px] border-2 border-[#f5f7fb] text-[23px] font-extrabold text-blue">
                    C
                  </span>
                  <span>
                    Coefficient<span className="text-blue">Soft</span>
                  </span>
                </Link>
                <p className="mt-4 max-w-[310px] text-[15px] leading-[1.8] text-muted">
                  Thoughtful engineering for ideas with somewhere to go. We
                  connect product thinking, design, and software delivery.
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h2 className="mb-5 text-[11px] font-bold tracking-[0.16em] text-[#53d7ff]">
                  SERVICES
                </h2>
                <ul className="grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
                  {services.map(({ id, title }) => (
                    <li key={id}>
                      <Link
                        className="text-[15px] leading-snug text-[#c4ccd8] transition-colors hover:text-[#53d7ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                        href={`/services#${id}`}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <h2 className="mb-5 text-[11px] font-bold tracking-[0.16em] text-[#53d7ff]">
                  COMPANY
                </h2>
                <ul className="flex flex-col items-start gap-3">
                  {[
                    ["Home", "/"],
                    ["About", "/about"],
                    ["Services", "/services"],
                    ["Careers", "/careers"],
                    ["Contact", "/contact"],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <Link
                        className="text-[16px] text-[#c4ccd8] transition-colors hover:text-[#ff55c7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                        href={href}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
            <div className="mx-auto flex min-h-14 w-full max-w-[1320px] flex-col justify-center gap-2 border-t border-white/10 px-5 text-[11px] text-[#788292] sm:px-8 md:flex-row md:items-center md:justify-between">
              <span>© CoefficientSoft</span>
              <span>Software · Products · Digital experiences</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
