import React from 'react';

export default function CompletePortfolio() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-neutral-100 antialiased font-sans selection:bg-orange-500 selection:text-white">
      
      {/* --- 1. NAVIGÁCIÓ (Üveghatású, görgetésnél ragadós) --- */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0B0C]/70 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-mono text-sm tracking-tighter font-bold">
            PORTFOLIO<span className="text-orange-500">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-mono text-neutral-400">
            <a href="#projects" className="hover:text-white transition-colors duration-200">PROJEKTEK</a>
            <a href="#services" className="hover:text-white transition-colors duration-200">SZOLGÁLTATÁSOK</a>
            <a href="#about" className="hover:text-white transition-colors duration-200">RÓLAM</a>
          </div>
          <div>
            <a href="#contact" className="text-xs font-mono border border-neutral-800 bg-neutral-900 px-4 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-32 text-center">
        <div className="inline-flex items-center gap-2 bg-neutral-900/80 border border-neutral-800 px-3 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Elérhető új projektekre</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] max-w-4xl mb-8 mx-auto bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-transparent">
          Modern digitális élményeket építek.
        </h1>
        <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-12">
          Vue és React alapokon fejlesztek nagy teljesítményű webes alkalmazásokat. Jelenleg a Next.js és a Tailwind CSS segítségével hozok létre prémium felületeket.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="w-full sm:w-auto bg-white text-black font-medium text-sm px-8 py-3.5 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 text-center">
            Munkáim megtekintése
          </a>
          <a href="#services" className="w-full sm:w-auto text-neutral-400 hover:text-white font-mono text-xs px-6 py-3.5 transition-colors duration-200 text-center">
            Szolgáltatások ↓
          </a>
        </div>
      </section>

      {/* --- 3. BENTO GRID PROJEKTEK (Aszimmetrikus, prémium kártyák) --- */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-900">
        <div className="mb-12">
          <p className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-2">// Kiemelt munkák</p>
          <h2 className="text-3xl font-bold tracking-tight">Case Studies & Web Apps</h2>
        </div>

        {/* A Rács szerkezet */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. NAGY KÁRTYA (2 oszlopot foglal el) */}
          <div className="md:col-span-2 bg-neutral-950 border border-neutral-900 rounded-3xl p-8 flex flex-col justify-between group hover:border-neutral-800 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all duration-500" />
            <div>
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] font-mono bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-full text-neutral-400">NEXT.JS</span>
                <span className="text-[10px] font-mono bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-full text-neutral-400">TAILWIND</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">B2B SaaS Analytics Dashboard</h3>
              <p className="text-neutral-400 text-sm max-w-md">Valós idejű adatvizualizáció és komplex állapotkezelés vállalati ügyfelek részére.</p>
            </div>
            {/* Helyőrző a leendő képnek / dizájn elemnek */}
            <div className="mt-12 h-48 bg-neutral-900/60 border border-neutral-800/50 rounded-2xl flex items-center justify-center text-xs font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
              [ Dashboard UI Preview / Ide jön majd egy kép ]
            </div>
          </div>

          {/* 2. KICSI KÁRTYA (1 oszlop) */}
          <div className="bg-neutral-950 border border-neutral-900 rounded-3xl p-8 flex flex-col justify-between group hover:border-neutral-800 transition-all duration-300">
            <div>
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] font-mono bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-full text-neutral-400">VUE 3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Crypto Wallet UI</h3>
              <p className="text-neutral-400 text-sm">Letisztult, minimalista kriptovaluta portfólió követő app.</p>
            </div>
            <div className="mt-8 text-xs font-mono text-neutral-500 group-hover:text-orange-500 transition-colors flex items-center gap-1">
              Részletek megtekintése →
            </div>
          </div>

          {/* 3. KICSI KÁRTYA (1 oszlop) */}
          <div className="bg-neutral-950 border border-neutral-900 rounded-3xl p-8 flex flex-col justify-between group hover:border-neutral-800 transition-all duration-300">
            <div>
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] font-mono bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-full text-neutral-400">REACT</span>
              </div>
              <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
              <p className="text-neutral-400 text-sm">Framer Motion animációkkal dúsított, prémium webshop frontend.</p>
            </div>
            <div className="mt-8 text-xs font-mono text-neutral-500 group-hover:text-orange-500 transition-colors flex items-center gap-1">
              Részletek megtekintése →
            </div>
          </div>

          {/* 4. NAGY KÁRTYA (2 oszlopot foglal el) */}
          <div className="md:col-span-2 bg-neutral-950 border border-neutral-900 rounded-3xl p-8 flex flex-col justify-between group hover:border-neutral-800 transition-all duration-300 relative overflow-hidden">
            <div>
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] font-mono bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-full text-neutral-400">TYPESCRIPT</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">AI Prompt Engineering Hub</h3>
              <p className="text-neutral-400 text-sm max-w-md">Fejlesztői platform AI modellek promptjainak tesztelésére és verziókezelésére.</p>
            </div>
            <div className="mt-12 h-32 bg-neutral-900/60 border border-neutral-800/50 rounded-2xl flex items-center justify-center text-xs font-mono text-neutral-600">
              [ App Screenshot Place ]
            </div>
          </div>

        </div>
      </section>

      {/* --- 4. WHAT I OFFER / SERVICES SECTION (Letisztult sorok) --- */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-900">
        <div className="mb-16">
          <p className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-2">// Szolgáltatások</p>
          <h2 className="text-3xl font-bold tracking-tight">Miben tudok segíteni?</h2>
        </div>

        <div className="space-y-4">
          {/* 1. Sor */}
          <div className="border-b border-neutral-900 pb-6 pt-2 flex flex-col md:flex-row md:items-center justify-between gap-4 group">
            <div className="flex items-start gap-6">
              <span className="font-mono text-xs text-neutral-600 mt-1">01/</span>
              <div>
                <h3 className="text-xl font-medium group-hover:text-orange-500 transition-colors">Frontend Fejlesztés (React / Vue)</h3>
                <p className="text-neutral-400 text-sm mt-1 max-w-xl">Tiszta, komponens-alapú, könnyen karbantartható kód írása a legmodernebb keretrendszerekkel.</p>
              </div>
            </div>
            <div className="text-xs font-mono text-neutral-500 md:text-right">Tailwind CSS • Next.js • Nuxt</div>
          </div>

          {/* 2. Sor */}
          <div className="border-b border-neutral-900 pb-6 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group">
            <div className="flex items-start gap-6">
              <span className="font-mono text-xs text-neutral-600 mt-1">02/</span>
              <div>
                <h3 className="text-xl font-medium group-hover:text-orange-500 transition-colors">UI/UX Replikáció & Pixel-Perfect Fejlesztés</h3>
                <p className="text-neutral-400 text-sm mt-1 max-w-xl">Figma vagy Dribbble tervek milliméter pontos lefejlesztése reszponzív, minden eszközön tökéletes formában.</p>
              </div>
            </div>
            <div className="text-xs font-mono text-neutral-500 md:text-right">Responsive Design • UI Engineering</div>
          </div>

          {/* 3. Sor */}
          <div className="border-b border-neutral-900 pb-6 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group">
            <div className="flex items-start gap-6">
              <span className="font-mono text-xs text-neutral-600 mt-1">03/</span>
              <div>
                <h3 className="text-xl font-medium group-hover:text-orange-500 transition-colors">SaaS & Dashboard Architektúra</h3>
                <p className="text-neutral-400 text-sm mt-1 max-w-xl">Bonyolult adatszerkezetek, táblázatok és grafikonok átlátható, gyors és logikus lefejlesztése.</p>
              </div>
            </div>
            <div className="text-xs font-mono text-neutral-500 md:text-right">State Management • API Integration</div>
          </div>
        </div>
      </section>

      {/* --- 5. FOOTER (Egyszerű lezárás) --- */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 py-12 border-t border-neutral-900 text-center md:flex md:items-center md:justify-between text-neutral-500 text-xs font-mono">
        <p>© 2026 Minden jog fenntartva.</p>
        <div className="flex justify-center gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">GITHUB</a>
          <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-white transition-colors">DRIBBBLE</a>
        </div>
      </footer>

    </div>
  );
}