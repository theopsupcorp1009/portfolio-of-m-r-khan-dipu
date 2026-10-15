import Link from "next/link";
import { FileDown, ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import PowerUpReveal from "@/components/PowerUpReveal";

export default function HeroSection() {
  const techBadges = [
    { name: "Next.js", highlight: true },
    { name: "React", highlight: true },
    { name: "JavaScript", highlight: false },
    { name: "TypeScript", highlight: true },
    { name: "Tailwind CSS", highlight: true },
    { name: "MongoDB", highlight: false },
    { name: "Python", highlight: false },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Professional Introduction */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Status Chip */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#10151D] border border-[#FF2638]/40 shadow-[0_0_15px_rgba(255,38,56,0.15)] text-xs font-mono text-[#F4F6FA]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2638] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF2638]" />
            </span>
            <span className="tracking-widest uppercase text-[11px] text-[#A4ADBD]">
              CORE STATUS:
            </span>
            <span className="text-[#FF2638] font-bold">READY FOR HIRE & RESEARCH</span>
          </div>

          {/* Name & Titles */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-mono tracking-tight text-[#F4F6FA] uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-xs sm:text-sm md:text-base font-mono font-bold tracking-widest text-[#FF2638] uppercase text-glow-red">
              {personalInfo.headlineTitle}
            </p>
          </div>

          {/* Main Headline */}
          <div className="relative pl-4 border-l-2 border-[#FF2638] my-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-mono uppercase tracking-wide text-[#F4F6FA] leading-tight">
              &ldquo;BUILDING DIGITAL EXPERIENCES.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2638] via-[#FF6A36] to-white">
                ENGINEERING INTELLIGENT SOLUTIONS.&rdquo;
              </span>
            </h2>
          </div>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-[#A4ADBD] max-w-xl leading-relaxed">
            {personalInfo.supportingText}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap gap-4 w-full sm:w-auto">
            {/* Primary Button */}
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white bg-[#FF2638] hover:bg-[#FF2638]/90 rounded-lg shadow-[0_0_20px_rgba(255,38,56,0.4)] hover:shadow-[0_0_30px_rgba(255,38,56,0.7)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2638]"
            >
              <span>EXPLORE MY PROJECTS</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary Button */}
            <a
              href={personalInfo.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              download="CV_of_M_R_Khan_Dipu.pdf"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#F4F6FA] bg-[#10151D] hover:bg-[#161D28] border border-[#FF2638]/40 hover:border-[#FF2638] rounded-lg shadow-[0_0_15px_rgba(255,38,56,0.15)] hover:shadow-[0_0_20px_rgba(255,38,56,0.3)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2638]"
            >
              <FileDown className="w-4 h-4 text-[#FF2638] group-hover:scale-110 transition-transform" />
              <span>DOWNLOAD MY RESUME</span>
            </a>
          </div>

          {/* Compact Tech Badges */}
          <div className="pt-4 space-y-2 w-full">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A4ADBD] block">
              {"// PRIMARY TECH MATRIX:"}
            </span>
            <div className="flex flex-wrap gap-2">
              {techBadges.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1 text-xs font-mono rounded border transition-all ${
                    tech.highlight
                      ? "bg-[#10151D] text-[#F4F6FA] border-[#FF2638]/50 shadow-[0_0_10px_rgba(255,38,56,0.2)] font-semibold"
                      : "bg-[#0A0D13] text-[#A4ADBD] border-white/10"
                  }`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Superhero Artwork & Power-Up Component */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <PowerUpReveal />
        </div>
      </div>
    </section>
  );
}
