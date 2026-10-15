"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Zap, RotateCcw, UserCheck } from "lucide-react";

export default function PowerUpReveal() {
  const [stage, setStage] = useState<"idle" | "charging" | "revealed">("idle");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleActivate = () => {
    if (stage === "charging") return; // Prevent race condition

    setStage("charging");

    // Cinematic power-up sequence timing:
    // 0ms: charging begins, darkens, energy lines glow
    // 1200ms: peak charge & energy pulse wave
    // 2000ms: reveal transition completes to real photograph
    timeoutRef.current = setTimeout(() => {
      setStage("revealed");
    }, 1800);
  };

  const handleReset = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setStage("idle");
  };

  return (
    <div className="relative w-full max-w-md lg:max-w-lg mx-auto flex flex-col items-center">
      {/* High-Tech Framing Container */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#0A0D13] border-2 border-[#FF2638]/40 shadow-[0_0_30px_rgba(255,38,56,0.25)] transition-all duration-700">
        {/* HUD Tech Corner Brackets */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#FF2638] z-30 pointer-events-none" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#FF2638] z-30 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#FF2638] z-30 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#FF2638] z-30 pointer-events-none" />

        {/* Top HUD Status Bar */}
        <div className="absolute top-3 left-6 right-6 z-30 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#A4ADBD] bg-[#05070B]/85 backdrop-blur-md px-3 py-1 rounded border border-[#FF2638]/20 pointer-events-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`w-2 h-2 rounded-full ${
                stage === "revealed"
                  ? "bg-emerald-400 shadow-[0_0_8px_#34d399]"
                  : stage === "charging"
                  ? "bg-[#FF2638] animate-ping"
                  : "bg-[#FF6A36] animate-pulse"
              }`}
            />
            <span className="text-[#F4F6FA] uppercase font-bold">
              {stage === "revealed"
                ? "IDENTITY: CONFIRMED"
                : stage === "charging"
                ? "POWER-UP: CRITICAL"
                : "STATUS: STANDBY"}
            </span>
          </div>
          <span className="text-[#FF2638] font-bold">
            {stage === "revealed" ? "M.R.K. DIPU" : "SYS // 07"}
          </span>
        </div>

        {/* 1. LAYER ONE: Superhero Artwork (Idle & Charging) */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            stage === "revealed" ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Image
            src="/images/unrevealed.png"
            alt="Cinematic Superhero Avatar with glowing red eyes and neon circuitry"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 500px"
            className={`object-cover object-top transition-transform duration-1000 ${
              stage === "charging"
                ? "scale-105 filter brightness-125 contrast-125"
                : "scale-100 filter brightness-95"
            }`}
          />

          {/* Ambient Red Energy Chest & Eye Pulsing Overlays */}
          <div
            className={`absolute inset-0 bg-radial from-[#FF2638]/20 via-transparent to-transparent pointer-events-none transition-opacity duration-700 ${
              stage === "charging" ? "opacity-80 animate-pulse" : "opacity-30 core-pulse"
            }`}
          />

          {/* Eye flare overlay during charge */}
          {stage === "charging" && (
            <div className="absolute top-[28%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-[#FF2638]/40 blur-xl pointer-events-none animate-ping" />
          )}

          {/* Rain streak overlay inside image container */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#FF2638]/5 to-[#05070B]/60" />
        </div>

        {/* 2. LAYER TWO: Energy Wave & Laser Sweep (Active during charging) */}
        {stage === "charging" && (
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            {/* Darkening vignette */}
            <div className="absolute inset-0 bg-[#05070B]/50 transition-opacity duration-300" />

            {/* Glowing red scanner beam sweeping down */}
            <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF2638] to-transparent shadow-[0_0_20px_#FF2638] animate-[bounce_1.5s_infinite]" />

            {/* Electrical particle flash */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FF2638]/30 via-transparent to-[#FF6A36]/20 mix-blend-screen animate-pulse" />
          </div>
        )}

        {/* 3. LAYER THREE: Revealed Real Portrait (M R Khan Dipu's actual photograph) */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            stage === "revealed"
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <Image
            src="/images/mrkhandipubijoy.png"
            alt="M R Khan Dipu - Professional Portrait with Formal Attire"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover object-top filter brightness-105 contrast-105"
          />

          {/* Biometric Cybernetic Overlay & Target Rings */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-80" />

          {/* Bottom Card Identity Data */}
          <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#05070B]/90 backdrop-blur-md p-3.5 rounded-lg border border-[#FF2638]/40 shadow-xl">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF2638] font-bold flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5" />
                HUMAN DEVELOPER REVEALED
              </span>
              <span className="text-[9px] font-mono text-[#A4ADBD] bg-[#10151D] px-2 py-0.5 rounded border border-[#FF2638]/30">
                GENUINE ID
              </span>
            </div>
            <h3 className="text-base font-bold font-mono text-[#F4F6FA] uppercase tracking-wide">
              M R KHAN DIPU
            </h3>
            <p className="text-xs text-[#A4ADBD] font-mono leading-tight mt-0.5">
              Full-Stack Web Developer &bull; ML/AI Researcher
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="mt-5 w-full flex flex-col sm:flex-row items-center justify-center gap-3">
        {stage !== "revealed" ? (
          <button
            type="button"
            onClick={handleActivate}
            disabled={stage === "charging"}
            className="cursor-pointer group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF2638] to-[#FF6A36] hover:from-[#ff3a4b] hover:to-[#ff7b4b] rounded-lg shadow-[0_0_20px_rgba(255,38,56,0.45)] hover:shadow-[0_0_30px_rgba(255,38,56,0.8)] border border-[#FF2638] transition-all duration-300 transform active:scale-95 disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2638]"
          >
            <Zap className={`w-4 h-4 text-white ${stage === "charging" ? "animate-spin" : "group-hover:scale-110"}`} />
            <span>
              {stage === "charging" ? "CHARGING CORE..." : "ACTIVATE POWER // REVEAL IDENTITY"}
            </span>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleReset}
            className="cursor-pointer group inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#F4F6FA] bg-[#10151D] hover:bg-[#161D28] border border-[#FF2638]/50 hover:border-[#FF2638] rounded-lg shadow-[0_0_15px_rgba(255,38,56,0.25)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2638]"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#FF2638] group-hover:-rotate-90 transition-transform duration-300" />
            <span>REPLAY SEQUENCE // RESTORE MASK</span>
          </button>
        )}
      </div>

      {/* Narrative Sub-caption */}
      <p className="mt-2 text-[11px] font-mono text-[#A4ADBD]/70 text-center">
        {stage === "revealed"
          ? "Preserving real facial identity: authentic portrait of M R Khan Dipu."
          : "Click or tap to activate cinematic power-up and reveal my authentic identity."}
      </p>
    </div>
  );
}
