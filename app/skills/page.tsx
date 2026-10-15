"use client";

import { useState } from "react";
import {
  BrainCircuit,
  Wrench,
  Users,
  CheckCircle2,
  Cpu,
  Globe,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/data/portfolio";

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.categoryKey === selectedCategory);

  const filterTabs = [
    { label: "All Skills", value: "all" },
    { label: "Web Development (Primary)", value: "web" },
    { label: "Data Science & AI", value: "ai" },
    { label: "Tools & Platforms", value: "tools" },
    { label: "Professional Skills", value: "professional" },
  ];

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case "web":
        return <Globe className="w-5 h-5 text-[#FF2638]" />;
      case "ai":
        return <BrainCircuit className="w-5 h-5 text-[#FF6A36]" />;
      case "tools":
        return <Wrench className="w-5 h-5 text-cyan-400" />;
      case "professional":
        return <Users className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-[#FF2638]" />;
    }
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <SectionHeading
          tag="TECH ARSENAL // VERIFIED"
          title="CORE TECHNICAL"
          highlight="COMPETENCIES"
          subtitle="Documented technical abilities and core competencies extracted directly from CV. Prioritizing modern full-stack web engineering and biomedical AI modeling."
          center
        />

        {/* Note on integrity */}
        <p className="text-xs font-mono text-[#A4ADBD]/80 mt-2 bg-[#10151D] border border-white/5 py-2 px-4 rounded-lg inline-block">
          {"// Academic Integrity Notice: No arbitrary proficiency percentages or unsupported ratings."}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filterTabs.map((tab) => {
          const isActive = selectedCategory === tab.value;
          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => setSelectedCategory(tab.value)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2638] ${
                isActive
                  ? "bg-[#FF2638] text-white border-[#FF2638] shadow-[0_0_15px_rgba(255,38,56,0.4)]"
                  : "bg-[#10151D] text-[#A4ADBD] hover:text-[#F4F6FA] border-white/10 hover:border-[#FF2638]/40"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Skills Categories Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCategories.map((category) => (
          <div
            key={category.title}
            className={`p-6 sm:p-8 rounded-2xl bg-[#10151D] border transition-all ${
              category.isPrimary
                ? "border-[#FF2638]/60 shadow-[0_0_30px_rgba(255,38,56,0.2)]"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            {/* Category Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#0A0D13] border border-white/10">
                  {getCategoryIcon(category.categoryKey)}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-mono uppercase text-[#F4F6FA]">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#A4ADBD]">
                    {category.skills.length} documented competencies
                  </span>
                </div>
              </div>

              {category.isPrimary && (
                <span className="px-2.5 py-1 rounded bg-[#FF2638]/20 text-[#FF2638] border border-[#FF2638]/40 text-[10px] font-mono font-bold uppercase tracking-wider shadow-[0_0_8px_rgba(255,38,56,0.3)]">
                  PRIMARY FOCUS
                </span>
              )}
            </div>

            {/* Skills Pills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`p-3 rounded-lg flex items-center justify-between font-mono text-xs transition-all ${
                    category.isPrimary
                      ? "bg-[#0A0D13] border border-[#FF2638]/30 hover:border-[#FF2638] text-[#F4F6FA] hover:shadow-[0_0_10px_rgba(255,38,56,0.2)]"
                      : "bg-[#0A0D13] border border-white/5 hover:border-white/20 text-[#A4ADBD] hover:text-[#F4F6FA]"
                  }`}
                >
                  <span className="font-semibold">{skill.name}</span>
                  <CheckCircle2
                    className={`w-3.5 h-3.5 ${
                      category.isPrimary ? "text-[#FF2638]" : "text-emerald-400"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Explanatory context footer */}
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-[#A4ADBD]/70">
              {category.categoryKey === "web" && (
                <p>
                  Used in production full-stack web builds including Bazar Dor, Bangla News 24, and FitLog.
                </p>
              )}
              {category.categoryKey === "ai" && (
                <p>
                  Applied in biomedical research, EEG seizure detection publications, and neuroimaging classifiers.
                </p>
              )}
              {category.categoryKey === "tools" && (
                <p>
                  Version control workflows, cloud repositories, and professional documentation suites.
                </p>
              )}
              {category.categoryKey === "professional" && (
                <p>
                  Demonstrated in academic management at The DrAcademy and batch coordination at Udvash.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
