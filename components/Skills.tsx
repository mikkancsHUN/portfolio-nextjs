'use client';

import React from 'react';
import Image from 'next/image';

const skills = [
  { name: 'Next.js', color: 'rgba(255, 255, 255, 0.15)', img: '/images/Skills/nextjs.png', link: 'https://nextjs.org/' },
  { name: 'Vue.js', color: 'rgba(76, 175, 80, 0.25)', img: '/images/Skills/vue.png', link: 'https://vuejs.org/' },
  { name: 'Supabase', color: 'rgba(63, 207, 142, 0.25)', img: '/images/Skills/supabase.png', link: 'https://supabase.com/' },
  { name: 'TypeScript', color: 'rgba(0, 122, 255, 0.25)', img: '/images/Skills/typescript.png', link: 'https://www.typescriptlang.org/' },
  { name: 'React', color: 'rgba(97, 218, 251, 0.25)', img: '/images/Skills/React.png', link: 'https://react.dev/' },
  { name: 'React Native', color: 'rgba(97, 218, 251, 0.25)', img: '/images/Skills/react-native.png', link: 'https://reactnative.dev/' },
  { name: 'Tailwind CSS', color: 'rgba(56, 189, 248, 0.25)', img: '/images/Skills/tailwind.png', link: 'https://tailwindcss.com/' },
  { name: 'Node.js', color: 'rgba(65, 110, 82, 0.25)', img: '/images/Skills/Nodejs.png', link: 'https://nodejs.org/' },
  { name: 'Firebase', color: 'rgba(255, 93, 39, 0.25)', img: '/images/Skills/firebase.png', link: 'https://firebase.google.com/' },
  { name: 'AWS', color: 'rgba(255, 153, 0, 0.25)', img: '/images/Skills/aws.png', link: 'https://aws.amazon.com/' },
  { name: 'Serverless', color: 'rgba(255, 91, 70, 0.25)', img: '/images/Skills/serverless.png', link: 'https://www.serverless.com/' },
  { name: 'Figma', color: 'rgba(248, 113, 255, 0.25)', img: '/images/Skills/figma.png', link: 'https://www.figma.com/' },
  { name: 'JavaScript', color: 'rgba(255, 221, 51, 0.25)', img: '/images/Skills/JavaScript.png', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'HTML', color: 'rgba(255, 87, 34, 0.25)', img: '/images/Skills/html5-img.png', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', color: 'rgba(0, 122, 255, 0.25)', img: '/images/Skills/css.png', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full min-h-screen py-32 flex flex-col justify-center items-center px-6 selection:bg-[#d326d3]/30">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Szekció Cím */}
        <div className="text-center mb-16">
          <h2 className="font-fredoka text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
            My <span className="text-[#d326d3]">Skills</span>
          </h2>
          <div className="w-24 h-[2px] bg-[#d326d3] mx-auto rounded-full shadow-[0_0_10px_#d326d3]" />
          <p className="text-neutral-400 font-extralight tracking-wide mt-6 max-w-md mx-auto text-sm md:text-base">
            A tech stack és eszközök, amikkel a modern, vizuális webes élményeket életre keltem.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <a 
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 p-5 rounded-none flex items-center gap-4 transition-all duration-300 hover:bg-neutral-900/60 hover:-translate-y-1 block"
              // TÍPUSBIZTOS MEGOLDÁS: any helyett objektum-kényszerítést használunk, ami engedi az egyedi CSS változókat
              style={{
                '--hover-glow': skill.color,
              } as React.CSSProperties}
            >
              {/* Dinamikus háttérglow és border stílus */}
              <div 
                className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 border border-transparent pointer-events-none rounded-none shadow-[0_0_20px_var(--hover-glow)]"
                style={{ borderColor: skill.color }}
              />

              {/* NEXT.JS IMAGE MEGOLDÁS: Konténernek kell a relative, w-12, h-12 és shrink-0 */}
              <div className="relative w-12 h-12 bg-neutral-950/80 border border-neutral-800/80 p-2.5 transition-colors duration-300 group-hover:border-neutral-700 z-10 shrink-0">
                <Image 
                  src={skill.img} 
                  alt={`${skill.name} logo`} 
                  fill
                  sizes="48px"
                  className="object-contain p-2 filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  priority={index < 4} // Az első 4 kép azonnal betöltődik a jobb teljesítményért
                />
              </div>

              {/* Technológia neve */}
              <div className="relative z-10">
                <h3 className="text-base font-light text-white tracking-wide group-hover:text-white transition-colors duration-200">
                  {skill.name}
                </h3>
                <span className="text-[10px] font-extralight text-neutral-500 tracking-wider group-hover:text-neutral-400 transition-colors">
                  Learn more →
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}