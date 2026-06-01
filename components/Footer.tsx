import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="max-w-6xl mx-auto px-6 py-12 border-t border-neutral-900 text-center md:flex md:items-center md:justify-between text-neutral-500 text-xs font-mono">
      <p>© 2026 Minden jog fenntartva.</p>
      <div className="flex justify-center gap-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-white transition-colors">GITHUB</a>
        <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
      </div>
    </footer>
  );
}