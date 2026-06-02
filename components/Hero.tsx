'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="w-full min-h-screen md:h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between max-w-6xl mx-auto px-6 pt-24 pb-12 md:py-0 relative z-10 gap-12 md:gap-0"
    >
      
      {/* Bal / Alsó oldal: Szöveges bemutatkozás */}
      <div className="w-full md:max-w-[50vw] text-center md:text-left flex flex-col items-center md:items-start">
        <label className="text-xl sm:text-2xl text-[#b550e5] underline font-mono tracking-wide">
          Frontend Developer
        </label>
        
        <h1 className="text-4xl sm:text-6xl lg:text-[5rem] font-medium text-white leading-tight mt-4 max-w-[650px]">
          Hello, I am <span className="text-[#d326d3] font-bold">Miklós Kisfaludy</span>
        </h1>
        
        <p className="mt-4 mb-8 sm:mb-12 text-neutral-400 font-light leading-relaxed text-sm sm:text-base max-w-prose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, consequatur 
          necessitatibus omnis ab ut atque cum debitis animi laboriosam neque adipisci 
          iure repellat quis perspiciatis! Voluptate quod, qui odio perferendis debitis 
          asperiores nobis sint voluptates ipsam id rem.
        </p>
        
        <a 
          href="#" 
          className="text-white text-base sm:text-lg tracking-wider border border-[#d326d3] px-8 py-4 transition-all hover:bg-[#d326d3]/10 hover:shadow-[0_0_20px_rgba(211,32,211,0.3)] inline-block"
        >
          Download CV
        </a>
      </div>

      {/* Jobb / Felső oldal: Most már 100%, hogy nem ugrik össze desktopon */}
      {/* Jobb / Felső oldal: Korlátozott, tökéletes méretű avatar konténer */}
<div className="w-[50vw] max-w-[260px] sm:max-w-[300px] md:w-[30vw] md:max-w-[380px] lg:max-w-[420px] flex justify-center md:justify-end shrink-0">
  <Image 
    className="w-full h-auto object-cover aspect-[4/5] rounded-[100%_50%] border border-[#d326d3]/30 shadow-[0_0_40px_rgba(211,32,211,0.2)]" 
    src="/hero-avatar.jpg" 
    alt="Miklós Kisfaludy Avatar" 
    width={512} // Itt nyugodtan megadhatod a valódi 1024-et, a Next.js ebből fogja optimalizálni a minőséget
    height={512}
    priority 
  />
</div>

    </section>
  );
}