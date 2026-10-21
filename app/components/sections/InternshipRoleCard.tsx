import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { InternshipOpening } from "../../data/internships";

type InternshipRoleCardProps = {
  opening: InternshipOpening;
};

export default function InternshipRoleCard({ opening }: InternshipRoleCardProps) {
  return (
    <article className="border border-white/10 bg-white/[0.025] p-5">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aeb7c7]">INTERNSHIP</span>
      <h3 className="mb-2 mt-3 text-[21px] tracking-[-0.03em]">{opening.title}</h3>
      <p className="text-[13px] leading-[1.8] text-muted">{opening.overview}</p>
      <Link className="mt-4 inline-flex items-center gap-2 text-[12px] text-[#d5e8ff]" href="/contact">
        Ask about this opportunity <ArrowUpRight size={17} />
      </Link>
    </article>
  );
}
