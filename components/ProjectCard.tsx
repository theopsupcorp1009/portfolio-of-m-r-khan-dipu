
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const previewUrls: Record<string, string> = {
  "bazar-dor": "https://bazar-dor-puce.vercel.app/",
  "bangla-news-24": "https://bangla-news-24-woad.vercel.app/",
  fitlog: "https://fit-log-pink-seven.vercel.app/",
  "alzheimer-dementia-classifier":
    "https://alzheimer-dimentia-classifier-app-dbbudbgwneodzvmhusvl8o.streamlit.app/",
  "quantum-circuit-explorer":
    "https://quantum-circuit-explorer-hhjif38rxyvkvsm7vljm4z.streamlit.app/",
};

const previewImages: Record<string, string> = {
  "alzheimer-dementia-classifier": "/images/alzheimer.png",
  "quantum-circuit-explorer": "/images/quantum.png",
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const isWeb = project.category === "Web Development";
  const liveUrl = previewUrls[project.slug] ?? project.liveUrl;
  const previewImage = previewImages[project.slug];

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-xl border bg-[#10151D] transition-all duration-300 ${
        isWeb
          ? "border-[#FF2638]/40 hover:border-[#FF2638] hover:shadow-[0_0_30px_rgba(255,38,56,0.3)]"
          : "border-white/10 hover:border-[#FF6A36]/50 hover:shadow-[0_0_25px_rgba(255,106,54,0.2)]"
      }`}
    >
      {/* Website preview */}
      <div className="relative h-64 w-full overflow-hidden border-b border-[#FF2638]/15 sm:h-72 lg:h-80">
        <div className="group/preview flex h-full w-full flex-col overflow-hidden bg-[#05070B]">
          {/* Browser toolbar */}
          <div className="relative z-20 flex shrink-0 items-center justify-between border-b border-white/10 bg-[#10151D] px-3 py-2">
            <div className="flex shrink-0 items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#FF2638]" />
              <span className="h-2 w-2 rounded-full bg-yellow-500" />
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            </div>

            <div className="mx-3 max-w-[65%] flex-1 truncate rounded border border-white/5 bg-[#0A0D13] px-2 py-1 text-center font-mono text-[9px] text-[#A4ADBD]">
              {liveUrl
                ? new URL(liveUrl).hostname
                : "preview-unavailable"}
            </div>

            <span className="flex shrink-0 items-center gap-1 font-mono text-[9px] text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              {previewImage ? "APP" : "LIVE"}
            </span>
          </div>

          {/* Streamlit screenshot preview */}
          {previewImage ? (
            <div className="relative min-h-0 flex-1 overflow-hidden bg-[#0A0D13]">
              <Image
                src={previewImage}
                alt={`${project.title} application preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-top"
              />

              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live app`}
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 transition-colors hover:bg-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF2638]"
              >
                <span className="translate-y-2 rounded-md border border-white/20 bg-[#10151D]/95 px-4 py-2 font-mono text-xs font-bold text-white opacity-0 shadow-xl transition-all group-hover/preview:translate-y-0 group-hover/preview:opacity-100">
                  OPEN LIVE APP ↗
                </span>
              </a>
            </div>
          ) : (
            /* Embedded Next.js website */
            <div className="relative min-h-0 flex-1 overflow-hidden bg-white">
              {liveUrl ? (
                <iframe
                  key={liveUrl}
                  src={liveUrl}
                  title={`${project.title} live website preview`}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute left-0 top-0 h-[200%] w-[200%] origin-top-left scale-50 border-0"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[#0A0D13] font-mono text-xs text-[#A4ADBD]">
                  Preview not available
                </div>
              )}

              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} in a new tab`}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 transition-colors hover:bg-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF2638]"
                >
                  <span className="translate-y-2 rounded-md border border-white/20 bg-[#10151D]/95 px-4 py-2 font-mono text-xs font-bold text-white opacity-0 shadow-xl transition-all group-hover/preview:translate-y-0 group-hover/preview:opacity-100">
                    OPEN LIVE WEBSITE ↗
                  </span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-3">
          {/* Category */}
          <div className="flex items-center justify-between gap-2 font-mono text-xs">
            <span
              className={`rounded border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                isWeb
                  ? "border-[#FF2638]/30 bg-[#FF2638]/10 text-[#FF2638]"
                  : "border-[#FF6A36]/30 bg-[#FF6A36]/10 text-[#FF6A36]"
              }`}
            >
              {project.category}
            </span>

            {isWeb && (
              <span className="flex items-center gap-1 text-[10px] text-[#A4ADBD]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF2638]" />
                Primary Focus
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-mono text-xl font-bold uppercase tracking-wide text-[#F4F6FA] transition-colors group-hover:text-[#FF2638]">
            {project.title}
          </h3>

          {/* Description */}
          <p className="line-clamp-3 text-xs leading-relaxed text-[#A4ADBD] sm:text-sm">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded border border-white/5 bg-[#0A0D13] px-2 py-0.5 font-mono text-[11px] text-[#A4ADBD]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-2.5 border-t border-white/5 pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="flex w-full items-center justify-center gap-2 rounded border border-[#FF2638]/40 bg-[#FF2638]/15 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_10px_rgba(255,38,56,0.15)] transition-all hover:border-[#FF2638] hover:bg-[#FF2638] hover:shadow-[0_0_20px_rgba(255,38,56,0.4)]"
          >
            <span>VIEW DETAILS</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={liveUrl || undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
              className="flex items-center justify-center gap-1.5 rounded border border-white/10 bg-[#0A0D13] px-3 py-1.5 font-mono text-[11px] text-[#F4F6FA] transition-all hover:border-[#FF2638]/40 hover:bg-[#161D28]"
            >
              <ExternalLink className="h-3 w-3 text-[#FF2638]" />
              <span>LIVE DEMO</span>
            </a>

            <a
              href={project.githubUrl || undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code`}
              className="flex items-center justify-center gap-1.5 rounded border border-white/10 bg-[#0A0D13] px-3 py-1.5 font-mono text-[11px] text-[#F4F6FA] transition-all hover:border-[#FF6A36]/40 hover:bg-[#161D28]"
            >
              <GithubIcon className="h-3 w-3 text-[#FF6A36]" />
              <span>SOURCE CODE</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
