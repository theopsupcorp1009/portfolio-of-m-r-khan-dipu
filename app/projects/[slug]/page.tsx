
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Sparkles,
  Terminal,
  Monitor,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

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

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} - Full-Stack Project Case Study`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projectsData
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  const isWeb = project.category === "Web Development";
  const liveUrl = previewUrls[project.slug] ?? project.liveUrl;
  const previewImage = previewImages[project.slug];

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      {/* 1. Back navigation and metadata */}
      <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#A4ADBD] transition-colors hover:text-[#FF2638]"
        >
          <ArrowLeft className="h-4 w-4 text-[#FF2638] transition-transform group-hover:-translate-x-1" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded border px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider ${
              isWeb
                ? "border-[#FF2638]/40 bg-[#FF2638]/15 text-[#FF2638]"
                : "border-[#FF6A36]/40 bg-[#FF6A36]/15 text-[#FF6A36]"
            }`}
          >
            {project.category}
          </span>

          {isWeb && (
            <span className="rounded border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-1 font-mono text-xs text-emerald-400">
              CORE WEB SUITE
            </span>
          )}
        </div>
      </div>

      {/* 2. Hero overview and actions */}
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#FF2638]">
            <Terminal className="h-3.5 w-3.5" />
            <span>
              PROJECT IDENTIFIER {"//"} {project.slug.toUpperCase()}
            </span>
          </div>

          <h1 className="font-mono text-3xl font-black uppercase tracking-tight text-[#F4F6FA] sm:text-4xl md:text-5xl">
            {project.title}
          </h1>

          <p className="font-mono text-base leading-relaxed text-[#FF6A36] sm:text-lg">
            {project.subtitle}
          </p>

          <p className="text-sm leading-relaxed text-[#A4ADBD] sm:text-base">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-[#FF2638]/30 bg-[#10151D] px-3 py-1 font-mono text-xs font-semibold text-[#F4F6FA] shadow-[0_0_8px_rgba(255,38,56,0.15)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-[#FF2638]/40 bg-[#10151D] p-6 shadow-[0_0_30px_rgba(255,38,56,0.15)] lg:col-span-4">
          <div className="border-b border-white/10 pb-2 font-mono text-xs font-bold uppercase tracking-wider text-[#F4F6FA]">
            DEPLOYMENT &amp; SOURCE
          </div>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF2638] px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(255,38,56,0.4)] transition-all hover:bg-[#FF2638]/90"
          >
            <ExternalLink className="h-4 w-4" />
            <span>LAUNCH LIVE APPLICATION</span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#FF6A36]/40 bg-[#0A0D13] px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#F4F6FA] transition-all hover:border-[#FF6A36] hover:bg-[#161D28]"
          >
            <GithubIcon className="h-4 w-4 text-[#FF6A36]" />
            <span>INSPECT SOURCE REPOSITORY</span>
          </a>

          <div className="space-y-1 break-all border-t border-white/5 pt-3 font-mono text-[11px] text-[#A4ADBD]/70">
            <div>
              <span className="text-[#FF2638]">Domain:</span>{" "}
              {liveUrl}
            </div>
            <div>
              <span className="text-[#FF6A36]">Repo:</span>{" "}
              github.com/theopsupcorp1009
            </div>
          </div>
        </div>
      </div>

      {/* 3. Live project preview */}
      <section className="space-y-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#FF2638]">
              <Monitor className="h-4 w-4" />
              <span>Live Project Preview</span>
            </div>

            <h2 className="font-mono text-xl font-bold uppercase text-[#F4F6FA] sm:text-2xl">
              Explore the Application
            </h2>

            <p className="text-sm text-[#A4ADBD]">
              {previewImage
                ? "Application screenshot preview. Open the live app to interact with it."
                : "The deployed website is embedded below when the hosting service permits it."}
            </p>
          </div>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-[#FF2638]/40 bg-[#FF2638]/10 px-4 py-2.5 font-mono text-xs font-bold text-white transition hover:bg-[#FF2638]"
          >
            OPEN IN NEW TAB
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#10151D] shadow-[0_0_35px_rgba(0,0,0,0.25)]">
          {/* Browser chrome */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-[#0A0D13] px-4 py-3">
            <div className="flex shrink-0 items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF2638]" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </div>

            <div className="min-w-0 flex-1 truncate rounded-md border border-white/5 bg-[#10151D] px-3 py-1.5 font-mono text-xs text-[#A4ADBD]">
              {new URL(liveUrl).hostname}
            </div>

            <span className="hidden shrink-0 items-center gap-1.5 font-mono text-[10px] text-emerald-400 sm:flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              DEPLOYED
            </span>
          </div>

          {/* Screenshot fallback for Streamlit */}
          {previewImage ? (
            <div className="relative w-full bg-[#0A0D13]">
              <Image
                src={previewImage}
                alt={`${project.title} screenshot`}
                width={1600}
                height={1000}
                priority
                className="h-auto max-h-[75vh] w-full object-contain object-top"
                sizes="(max-width: 768px) 100vw, 1200px"
              />

              <div className="flex flex-col items-center justify-center gap-3 border-t border-white/10 px-4 py-5 text-center sm:flex-row">
                <p className="text-sm text-[#A4ADBD]">
                  This is a screenshot. Launch the app for live interaction.
                </p>

                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#FF2638] px-4 py-2 font-mono text-xs font-bold text-white transition hover:bg-[#FF2638]/80"
                >
                  RUN LIVE APP
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <div className="relative h-[55vh] min-h-[350px] w-full bg-white sm:h-[65vh] lg:h-[75vh]">
              <iframe
                key={liveUrl}
                src={liveUrl}
                title={`${project.title} live preview`}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="clipboard-read; clipboard-write"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          )}
        </div>
      </section>

      {/* 4. Architecture and features */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-4 rounded-2xl border border-white/10 bg-[#0A0D13] p-6 sm:p-8 lg:col-span-6">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#FF2638]">
            <Cpu className="h-4 w-4" />
            <span>Architecture &amp; System Implementation</span>
          </div>

          <p className="font-mono text-xs leading-relaxed text-[#A4ADBD] sm:text-sm">
            {project.architectureOverview}
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-white/10 bg-[#10151D] p-6 sm:p-8 lg:col-span-6">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-emerald-400">
            <CheckCircle2 className="h-4 w-4" />
            <span>Documented Core Functionality</span>
          </div>

          <ul className="space-y-2.5">
            {project.documentedFeatures.map((feat, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs text-[#A4ADBD] sm:text-sm"
              >
                <span className="mt-0.5 font-bold text-[#FF2638]">
                  &bull;
                </span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 5. Challenges and future plans */}
      {/* <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-3 rounded-2xl border border-amber-500/30 bg-[#10151D] p-6 sm:p-8 lg:col-span-6">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-amber-400">
            <AlertTriangle className="h-4 w-4" />
            <span>Development Challenges Statement</span>
          </div>

          <p className="font-mono text-xs leading-relaxed text-[#A4ADBD] sm:text-sm">
            {project.challenges}
          </p>

          <p className="border-t border-white/5 pt-2 font-mono text-[11px] text-amber-400/80">
            {"// Factual Transparency: Specific historical hurdles are not claimed unless explicitly documented in CV."}
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-[#FF6A36]/30 bg-[#10151D] p-6 sm:p-8 lg:col-span-6">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#FF6A36]">
            <Lightbulb className="h-4 w-4" />
            <span>Potential Improvements &amp; Future Plans</span>
          </div>

          <p className="font-mono text-xs text-[#A4ADBD]/80">
            These are proposed future enhancements, not claims of completed work.
          </p>

          <ul className="space-y-2">
            {project.futurePlans.map((plan, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-[#A4ADBD] sm:text-sm"
              >
                <span className="mt-0.5 text-[#FF6A36]">&bull;</span>
                <span>{plan}</span>
              </li>
            ))}
          </ul>
        </div>
      </div> */}

      {/* 6. Related projects */}
      <div className="space-y-6 border-t border-white/10 pt-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="flex items-center gap-2 font-mono text-base font-bold uppercase text-[#F4F6FA] sm:text-lg">
            <Sparkles className="h-4 w-4 shrink-0 text-[#FF2638]" />
            <span>RELATED ENGINEERING PROJECTS</span>
          </h2>

          <Link
            href="/projects"
            className="shrink-0 font-mono text-xs text-[#FF2638] hover:underline"
          >
            VIEW ALL &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {relatedProjects.map((rel) => (
            <ProjectCard key={rel.slug} project={rel} />
          ))}
        </div>
      </div>
    </div>
  );
}
