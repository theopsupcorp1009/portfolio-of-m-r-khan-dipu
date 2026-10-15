import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  Cpu,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { navItems, personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0D13] border-t border-[#FF2638]/20 pt-16 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#FF2638]/5 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Identity & Bio */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-[#10151D] border border-[#FF2638]/50">
                <span className="font-mono text-xs font-bold text-[#FF2638]">MRK</span>
              </div>
              <span className="text-base font-black tracking-widest text-[#F4F6FA] uppercase font-mono">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-[#A4ADBD] font-mono leading-relaxed">
              {personalInfo.headlineTitle}
            </p>
            <p className="text-xs text-[#A4ADBD]/80 leading-relaxed">
              {personalInfo.supportingText}
            </p>
            <div className="pt-2">
              <a
                href={personalInfo.resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                download="CV_of_M_R_Khan_Dipu.pdf"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-bold tracking-wider uppercase text-white bg-[#FF2638]/20 hover:bg-[#FF2638] border border-[#FF2638]/50 rounded transition-all shadow-[0_0_10px_rgba(255,38,56,0.2)]"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF2638] mb-4 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              NAVIGATION MATRIX
            </h3>
            <ul className="space-y-2 text-xs font-mono">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#A4ADBD] hover:text-[#F4F6FA] hover:text-glow-red transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#FF2638]/50">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Channels */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF2638] mb-4 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              DIRECT CHANNELS
            </h3>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2.5 text-[#A4ADBD] hover:text-[#FF2638] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#FF2638] shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-2.5 text-[#A4ADBD] hover:text-[#FF2638] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FF2638] shrink-0" />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-[#A4ADBD]">
                <MapPin className="w-4 h-4 text-[#FF2638] shrink-0" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Professional Networks */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF2638] mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF2638]" />
              NETWORKS &amp; CODE
            </h3>
            <div className="flex flex-col space-y-2.5">
              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 bg-[#10151D] hover:bg-[#161D28] border border-[#FF2638]/30 hover:border-[#FF2638] rounded text-xs font-mono text-[#F4F6FA] transition-all"
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                  <span>LinkedIn Profile</span>
                </span>
                <span className="text-[#FF2638]">↗</span>
              </a>

              <a
                href={personalInfo.githubPersonalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 bg-[#10151D] hover:bg-[#161D28] border border-[#FF2638]/30 hover:border-[#FF2638] rounded text-xs font-mono text-[#F4F6FA] transition-all"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>GitHub (@mrkhan393)</span>
                </span>
                <span className="text-[#FF2638]">↗</span>
              </a>

              <a
                href={personalInfo.githubOrgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 bg-[#10151D] hover:bg-[#161D28] border border-[#FF2638]/30 hover:border-[#FF2638] rounded text-xs font-mono text-[#F4F6FA] transition-all"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-[#FF6A36]" />
                  <span>Project Repositories</span>
                </span>
                <span className="text-[#FF6A36]">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#FF2638]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A4ADBD]">
          <div className="flex items-center gap-2">
            <span>
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#FF2638]/70">Built with Next.js &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
