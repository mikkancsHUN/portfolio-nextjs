"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { log } from "console";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY!,
      );

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send, try again.");
      if (error instanceof Error) {
        console.error("EmailJS Error Message:", error.message);
      } else {
        console.error("EmailJS Error Object:", error);
      }
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-32 flex flex-col justify-center items-center px-6 selection:bg-[#d326d3]/30 bg-black/40"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-[1px] bg-[#d326d3] shadow-[0_0_15px_#d326d3] z-20 origin-left"
        viewport={{ once: true, amount: 0.5 }}
      />

      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-fredoka text-4xl md:text-5xl font-light text-white tracking-wide mb-4"
          >
            Get In <span className="text-[#d326d3]">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-[2px] bg-[#d326d3] mx-auto rounded-full shadow-[0_0_10px_#d326d3]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-light text-white tracking-wide md:tracking-tighter leading-tight md:mb-6">
              Let&apos;s talk about something{" "}
              <span className="text-[#d326d3]">great</span>.
            </h3>
            <p className="text-neutral-400 font-extralight leading-relaxed text-sm md:text-base">
              Nyitott vagyok frontend és full-stack lehetőségekre, izgalmas
              projektekre vagy akár csak egy kötetlen szakmai beszélgetésre.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-black/20 backdrop-blur-md border border-white/5 p-8 flex flex-col gap-5 shadow-2xl"
          >
            {["name", "email", "message"].map((field) => (
              <div key={field} className="flex flex-col gap-2">
                <label className="text-[10px] text-white/50 uppercase tracking-widest">
                  {field}
                </label>
                {field === "message" ? (
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d326d3] transition-all resize-none"
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={field === "name" ? formData.name : formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d326d3] transition-all"
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={status !== ""}
              className={`w-full border py-4 transition-all duration-500 uppercase tracking-widest text-xs mt-2
                ${
                  status === ""
                    ? "border-[#d326d3] text-[#d326d3] hover:bg-[#d326d3] hover:text-white"
                    : status.includes("successfully")
                      ? "border-green-500 bg-green-500/20 text-green-400 cursor-default"
                      : "border-white/20 text-white/50 cursor-wait"
                }
              `}
            >
              {status === "" ? "Send Message" : status}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
