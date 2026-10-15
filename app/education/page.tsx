import { Metadata } from "next";
import {
  Award,
  Calendar,
  CheckCircle,
  UserCheck,
  Mail,
  Phone,
  BookmarkCheck,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import {
  educationList,
  certifications,
  relevantCoursework,
  extracurricularActivities,
  awards,
  academicReferences,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Education & Academic Credentials",
  description:
    "MSc and BSc in Software Engineering (Major in Data Science) from Daffodil International University, theses, certifications, and academic references.",
};

export default function EducationPage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* 1. Header */}
      <SectionHeading
        tag="ACADEMIA // TIMELINE"
        title="ACADEMIC"
        highlight="CREDENTIALS"
        subtitle="Formal academic degrees from Daffodil International University, specialized in Software Engineering and Data Science."
      />

      {/* 2. Degrees Timeline */}
      <section className="space-y-8">
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#FF2638]/40 space-y-12">
          {educationList.map((edu, idx) => (
            <div key={edu.degree} className="relative group">
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#10151D] border-2 border-[#FF2638] flex items-center justify-center shadow-[0_0_12px_#FF2638]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF2638]" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#10151D] border border-white/10 group-hover:border-[#FF2638]/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10 mb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF2638] font-bold">
                      {idx === 0 ? "POSTGRADUATE DEGREE" : "UNDERGRADUATE DEGREE"}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-mono text-[#F4F6FA] uppercase mt-0.5">
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A4ADBD] bg-[#0A0D13] px-3 py-1.5 rounded border border-white/5 shrink-0 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-[#FF2638]" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Institution & GPA Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-[#0A0D13] border border-white/5">
                    <span className="text-[10px] font-mono text-[#A4ADBD] block">
                      INSTITUTION
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#F4F6FA]">
                      {edu.institution}
                    </span>
                    <span className="text-[10px] font-mono text-[#A4ADBD]/70 block">
                      {edu.location}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0A0D13] border border-white/5">
                    <span className="text-[10px] font-mono text-[#A4ADBD] block">
                      CUMULATIVE GPA
                    </span>
                    <span className="text-base font-mono font-bold text-[#FF2638]">
                      {edu.cgpa}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0A0D13] border border-[#FF2638]/30 shadow-[0_0_10px_rgba(255,38,56,0.15)]">
                    <span className="text-[10px] font-mono text-[#A4ADBD] block">
                      THESIS GRADE
                    </span>
                    <span className="text-base font-mono font-bold text-emerald-400">
                      GPA: {edu.thesisGpa} / 4.00
                    </span>
                  </div>
                </div>

                {/* Thesis Research Box */}
                <div className="p-4 rounded-xl bg-[#05070B] border border-[#FF2638]/20">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF2638] font-bold flex items-center gap-1.5 mb-1.5">
                    <BookmarkCheck className="w-4 h-4" />
                    ACADEMIC THESIS RESEARCH:
                  </span>
                  <p className="text-xs sm:text-sm text-[#F4F6FA] font-mono leading-relaxed">
                    &ldquo;{edu.thesisTitle}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Certifications Grid */}
      <section className="space-y-6">
        <SectionHeading
          tag="VALIDATION // CERTIFICATES"
          title="PROFESSIONAL"
          highlight="CERTIFICATIONS"
          subtitle="Accredited training programs across analytics, web technologies, and software tools."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="p-6 rounded-xl bg-[#10151D] border border-white/10 hover:border-[#FF2638]/40 transition-all flex flex-col justify-between shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF2638] bg-[#FF2638]/10 px-2 py-0.5 rounded border border-[#FF2638]/20">
                    CERTIFIED
                  </span>
                  <Award className="w-4 h-4 text-[#FF2638]" />
                </div>
                <div>
                  <h4 className="text-base font-bold font-mono text-[#F4F6FA]">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-mono text-[#A4ADBD] mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-xs font-mono text-[#A4ADBD]">
                <span className="text-[#FF2638]">Skills:</span> {cert.skillsCovered}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Relevant Coursework */}
      <section className="space-y-6">
        <SectionHeading
          tag="CURRICULUM // MASTERY"
          title="RELEVANT"
          highlight="COURSEWORK"
          subtitle="Core subjects undertaken during Software Engineering and Data Science studies at DIU."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {relevantCoursework.map((course) => (
            <div
              key={course}
              className="p-3.5 rounded-lg bg-[#10151D] border border-white/5 hover:border-[#FF2638]/30 flex items-center gap-3 font-mono text-xs text-[#F4F6FA] transition-all"
            >
              <CheckCircle className="w-4 h-4 text-[#FF2638] shrink-0" />
              <span>{course}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Extracurricular Activities & Awards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Extracurriculars */}
        <div className="lg:col-span-8 space-y-6">
          <SectionHeading
            tag="COMMUNITY & LEADERSHIP"
            title="EXTRACURRICULAR"
            highlight="ACTIVITIES"
            subtitle="Campus leadership, competitions, and voluntary service."
          />
          <div className="space-y-2.5">
            {extracurricularActivities.map((act, i) => (
              <div
                key={i}
                className="p-3.5 rounded-lg bg-[#10151D] border border-white/5 flex items-start justify-between gap-4 text-xs font-mono text-[#A4ADBD]"
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-[#FF2638] font-bold mt-0.5">&bull;</span>
                  <span className="text-[#F4F6FA]">{act.text}</span>
                </div>
                {act.year && (
                  <span className="text-[10px] text-[#FF2638] bg-[#0A0D13] px-2 py-0.5 rounded border border-[#FF2638]/20 shrink-0">
                    {act.year}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="lg:col-span-4 space-y-6">
          <SectionHeading
            tag="HONORS // RECOGNITION"
            title="AWARDS &amp;"
            highlight="HONORS"
          />
          <div className="space-y-4">
            {awards.map((award) => (
              <div
                key={award.title}
                className="p-5 rounded-xl bg-[#10151D] border border-[#FF2638]/30 shadow-[0_0_15px_rgba(255,38,56,0.15)]"
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[#FF2638] font-bold">MERIT RECOGNITION</span>
                  <span className="text-[#A4ADBD]">{award.year}</span>
                </div>
                <h4 className="text-base font-bold font-mono text-[#F4F6FA]">
                  {award.title}
                </h4>
                <p className="text-xs text-[#A4ADBD] mt-1 leading-relaxed">
                  {award.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Academic References */}
      <section className="space-y-6">
        <SectionHeading
          tag="AUTHENTICATION // ENDORSEMENTS"
          title="ACADEMIC"
          highlight="REFERENCES"
          subtitle="Department of Software Engineering faculty references from Daffodil International University."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {academicReferences.map((ref) => (
            <div
              key={ref.name}
              className="p-6 rounded-xl bg-[#10151D] border border-white/10 hover:border-[#FF2638]/40 transition-all space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF2638]">
                <UserCheck className="w-4 h-4" />
                <span>FACULTY REFERENCE</span>
              </div>
              <div>
                <h4 className="text-lg font-bold font-mono text-[#F4F6FA]">
                  {ref.name}
                </h4>
                <p className="text-xs font-mono text-[#A4ADBD] mt-0.5">
                  {ref.role}
                </p>
                <p className="text-xs text-[#A4ADBD]/70">
                  {ref.institution}
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 space-y-1.5 text-xs font-mono">
                <a
                  href={`mailto:${ref.email}`}
                  className="flex items-center gap-2 text-[#A4ADBD] hover:text-[#FF2638] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF2638]" />
                  <span>{ref.email}</span>
                </a>
                <a
                  href={`tel:${ref.phone}`}
                  className="flex items-center gap-2 text-[#A4ADBD] hover:text-[#FF2638] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF2638]" />
                  <span>{ref.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
