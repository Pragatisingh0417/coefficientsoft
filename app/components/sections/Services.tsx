import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AssetFrame from "../layout/AssetFrame";
import { services } from "../../data/services";

const layouts = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-12",
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative isolate mx-auto w-full max-w-[1320px] overflow-hidden px-5 py-20 sm:px-8 md:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-16 -z-10 h-96 bg-[radial-gradient(ellipse_at_18%_42%,rgba(8,127,255,0.09),transparent_48%),radial-gradient(ellipse_at_82%_54%,rgba(139,46,255,0.08),transparent_45%)]" />
      <div
        className="mb-9 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-11"
        data-reveal
      >
        <div>
          <span className="inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#53d7ff]">
            WHAT WE DO
          </span>
          <h2 className="mb-0 mt-4 text-[clamp(40px,5vw,65px)] leading-[1.06] tracking-[-0.055em]">
            Six ways to move
            <br />
            <span className="text-[#707988]">good ideas forward.</span>
          </h2>
        </div>
        <p className="mb-1 max-w-[355px] text-[15px] leading-[1.9] text-muted">
          From product engineering to digital growth, choose the support that fits
          the work in front of you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-11 border-t border-white/10 pt-7 sm:grid-cols-2 lg:grid-cols-12 lg:gap-y-14">
        {services.map(({ id, number, title, summary, image, icon: Icon }, index) => {
          const horizontal = index === services.length - 1;
          const art = (
            <AssetFrame
              asset={image}
              className={`relative aspect-[3/2] w-full overflow-hidden border border-white/10 bg-[#101020] transition duration-500 group-hover:border-[#53d7ff]/45 group-hover:shadow-[0_14px_55px_rgba(8,127,255,0.1)] ${horizontal ? "lg:aspect-[16/7]" : ""}`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 38vw"
              fallback={
                <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_42%_48%,rgba(8,127,255,0.18),transparent_55%),linear-gradient(140deg,#14172c,#0b0d19_70%)]">
                  <span className="absolute inset-[12%] border border-white/[0.06]" />
                  <span className="relative grid size-14 place-items-center border border-[#53d7ff]/40 bg-[#087fff]/[0.06] text-[#53d7ff]">
                    <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
                  </span>
                </div>
              }
            />
          );

          return (
            <article
              className={`group min-w-0 ${layouts[index]}`}
              key={id}
              data-reveal
            >
              <Link
                href={`/services#${id}`}
                className={`${horizontal ? "grid gap-5 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:gap-9" : "block"} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue`}
                aria-label={`Explore ${title}`}
              >
                {art}
                <div className="mt-5 flex items-start justify-between gap-5">
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-[#53d7ff]">
                      {number} / SERVICE
                    </span>
                    <h3 className="mb-2 mt-2.5 max-w-[420px] text-[21px] font-medium leading-[1.2] tracking-[-0.035em] transition-colors group-hover:text-[#a8d2ff]">
                      {title}
                    </h3>
                    <p className="mb-0 max-w-[470px] text-[13px] leading-[1.75] text-muted">
                      {summary}
                    </p>
                  </div>
                  <span className="mt-1 grid size-9 shrink-0 place-items-center border border-white/15 text-[#b0b7ca] transition-colors group-hover:border-[#ff28b9]/50 group-hover:text-[#ff28b9]">
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
