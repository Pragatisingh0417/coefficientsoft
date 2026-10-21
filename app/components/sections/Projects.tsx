import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AssetFrame from "../layout/AssetFrame";
import { siteImages } from "../../data/site-images";

const capabilities = [
  {
    number: "01",
    label: "PRODUCT EXPERIENCE",
    title: "Interfaces shaped around real work",
    description:
      "Product design and application engineering for teams turning a workflow or product idea into something people can use.",
    asset: siteImages.homepageProduct,
    art: "bg-[radial-gradient(ellipse_at_78%_20%,rgba(8,127,255,0.17),transparent_35%),linear-gradient(135deg,#171e28,#0b1119_65%)]",
  },
  {
    number: "02",
    label: "CONNECTED OPERATIONS",
    title: "Commerce and systems that work together",
    description:
      "Web, commerce, and integration work that helps customer journeys and internal operations fit together more clearly.",
    asset: siteImages.homepageOperations,
    art: "bg-[radial-gradient(ellipse_at_26%_78%,rgba(8,127,255,0.13),transparent_32%),linear-gradient(145deg,#111c2a,#0b0e14_68%)]",
  },
];

export default function Projects() {
  return (
    <section id="work" className="border-y border-white/10 bg-[#0a0d13] py-20 md:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="mb-9 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-11" data-reveal>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">CAPABILITIES</span>
            <h2 className="mb-0 mt-4 text-[clamp(40px,5vw,65px)] leading-[1.06] tracking-[-0.055em]">
              Work made
              <br />
              <span className="text-[#707988]">for the real world.</span>
            </h2>
          </div>
          <p className="mb-1 max-w-[355px] text-[14px] leading-[1.9] text-muted">
            These are capability areas, not client case studies. Approved project
            examples can be added when available.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-11">
          {capabilities.map((capability) => (
            <article className="min-w-0" key={capability.number} data-reveal>
              <AssetFrame
                asset={capability.asset}
                className={`min-h-[260px] w-full border border-white/15 sm:min-h-[300px] ${capability.art}`}
                sizes="(max-width: 768px) 100vw, 50vw"
                fallback={
                  <>
                    <span className="absolute left-5 top-5 z-[1] text-[10px] tracking-[0.12em] text-[#b4c0d1]">{capability.number}</span>
                    <div className="absolute inset-[19%_13%] -skew-y-[8deg] border border-blue/30 bg-gradient-to-br from-blue/10 to-transparent" />
                    <div className="absolute left-[20%] right-[20%] top-[35%] h-px bg-white/30 shadow-[0_24px_rgba(171,207,248,0.16),0_48px_rgba(171,207,248,0.12)]" />
                    <div className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-blue/50" />
                  </>
                }
              />
              <div className="px-0.5 pt-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">{capability.label}</span>
                <h3 className="mb-2 mt-3 max-w-[450px] text-[clamp(22px,2.5vw,29px)] tracking-[-0.04em]">{capability.title}</h3>
                <p className="max-w-[490px] text-[13px] leading-[1.8] text-muted">{capability.description}</p>
                <Link className="mt-4 inline-flex items-center gap-2 text-[12px] text-[#d5e8ff] transition-all hover:gap-3 hover:text-white" href="/contact">
                  Talk through an idea <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
