"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileDown, Terminal } from "lucide-react";
import { navItems, personalInfo } from "@/data/portfolio";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05070B]/90 backdrop-blur-md border-b border-[#FF2638]/25 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-[#05070B]/60 backdrop-blur-sm border-b border-[#FF2638]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Monogram */}
          <Link
            href="/"
            className="group flex items-center space-x-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2638] rounded-md px-2 py-1"
            aria-label="M R Khan Dipu - Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#10151D] border border-[#FF2638]/40 group-hover:border-[#FF2638] group-hover:shadow-[0_0_15px_rgba(255,38,56,0.6)] transition-all">
              <span className="font-mono text-xs font-bold text-[#FF2638] tracking-tighter">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="h-8 w-8 object-contain"
                />
              </span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF2638] rounded-full animate-ping opacity-75" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF2638] rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-widest text-[#F4F6FA] uppercase font-mono group-hover:text-[#FF2638] transition-colors">
                M R KHAN DIPU
              </span>
              <span className="text-[10px] tracking-wider text-[#A4ADBD] uppercase font-mono">
                Full-Stack Dev
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
          >
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-xs lg:text-sm font-medium tracking-wide uppercase font-mono rounded transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2638] ${
                    isActive
                      ? "text-[#FF2638] font-bold"
                      : "text-[#A4ADBD] hover:text-[#F4F6FA] hover:bg-[#10151D]/60"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#FF2638] to-transparent shadow-[0_0_8px_#FF2638]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Download CV */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={personalInfo.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              download="CV_of_M_R_Khan_Dipu.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider uppercase text-white bg-[#FF2638]/15 hover:bg-[#FF2638] border border-[#FF2638]/50 hover:border-[#FF2638] rounded-md transition-all duration-300 shadow-[0_0_12px_rgba(255,38,56,0.25)] hover:shadow-[0_0_20px_rgba(255,38,56,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2638]"
              title="Download M R Khan Dipu's Official CV"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={personalInfo.resumePdfPath}
              download="CV_of_M_R_Khan_Dipu.pdf"
              className="p-2 text-[#FF2638] bg-[#10151D] border border-[#FF2638]/30 rounded-md"
              aria-label="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="cursor-pointer p-2 text-[#F4F6FA] hover:text-[#FF2638] bg-[#10151D] border border-[#FF2638]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF2638]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0D13]/98 border-b border-[#FF2638]/30 backdrop-blur-xl px-4 pt-2 pb-6 shadow-2xl transition-all">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#FF2638]/15 text-xs font-mono text-[#A4ADBD]">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#FF2638]" />
              NAVIGATION MATRIX
            </span>
            <span className="text-[#FF2638] font-bold">MRK // v2.0</span>
          </div>

          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col space-y-1"
          >
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 text-sm font-mono tracking-wider uppercase rounded-md transition-all ${
                    isActive
                      ? "text-[#FF2638] bg-[#FF2638]/10 font-bold border-l-2 border-[#FF2638]"
                      : "text-[#A4ADBD] hover:text-[#F4F6FA] hover:bg-[#10151D]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-[10px] text-[#FF2638] uppercase">
                      ACTIVE
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#FF2638]/20 flex flex-col gap-2">
            <a
              href={personalInfo.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              download="CV_of_M_R_Khan_Dipu.pdf"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono font-bold tracking-wider uppercase text-white bg-[#FF2638] hover:bg-[#FF2638]/90 rounded-md shadow-[0_0_15px_rgba(255,38,56,0.4)]"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Full CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
