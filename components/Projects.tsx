'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Képek importálása (feltételezve, hogy a public mappában vannak)
// Mivel a fájlnevek a te Vue projektjeidből jönnek, ezeket írd át a valós elérési útra!
const projects = [
  {
    title: 'SaaS Analytics Dashboard',
    description: 'A full-stack SaaS dashboard built with Next.js and Supabase. Features real-time data visualization, secure user authentication, and dynamic filtering within a modern, minimalist interface.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    img: '/images/Projects/shuiapp.png', 
    liveLink: '#',
    gitLink: '#'
  },
  {
    title: 'Planet Saints',
    description: 'A luxury e-commerce web application inspired by Saints Row. Focuses on premium user experience, responsive design, and sophisticated animations for high brand engagement.',
    tags: ['Vue.js', 'AWS', 'Anime.JS'],
    img: '/images/Projects/planetsaints.png',
    liveLink: '#',
    gitLink: '#'
  },
  {
    title: 'My Movie Database',
    description: 'An interactive movie discovery application powered by the TMDB API. It includes advanced search, category filtering, and a favorites management system with complex state handling.',
    tags: ['HTML', 'CSS', 'JavaScript', 'TMDB API'],
    img: '/images/Projects/movie-db.png',
    liveLink: '#',
    gitLink: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 flex flex-col justify-center items-center px-6 selection:bg-[#d326d3]/30 overflow-x-hidden">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* ANIMÁLT CÍMSOR */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-fredoka text-4xl md:text-5xl font-light text-white tracking-wide mb-4"
          >
            Featured <span className="text-[#d326d3]">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-[2px] bg-[#d326d3] mx-auto rounded-full shadow-[0_0_10px_#d326d3]" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-neutral-400 font-extralight tracking-wide mt-6 max-w-md mx-auto text-sm md:text-base"
          >
            Válogatott munkáim, ahol a frontend logikát ötvöztem a látványos felhasználói élménnyel.
          </motion.p>
        </div>

        {/* PROJEKTEK LISTÁJA - Animált container */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="flex flex-col gap-16 md:gap-24"
        >
          {projects.map((project, index) => (
  <motion.div 
    key={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }}
    className={`flex flex-col gap-8 items-center ${
      index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
    }`}
  >
    {/* 1. KÉP: Oldalról jön (a páratlan indexnél jobbról, párosnál balról) */}
    <motion.div 
      variants={{
        hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
      }}
      className="w-full md:w-1/2 group relative aspect-[16/10] overflow-hidden 
           shadow-[0_0_30px_rgba(0,0,0,0.3)] border border-white/5"
    >
      <Image 
        src={project.img}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </motion.div>

    {/* 2. SZÖVEG: Helyben "kicsírázik" (fade in + finom y-eltolás) */}
    <motion.div 
      variants={{
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.7, 
        delay: 0.3, // Egy picit később, mint a kép
        ease: [0.16, 1, 0.3, 1] } }
      }}
      className="w-full md:w-1/2 flex flex-col justify-center"
    >
      <div className="flex items-center gap-4 mb-4">
    <div className="h-[1px] w-8 bg-[#d326d3]" />
    <span className="font-fredoka text-[10px] text-white/50 tracking-[0.3em] uppercase">
      Project 0{index + 1}
    </span>
  </div>
      <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
        {project.title}
      </h3>

      <div className="bg-black/20 backdrop-blur-md border border-white/5 p-6 shadow-xl">
        <p className="text-neutral-300 font-extralight leading-relaxed text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-[10px] text-white/60 border border-white/10 px-2 py-0.5 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>

                <div className="flex items-center gap-4 mt-6">
                  <a href={project.liveLink} 
   className="text-xs tracking-[0.2em] uppercase text-white border border-[#d326d3]/30 px-8 py-3 
              hover:bg-[#d326d3] hover:text-white hover:border-[#d326d3] transition-all duration-300">
  Live Demo
</a>
                  <a href={project.gitLink} className="text-xs text-white border border-white/20 px-6 py-3 hover:border-[#d326d3] hover:text-[#d326d3] transition-all">
                    View Code
                  </a>
                </div>
              </motion.div>
  </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}