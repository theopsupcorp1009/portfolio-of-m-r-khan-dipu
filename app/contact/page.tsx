import { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowLeft,
  ExternalLink,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { personalInfo } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact & Communication Channels",
  description:
    "Get in touch with M R Khan Dipu. Direct channels for email, phone, LinkedIn, and GitHub project collaboration.",
};

export default function ContactPage() {
  const cleanPhone = personalInfo.phone.replace(/[^0-9+]/g, "");

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* 1. Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <SectionHeading
          tag="COMMUNICATION GRID // 08"
          title="CONNECT WITH"
          highlight="M R KHAN DIPU"
          subtitle="Direct contact channels for full-stack web engineering roles, software development opportunities, and research inquiries."
        />

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#10151D] hover:bg-[#161D28] border border-white/10 hover:border-[#FF2638]/40 text-xs font-mono font-bold uppercase tracking-wider text-[#F4F6FA] transition-all self-start sm:self-auto shrink-0 shadow-[0_0_12px_rgba(255,38,56,0.1)]"
        >
          <ArrowLeft className="w-4 h-4 text-[#FF2638]" />
          <span>BACK TO HOME</span>
        </Link>
      </div>

      {/* 2. Direct Functional Contact Buttons & Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Email Card & Functional Button */}
        <div className="p-6 rounded-2xl bg-[#10151D] border border-[#FF2638]/40 hover:border-[#FF2638] transition-all shadow-[0_0_20px_rgba(255,38,56,0.15)] flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#0A0D13] border border-[#FF2638]/40 flex items-center justify-center text-[#FF2638]">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono uppercase text-[#A4ADBD] block">
              PRIMARY EMAIL
            </span>
            <h3 className="text-base font-bold font-mono text-[#F4F6FA] break-all">
              {personalInfo.email}
            </h3>
            <p className="text-xs text-[#A4ADBD]">
              Direct correspondence for developer roles &amp; technical inquiries.
            </p>
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#FF2638] hover:bg-[#FF2638]/90 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_12px_rgba(255,38,56,0.4)] transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>EMAIL ME DIRECTLY</span>
          </a>
        </div>

        {/* Phone Card & Functional Button */}
        <div className="p-6 rounded-2xl bg-[#10151D] border border-white/10 hover:border-[#FF6A36]/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.4)] flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#0A0D13] border border-[#FF6A36]/40 flex items-center justify-center text-[#FF6A36]">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono uppercase text-[#A4ADBD] block">
              TELEPHONE &amp; MOBILE
            </span>
            <h3 className="text-base font-bold font-mono text-[#F4F6FA]">
              {personalInfo.phone}
            </h3>
            <p className="text-xs text-[#A4ADBD]">
              Direct voice call line (UTC+6, Dhaka, Bangladesh).
            </p>
          </div>

          <a
            href={`tel:${cleanPhone}`}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#0A0D13] hover:bg-[#161D28] border border-[#FF6A36]/40 hover:border-[#FF6A36] text-[#F4F6FA] font-mono font-bold text-xs uppercase tracking-wider transition-all"
          >
            <Phone className="w-4 h-4 text-[#FF6A36]" />
            <span>CALL ME</span>
          </a>
        </div>

        {/* Location & Timezone Card */}
        <div className="p-6 rounded-2xl bg-[#10151D] border border-white/10 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#0A0D13] border border-white/10 flex items-center justify-center text-[#A4ADBD]">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono uppercase text-[#A4ADBD] block">
              LOCATION BASE
            </span>
            <h3 className="text-base font-bold font-mono text-[#F4F6FA]">
              {personalInfo.location}
            </h3>
            <p className="text-xs text-[#A4ADBD]">
              Open to on-site roles in Dhaka, hybrid, and remote developer opportunities worldwide.
            </p>
          </div>

          <div className="p-2.5 rounded bg-[#0A0D13] border border-white/5 text-[11px] font-mono text-emerald-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Status: Available for opportunities</span>
          </div>
        </div>
      </div>

      {/* 3. Social Networks & Repositories Grid */}
      <div className="space-y-4">
        <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#F4F6FA] flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#FF2638]" />
          <span>AUTHENTICATED PROFESSIONAL NETWORKS &amp; REPOSITORIES</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* LinkedIn Button */}
          <a
            href={personalInfo.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-[#10151D] hover:bg-[#161D28] border border-white/10 hover:border-[#0077b5] transition-all flex items-center justify-between group shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#0A0D13] border border-white/5 text-[#0077b5] group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-mono text-[#F4F6FA]">
                  LinkedIn
                </h4>
                <p className="text-[11px] font-mono text-[#A4ADBD]">
                  /in/mrkhandipu
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#A4ADBD] group-hover:text-[#0077b5]" />
          </a>

          {/* GitHub Personal */}
          <a
            href={personalInfo.githubPersonalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-[#10151D] hover:bg-[#161D28] border border-white/10 hover:border-white transition-all flex items-center justify-between group shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#0A0D13] border border-white/5 text-white group-hover:scale-110 transition-transform">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-mono text-[#F4F6FA]">
                  GitHub Profile
                </h4>
                <p className="text-[11px] font-mono text-[#A4ADBD]">
                  @mrkhan393
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#A4ADBD] group-hover:text-white" />
          </a>

          {/* GitHub Project Repositories */}
          <a
            href={personalInfo.githubOrgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-[#10151D] hover:bg-[#161D28] border border-white/10 hover:border-[#FF6A36] transition-all flex items-center justify-between group shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#0A0D13] border border-white/5 text-[#FF6A36] group-hover:scale-110 transition-transform">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-mono text-[#F4F6FA]">
                  Project Repositories
                </h4>
                <p className="text-[11px] font-mono text-[#A4ADBD]">
                  @theopsupcorp1009
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#A4ADBD] group-hover:text-[#FF6A36]" />
          </a>
        </div>
      </div>

      {/* 4. Interactive Transmission Form */}
      <div className="pt-4">
        <ContactForm />
      </div>
    </div>
  );
}
