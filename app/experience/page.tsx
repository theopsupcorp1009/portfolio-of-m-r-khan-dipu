import { Metadata } from "next";
import {
  Calendar,
  Building2,
  CheckCircle2,
  Terminal,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experience & Career History",
  description:
    "Professional work history and research appointments of M R Khan Dipu, including The DrAcademy, Udvash, and Group of Bio-Photomatix.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* 1. Page Header */}
      <div className="max-w-3xl">
        <SectionHeading
          tag="CAREER TRAJECTORY // VERIFIED"
          title="PROFESSIONAL &"
          highlight="RESEARCH HISTORY"
          subtitle="Documented professional employment and independent biomedical research roles. Clearly distinguished between commercial employment and academic research."
        />
      </div>

      {/* 2. Experience Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-[#FF2638]/40 space-y-12">
        {experiences.map((exp, index) => {
          const isResearch = exp.type === "research";

          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#10151D] border-2 flex items-center justify-center transition-all ${
                  isResearch
                    ? "border-[#FF6A36] shadow-[0_0_12px_#FF6A36]"
                    : "border-[#FF2638] shadow-[0_0_12px_#FF2638]"
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    isResearch ? "bg-[#FF6A36]" : "bg-[#FF2638]"
                  }`}
                />
              </div>

              {/* Card Container */}
              <div
                className={`p-6 sm:p-8 rounded-2xl bg-[#10151D] border transition-all duration-300 ${
                  isResearch
                    ? "border-[#FF6A36]/40 shadow-[0_0_25px_rgba(255,106,54,0.15)] hover:border-[#FF6A36]"
                    : "border-white/10 hover:border-[#FF2638]/60 shadow-[0_0_25px_rgba(0,0,0,0.5)]"
                }`}
              >
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-white/10 gap-2 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${
                          isResearch
                            ? "bg-[#FF6A36]/20 text-[#FF6A36] border-[#FF6A36]/40"
                            : "bg-[#FF2638]/15 text-[#FF2638] border-[#FF2638]/30"
                        }`}
                      >
                        {isResearch
                          ? "INDEPENDENT & UNPAID RESEARCH"
                          : "COMMERCIAL EMPLOYMENT"}
                      </span>
                      <span className="text-[10px] font-mono text-[#A4ADBD]">
                        {"// RECORD #"}{index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-mono text-[#F4F6FA] uppercase">
                      {exp.role}
                    </h3>

                    <p className="text-sm font-mono font-semibold text-[#FF2638] mt-0.5 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-[#FF2638]" />
                      <span>{exp.organization}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#A4ADBD] bg-[#0A0D13] px-3 py-1.5 rounded border border-white/5 shrink-0 self-start md:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-[#FF2638]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Subtitle / Description if present */}
                {exp.description && (
                  <p className="text-xs sm:text-sm font-mono text-[#A4ADBD] italic mb-4 bg-[#0A0D13] p-3 rounded-lg border border-white/5">
                    {exp.description}
                  </p>
                )}

                {/* Documented Responsibilities */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#F4F6FA] font-bold block">
                    Documented Responsibilities &amp; Contributions:
                  </span>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-[#A4ADBD] flex items-start gap-3"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isResearch ? "text-[#FF6A36]" : "text-[#FF2638]"
                          }`}
                        />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Role Status or Notes */}
                {exp.notes && (
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[#A4ADBD]/70">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FF2638]" />
                    <span>Note: {exp.notes}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Academic Integrity Notice */}
      <div className="p-6 rounded-xl bg-[#0A0D13] border border-white/10 text-xs font-mono text-[#A4ADBD] space-y-2">
        <div className="flex items-center gap-2 text-[#FF2638] font-bold uppercase">
          <Terminal className="w-4 h-4" />
          <span>Factual Transparency Statement</span>
        </div>
        <p className="leading-relaxed">
          In strict compliance with academic and professional ethical standards, no positions are marked as ongoing/current, and unpaid independent research is explicitly demarcated from commercial employment. All responsibilities reflect the authentic text of M R Khan Dipu&apos;s CV.
        </p>
      </div>
    </div>
  );
}
