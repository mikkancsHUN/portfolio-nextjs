'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // 1. Futtasd le azonnal az ellenőrzést betöltéskor
  handleScroll();

  // 2. Iratkozz fel a görgetésre
  window.addEventListener('scroll', handleScroll);

  // 3. Takaríts el
  return () => window.removeEventListener('scroll', handleScroll);
}, []); // Az üres függőségtömb biztosítja, hogy ez csak egyszer fusson le

  return (
    <>
      {/* A NAV MAGASSÁGA MARADT A BUMSZLI (h-28), de a border-b mindig ott van!
        Görgetéskor csak a keret színe változik át átlátszóról lilára, így nincs ugrás!
      */}
      <nav className={`fixed top-0 left-0 w-full h-28 z-50 flex items-center transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-neutral-950/80 backdrop-blur-md border-[#d326d3]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent border-transparent'
      }`}>
        <div className="w-full max-w-6xl mx-auto px-6 flex justify-between items-center">
          
          {/* Mikipedia Logo */}
          <a href="#home" className="font-fredoka text-[2.2rem] font-light text-white tracking-tight z-50">
            <span className="text-[#d326d3]">Miki</span>pedia
          </a>

          {/* Navigáció és GitHub */}
          <div className="flex items-center">
            {/* Asztali menüsor */}
            <ul className="hidden md:flex items-center gap-8 mr-16 relative after:content-[''] after:absolute after:block after:h-[30px] after:w-[1px] after:-right-8 after:bg-[#d326d3]">
              {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="relative text-lg font-extralight text-white py-2 tracking-wide block transition-colors duration-250 hover:text-[#d326d3] group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d326d3] rounded-full transform scale-x-0 transition-transform duration-200 origin-left group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>

            {/* GitHub gomb (Asztali) */}
            <a 
              href="https://github.com/mikkancsHUN"  
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex text-[1.1rem] text-white px-7 py-3 border border-[#d326d3] items-center justify-center gap-2 transition-all duration-150 hover:bg-[#d326d3]/10 hover:border-[#d326d3]/80 active:scale-95"
            >
              GitHub
              <svg viewBox="0 0 98 96" width="22" height="20" xmlns="http://www.w3.org/2000/svg" className="fill-[#d326d3]/95">
                <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
              </svg>
            </a>

            {/* Hamburger gomb */}
            <button 
              onClick={toggleMenu}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50 focus:outline-none gap-[6px]"
              aria-label="Toggle Menu"
            >
              <span className={`w-8 h-[2px] bg-white transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
              <span className={`w-8 h-[2px] bg-white transition-all duration-200 ${isOpen ? 'opacity-0 h-0' : 'opacity-100'}`} />
              <span className={`w-8 h-[2px] bg-white transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobil Overlay Menü */}
      <div className={`fixed inset-0 bg-neutral-950/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col items-center gap-6">
          {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                onClick={toggleMenu}
                className="text-2xl font-light text-white tracking-widest hover:text-[#d326d3] transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a 
          href="https://github.com/mikkancsHUN"  
          target="_blank" 
          rel="noopener noreferrer"
          onClick={toggleMenu}
          className="text-[1.1rem] text-white px-7 py-3 border border-[#d326d3] flex items-center justify-center gap-2 mt-4 shadow-[0_0_15px_rgba(211,32,211,0.2)]"
        >
          GitHub
          <svg viewBox="0 0 98 96" width="22" height="20" xmlns="http://www.w3.org/2000/svg" className="fill-[#d326d3]/95">
            <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
          </svg>
        </a>
      </div>
    </>
  );
}