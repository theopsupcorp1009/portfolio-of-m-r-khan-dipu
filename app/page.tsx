import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  FileDown,
  Terminal,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";
import {
  personalInfo,
  skillCategories,
} from "@/data/portfolio";

export default function HomePage() {
  const featuredProjects = projectsData.slice(0, 3); // Prioritize the 3 web development projects

  return (
    <div className="flex flex-col space-y-24 sm:space-y-32 pb-24">
      {/* 1. Immersive Hero Section with Power-Up Animation & Identity Reveal */}
      <HeroSection />

      {/* 2. Featured Projects Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeading
            tag="MISSION DIRECTIVES // 01"
            title="FEATURED"
            highlight="ENGINEERING PROJECTS"
            subtitle="Explore primary full-stack web applications and machine learning systems built with modern stacks."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#10151D] hover:bg-[#161D28] border border-[#FF2638]/30 hover:border-[#FF2638] text-xs font-mono font-bold uppercase tracking-wider text-[#F4F6FA] transition-all self-start md:self-auto shadow-[0_0_12px_rgba(255,38,56,0.15)]"
          >
            <span>VIEW ALL 5 PROJECTS</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF2638]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* 3. Skills Matrix Quick Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeading
            tag="ARSENAL // 02"
            title="TECHNICAL"
            highlight="CORE COMPETENCIES"
            subtitle="Verified skill set across Full-Stack Web Development, Data Science, and Machine Learning."
          />
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#10151D] hover:bg-[#161D28] border border-[#FF2638]/30 hover:border-[#FF2638] text-xs font-mono font-bold uppercase tracking-wider text-[#F4F6FA] transition-all self-start md:self-auto"
          >
            <span>EXPLORE ALL SKILLS</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF2638]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className={`p-6 rounded-xl bg-[#10151D] border transition-all ${
                cat.isPrimary
                  ? "border-[#FF2638]/50 shadow-[0_0_20px_rgba(255,38,56,0.2)]"
                  : "border-white/10 hover:border-[#FF2638]/30"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#FF2638]">
                  {cat.title}
                </span>
                {cat.isPrimary && (
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#FF2638]/20 text-[#FF2638] border border-[#FF2638]/30">
                    PRIMARY
                  </span>
                )}
              </div>
              <ul className="space-y-2">
                {cat.skills.slice(0, 5).map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2 text-xs font-mono text-[#F4F6FA]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF2638]" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Research & Academic Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0A0D13] border border-[#FF2638]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF2638]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#10151D] border border-[#FF2638]/40 text-[11px] font-mono text-[#FF2638] uppercase">
                <BrainCircuit className="w-3.5 h-3.5" />
                ACADEMIC & RESEARCH FOUNDATIONS
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-mono uppercase text-[#F4F6FA]">
                MSc &amp; BSc in Software Engineering,
                <br />
                <span className="text-[#FF2638]">Major in Data Science</span>
              </h3>
              <p className="text-sm text-[#A4ADBD] leading-relaxed">
                Graduate from Daffodil International University with MSc (CGPA 3.68/4.00, Thesis GPA 4.00) and BSc (CGPA 3.65/4.00, Thesis GPA 3.75). Two accepted/presented conference research papers in biomedical EEG seizure detection and gastrointestinal image modeling.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#FF2638]/20 hover:bg-[#FF2638] border border-[#FF2638]/50 text-xs font-mono font-bold uppercase text-white transition-all"
                >
                  <span>REVIEW PUBLICATIONS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/education"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#10151D] hover:bg-[#161D28] border border-white/10 text-xs font-mono uppercase text-[#A4ADBD] hover:text-white transition-all"
                >
                  <span>VIEW EDUCATION & THESES</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <div className="p-4 rounded-xl bg-[#10151D] border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#FF2638] font-bold">
                  CONFERENCE PAPER // ICoICI 2026
                </span>
                <p className="text-xs font-mono text-[#F4F6FA] font-semibold mt-1">
                  Lightweight 1D CNN Architecture for Detecting Epileptic Seizures
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#10151D] border border-white/10">
                <span className="text-[10px] font-mono uppercase text-[#FF6A36] font-bold">
                  IEEE CONFERENCE PAPER // ICCCNT 2025
                </span>
                <p className="text-xs font-mono text-[#F4F6FA] font-semibold mt-1">
                  CNN Approach for Gastrointestinal Disorders Prediction
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#10151D] border border-[#FF2638]/30 shadow-[0_0_12px_rgba(255,38,56,0.15)]">
                <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold">
                  MSc THESIS // GPA 4.00
                </span>
                <p className="text-xs font-mono text-[#F4F6FA] font-semibold mt-1">
                  Major Depressive Disorder Diagnostics Through Deep Learning of Physiological Signals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Direct Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="p-10 sm:p-12 rounded-2xl bg-gradient-to-b from-[#10151D] to-[#0A0D13] border-2 border-[#FF2638]/40 shadow-[0_0_40px_rgba(255,38,56,0.2)]">
          <Terminal className="w-8 h-8 text-[#FF2638] mx-auto mb-4 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-black font-mono uppercase text-[#F4F6FA] tracking-tight">
            INITIATE COLLABORATION
          </h2>
          <p className="mt-3 text-sm text-[#A4ADBD] max-w-xl mx-auto leading-relaxed">
            Interested in discussing full-stack web engineering roles, biomedical AI research opportunities, or technical project collaboration? Let&apos;s connect.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FF2638] hover:bg-[#FF2638]/90 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,38,56,0.5)] transition-all"
            >
              <span>CONNECT VIA CONTACT PAGE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={personalInfo.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              download="CV_of_M_R_Khan_Dipu.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#05070B] hover:bg-[#10151D] border border-[#FF2638]/50 hover:border-[#FF2638] text-[#F4F6FA] font-mono font-bold text-xs uppercase tracking-wider transition-all"
            >
              <FileDown className="w-4 h-4 text-[#FF2638]" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
