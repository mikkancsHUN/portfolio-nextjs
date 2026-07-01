"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    description:
      "A full-stack SaaS dashboard built with Next.js and Supabase. Features real-time data visualization, secure user authentication, and dynamic filtering within a modern, minimalist interface.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    img: "/images/Projects/b2b-7.png",
    imgHover: "/images/Projects/b2b-5.png",
    liveLink:
      "https://b2b-saas-dashboard-js4sdqobt-kismiki2000-7409s-projects.vercel.app/",
    gitLink: "https://github.com/mikkancsHUN/b2b-saas-dashboard",
  },
  {
    title: "Planet Saints",
    description:
      "A luxury e-commerce web application inspired by Saints Row. Focuses on premium user experience, responsive design, and sophisticated animations for high brand engagement.",
    tags: ["Vue.js", "AWS", "Anime.JS"],
    img: "/images/Projects/planetsaints-9.png",
    imgHover: "/images/Projects/planetsaints-1.png",
    liveLink: "http://planet-saints.s3-website.eu-north-1.amazonaws.com/",
    gitLink: "https://github.com/mikkancsHUN/Examensarbete",
  },
  {
    title: "My Movie Database",
    description:
      "An interactive movie discovery application powered by the TMDB API. It includes advanced search, category filtering, and a favorites management system with complex state handling.",
    tags: ["HTML", "CSS", "JavaScript", "TMDB API"],
    img: "/images/Projects/movie-db-1.png",
    imgHover: "/images/Projects/movie-db-8.png",
    liveLink: "https://my-movie-database-two.vercel.app/",
    gitLink: "https://github.com/mikkancsHUN/MyMovieDatabase",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-24 flex flex-col justify-center items-center px-6 selection:bg-[#d326d3]/30 overflow-x-hidden"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-fredoka text-4xl md:text-5xl font-light text-white tracking-wide mb-4"
          >
            Featured <span className="text-[#d326d3]">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-[2px] bg-[#d326d3] mx-auto rounded-full shadow-[0_0_10px_#d326d3]"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-neutral-400 font-extralight tracking-wide mt-6 max-w-md mx-auto text-sm md:text-base"
          >
            Showcasing my versatility: from robust SaaS architectures to
            premium, design-driven web experiences.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col gap-16 md:gap-24"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Szöveg blokk: finomított slide animáció */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 }, // -50/50 az elegánsabb mozgáshoz
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
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
                      <span
                        key={i}
                        className="text-[10px] text-white/60 border border-white/10 px-2 py-0.5 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-[0.2em] uppercase text-white border border-[#d326d3]/30 px-8 py-3 
          hover:bg-[#d326d3] hover:text-white hover:border-[#d326d3] transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white border border-white/20 px-6 py-3 hover:border-[#d326d3] hover:text-[#d326d3] transition-all"
                  >
                    View Code
                  </a>
                </div>
              </motion.div>

              {/* Kép blokk: scale animáció */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 }, // Kezdő méret 0.9-ről, hogy lágyabb legyen
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.8,
                      delay: 0.2, // Picit csökkentettem a delay-t a szinkron miatt
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="w-full md:w-1/2 group relative aspect-[16/10] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)] border border-white/5"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <Image
                  src={project.imgHover}
                  alt={`${project.title} hover`}
                  fill
                  className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
