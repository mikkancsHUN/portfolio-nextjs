import React from 'react';

export default function UpdatedPortfolio() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-neutral-100 antialiased font-sans selection:bg-orange-500 selection:text-white">
      
      {/* --- NAVIGÁCIÓ (Marad a fix 80px magasság) --- */}
      <nav className="h-20 sticky top-0 z-50 backdrop-blur-md bg-[#0B0B0C]/70 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="font-mono text-sm tracking-tighter font-bold">
            PORTFOLIO<span className="text-orange-500">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-mono text-neutral-400">
            <a href="#projects" className="hover:text-white transition-colors duration-200">PROJEKTEK</a>
            <a href="#skills" className="hover:text-white transition-colors duration-200">SKILLS</a>
            <a href="#about" className="hover:text-white transition-colors duration-200">RÓLAM</a>
          </div>
          <div>
            <a href="#contact" className="text-xs font-mono border border-neutral-800 bg-neutral-900 px-4 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </nav>

      {/* --- 1. HERO SECTION (Pontosan 100vh a navigációval együtt, különleges izzó háttérrel) --- */}
      <section className="h-[calc(100vh-80px)] relative flex items-center justify-center overflow-hidden px-6">
        
        {/* Különleges háttér effekt: egy finom, mély radiális izzás a képernyő közepén */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,69,0,0.08)_0%,rgba(11,11,12,0)_70%)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 bg-neutral-900/80 border border-neutral-800 px-3 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Elérhető új projektekre</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-transparent">
            Modern digitális élményeket építek.
          </h1>
          
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-12">
            Vue és React alapokon fejlesztek nagy teljesítményű alkalmazásokat. Jelenleg a Next.js és a Tailwind CSS segítségével hozok létre prémium felületeket.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="w-full sm:w-auto bg-white text-black font-medium text-sm px-8 py-3.5 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 text-center">
              Munkáim megtekintése
            </a>
            <a href="#skills" className="w-full sm:w-auto text-neutral-400 hover:text-white font-mono text-xs px-6 py-3.5 transition-colors duration-200 text-center">
              Tech Stack & Skills ↓
            </a>
          </div>
        </div>
      </section>

      {/* --- 2. SKILLS SECTION (Új mező a stack-ednek) --- */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-900">
        <div className="mb-12">
          <p className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-2">// Eszköztár</p>
          <h2 className="text-3xl font-bold tracking-tight">Tech Stack & Kompetenciák</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-neutral-950 border border-neutral-900 p-6 rounded-2xl hover:border-neutral-700 transition-all group">
            <div className="text-xs font-mono text-neutral-500 mb-2">01 / FRONTEND</div>
            <div className="text-lg font-medium group-hover:text-orange-500 transition-colors">React & Next.js</div>
          </div>
          <div className="bg-neutral-950 border border-neutral-900 p-6 rounded-2xl hover:border-neutral-700 transition-all group">
            <div className="text-xs font-mono text-neutral-500 mb-2">02 / FRONTEND</div>
            <div className="text-lg font-medium group-hover:text-orange-500 transition-colors">Vue.js & Nuxt</div>
          </div>
          <div className="bg-neutral-950 border border-neutral-900 p-6 rounded-2xl hover:border-neutral-700 transition-all group">
            <div className="text-xs font-mono text-neutral-500 mb-2">03 / STYLING</div>
            <div className="text-lg font-medium group-hover:text-orange-500 transition-colors">Tailwind CSS</div>
          </div>
          <div className="bg-neutral-950 border border-neutral-900 p-6 rounded-2xl hover:border-neutral-700 transition-all group">
            <div className="text-xs font-mono text-neutral-500 mb-2">04 / CORE</div>
            <div className="text-lg font-medium group-hover:text-orange-500 transition-colors">TypeScript / JS</div>
          </div>
        </div>
      </section>

      {/* --- 3. EGYSZERŰBB, VÁLTAKOZÓ PROJEKT SECTION (Zig-Zag elrendezés) --- */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-900">
        <div className="mb-20">
          <p className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-2">// Portfólió</p>
          <h2 className="text-3xl font-bold tracking-tight">Kiemelt Projektek</h2>
        </div>

        <div className="space-y-32">
          
          {/* 1. Projekt: Kép balra, szöveg jobbra */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Kép / UI Preview helye */}
            <div className="w-full md:w-1/2 aspect-video bg-neutral-950 border border-neutral-900 rounded-3xl flex items-center justify-center text-neutral-600 font-mono text-xs hover:border-neutral-800 transition-colors">
              [ Project One UI Preview ]
            </div>
            {/* Szöveges tartalom */}
            <div className="w-full md:w-1/2">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">2026 • B2B Application</span>
              <h3 className="text-2xl font-bold mb-4">SaaS Analytics Dashboard</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                A másik chaten épülő komplex dashboardunk mintájára. Valós idejű diagramok, pénzügyi adatok követése és szigorú Next.js App Router architektúra.
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] font-mono bg-neutral-900 px-2.5 py-1 rounded-full text-neutral-400">Next.js</span>
                <span className="text-[10px] font-mono bg-neutral-900 px-2.5 py-1 rounded-full text-neutral-400">Tailwind</span>
              </div>
            </div>
          </div>

          {/* 2. Projekt: Kép jobbra, szöveg balra (md:flex-row-reverse mágia!) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            {/* Kép / UI Preview helye */}
            <div className="w-full md:w-1/2 aspect-video bg-neutral-950 border border-neutral-900 rounded-3xl flex items-center justify-center text-neutral-600 font-mono text-xs hover:border-neutral-800 transition-colors">
              [ Project Two UI Preview ]
            </div>
            {/* Szöveges tartalom */}
            <div className="w-full md:w-1/2">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">2025 • Crypto UI</span>
              <h3 className="text-2xl font-bold mb-4">Crypto Wallet Integration</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Eredetileg Vue-ban készült alkalmazás, ahol a letisztult kártyák és a sötét mód dominálnak. Gyors tranzakciókövetés és reszponzív grafikonok.
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] font-mono bg-neutral-900 px-2.5 py-1 rounded-full text-neutral-400">Vue 3</span>
                <span className="text-[10px] font-mono bg-neutral-900 px-2.5 py-1 rounded-full text-neutral-400">Tailwind</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 py-12 border-t border-neutral-900 text-center md:flex md:items-center md:justify-between text-neutral-500 text-xs font-mono">
        <p>© 2026 Minden jog fenntartva.</p>
        <div className="flex justify-center gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">GITHUB</a>
          <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
        </div>
      </footer>

    </div>
  );
}