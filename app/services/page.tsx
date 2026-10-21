import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AssetFrame from "../components/layout/AssetFrame";
import PageBanner from "../components/layout/PageBanner";
import { services } from "../data/services";
import { siteImages } from "../data/site-images";

const serviceImages = [
  siteImages.servicesMarketing,
  siteImages.servicesSoftware,
  siteImages.servicesWebsite,
  siteImages.servicesMobile,
  siteImages.servicesIntegrations,
  siteImages.servicesCounselling,
];

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-blue bg-blue px-5 text-[13px] font-semibold text-white shadow-[0_0_28px_rgba(8,127,255,0.15)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2690ff]";

export default function ServicesPage() {
  return (
    <div className="pb-16">
      <PageBanner
        eyebrow="SERVICES"
        title="Useful digital work, shaped around your next step."
        description="Bring us a business challenge, a product idea, or a process that needs to work better. We’ll help define a practical way forward."
        variant="services"
        action={{ label: "Discuss a project", href: "/contact" }}
      />

      <main>
        <section className="mx-auto w-full max-w-[1200px] px-5 pb-16 pt-20 sm:px-8 md:pb-24 md:pt-28">
          <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-11" data-reveal>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">AREAS OF SUPPORT</span>
              <h2 className="mb-0 mt-4 text-[clamp(40px,5vw,65px)] leading-[1.06] tracking-[-0.055em]">
                Six services.
                <br />
                <span className="text-[#707988]">One thoughtful approach.</span>
              </h2>
            </div>
            <p className="mb-1 max-w-[355px] text-[14px] leading-[1.9] text-muted">
              Every engagement starts with your context. We will clarify scope and
              options before recommending a path.
            </p>
          </div>

          <div className="flex flex-col gap-14 md:gap-[72px]">
            {services.map(({ id, number, title, detail, outcome, icon: Icon }, index) => (
              <article
                id={id}
                className="grid scroll-mt-28 grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-12 lg:gap-20"
                key={id}
                data-reveal
              >
                <AssetFrame
                  asset={serviceImages[index]}
                  className={`aspect-[3/2] w-full border border-white/15 ${index % 2 === 1 ? "md:order-2" : ""}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  fallback={
                    <div className={`absolute inset-0 grid place-items-center bg-gradient-to-br ${index % 2 === 0 ? "from-[#172231] via-[#0b1017] to-[#101721]" : "from-[#111e2e] via-[#0b0e14] to-[#17212c]"}`}>
                      <span className="absolute left-4 top-4 text-[10px] tracking-[0.1em] text-[#bec9d8]">{number}</span>
                      <span className="absolute inset-[16%_14%] -skew-y-[6deg] border border-blue/30 bg-gradient-to-br from-white/[0.04] to-transparent" />
                      <span className="relative grid size-[76px] place-items-center rounded-full border border-blue/50 bg-[#080c14]/80 text-[#9bcaff]">
                        <Icon size={34} strokeWidth={1.2} aria-hidden="true" />
                      </span>
                    </div>
                  }
                />
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7d8999]">SERVICE {number}</span>
                  <h3 className="mb-3.5 mt-4 text-[clamp(29px,3.6vw,44px)] leading-[1.06] tracking-[-0.055em]">{title}</h3>
                  <p className="max-w-[480px] text-[14px] leading-[1.85] text-muted">{detail}</p>
                  <p className="mt-4 max-w-[480px] text-[14px] leading-[1.85] text-[#d1d9e5]">{outcome}</p>
                  <Link className="mt-5 inline-flex items-center gap-2 text-[12px] text-[#d5e8ff] transition-all hover:gap-3 hover:text-white" href="/contact">
                    Ask about this service <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-10 flex w-full max-w-[1200px] flex-col items-start justify-between gap-5 border-y border-white/10 bg-[#0a0d13] px-5 py-7 sm:px-8 md:flex-row md:items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">A GOOD PLACE TO START</span>
            <h2 className="mb-0 mt-2 text-[clamp(28px,3vw,40px)] tracking-[-0.05em]">Tell us what you want to make work better.</h2>
          </div>
          <Link href="/contact" className={primaryButton}>
            Discuss your project <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </section>
      </main>
    </div>
  );
}
