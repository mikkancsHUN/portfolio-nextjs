'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    
    setTimeout(() => {
      setStatus('Message sent successfully! 🚀');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-neutral-950 py-32 flex flex-col justify-center items-center px-6 selection:bg-[#d326d3]/30 pt-[112px]">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Szekció Cím */}
        <div className="text-center mb-16">
          <h2 className="font-fredoka text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
            Get In <span className="text-[#d326d3]">Touch</span>
          </h2>
          <div className="w-24 h-[2px] bg-[#d326d3] mx-auto rounded-full shadow-[0_0_10px_#d326d3]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
          
          {/* BAL OLDAL: Erős felhívás */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide leading-tight">
              Let&apos;s talk about something <span className="text-[#d326d3]">great</span>.
            </h3>
            <p className="text-neutral-400 font-extralight leading-relaxed text-sm md:text-base">
              Nyitott vagyok frontend és full-stack lehetőségekre, izgalmas projektekre vagy akár csak egy kötetlen szakmai beszélgetésre. 
            </p>
            <p className="text-neutral-500 font-extralight leading-relaxed text-sm md:text-base">
              Dobj egy üzenetet az űrlapon keresztül, és 24 órán belül válaszolok! A közösségi linkjeimet pedig kicsit lejjebb, a lap alján találod.
            </p>
          </div>

          {/* JOBB OLDAL: Contact Form */}
          <form onSubmit={handleSubmit} className="bg-neutral-900/20 backdrop-blur-sm border border-neutral-800/50 p-6 md:p-8 flex flex-col gap-5 shadow-2xl relative">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs text-neutral-400 font-extralight uppercase tracking-widest">Name</label>
              <input 
                type="text" id="name" required value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800/80 px-4 py-3 text-sm text-white rounded-none focus:outline-none focus:border-[#d326d3]/60 focus:shadow-[0_0_15px_rgba(211,32,211,0.1)] transition-all font-light"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs text-neutral-400 font-extralight uppercase tracking-widest">Email</label>
              <input 
                type="email" id="email" required value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800/80 px-4 py-3 text-sm text-white rounded-none focus:outline-none focus:border-[#d326d3]/60 focus:shadow-[0_0_15px_rgba(211,32,211,0.1)] transition-all font-light"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs text-neutral-400 font-extralight uppercase tracking-widest">Message</label>
              <textarea 
                id="message" required rows={4} value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800/80 px-4 py-3 text-sm text-white rounded-none focus:outline-none focus:border-[#d326d3]/60 focus:shadow-[0_0_15px_rgba(211,32,211,0.1)] transition-all font-light resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button type="submit" className="w-full bg-white text-neutral-950 font-medium py-4 rounded-none mt-2 transition-all duration-150 hover:bg-[#d326d3] hover:text-white active:scale-[0.98] text-sm tracking-wider uppercase">
              Send Message
            </button>

            {status && <p className="text-xs text-center font-light tracking-wide mt-2 text-[#d326d3] animate-pulse">{status}</p>}
          </form>

        </div>
      </div>
    </section>
  );
}