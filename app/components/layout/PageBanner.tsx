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
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-[#53d7ff]/40 bg-[#087fff] px-5 text-[14px] font-semibold text-white shadow-[0_8px_30px_rgba(8,127,255,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2690ff]";
const secondaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-white/15 bg-white/[0.025] px-5 text-[14px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#ff28b9]/60";

function SystemsIllustration() {
  return (
    <div className="relative grid aspect-[1.35] w-full place-items-center overflow-hidden rounded-[48%_52%_45%_55%/52%_43%_57%_48%] border border-white/10 bg-[radial-gradient(ellipse_at_43%_38%,rgba(8,127,255,0.23),transparent_44%),radial-gradient(ellipse_at_63%_62%,rgba(255,40,185,0.14),transparent_50%),#101020]">
      <div className="absolute inset-[14%_20%] rotate-[32deg] rounded-full border border-[#53d7ff]/30" />
      <div className="absolute inset-[24%_9%] -rotate-[27deg] rounded-full border border-[#ff28b9]/30" />
      <div className="absolute h-px w-[62%] rotate-[30deg] bg-gradient-to-r from-transparent via-[#53d7ff]/80 to-transparent" />
      <div className="absolute h-px w-[58%] -rotate-[34deg] bg-gradient-to-r from-transparent via-[#ff28b9]/60 to-transparent" />
      {[
        "left-[18%] top-[17%]",
        "right-[17%] top-[17%]",
        "bottom-[17%] left-[17%]",
        "bottom-[17%] right-[16%]",
      ].map((position, index) => (
        <span
          key={position}
          className={`absolute grid size-11 place-items-center border border-[#53d7ff]/45 bg-[#101020]/95 text-xs tracking-widest text-[#cfe5ff] ${position}`}
        >
          0{index + 1}
        </span>
      ))}
      <span className="relative grid size-20 place-items-center rounded-full border border-[#53d7ff]/55 bg-[#101020]/95 text-4xl font-bold text-white shadow-[0_0_48px_rgba(8,127,255,0.2)]">
        C
      </span>
    </div>
  );
}

function CareersIllustration() {
  return (
    <div className="relative h-full min-h-56 w-full overflow-hidden rounded-tl-[7rem] border border-white/10 bg-[radial-gradient(ellipse_at_35%_32%,rgba(8,127,255,0.2),transparent_30%),radial-gradient(ellipse_at_77%_71%,rgba(255,40,185,0.14),transparent_35%),linear-gradient(140deg,#141629,#0b0c18_60%,#111329)]">
      <div className="absolute inset-x-[8%] bottom-[15%] h-[48%] border border-[#53d7ff]/25 bg-gradient-to-br from-[#53d7ff]/[0.1] to-[#ff28b9]/[0.04] [clip-path:polygon(0_100%,0_56%,20%_37%,38%_62%,55%_28%,74%_54%,100%_25%,100%_100%)]" />
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
      <span className="inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#b0b7ca]">
        <span className="size-[7px] rounded-full bg-[#53d7ff] shadow-[0_0_14px_rgba(83,215,255,0.72)]" />
        {eyebrow}
      </span>
      <h1 className="my-6 max-w-[720px] text-[clamp(48px,6.2vw,82px)] font-semibold leading-[0.96] tracking-[-0.07em]">
        {title}
      </h1>
      <p className="max-w-[560px] text-[16px] leading-[1.85] text-muted md:text-[18px]">{description}</p>
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
    <header className="relative isolate overflow-hidden border-b border-white/10 bg-[#070812]">
      <div className={`absolute inset-0 -z-10 ${variant === "about" ? "bg-[radial-gradient(ellipse_at_82%_42%,rgba(8,127,255,0.2),transparent_42%),radial-gradient(ellipse_at_58%_78%,rgba(255,40,185,0.11),transparent_40%),linear-gradient(110deg,#070812,#101020)]" : variant === "contact" ? "bg-[radial-gradient(ellipse_at_82%_55%,rgba(8,127,255,0.2),transparent_42%),radial-gradient(ellipse_at_45%_88%,rgba(139,46,255,0.12),transparent_42%),#0b0c1a]" : variant === "services" ? "bg-[radial-gradient(ellipse_at_80%_48%,rgba(255,40,185,0.13),transparent_40%),linear-gradient(112deg,#070812_0%,#0c0d1b_54%,#101020_100%)]" : "bg-[radial-gradient(ellipse_at_83%_48%,rgba(8,127,255,0.18),transparent_42%),radial-gradient(ellipse_at_55%_85%,rgba(139,46,255,0.1),transparent_38%),linear-gradient(100deg,#070812,#101020)]"}`} />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(173,191,232,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(173,191,232,0.07)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_78%_45%,black,transparent_68%)]" />
      <div className="mx-auto grid min-h-[470px] w-full max-w-[1320px] grid-cols-1 items-center gap-8 px-5 py-14 sm:px-8 md:min-h-[520px] md:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)] md:gap-12 md:py-16 lg:gap-20">
        {copy}
        {artwork}
      </div>
    </header>
  );
}
