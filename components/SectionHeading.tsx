import React from "react";

interface SectionHeadingProps {
  tag: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  tag,
  title,
  highlight,
  subtitle,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {/* HUD System Tag */}
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 mb-3 rounded border border-[#FF2638]/30 bg-[#10151D]/80 backdrop-blur-sm text-[11px] font-mono tracking-widest uppercase text-[#FF2638] shadow-[0_0_10px_rgba(255,38,56,0.15)] ${
          center ? "justify-center" : ""
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF2638] animate-pulse" />
        <span>{tag}</span>
      </div>

      {/* Main Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase font-mono tracking-tight text-[#F4F6FA]">
        {title}{" "}
        {highlight && (
          <span className="text-[#FF2638] text-glow-red relative inline-block">
            {highlight}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base text-[#A4ADBD] max-w-2xl leading-relaxed ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Cyber accent bar */}
      <div
        className={`mt-4 flex items-center gap-1 ${
          center ? "justify-center" : ""
        }`}
      >
        <div className="w-8 h-[2px] bg-[#FF2638] shadow-[0_0_6px_#FF2638]" />
        <div className="w-2 h-[2px] bg-[#FF6A36]" />
        <div className="w-1 h-[2px] bg-[#A4ADBD]/40" />
      </div>
    </div>
  );
}
