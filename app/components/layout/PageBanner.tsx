import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { SiteImage } from "../../data/site-images";
import AssetFrame from "./AssetFrame";

type PageBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  variant: "services" | "about" | "contact" | "careers";
  action?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  image?: SiteImage;
};

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-blue bg-blue px-5 text-[13px] font-semibold text-white shadow-[0_0_28px_rgba(8,127,255,0.15)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2690ff]";
const secondaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-white/10 bg-white/[0.025] px-5 text-[13px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-blue/60";

function SystemsIllustration() {
  return (
    <div className="relative grid aspect-[1.35] w-full place-items-center overflow-hidden rounded-[48%_52%_45%_55%/52%_43%_57%_48%] border border-white/10 bg-[radial-gradient(ellipse_at_center,rgba(8,127,255,0.15),transparent_64%)]">
      <div className="absolute inset-[14%_20%] rotate-[32deg] rounded-full border border-blue/30" />
      <div className="absolute inset-[24%_9%] -rotate-[27deg] rounded-full border border-white/10" />
      <div className="absolute h-px w-[62%] rotate-[30deg] bg-gradient-to-r from-transparent via-blue/70 to-transparent" />
      <div className="absolute h-px w-[58%] -rotate-[34deg] bg-gradient-to-r from-transparent via-blue/50 to-transparent" />
      {[
        "left-[18%] top-[17%]",
        "right-[17%] top-[17%]",
        "bottom-[17%] left-[17%]",
        "bottom-[17%] right-[16%]",
      ].map((position, index) => (
        <span
          key={position}
          className={`absolute grid size-11 place-items-center border border-blue/50 bg-[#080e18]/95 text-xs tracking-widest text-[#cfe5ff] ${position}`}
        >
          0{index + 1}
        </span>
      ))}
      <span className="relative grid size-20 place-items-center rounded-full border border-blue/60 bg-[#080c14]/95 text-4xl font-bold text-white shadow-[0_0_48px_rgba(8,127,255,0.18)]">
        C
      </span>
    </div>
  );
}

function CareersIllustration() {
  return (
    <div className="relative h-full min-h-56 w-full overflow-hidden rounded-tl-[7rem] border border-white/10 bg-[radial-gradient(ellipse_at_40%_35%,rgba(132,153,170,0.28),transparent_28%),linear-gradient(140deg,#19232d,#0c1016_60%,#132538)]">
      <div className="absolute inset-x-[8%] bottom-[15%] h-[48%] border border-white/15 bg-gradient-to-br from-white/[0.08] to-transparent [clip-path:polygon(0_100%,0_56%,20%_37%,38%_62%,55%_28%,74%_54%,100%_25%,100%_100%)]" />
      <span className="absolute bottom-5 left-5 text-[12px] tracking-wide text-[#c4ceda]">
        Curiosity, learning, collaboration
      </span>
    </div>
  );
}

function ContactIllustration() {
  return (
    <div className="relative grid aspect-[1.35] w-full place-items-center overflow-hidden border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.025),rgba(8,127,255,0.055))]">
      <span className="absolute h-px w-[120%] rotate-[-24deg] bg-gradient-to-r from-transparent via-blue/80 to-transparent" />
      <span className="grid size-56 max-w-[70%] place-items-center rounded-full border border-blue/40 shadow-[inset_0_0_42px_rgba(8,127,255,0.08),0_0_65px_rgba(8,127,255,0.09)]">
        <span className="border border-blue/30 bg-[#080a0f]/90 px-5 py-4 text-3xl tracking-tight text-[#e9f3ff]">
          Let&apos;s talk<span className="text-blue">.</span>
        </span>
      </span>
    </div>
  );
}

export default function PageBanner({
  eyebrow,
  title,
  description,
  variant,
  action,
  secondaryAction,
  image,
}: PageBannerProps) {
  const copy = (
    <div className="relative z-10">
      <span className="inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">
        <span className="size-[7px] rounded-full bg-blue shadow-[0_0_14px_rgba(8,127,255,0.8)]" />
        {eyebrow}
      </span>
      <h1 className="my-6 max-w-[720px] text-[clamp(44px,5.5vw,76px)] font-semibold leading-[0.99] tracking-[-0.065em]">
        {title}
      </h1>
      <p className="max-w-[560px] text-[15px] leading-[1.9] text-muted">{description}</p>
      {(action || secondaryAction) && (
        <div className="mt-7 flex flex-wrap gap-3">
          {action && (
            <Link href={action.href} className={primaryButton}>
              {action.label} <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          )}
          {secondaryAction && (
            <Link href={secondaryAction.href} className={secondaryButton}>
              {secondaryAction.label}
            </Link>
          )}
        </div>
      )}
    </div>
  );

  const artwork = (
    <div className="relative z-0 min-h-56 min-w-0">
      {variant === "services" && <SystemsIllustration />}
      {variant === "about" && image && (
        <AssetFrame
          asset={image}
          className="aspect-[4/3] w-full border border-white/15"
          sizes="(max-width: 768px) 100vw, 45vw"
          fallback={
            <div className="h-full w-full bg-gradient-to-br from-[#1a222d] via-[#0d1219] to-[#102038]" />
          }
        />
      )}
      {variant === "careers" && image ? (
        <AssetFrame
          asset={image}
          className="aspect-[4/3] w-full border border-white/15"
          sizes="(max-width: 768px) 100vw, 45vw"
          fallback={<CareersIllustration />}
        />
      ) : null}
      {variant === "careers" && !image && <CareersIllustration />}
      {variant === "contact" && image ? (
        <AssetFrame
          asset={image}
          className="aspect-[4/3] w-full border border-white/15"
          sizes="(max-width: 768px) 100vw, 45vw"
          fallback={<ContactIllustration />}
        />
      ) : null}
      {variant === "contact" && !image && <ContactIllustration />}
    </div>
  );

  return (
    <header className="relative isolate overflow-hidden border-b border-white/10 bg-[#090c12]">
      <div className={`absolute inset-0 -z-10 ${variant === "about" ? "bg-[radial-gradient(ellipse_at_85%_45%,rgba(57,86,119,0.16),transparent_44%)]" : variant === "contact" ? "bg-[radial-gradient(ellipse_at_87%_58%,rgba(8,127,255,0.12),transparent_43%)]" : variant === "services" ? "bg-[linear-gradient(112deg,#080a0f_0%,rgba(8,10,15,0.96)_54%,rgba(8,19,34,0.9)_100%)]" : "bg-[linear-gradient(90deg,#090c11,rgba(9,12,17,0.9),rgba(12,22,33,0.78))]"}`} />
      <div className="mx-auto grid min-h-[440px] w-full max-w-[1200px] grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 md:min-h-[490px] md:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)] md:gap-12 md:py-16 lg:gap-20">
        {copy}
        {artwork}
      </div>
    </header>
  );
}
