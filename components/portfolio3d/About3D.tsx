"use client";

import { motion } from "framer-motion";
import { skills } from "@/components/portfolio3d/data";
import SectionTransition from "@/components/portfolio3d/SectionTransition";
import AboutIcon3D from "@/components/portfolio3d/AboutIcon3D";

export default function About3D() {
  return (
    <SectionTransition className="section-padding relative">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="glass-strong p-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-base-900 p-6">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-500/30 blur-3xl" />
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">About</p>
              <h2 className="text-3xl font-semibold">Designing depth-driven web experiences</h2>
              <p className="text-sm text-white/70">
                I craft premium interfaces that feel alive — blending 3D, motion, and conversion psychology so your
                product wins attention and trust fast.
              </p>
              <AboutIcon3D />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div key={skill} className="neo-card tilt-card">
                    <span className="text-sm font-semibold text-white/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold">Creative Focus</h3>
            <p className="mt-3 text-sm text-white/70">
              Specializing in WebGL storytelling, neon SaaS branding, and premium ecommerce experiences.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold">What you get</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Apple-level minimalism with futuristic depth</li>
              <li>• Motion systems that guide attention</li>
              <li>• Interfaces engineered for conversion</li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold">Availability</h3>
            <p className="mt-3 text-sm text-white/70">Open to premium freelance engagements and product builds.</p>
          </div>
        </motion.div>
      </div>
    </SectionTransition>
  );
}
