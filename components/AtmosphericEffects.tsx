export default function AtmosphericEffects() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Subtle Lightning Flash Layer */}
      <div className="absolute inset-0 bg-red-600/10 mix-blend-screen lightning-effect" />

      {/* Atmospheric Vignette & Radial Red Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FF2638]/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#FF6A36]/10 rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-[#FF2638]/10 rounded-full blur-[140px]" />

      {/* Rain Drops (Lightweight set of CSS drops) */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(24)].map((_, i) => (
          <span
            key={i}
            className="absolute top-0 w-[1px] bg-gradient-to-b from-transparent via-[#FF2638]/50 to-white/70 rain-drop"
            style={{
              left: `${(i * 4.2 + (i % 3) * 1.5) % 100}%`,
              height: `${25 + (i % 5) * 12}px`,
              animationDelay: `${(i * 0.23) % 2}s`,
              animationDuration: `${0.9 + (i % 4) * 0.25}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
