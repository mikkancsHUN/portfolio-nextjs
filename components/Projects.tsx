'use client';

import React from 'react';
import Image from 'next/image';

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
    <section id="projects" className="w-full min-h-screen py-32 flex flex-col justify-center items-center px-6 selection:bg-[#d326d3]/30">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Szekció Cím */}
        <div className="text-center mb-20">
          <h2 className="font-fredoka text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
            Featured <span className="text-[#d326d3]">Projects</span>
          </h2>
          <div className="w-24 h-[2px] bg-[#d326d3] mx-auto rounded-full shadow-[0_0_10px_#d326d3]" />
          <p className="text-neutral-400 font-extralight tracking-wide mt-6 max-w-md mx-auto text-sm md:text-base">
            Válogatott munkáim, ahol a frontend logikát ötvöztem a látványos felhasználói élménnyel.
          </p>
        </div>

        {/* Projektek Listája */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Projekt Kép Konténer */}
              <div className="w-full md:w-1/2 group relative aspect-[16/10] bg-neutral-900 border border-neutral-800/80 overflow-hidden rounded-none shadow-2xl">
                <div className="absolute inset-0 bg-[#d326d3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                
                <Image 
                  src={project.img}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover filter brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Projekt Szöveges Tartalom */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="font-fredoka text-xs font-light text-[#d326d3] tracking-widest uppercase mb-2">
                  Project 0{index + 1}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide mb-4 hover:text-[#d326d3] transition-colors duration-200">
                  {project.title}
                </h3>

                <div className="bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/40 p-6 rounded-none mb-6 relative shadow-lg">
                  <p className="text-neutral-400 font-extralight leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs font-extralight text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-none tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm text-neutral-950 bg-white font-medium px-6 py-3 rounded-none transition-all duration-150 hover:bg-[#d326d3] hover:text-white active:scale-95"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm text-white border border-neutral-800 px-6 py-3 rounded-none transition-all duration-150 hover:border-[#d326d3] hover:text-[#d326d3] active:scale-95"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}