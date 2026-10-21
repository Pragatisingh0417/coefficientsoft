import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AssetFrame from "../layout/AssetFrame";
import { siteImages } from "../../data/site-images";

const capabilities = [
  {
    number: "01",
    label: "SOFTWARE PRODUCTS",
    title: "Interfaces shaped around real work",
    description:
      "Product design and application engineering for teams turning a workflow or product idea into something people can use.",
    asset: siteImages.homepageProduct,
    layout: "lg:col-span-7",
  },
  {
    number: "02",
    label: "MOBILE APPLICATIONS",
    title: "Useful experiences, wherever work happens",
    description:
      "Mobile product journeys designed around the context, devices, and everyday needs of the people using them.",
    asset: siteImages.homepageMobile,
    layout: "lg:col-span-5 lg:mt-24",
  },
  {
    number: "03",
    label: "CONNECTED SYSTEMS",
    title: "Tools and services that work together",
    description:
      "Web, commerce, and integration work that helps customer journeys and internal operations fit together more clearly.",
    asset: siteImages.homepageSystems,
    layout: "lg:col-span-8 lg:col-start-3",
  },
];

export default function Projects() {
  return (
    <section id="work" className="border-y border-white/10 bg-[#0a0d13] py-20 md:py-32">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        <div
          className="mb-9 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-11"
          data-reveal
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c6a76a]">
              CAPABILITIES
            </span>
            <h2 className="mb-0 mt-4 text-[clamp(40px,5vw,65px)] leading-[1.06] tracking-[-0.055em]">
              Thoughtful work
              <br />
              <span className="text-[#707988]">for the real world.</span>
            </h2>
          </div>
          <p className="mb-1 max-w-[370px] text-[14px] leading-[1.9] text-muted">
            Illustrative capability areas—not completed client case studies.
            Project examples can be added when approved details are available.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12 lg:gap-y-16">
          {capabilities.map(({ number, label, title, description, asset, layout }) => (
            <article className={`min-w-0 ${layout}`} key={number} data-reveal>
              <AssetFrame
                asset={asset}
                className="aspect-[16/10] w-full border border-white/10 bg-[#0d1119]"
                sizes="(max-width: 768px) 100vw, (max-width: 1100px) 60vw, 55vw"
                fallback={
                  <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_50%_50%,rgba(8,127,255,0.14),transparent_62%),#0d1119]">
                    <span className="border border-blue/40 px-5 py-4 text-[12px] tracking-[0.15em] text-[#b9d8fb]">
                      {label}
                    </span>
                  </div>
                }
              />
              <div className="flex flex-col gap-3 pt-5 sm:flex-row sm:items-start sm:justify-between sm:gap-7">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-[#c6a76a]">
                    {number} / {label}
                  </span>
                  <h3 className="mb-2 mt-2.5 max-w-[460px] text-[clamp(22px,2.5vw,29px)] leading-[1.2] tracking-[-0.04em]">
                    {title}
                  </h3>
                  <p className="mb-0 max-w-[500px] text-[13px] leading-[1.8] text-muted">
                    {description}
                  </p>
                </div>
                <Link
                  className="mt-1 inline-flex shrink-0 items-center gap-2 text-[12px] text-[#d5e8ff] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                  href="/contact"
                >
                  Discuss an idea <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
