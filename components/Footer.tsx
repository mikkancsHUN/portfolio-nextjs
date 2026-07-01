"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="w-full bg-black/40 backdrop-blur-md border-t border-white/5 py-12 px-6 selection:bg-[#d326d3]/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center md:items-start gap-1"
        >
          <div className="font-fredoka text-lg font-light text-white tracking-tight">
            <span className="text-[#d326d3]">Miki</span>pedia
          </div>
          <p className="text-[10px] font-extralight text-neutral-500 tracking-[0.2em] uppercase">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-8">
          <a
            href="mailto:kismiki2000@gmail.com"
            className="text-[11px] font-light text-white/50 hover:text-[#d326d3] transition-colors duration-300 tracking-[0.1em] uppercase"
          >
            Email
          </a>
          <a
            href="https://github.com/mikkancsHUN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-light text-white/50 hover:text-[#d326d3] transition-colors duration-300 tracking-[0.1em] uppercase"
          >
            GitHub
          </a>
        </motion.div>

        <motion.a
          variants={itemVariants}
          href="#home"
          className="text-[10px] font-light text-white/40 tracking-[0.2em] uppercase hover:text-[#d326d3] transition-all duration-300 flex items-center gap-2 group"
        >
          Back to top
          <span className="inline-block group-hover:-translate-y-1 transition-transform duration-300">
            ↑
          </span>
        </motion.a>
      </motion.div>
    </footer>
  );
}
