"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilters from "@/components/ProjectFilters";
import SectionHeading from "@/components/SectionHeading";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const counts = {
    all: projectsData.length,
    web: projectsData.filter((p) => p.category === "Web Development").length,
    ai: projectsData.filter((p) => p.category === "AI & Machine Learning").length,
    others: projectsData.filter((p) => p.category === "Others").length,
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <SectionHeading
          tag="ENGINEERING REPERTORY // 05"
          title="DOCUMENTED"
          highlight="SOFTWARE PROJECTS"
          subtitle="Explore five genuine software builds spanning full-stack web applications and AI inferencing platforms. Prioritizing modern responsive web engineering."
          center
        />
      </div>

      {/* Interactive Category Filter Tabs */}
      <ProjectFilters
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        counts={counts}
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Footer Context / GitHub Organization Link */}
      <div className="mt-16 p-6 rounded-xl bg-[#0A0D13] border border-white/10 text-center font-mono text-xs text-[#A4ADBD]">
        Looking for repositories and continuous deployment pipelines? View our project organization on{" "}
        <a
          href="https://github.com/theopsupcorp1009"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF2638] underline hover:text-white transition-colors"
        >
          GitHub (@theopsupcorp1009)
        </a>
        .
      </div>
    </div>
  );
}
