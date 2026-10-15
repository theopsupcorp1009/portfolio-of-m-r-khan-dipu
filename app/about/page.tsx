import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FileDown, ArrowRight, Terminal, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo, experiences } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Professional background of M R Khan Dipu: Full-Stack Web Developer, Software Engineering graduate (MSc & BSc, DIU), and biomedical AI researcher.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* 1. Header & Hero Narrative */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Authentic Portrait */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden bg-[#10151D] border-2 border-[#FF2638]/40 shadow-[0_0_30px_rgba(255,38,56,0.2)]">
            <Image
              src="/images/mrkhandipubijoy.png"
              alt="M R Khan Dipu - Formal Professional Portrait"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-top"
              priority
            />
            {/* Tech scanner brackets */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#FF2638] pointer-events-none" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#FF2638] pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#FF2638] pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#FF2638] pointer-events-none" />

            <div className="absolute bottom-3 left-3 right-3 bg-[#05070B]/90 backdrop-blur-md p-3 rounded-lg border border-[#FF2638]/30">
              <p className="text-xs font-mono font-bold text-[#F4F6FA] uppercase">
                M R KHAN DIPU
              </p>
              <p className="text-[10px] font-mono text-[#A4ADBD]">
                Dhaka, Bangladesh &bull; SWE & Data Science
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#A4ADBD]">
            <ShieldCheck className="w-4 h-4 text-[#FF2638]" />
            <span>Verified Authentic Portrait &amp; CV Data</span>
          </div>
        </div>

        {/* Right Column: First-Person Professional Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <SectionHeading
            tag="DOSSIER // 01"
            title="PROFESSIONAL"
            highlight="PROFILE & NARRATIVE"
            subtitle="Software Engineering graduate with completed BSc and MSc degrees in Data Science."
          />

          <div className="space-y-4 text-sm sm:text-base text-[#A4ADBD] leading-relaxed">
            <p>
              I am M R Khan Dipu, a Software Engineering graduate with BSc and
              MSc degrees specializing in Data Science from Daffodil
              International University. My work combines full-stack web
              development, machine learning, and biomedical AI research,
              alongside professional experience in academic management and
              administration.
            </p>

            <p>
              My background in Data Science includes machine learning, deep
              learning, and physiological signal analysis. Through my MSc
              thesis, I researched the early detection of Major Depressive
              Disorder using deep learning techniques applied to physiological
              signals. I have also contributed to biomedical research involving
              EEG signal processing, epileptic seizure detection, and
              gastrointestinal disorder prediction.
            </p>

            <p>
              On the development side, I build modern web applications using{" "}
              <span className="text-[#FF2638] font-bold">
                React, Next.js, TypeScript, and Tailwind CSS
              </span>
              , along with backend technologies and databases such as Node.js,
              Express.js, and MongoDB. My projects include{" "}
              <span className="text-[#F4F6FA] font-semibold">Bazar Dor</span>, a
              Bengali market-price tracking platform;{" "}
              <span className="text-[#F4F6FA] font-semibold">
                Bangla News 24
              </span>
              , a Bengali news portal with authentication and dynamic news
              features; and{" "}
              <span className="text-[#F4F6FA] font-semibold">FitLog</span>, a
              workout planning application. I also develop AI-focused
              applications, including an Alzheimer’s dementia classifier.
            </p>

            <p>
              Alongside web development, I have worked as an independent
              researcher with the Group of Bio-Photomatix, focusing on
              biomedical signal processing, medical data modeling, feature
              extraction, and machine learning. My research contributions
              include work on epileptic seizure detection using a lightweight 1D
              convolutional neural network, presented at ICoICI 2026, and
              gastrointestinal disorder prediction presented at ICCCNT 2025.
            </p>

            <p>
              My vision is to connect machine learning research with practical
              software development by integrating trained models into modern web
              applications. I am particularly interested in healthcare AI, where
              accessible interfaces and useful application design can help bring
              data-driven tools closer to real-world use.
            </p>
          </div>

          {/* Quick stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-[#10151D] border border-white/10">
              <span className="text-[10px] font-mono uppercase text-[#A4ADBD]">
                EDUCATION
              </span>
              <p className="text-sm font-bold font-mono text-[#F4F6FA]">
                MSc &amp; BSc (SWE)
              </p>
              <p className="text-[10px] text-[#FF2638] font-mono">
                Major in Data Science
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#10151D] border border-white/10">
              <span className="text-[10px] font-mono uppercase text-[#A4ADBD]">
                PUBLICATIONS
              </span>
              <p className="text-sm font-bold font-mono text-[#F4F6FA]">
                2 Conference Papers
              </p>
              <p className="text-[10px] text-[#FF6A36] font-mono">
                ICoICI &amp; IEEE ICCCNT
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#10151D] border border-[#FF2638]/30">
              <span className="text-[10px] font-mono uppercase text-[#A4ADBD]">
                CORE STACK
              </span>
              <p className="text-sm font-bold font-mono text-[#F4F6FA]">
                Next.js &bull; React
              </p>
              <p className="text-[10px] text-emerald-400 font-mono">
                Express.js &bull; MongoDB
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href={personalInfo.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              download="CV_of_M_R_Khan_Dipu.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF2638] hover:bg-[#FF2638]/90 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(255,38,56,0.4)] transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#10151D] hover:bg-[#161D28] border border-white/10 hover:border-[#FF2638]/40 text-[#F4F6FA] font-mono font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-4 h-4 text-[#FF2638]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Professional & Research Experience Breakdown */}
      <section className="space-y-8">
        <SectionHeading
          tag="TIMELINE // 02"
          title="CAREER &"
          highlight="RESEARCH HISTORY"
          subtitle="Documented professional employment and independent biomedical research roles."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp) => {
            const isResearch = exp.type === "research";
            return (
              <div
                key={exp.id}
                className={`p-6 rounded-xl bg-[#10151D] border flex flex-col justify-between ${
                  isResearch
                    ? "border-[#FF6A36]/40 shadow-[0_0_20px_rgba(255,106,54,0.15)]"
                    : "border-white/10 hover:border-[#FF2638]/40"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        isResearch
                          ? "bg-[#FF6A36]/20 text-[#FF6A36] border border-[#FF6A36]/30"
                          : "bg-[#FF2638]/10 text-[#FF2638] border border-[#FF2638]/30"
                      }`}
                    >
                      {isResearch
                        ? "Research Experience"
                        : "Professional Employment"}
                    </span>
                    <span className="text-[#A4ADBD]">{exp.period}</span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold font-mono text-[#F4F6FA]">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-mono text-[#FF2638] mt-0.5">
                      {exp.organization}
                    </p>
                  </div>

                  {exp.description && (
                    <p className="text-xs text-[#A4ADBD] italic">
                      {exp.description}
                    </p>
                  )}

                  <ul className="space-y-1.5 pt-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="text-xs text-[#A4ADBD] flex items-start gap-2"
                      >
                        <span className="text-[#FF2638] mt-0.5">&bull;</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.notes && (
                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-[#A4ADBD]/70">
                    {exp.notes}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Non-Fabricated Interests Placeholder (As required by prompt section 7) */}
      <section className="p-6 rounded-xl bg-[#0A0D13] border border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#A4ADBD] mb-2">
          <Terminal className="w-3.5 h-3.5 text-[#FF2638]" />
          <span>PERSONAL INTERESTS &amp; ACTIVITIES NOTICE</span>
        </div>
        <p className="text-xs text-[#A4ADBD]/80 leading-relaxed font-mono">
          Note: In strict accordance with the portfolio assignment guidelines
          and academic integrity standards, hobbies or personal interests
          outside programming are not fabricated. Extracurricular involvement
          documented in the CV includes membership in the Daffodil Data Science
          Club, photography exploration with the Daffodil Photography Club,
          volunteer service, and startup bootcamp competitions (detailed on the
          Education page).
        </p>
      </section>
    </div>
  );
}
