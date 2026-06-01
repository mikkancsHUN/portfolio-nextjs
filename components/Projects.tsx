'use client';

import React, { useEffect, useRef } from 'react';

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Csak akkor lépünk működésbe, ha az elem belép a képernyőre
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Miután megkapta a 'show' osztályt, leiratkozunk erről az elemről, 
            // mert többet már nem kell bántanunk (így még a teljesítmény is jobb!)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        // -2% eléri, hogy szinte azonnal elinduljon az animáció, 
        // amint a kártya felbukkan a képernyő legalján
        rootMargin: '0px 0px -2% 0px', 
      }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-900">
      <div className="mb-20">
        <p className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-2">// Portfólió</p>
        <h2 className="text-3xl font-bold tracking-tight">Kiemelt Projektek</h2>
      </div>

      <div className="space-y-32">
        {/* 1. Projekt: Kép balra, szöveg jobbra */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 aspect-video bg-neutral-950 border border-neutral-900 rounded-3xl flex items-center justify-center text-neutral-600 font-mono text-xs hover:border-neutral-800 transition-colors reveal-left">
            [ Project One UI Preview ]
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">2026 • B2B Application</span>
            <h3 className="text-2xl font-bold mb-4">SaaS Analytics Dashboard</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Valós idejű diagramok, pénzügyi adatok követése és szigorú Next.js App Router architektúra.
            </p>
            <div className="flex gap-2">
              <span className="text-[10px] font-mono bg-neutral-900 px-2.5 py-1 rounded-full text-neutral-400">Next.js</span>
              <span className="text-[10px] font-mono bg-neutral-900 px-2.5 py-1 rounded-full text-neutral-400">Tailwind</span>
            </div>
          </div>
        </div>

        {/* 2. Projekt: Kép jobbra, szöveg balra */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 aspect-video bg-neutral-950 border border-neutral-900 rounded-3xl flex items-center justify-center text-neutral-600 font-mono text-xs hover:border-neutral-800 transition-colors reveal-right">
            [ Project Two UI Preview ]
          </div>
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

        {/* 3. ÚJ Projekt: Kép újra balra, szöveg jobbra */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 aspect-video bg-neutral-950 border border-neutral-900 rounded-3xl flex items-center justify-center text-neutral-600 font-mono text-xs hover:border-neutral-800 transition-colors reveal-left">
            [ Project Three UI Preview ]
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">2026 • Full-Stack App</span>
            <h3 className="text-2xl font-bold mb-4">E-Commerce Marketplace</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Nagy teljesítményű digitális piactér Stripe fizetési rendszerrel, valós idejű raktárkészlet-kezeléssel és Supabase adatbázis-háttérrel.
            </p>
            <div className="flex gap-2">
              <span className="text-[10px] font-mono bg-neutral-900 px-2.5 py-1 rounded-full text-neutral-400">Next.js</span>
              <span className="text-[10px] font-mono bg-neutral-900 px-2.5 py-1 rounded-full text-neutral-400">Supabase</span>
              <span className="text-[10px] font-mono bg-neutral-900 px-2.5 py-1 rounded-full text-neutral-400">Tailwind</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}