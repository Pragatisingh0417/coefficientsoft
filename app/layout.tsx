
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "./components/layout/Navbar";
import ScrollReveals from "./components/layout/ScrollReveals";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoefficientSoft | Digital Products and Engineering",
  description:
    "CoefficientSoft helps businesses build software products, websites, mobile apps, and connected digital experiences.",
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
          <footer className="border-t border-white/10 pt-12 text-[11px] text-[#8c96a5]">
            <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-x-6 gap-y-9 px-5 pb-9 sm:px-8 md:grid-cols-[minmax(220px,1fr)_auto_auto] md:gap-20">
              <div className="col-span-2 md:col-span-1">
                <Link className="inline-flex items-center gap-2.5 text-[18px] font-bold tracking-[-0.05em]" href="/" aria-label="CoefficientSoft home">
                  <span className="grid size-9 place-items-center rounded-[10px] border-2 border-[#f5f7fb] text-[23px] font-extrabold text-blue">C</span>
                  <span>
                    Coefficient<span className="text-blue">Soft</span>
                  </span>
                </Link>
                <p className="mt-4 max-w-[245px] text-[13px] leading-[1.7] text-muted">
                  Thoughtful engineering for ideas with somewhere to go.
                </p>
              </div>
              <div className="flex min-w-0 flex-col items-start gap-3.5">
                <span className="mb-1 text-[10px] font-bold tracking-[0.15em] text-[#737e8e]">EXPLORE</span>
                <Link className="text-[13px] text-[#c4ccd8] transition hover:text-white" href="/services">Services</Link>
                <Link className="text-[13px] text-[#c4ccd8] transition hover:text-white" href="/about">About</Link>
                <Link className="text-[13px] text-[#c4ccd8] transition hover:text-white" href="/careers">Careers</Link>
              </div>
              <div className="flex min-w-0 flex-col items-start gap-3.5">
                <span className="mb-1 text-[10px] font-bold tracking-[0.15em] text-[#737e8e]">NEXT STEP</span>
                <Link className="text-[13px] text-[#c4ccd8] transition hover:text-white" href="/contact">
                  Start a conversation <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
            <div className="mx-auto flex min-h-14 w-full max-w-[1200px] flex-col justify-center gap-2 border-t border-white/10 px-5 text-[11px] text-[#788292] sm:px-8 md:flex-row md:items-center md:justify-between">
              <span>© CoefficientSoft</span>
              <span>Software · Products · Digital experiences</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
