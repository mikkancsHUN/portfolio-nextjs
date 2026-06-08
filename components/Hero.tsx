"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between max-w-6xl mx-auto px-6 pt-24 pb-12 gap-12"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:max-w-[50vw] text-center md:text-left flex flex-col items-center md:items-start"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d326d3] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d326d3]"></span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
            Available for new projects
          </span>
        </motion.div>

        <motion.span
          variants={itemVariants}
          className="text-sm tracking-[0.3em] uppercase text-[#d326d3] font-light"
        >
          Frontend Developer
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-[5rem] font-medium text-white leading-tight mt-6 max-w-[650px]"
        >
          Building <span className="text-white/80 font-light">digital</span>{" "}
          <br />
          <span className="text-[#d326d3] font-bold">experiences</span>.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 mb-10 text-neutral-400 font-light leading-relaxed text-sm sm:text-base max-w-[450px]"
        >
          Modern, prémium felhasználói felületeket építek React, TypeScript és
          Tailwind technológiákkal. Célom a tiszta kód, a tökéletes animációk és
          olyan digitális termékek létrehozása.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-8 mb-10 border-l border-[#d326d3]/30 pl-6"
        >
          <div>
            <div className="text-2xl font-bold text-white">3+</div>
            <div className="text-[9px] uppercase tracking-widest text-neutral-500">
              Years Exp.
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">15+</div>
            <div className="text-[9px] uppercase tracking-widest text-neutral-500">
              Projects
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-6 mt-4"
        >
          <a
            href="#projects"
            className="group relative text-white px-8 py-4 text-xs tracking-[0.2em] uppercase border border-[#d326d3] transition-all hover:bg-[#d326d3]/10"
          >
            View Projects
            <span className="absolute inset-0 border border-[#d326d3] translate-x-1 translate-y-1 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            className="text-white/60 px-8 py-4 text-xs tracking-[0.2em] uppercase border border-white/10 transition-all hover:border-white/30 hover:text-white"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-[50vw] max-w-[260px] md:max-w-[380px] shrink-0"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="w-full h-auto object-cover aspect-[4/5] rounded-[100%_50%] border border-[#d326d3]/30 shadow-[0_0_40px_rgba(211,32,211,0.2)]"
            src="/hero-avatar.jpg"
            alt="Miklós Kisfaludy"
            width={512}
            height={512}
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
