"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import { internshipTracks } from "../../data/careers";
import { InternshipApplicationForm } from "./CareerForms";

export default function InternshipInterestSection() {
  const [selectedTrack, setSelectedTrack] = useState<string>(internshipTracks[0].id);

  const selectTrack = (trackId: string) => {
    setSelectedTrack(trackId);
    document.getElementById("internship-application")?.scrollIntoView();
  };

  return (
    <section
      className="border-y border-white/10 bg-[radial-gradient(ellipse_at_82%_15%,rgba(8,127,255,0.12),transparent_40%),rgba(7,8,18,0.24)] py-20 md:py-28"
      id="internships"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="mb-10 grid gap-5 md:mb-14 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-12" data-reveal>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#78b7ff]">
              INTERNSHIP INTEREST AREAS
            </span>
            <h2 className="mb-0 mt-5 max-w-[690px] text-[clamp(38px,5vw,60px)] leading-[1.06] tracking-[-0.055em]">
              Learn by building.{" "}
              <span className="text-[#8995a6]">Grow by doing.</span>
            </h2>
          </div>
          <p className="mb-1 max-w-[480px] text-[16px] leading-[1.85] text-muted">
            Explore opportunities to develop your skills, work on practical
            assignments, and build a stronger foundation for your future career.
          </p>
        </div>

        <p className="mb-8 border-l-2 border-[#53d7ff]/70 bg-[#101020]/80 px-4 py-3 text-[14px] leading-[1.7] text-[#d9e1ef]">
          These are areas of interest, not confirmed vacancies. No openings,
          durations, or work arrangements are being advertised here.
        </p>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {internshipTracks.map((track, index) => (
            <article
              className="group flex min-h-[310px] flex-col border border-white/10 bg-[#101020]/90 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#53d7ff]/40 hover:shadow-[0_20px_60px_rgba(8,127,255,0.09)] sm:p-6"
              key={track.id}
              data-reveal
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.17em] text-[#8391a8]">
                  TRACK 0{index + 1}
                </span>
                <span className="grid size-9 place-items-center rounded-full border border-[#53d7ff]/20 bg-[#53d7ff]/[0.06] text-[#53d7ff] transition group-hover:border-[#53d7ff]/50">
                  <ArrowDown size={16} aria-hidden="true" />
                </span>
              </div>
              <h3 className="mb-3 text-[23px] leading-[1.25] tracking-[-0.035em]">
                {track.title}
              </h3>
              <p className="mb-5 text-[14px] leading-[1.75] text-muted">
                {track.description}
              </p>
              <div className="mb-4">
                <h4 className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#78b7ff]">
                  Skills to explore
                </h4>
                <p className="m-0 text-[13px] leading-[1.7] text-[#c5cede]">
                  {track.skills}
                </p>
              </div>
              <div className="mb-6">
                <h4 className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#78b7ff]">
                  A good fit for
                </h4>
                <p className="m-0 text-[13px] leading-[1.7] text-[#c5cede]">
                  {track.candidateProfile}
                </p>
              </div>
              <button
                className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 border-b border-[#53d7ff]/50 text-[13px] font-semibold text-white transition hover:border-[#53d7ff] hover:text-[#9ce7ff]"
                onClick={() => selectTrack(track.id)}
                type="button"
              >
                Apply now <ArrowRight size={16} aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12" id="internship-application">
          <div className="lg:sticky lg:top-28 lg:self-start" data-reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#78b7ff]">
              SHARE YOUR INTEREST
            </span>
            <h3 className="mb-4 mt-4 text-[clamp(30px,4vw,46px)] leading-[1.08] tracking-[-0.05em]">
              Introduce yourself.
            </h3>
            <p className="mb-0 text-[15px] leading-[1.8] text-muted">
              Tell us what you are learning and where you would like to grow.
              We will review your enquiry and contact you if a relevant next
              step is available.
            </p>
          </div>
          <InternshipApplicationForm defaultTrack={selectedTrack} />
        </div>
      </div>
    </section>
  );
}
