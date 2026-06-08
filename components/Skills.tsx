"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Next.js",
    color: "rgba(255, 255, 255, 0.15)",
    img: "/images/Skills/nextjs.png",
    link: "https://nextjs.org/",
  },
  {
    name: "Vue.js",
    color: "rgba(76, 175, 80, 0.25)",
    img: "/images/Skills/vue.png",
    link: "https://vuejs.org/",
  },
  {
    name: "Supabase",
    color: "rgba(63, 207, 142, 0.25)",
    img: "/images/Skills/supabase.png",
    link: "https://supabase.com/",
  },
  {
    name: "TypeScript",
    color: "rgba(0, 122, 255, 0.25)",
    img: "/images/Skills/typescript.png",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    color: "rgba(97, 218, 251, 0.25)",
    img: "/images/Skills/React.png",
    link: "https://react.dev/",
  },
  {
    name: "React Native",
    color: "rgba(97, 218, 251, 0.25)",
    img: "/images/Skills/react-native.png",
    link: "https://reactnative.dev/",
  },
  {
    name: "Tailwind CSS",
    color: "rgba(56, 189, 248, 0.25)",
    img: "/images/Skills/tailwind.png",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Node.js",
    color: "rgba(65, 110, 82, 0.25)",
    img: "/images/Skills/Nodejs.png",
    link: "https://nodejs.org/",
  },
  {
    name: "Firebase",
    color: "rgba(255, 93, 39, 0.25)",
    img: "/images/Skills/firebase.png",
    link: "https://firebase.google.com/",
  },
  {
    name: "AWS",
    color: "rgba(255, 153, 0, 0.25)",
    img: "/images/Skills/aws.png",
    link: "https://aws.amazon.com/",
  },
  {
    name: "Serverless",
    color: "rgba(255, 91, 70, 0.25)",
    img: "/images/Skills/serverless.png",
    link: "https://www.serverless.com/",
  },
  {
    name: "Figma",
    color: "rgba(248, 113, 255, 0.25)",
    img: "/images/Skills/figma.png",
    link: "https://www.figma.com/",
  },
  {
    name: "JavaScript",
    color: "rgba(255, 221, 51, 0.25)",
    img: "/images/Skills/JavaScript.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "HTML",
    color: "rgba(255, 87, 34, 0.25)",
    img: "/images/Skills/html5-img.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    color: "rgba(0, 122, 255, 0.25)",
    img: "/images/Skills/css.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-24 flex flex-col justify-center items-center px-6 selection:bg-[#d326d3]/30"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-fredoka text-4xl md:text-5xl font-light text-white tracking-wide mb-4"
          >
            My <span className="text-[#d326d3]">Skills</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
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
            A tech stack és eszközök, amikkel a modern, vizuális webes
            élményeket életre keltem.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-black/20 backdrop-blur-md border border-white/5 shadow-xl p-5 flex items-center gap-4 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 block"
              style={{ "--hover-glow": skill.color } as React.CSSProperties}
            >
              <div
                className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 border pointer-events-none shadow-[0_0_20px_var(--hover-glow)]"
                style={{ borderColor: skill.color }}
              />

              <div className="relative w-12 h-12 p-2.5 z-10 shrink-0">
                <Image
                  src={skill.img}
                  alt={skill.name}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-base font-light text-white tracking-wide">
                  {skill.name}
                </h3>
                <span className="text-[10px] font-extralight text-white/40 tracking-wider">
                  Learn more →
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
