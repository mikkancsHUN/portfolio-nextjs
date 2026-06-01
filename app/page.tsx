import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from "@/components/Contact";
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-neutral-100 antialiased font-sans selection:bg-orange-500 selection:text-white">
      
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />

    </div>
  );
}