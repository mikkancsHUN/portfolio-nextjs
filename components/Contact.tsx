'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Szimulált 1.5 másodperces küldés
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-32 border-t border-neutral-900 text-center">
      <div className="max-w-xl mx-auto">
        
        {/* Fejléc rész */}
        <p className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-3">
          {"// "} Kapcsolat
        </p>
        <h2 className="text-4xl font-bold tracking-tight mb-6">
          Indítsunk el valami újat!
        </h2>
        <p className="text-neutral-400 text-sm leading-relaxed mb-16">
          Van egy izgalmas projekted, vagy csak egy kérdésed? Töltsd ki az alábbi űrlapot, és hamarosan válaszolok.
        </p>

        {/* Középre igazított, Borderless Form */}
        <form onSubmit={handleSubmit} className="space-y-10 text-left">
          
          {/* Név mező */}
          <div className="relative">
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder=" " // Trükk a label animációhoz, ha később szeretnéd
              className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-neutral-200 placeholder-neutral-700 focus:outline-none focus:border-orange-500 transition-colors font-mono"
            />
            <span className="absolute left-0 -top-3.5 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              Teljes Név
            </span>
          </div>

          {/* Email mező */}
          <div className="relative">
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder=" "
              className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-neutral-200 placeholder-neutral-700 focus:outline-none focus:border-orange-500 transition-colors font-mono"
            />
            <span className="absolute left-0 -top-3.5 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              Email Cím
            </span>
          </div>

          {/* Üzenet mező */}
          <div className="relative">
            <textarea 
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Miben segíthetek?"
              className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-neutral-200 placeholder-neutral-700 focus:outline-none focus:border-orange-500 transition-colors font-mono resize-none mt-2"
            />
            <span className="absolute left-0 -top-3.5 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              Üzenet
            </span>
          </div>

          {/* Küldés gomb - Minimalista, gomb-szerű kialakítás */}
          <div className="pt-4 text-center">
            <button 
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="px-12 py-4 bg-neutral-950 border border-neutral-800 rounded-2xl text-sm font-medium hover:border-neutral-700 hover:text-orange-500 transition-all font-mono cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed inline-block"
            >
              {status === 'idle' && '[ Üzenet küldése ]'}
              {status === 'sending' && 'Küldés folyamatban...'}
              {status === 'success' && '✓ Sikeresen elküldve!'}
            </button>
          </div>
        </form>

        {/* Apró social linkek legalul */}
        <div className="flex justify-center gap-8 mt-20 pt-8 border-t border-neutral-900/40">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-neutral-500 hover:text-neutral-300 transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-neutral-500 hover:text-neutral-300 transition-colors">LinkedIn</a>
        </div>

      </div>
    </section>
  );
}