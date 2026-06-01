import React from 'react';
import Image from 'next/image';

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-900">
      
      {/* Szekció Cím */}
      <div className="mb-16">
        <p className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-2">// ESZKÖZTÁR</p>
        <h2 className="text-3xl font-bold tracking-tight">Technologies, Tools and Frameworks I've Used</h2>
      </div>

      {/* A RÉSZ: A 3 FŐ KATEGÓRIA KÁRTYA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-neutral-950 border border-neutral-900 p-8 rounded-3xl hover:border-neutral-800 transition-all group">
          <div className="text-xs font-mono text-neutral-500 mb-3">01 / CORE STRATEGY</div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">Frontend Engineering</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">Modern, reszponzív és villámgyors felületek lefejlesztése React (Next.js) és Vue (Nuxt) alapokon.</p>
        </div>
        
        <div className="bg-neutral-950 border border-neutral-900 p-8 rounded-3xl hover:border-neutral-800 transition-all group">
          <div className="text-xs font-mono text-neutral-500 mb-3">02 / ARCHITECTURE</div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">SaaS & Dashboard UI</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">Komplex adatszerkezetek, állapotkezelés (state management) és üzleti logikák tiszta leképezése.</p>
        </div>

        <div className="bg-neutral-950 border border-neutral-900 p-8 rounded-3xl hover:border-neutral-800 transition-all group">
          <div className="text-xs font-mono text-neutral-500 mb-3">03 / VISUAL ENGINEERING</div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">Pixel-Perfect Styling</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">Dizájnrendszerek és Figma tervek milliméter pontos átültetése kódba a Tailwind CSS erejével.</p>
        </div>
      </div>

      {/* B RÉSZ: A te vizuális ikonrácsod, most már a valódi képeiddel és egyedi hover árnyékaiddal */}
<div className="flex flex-wrap justify-center items-center gap-3 max-w-4xl mx-auto">
  {[
    { name: 'Next.js', color: 'rgba(255, 255, 255, 0.25)', img: '/images/Skills/nextjs.png', link: 'https://nextjs.org/' },
    { name: 'Vue.js', color: 'rgba(76, 175, 80, 0.35)', img: '/images/Skills/vue.png', link: 'https://vuejs.org/' },
    { name: 'Supabase', color: 'rgba(63, 207, 142, 0.35)', img: '/images/Skills/supabase.png', link: 'https://supabase.com/' },
    { name: 'TypeScript', color: 'rgba(0, 122, 255, 0.35)', img: '/images/Skills/typescript.png', link: 'https://www.typescriptlang.org/' },
    { name: 'React', color: 'rgba(97, 218, 251, 0.35)', img: '/images/Skills/React.png', link: 'https://react.dev/' },
    { name: 'React Native', color: 'rgba(97, 218, 251, 0.35)', img: '/images/Skills/react-native.png', link: 'https://reactnative.dev/' },
    { name: 'Tailwind CSS', color: 'rgba(56, 189, 248, 0.35)', img: '/images/Skills/tailwind.png', link: 'https://tailwindcss.com/' },
    { name: 'Node.js', color: 'rgba(65, 110, 82, 0.35)', img: '/images/Skills/Nodejs.png', link: 'https://nodejs.org/' },
    { name: 'Firebase', color: 'rgba(255, 93, 39, 0.35)', img: '/images/Skills/firebase.png', link: 'https://firebase.google.com/' },
    { name: 'AWS', color: 'rgba(255, 153, 0, 0.35)', img: '/images/Skills/aws.png', link: 'https://aws.amazon.com/' },
    { name: 'Serverless', color: 'rgba(255, 91, 70, 0.35)', img: '/images/Skills/serverless.png', link: 'https://www.serverless.com/' },
    { name: 'Figma', color: 'rgba(248, 113, 255, 0.35)', img: '/images/Skills/figma.png', link: 'https://www.figma.com/' },
    { name: 'JavaScript', color: 'rgba(255, 221, 51, 0.35)', img: '/images/Skills/JavaScript.png', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'HTML', color: 'rgba(255, 87, 34, 0.35)', img: '/images/Skills/html5-img.png', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', color: 'rgba(0, 122, 255, 0.35)', img: '/images/Skills/css.png', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  ].map((skill) => (
    <a
      key={skill.name}
      href={skill.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ '--hover-color': skill.color } as React.CSSProperties}
      className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl bg-neutral-950/40 border border-neutral-900/80 shadow-md transition-all duration-300 hover:scale-105 hover:border-neutral-800 hover:shadow-[0_0_25px_var(--hover-color)] group relative cursor-pointer"
    >
      
      {/* LOGÓ */}
      <Image 
        src={skill.img} 
        alt={skill.name}
        width={40}
        height={40}
        className={`object-contain h-[52%] transition-transform duration-300 group-hover:scale-110 ${
          skill.name === 'TypeScript' ? 'w-[42%]' : 
          skill.name === 'Next.js' ? 'w-[60%]' : 
          skill.name === 'Tailwind CSS' ? 'w-[60%]' : 'w-[52%]'
        }`}
      />

      {/* TOOLTIP */}
      <div className="absolute bottom-full mb-2 z-30 pointer-events-none opacity-0 scale-95 translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-200">
        <div className="bg-neutral-900 text-neutral-200 border border-neutral-800 text-[10px] font-mono py-1 px-2.5 rounded-md shadow-xl whitespace-nowrap">
          {skill.name}
        </div>
        <div className="w-1.5 h-1.5 bg-neutral-900 border-r border-b border-neutral-800 rotate-45 mx-auto -mt-1" />
      </div>

    </a>
  ))}
</div>

    </section>
  );
}