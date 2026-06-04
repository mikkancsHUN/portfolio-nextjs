'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="w-full py-32 px-6 bg-neutral-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* BAL OLDAL: A neved, elcsúsztatva */}
        <div className="flex flex-col w-full md:w-1/3">
          <h2 className="text-[#d326d3] text-xs uppercase tracking-[0.3em] mb-8">About me</h2>
          
          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-bold text-white leading-none"
            >
              MIKLÓS
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 40 }} // Itt az elcsúsztatás
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold text-white/10 leading-none mt-4"
            >
              KISFALUDY
            </motion.h1>
          </div>
        </div>

        {/* JOBB OLDAL: Szakmai tartalom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="w-full md:w-2/3 space-y-8"
        >
          <p className="text-white/80 font-light text-xl md:text-2xl leading-relaxed">
            Frontend fejlesztő vagyok, aki a technikai precizitást a prémium dizájnnal ötvözi. 
            Nemcsak felületeket építek, hanem digitális élményeket, ahol minden pixelnek funkciója és karaktere van.
          </p>
          
          <p className="text-neutral-400 font-light text-lg leading-relaxed">
            Fő fókuszom a modern webtechnológiák (React, TypeScript, Next.js) alkalmazása, 
            legyen szó SaaS termékek fejlesztéséről vagy komplex webes alkalmazásokról. 
            Célom, hogy olyan megoldásokat szállítsak, amelyek nemcsak gyorsak és skálázhatók, 
            de vizuálisan is kiemelkednek a piaci zajból.
          </p>

          {/* Finom elválasztó */}
          <div className="w-full h-[1px] bg-white/10 mt-12" />
          
          {/* Linkek */}
          <div className="flex gap-8">
            <a href="/cv.pdf" target="_blank" className="text-xs uppercase tracking-[0.2em] text-[#d326d3] hover:text-white transition-all">Resume</a>
            <a href="https://github.com/mikkancsHUN" target="_blank" className="text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-all">GitHub</a>
            <a href="https://linkedin.com/in/..." target="_blank" className="text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-all">LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}