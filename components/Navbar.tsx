'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-4 bg-neutral-950/70 backdrop-blur-md border-b border-neutral-900/50' 
        : 'py-6 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo – a tetejére (Hero-hoz) visz */}
        <a href="#hero" className="font-mono text-sm font-bold tracking-tight text-neutral-200 hover:text-orange-500 transition-colors">
          {"// "}PORTFOLIO
        </a>

        {/* Összes Navigációs Link */}
        <div className="flex gap-6 sm:gap-8">
          <a href="#hero" className="text-xs font-mono text-neutral-400 hover:text-neutral-200 transition-colors">
            Home
          </a>
          <a href="#skills" className="text-xs font-mono text-neutral-400 hover:text-neutral-200 transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-xs font-mono text-neutral-400 hover:text-neutral-200 transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-xs font-mono text-neutral-400 hover:text-neutral-200 transition-colors">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}