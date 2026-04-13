"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroScene from "@/components/portfolio3d/HeroScene";
import TypingText from "@/components/portfolio3d/TypingText";
import { useEffect, useState } from "react";
import SectionTransition from "@/components/portfolio3d/SectionTransition";

export default function Hero3D() {
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      setGlow({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <SectionTransition className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(91,124,255,0.25), transparent 55%)`,
        }}
      />
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="badge">Creative Developer / Designer</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Minal Hossan
              <span className="block text-2xl font-medium text-white/70 md:text-3xl">
                <TypingText
                  texts={["3D Web Experiences", "Futuristic UI Systems", "Conversion-Driven UX"]}
                  className="text-cyan-300"
                />
                <span className="ml-1 animate-pulse">▍</span>
              </span>
            </h1>
            <p className="text-lg text-white/70">
              I design immersive, high-converting digital experiences that blend premium UI, motion, and WebGL depth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#projects" className="primary-button">
                View Work
              </Link>
              <Link href="#contact" className="secondary-button">
                Let’s Talk
              </Link>
            </div>
          </div>
          <motion.div
            className="glass-strong relative hidden items-center justify-center p-8 lg:flex"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/10" />
            <div className="relative space-y-4 text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Featured</p>
              <h3 className="text-2xl font-semibold">Interactive 3D Studio</h3>
              <p className="text-sm text-white/60">
                Hover, scroll, and explore — every section is built to feel alive.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionTransition>
  );
}
