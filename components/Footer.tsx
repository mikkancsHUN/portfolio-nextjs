'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-950 border-t border-[#d326d3]/10 py-12 px-6 selection:bg-[#d326d3]/30">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Bal oldal: Logó és copyright egybe gyúrva */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-fredoka text-xl font-light text-white tracking-tight">
            <span className="text-[#d326d3]">Miki</span>pedia
          </div>
          <p className="text-[11px] font-extralight text-neutral-500 tracking-wider">
            © {currentYear} Mikipedia. Built with Next.js & Tailwind.
          </p>
        </div>

        {/* KÖZÉP: Aktív Social / Elérhetőség linkek mini verzióban */}
        <div className="flex items-center gap-6 my-2 md:my-0">
          <a 
            href="mailto:your.email@example.com" 
            className="text-sm font-extralight text-neutral-400 hover:text-[#d326d3] transition-colors duration-200 tracking-wide"
          >
            Email
          </a>
          <span className="text-neutral-800">|</span>
          <a 
            href="https://github.com/mikkancsHUN" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm font-extralight text-neutral-400 hover:text-[#d326d3] transition-colors duration-200 tracking-wide"
          >
            GitHub
          </a>
          {/* Ha van LinkedIned, ide be tudod dobni ugyanígy */}
        </div>

        {/* Jobb oldal: Vissza a tetejére gomb */}
        <div>
          <a 
            href="#home" 
            className="group text-xs font-extralight text-neutral-400 tracking-widest uppercase hover:text-[#d326d3] transition-colors duration-200 flex items-center gap-2"
          >
            Back to top 
            <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">↑</span>
          </a>
        </div>

      </div>
    </footer>
  );
}