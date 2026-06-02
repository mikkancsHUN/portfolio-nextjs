import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="h-screen relative flex items-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_center,rgba(255,69,0,0.06)_0%,rgba(11,11,12,0)_60%)] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        <div className="text-left order-2 md:order-1">
          <div className="inline-flex items-center gap-2 bg-neutral-900/80 border border-neutral-800 px-3 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Elérhető új projektekre</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-6 bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-transparent">
            Modern digitális élményeket építek.
          </h1>
          <p className="text-neutral-400 text-sm md:text-base max-w-lg leading-relaxed mb-10 font-sans">
            Vue és React alapokon fejlesztek nagy teljesítményű alkalmazásokat. Jelenleg a Next.js és a Tailwind CSS segítségével hozok létre prémium felületeket.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#projects" className="w-full sm:w-auto bg-white text-black font-medium text-sm px-8 py-3.5 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 text-center">
              Munkáim megtekintése
            </a>
            <a href="#skills" className="w-full sm:w-auto text-neutral-400 hover:text-white font-mono text-xs px-6 py-3.5 transition-colors duration-200 text-center">
              Tech Stack & Skills ↓
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex items-center justify-center relative min-h-[300px]">
          <div className="absolute w-64 h-64 rounded-full border border-dashed border-neutral-800 animate-[spin_60s_linear_infinite]" />
          <div className="absolute w-48 h-48 rounded-full border border-neutral-900 bg-neutral-950/20 animate-ping opacity-30" />
          <div className="w-72 bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl backdrop-blur-md shadow-2xl relative animate-[bounce_4s_ease-in-out_infinite] group hover:border-orange-500/50 transition-colors duration-500">
            <div className="flex gap-1.5 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
            </div>
            <div className="space-y-3">
              <div className="h-2 w-1/3 bg-orange-500/20 rounded group-hover:bg-orange-500/40 transition-colors" />
              <div className="h-3 w-3/4 bg-neutral-800 rounded" />
              <div className="h-3 w-full bg-neutral-800/50 rounded" />
            </div>
            <div className="mt-6 p-3 bg-neutral-950/80 border border-neutral-800 rounded-xl flex items-center justify-between">
              <span className="text-[10px] font-mono text-neutral-500">NEXT.js + VUE</span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">100% FPS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}