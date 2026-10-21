import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { InternshipOpening } from "../../data/internships";

type InternshipRoleCardProps = {
  opening: InternshipOpening;
};

export default function InternshipRoleCard({ opening }: InternshipRoleCardProps) {
  return (
    <article className="border border-white/10 bg-white/[0.025] p-5">
      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#78b7ff]">INTERNSHIP</span>
      <h3 className="mb-2 mt-3 text-[23px] leading-[1.25] tracking-[-0.03em]">{opening.title}</h3>
      <p className="text-[15px] leading-[1.8] text-muted">{opening.overview}</p>
      <Link className="mt-4 inline-flex items-center gap-2 text-[14px] text-[#b9d8fb] transition-colors hover:text-white" href="/contact">
        Ask about this opportunity <ArrowUpRight size={17} />
      </Link>
    </article>
  );
}
