"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center transition-all duration-500 ease-in-out border-b ${
          isScrolled
            ? "h-20 bg-neutral-950/70 backdrop-blur-2xl border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
            : "h-28 bg-transparent border-transparent"
        }`}
      >
        <div className="w-full max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a
            href="#home"
            className="font-fredoka text-[2.2rem] font-light text-white tracking-tight z-50 transition-all hover:opacity-80"
          >
            <span className="text-[#d326d3]">Miki</span>pedia
          </a>

          <div className="flex items-center">
            <ul className="hidden md:flex items-center gap-10 mr-16">
              {["Home", "Skills", "Projects", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="relative text-sm uppercase tracking-[0.2em] font-light text-white/70 py-2 block transition-all duration-300 hover:text-white group"
                    >
                      {item}
                      <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#d326d3] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0" />
                    </a>
                  </li>
                ),
              )}
            </ul>

            <a
              href="https://github.com/mikkancsHUN"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex text-[0.8rem] uppercase tracking-[0.2em] text-white px-8 py-3 border border-white/10 items-center justify-center gap-3 transition-all duration-500 hover:border-[#d326d3] hover:text-[#d326d3] hover:shadow-[0_0_20px_rgba(211,32,211,0.1)] active:scale-95"
            >
              GitHub
              <svg
                viewBox="0 0 98 96"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
              </svg>
            </a>
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col justify-center items-end w-10 h-10 z-50 focus:outline-none gap-[6px]"
              aria-label="Toggle Menu"
            >
              <span
                className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-8 rotate-45 translate-y-[8px]" : "w-8"}`}
              />
              <span
                className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "w-6"}`}
              />
              <span
                className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-8 -rotate-45 -translate-y-[8px]" : "w-4"}`}
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-neutral-950/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-out md:hidden ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {["Home", "Skills", "Projects", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="text-3xl font-light text-white tracking-[0.2em] uppercase hover:text-[#d326d3] transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/mikkancsHUN"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleMenu}
          className="text-sm text-white px-10 py-4 border border-[#d326d3] flex items-center justify-center gap-3 mt-4 hover:bg-[#d326d3]/10 transition-all active:scale-95 uppercase tracking-widest"
        >
          GitHub
          <svg
            viewBox="0 0 98 96"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white"
          >
            <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
          </svg>
        </a>
      </div>
    </>
  );
}
