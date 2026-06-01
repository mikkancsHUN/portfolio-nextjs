import React from 'react';

export default function Navbar() {
  return (
    <nav className="h-20 sticky top-0 z-50 backdrop-blur-md bg-[#0B0B0C]/70 border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="font-mono text-sm tracking-tighter font-bold">
          PORTFOLIO<span className="text-orange-500">.</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs font-mono text-neutral-400">
          <a href="#projects" className="hover:text-white transition-colors duration-200">PROJEKTEK</a>
          <a href="#skills" className="hover:text-white transition-colors duration-200">SKILLS</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">KAPCSOLAT</a>
        </div>
        <div>
          <a href="#contact" className="text-xs font-mono border border-neutral-800 bg-neutral-900 px-4 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            GET IN TOUCH
          </a>
        </div>
      </div>
    </nav>
  );
}