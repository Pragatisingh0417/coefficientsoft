
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
          <footer className="border-t border-white/10 bg-[#080a0f] text-[#8c96a5]">
            <div className="mx-auto grid w-full max-w-[1320px] grid-cols-2 gap-x-7 gap-y-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[1.15fr_1.3fr_0.8fr_0.9fr] lg:gap-12">
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
                <p className="mt-4 max-w-[290px] text-[15px] leading-[1.8] text-muted">
                  Thoughtful engineering for ideas with somewhere to go. We
                  connect product thinking, design, and software delivery.
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h2 className="mb-4 text-[11px] font-bold tracking-[0.16em] text-[#78b7ff]">
                  SERVICES
                </h2>
                <ul className="grid grid-cols-1 gap-x-4 gap-y-3 md:grid-cols-2">
                  {services.map(({ id, title }) => (
                    <li key={id}>
                      <Link
                        className="text-[16px] leading-snug text-[#c4ccd8] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                        href={`/services#${id}`}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-[11px] font-bold tracking-[0.16em] text-[#78b7ff]">
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
                        className="text-[16px] text-[#c4ccd8] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                        href={href}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 flex flex-col items-start border-t border-white/10 pt-6 sm:col-span-1 lg:col-span-1 lg:border-0 lg:pt-0">
                <span className="text-[11px] font-bold tracking-[0.16em] text-[#78b7ff]">
                  NEXT STEP
                </span>
                <p className="mb-5 mt-3 max-w-[260px] text-[15px] leading-[1.8] text-muted">
                  Have a product idea or a workflow you want to improve?
                </p>
                <Link
                  className="inline-flex min-h-11 items-center gap-2 border border-blue/55 px-4 text-[14px] font-semibold text-white transition-colors hover:border-blue hover:bg-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                  href="/contact"
                >
                  Start a project <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
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
