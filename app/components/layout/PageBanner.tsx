import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteImages } from "../../data/site-images";
import PageExperience from "./PageExperience";

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
};

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-md border border-[#53d7ff]/40 bg-[#087fff] px-5 text-[14px] font-semibold text-white shadow-[0_8px_30px_rgba(8,127,255,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2690ff]";
const secondaryButton =
  "inline-flex min-h-12 min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-white/15 bg-white/[0.025] px-1.5 text-center text-[clamp(10px,2.8vw,14px)] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#ff28b9]/60 sm:gap-2.5 sm:px-5";

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

export default function PageBanner({
  eyebrow,
  title,
  description,
  variant,
  action,
  secondaryAction,
}: PageBannerProps) {
  const fullPageBackdrop =
    variant === "about" || variant === "careers" || variant === "contact";
  const heroArtwork =
    variant === "about"
      ? siteImages.aboutHero
      : variant === "careers"
        ? siteImages.careersHero
        : variant === "contact"
          ? siteImages.contactHero
          : null;

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
        <div
          className={`mt-7 ${
            action && secondaryAction
              ? "grid w-full max-w-[500px] grid-cols-2 gap-2.5 sm:flex sm:w-fit sm:gap-3"
              : "flex w-fit"
          }`}
        >
          {action && (
            <Link href={action.href} className={`${primaryButton} min-w-0 gap-1.5 px-1.5 text-center text-[clamp(10px,2.8vw,14px)] sm:gap-2.5 sm:px-5`}>
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

  const artwork = fullPageBackdrop ? (
    <div className="pointer-events-none absolute right-[-28%] top-[22%] z-[2] w-[76%] max-w-[390px] opacity-25 md:relative md:right-auto md:top-auto md:z-10 md:flex md:w-full md:max-w-none md:items-center md:justify-center md:opacity-100">
      {heroArtwork?.src && (
        <Image
          src={heroArtwork.src}
          alt=""
          aria-hidden="true"
          width={1140}
          height={960}
          priority
          sizes="(max-width: 767px) 78vw, (max-width: 1279px) 48vw, 600px"
          className="h-auto max-h-[580px] w-full object-contain drop-shadow-[0_0_50px_rgba(8,127,255,0.12)]"
        />
      )}
    </div>
  ) : (
    <div className="relative z-0 min-h-56 min-w-0">
      {variant === "services" && <SystemsIllustration />}
      <PageExperience variant={variant} />
    </div>
  );

  return (
    <header
      className={`relative isolate overflow-hidden border-b border-white/10 ${
        fullPageBackdrop
          ? "min-h-[calc(100svh-82px)] bg-transparent"
          : "bg-[#070812]"
      }`}
    >
      <div
        className={`absolute inset-0 -z-10 ${
          variant === "about"
            ? "bg-[radial-gradient(ellipse_at_78%_40%,rgba(93,56,255,0.1),transparent_45%),linear-gradient(110deg,rgba(5,6,16,0.12),transparent_75%)]"
            : variant === "careers"
              ? "bg-[radial-gradient(ellipse_at_76%_44%,rgba(8,127,255,0.13),transparent_46%),radial-gradient(ellipse_at_20%_86%,rgba(139,46,255,0.09),transparent_42%)]"
            : variant === "contact"
              ? "bg-[radial-gradient(ellipse_at_82%_55%,rgba(8,127,255,0.14),transparent_42%),radial-gradient(ellipse_at_45%_88%,rgba(139,46,255,0.09),transparent_42%)]"
              : variant === "services"
                ? "bg-[radial-gradient(ellipse_at_80%_48%,rgba(255,40,185,0.13),transparent_40%),linear-gradient(112deg,#070812_0%,#0c0d1b_54%,#101020_100%)]"
                : "bg-[radial-gradient(ellipse_at_83%_48%,rgba(8,127,255,0.18),transparent_42%),radial-gradient(ellipse_at_55%_85%,rgba(139,46,255,0.1),transparent_38%),linear-gradient(100deg,#070812,#101020)]"
        }`}
      />
      {variant === "about" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(5,6,16,0.84)_0%,rgba(5,6,16,0.66)_36%,rgba(5,6,16,0.12)_75%,rgba(5,6,16,0.03)_100%),linear-gradient(0deg,rgba(5,6,16,0.5),transparent_32%,rgba(5,6,16,0.1))]"
        />
      )}
      {(variant === "careers" || variant === "contact") && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(5,6,16,0.62)_0%,rgba(5,6,16,0.38)_42%,rgba(5,6,16,0.08)_82%),linear-gradient(0deg,rgba(5,6,16,0.34),transparent_34%)]"
        />
      )}
      {variant === "services" && (
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(173,191,232,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(173,191,232,0.07)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_78%_45%,black,transparent_68%)]" />
      )}
      <div
        className={`relative z-20 mx-auto grid w-full items-center gap-8 px-5 sm:px-8 ${
          fullPageBackdrop
            ? "min-h-[calc(100svh-82px)] max-w-[1320px] grid-cols-1 py-16 md:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] md:gap-10 md:py-20 lg:gap-16"
            : "min-h-[470px] max-w-[1320px] grid-cols-1 py-14 md:min-h-[520px] md:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)] md:gap-12 md:py-16 lg:gap-20"
        }`}
      >
        {copy}
        {artwork}
      </div>
      {fullPageBackdrop && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-7 right-7 z-20 hidden items-center gap-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[#c4c8df]/75 sm:flex"
        >
          <span>Scroll to travel</span>
          <span className="h-10 w-px bg-gradient-to-b from-[#9d8aff] to-transparent" />
        </div>
      )}
    </header>
  );
}
