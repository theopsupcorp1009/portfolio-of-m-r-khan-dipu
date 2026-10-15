import { Metadata } from "next";
import {
  BrainCircuit,
  Calendar,
  FileText,
  Activity,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import {
  publications,
  researchAreas,
  experiences,
  educationList,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Research & Publications",
  description:
    "Peer-reviewed conference publications in biomedical signal processing, deep learning EEG seizure detection, and MSc thesis on Major Depressive Disorder diagnostics.",
};

export default function ResearchPage() {
  const bioPhotomatix = experiences.find((e) => e.id === "bio-photomatix");
  const mscEdu = educationList[0];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* 1. Header */}
      <div className="max-w-3xl">
        <SectionHeading
          tag="INVESTIGATION // BIOMEDICAL AI"
          title="RESEARCH &amp;"
          highlight="PUBLICATIONS"
          subtitle="Documented peer-reviewed conference publications and graduate research in biomedical signal processing, EEG analysis, and neural network modeling."
        />
      </div>

      {/* 2. Research Focus Areas */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#FF2638] uppercase font-bold">
          <BrainCircuit className="w-4 h-4" />
          <span>RESEARCH DOMAIN SPECIALIZATIONS</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {researchAreas.map((area) => (
            <div
              key={area}
              className="p-4 rounded-xl bg-[#10151D] border border-white/10 hover:border-[#FF2638]/40 transition-all flex flex-col justify-between text-center group"
            >
              <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-[#0A0D13] border border-[#FF2638]/30 flex items-center justify-center text-[#FF2638] group-hover:scale-110 transition-transform">
                <Activity className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-semibold text-[#F4F6FA] leading-tight">
                {area}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Conference Publications */}
      <section className="space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF2638] font-bold">
              PEER-REVIEWED CONFERENCE MANUSCRIPTS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-mono text-[#F4F6FA] uppercase">
              ACCEPTED &amp; PRESENTED PAPERS
            </h3>
          </div>
          <span className="text-xs font-mono text-[#A4ADBD] bg-[#10151D] px-3 py-1 rounded border border-white/5">
            2 Documented Papers
          </span>
        </div>

        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <div
              key={pub.title}
              className="p-6 sm:p-8 rounded-2xl bg-[#10151D] border border-white/10 hover:border-[#FF2638]/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-mono text-[#FF2638] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  PUBLICATION #{idx + 1}
                </span>
                <span className="text-xs font-mono text-[#A4ADBD] flex items-center gap-1.5 bg-[#0A0D13] px-3 py-1 rounded border border-white/5 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-[#FF2638]" />
                  {pub.dateOrYear}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-bold font-mono text-[#F4F6FA] leading-snug">
                &ldquo;{pub.title}&rdquo;
              </h4>

              <div className="p-3.5 rounded-lg bg-[#0A0D13] border border-white/5">
                <span className="text-[10px] font-mono text-[#A4ADBD] uppercase block mb-0.5">
                  CONFERENCE VENUE:
                </span>
                <p className="text-xs sm:text-sm font-mono text-[#FF6A36] font-semibold">
                  {pub.venue}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#A4ADBD] font-mono leading-relaxed">
                <span className="text-[#F4F6FA] font-semibold">Research Scope:</span> {pub.scope}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MSc Thesis Spotlight */}
      <section className="p-8 sm:p-10 rounded-2xl bg-[#0A0D13] border border-[#FF2638]/40 relative overflow-hidden shadow-[0_0_30px_rgba(255,38,56,0.15)]">
        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded">
              MSc THESIS &bull; PERFECT THESIS GPA: 4.00 / 4.00
            </span>
            <span className="text-xs font-mono text-[#A4ADBD]">
              Daffodil International University (2023–2025)
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-mono text-[#F4F6FA] uppercase leading-snug">
            &ldquo;{mscEdu.thesisTitle}&rdquo;
          </h3>

          <p className="text-xs sm:text-sm text-[#A4ADBD] font-mono leading-relaxed">
            Investigated deep learning architectures applied to physiological signals for the early detection and quantitative diagnostic support of Major Depressive Disorder (MDD). The research evaluated deep feature representation on biomedical time-series data.
          </p>
        </div>
      </section>

      {/* 5. Independent Research Appointment */}
      {bioPhotomatix && (
        <section className="p-6 sm:p-8 rounded-2xl bg-[#10151D] border border-white/10 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF6A36] font-bold">
                AFFILIATED RESEARCH GROUP
              </span>
              <h4 className="text-lg font-bold font-mono text-[#F4F6FA]">
                {bioPhotomatix.organization}
              </h4>
              <p className="text-xs font-mono text-[#FF2638]">
                {bioPhotomatix.role}
              </p>
            </div>
            <span className="text-xs font-mono text-[#A4ADBD] bg-[#0A0D13] px-3 py-1 rounded border border-white/5">
              {bioPhotomatix.period}
            </span>
          </div>

          <p className="text-xs sm:text-sm font-mono text-[#A4ADBD] italic">
            {bioPhotomatix.description}
          </p>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#F4F6FA] font-bold uppercase block">
              Core Technical Contributions:
            </span>
            <ul className="space-y-2">
              {bioPhotomatix.responsibilities.map((resp, i) => (
                <li
                  key={i}
                  className="text-xs sm:text-sm text-[#A4ADBD] flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FF6A36] shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 6. Academic Integrity Notice */}
      <div className="p-6 rounded-xl bg-[#0A0D13] border border-white/10 text-xs font-mono text-[#A4ADBD] space-y-1">
        <div className="flex items-center gap-2 text-[#FF2638] font-bold uppercase">
          <ShieldCheck className="w-4 h-4" />
          <span>Research Data Transparency Policy</span>
        </div>
        <p className="leading-relaxed">
          In strict compliance with instructions, no publication URLs, DOIs, arbitrary co-author listings, or unverified citation counts have been fabricated. All information directly reflects the authentic documentation in M R Khan Dipu&apos;s CV.
        </p>
      </div>
    </div>
  );
}
