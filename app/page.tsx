import React from 'react';

export default function HomePage() {
  return (
    // A FŐ KONTÉNER: Prémium sötét háttér, teljes magasság
    <div className="min-h-screen bg-[#0B0B0C] text-neutral-100 antialiased font-sans selection:bg-orange-500 selection:text-white">
      
      {/* --- 1. NAVIGÁCIÓ (Dribbble/Apple stílusú minimalizmus) --- */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0B0C]/70 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo / Név */}
          <div className="font-mono text-sm tracking-tighter font-bold">
            PORTFOLIO<span className="text-orange-500">.</span>
          </div>

          {/* Menüpontok (Középen, letisztultan) */}
          <div className="hidden md:flex items-center gap-8 text-xs font-mono text-neutral-400">
            <a href="#projects" className="hover:text-white transition-colors duration-200">PROJEKTEK</a>
            <a href="#about" className="hover:text-white transition-colors duration-200">RÓLAM</a>
            <a href="#services" className="hover:text-white transition-colors duration-200">SZOLGÁLTATÁSOK</a>
          </div>

          {/* Kapcsolat CTA gomb (Finom, lekerekített, prémium) */}
          <div>
            <a 
              href="#contact" 
              className="text-xs font-mono border border-neutral-800 bg-neutral-900 px-4 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              GET IN TOUCH
            </a>
          </div>

        </div>
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <main className="max-w-6xl mx-auto px-6 pt-20 pb-32 md:pt-32">
        <div className="flex flex-col items-center text-center">
          
          {/* Felső kis státusz címke (Mint Madhu Miah portfólióján az elérhetőség) */}
          <div className="inline-flex items-center gap-2 bg-neutral-900/80 border border-neutral-800 px-3 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
              Elérhető új projektekre
            </span>
          </div>

          {/* FŐ CÍMSOR: Brutális kontraszt és tipográfia, finom ezüst grádienssel */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] max-w-4xl mb-8 bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-transparent">
            Modern digitális élményeket építek.
          </h1>

          {/* Alszöveg: Letisztult, jól olvasható, de nem tolakodó */}
          <p className="text-neutral-400 text-sm md:text-base max-w-xl font-sans leading-relaxed mb-12">
            Vue és React alapokon fejlesztek nagy teljesítményű webes alkalmazásokat. Jelenleg a Next.js és a Tailwind CSS mágiájába ások mélyre, hogy pixel-perfect felületeket hozzak létre.
          </p>

          {/* Hero Akció Gombok */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto bg-white text-black font-medium text-sm px-8 py-3.5 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 text-center"
            >
              Munkáim megtekintése
            </a>
            <a 
              href="#about" 
              className="w-full sm:w-auto text-neutral-400 hover:text-white font-mono text-xs px-6 py-3.5 transition-colors duration-200 text-center"
            >
              Bemutatkozás ↓
            </a>
          </div>

        </div>
      </main>

    </div>
  );
}