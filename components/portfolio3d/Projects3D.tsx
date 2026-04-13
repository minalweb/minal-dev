"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/components/portfolio3d/data";
import SectionTransition from "@/components/portfolio3d/SectionTransition";

export default function Projects3D() {
  const [active, setActive] = useState<typeof projects[0] | null>(null);

  return (
    <SectionTransition id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Projects</p>
            <h2 className="mt-2 text-3xl font-semibold">Proof of depth & craft</h2>
          </div>
          <p className="text-sm text-white/60">Click a project to explore details.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActive(project)}
              className="tilt-card glass-card text-left transition hover:border-white/20"
            >
              <div className="relative overflow-hidden rounded-2xl bg-base-900 p-4">
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-white/60">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="glass-strong max-w-2xl p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Project</p>
                  <h3 className="mt-2 text-2xl font-semibold">{active.title}</h3>
                </div>
                <button
                  className="text-sm text-white/60 hover:text-white"
                  onClick={() => setActive(null)}
                >
                  Close
                </button>
              </div>
              <img src={active.image} alt={active.title} className="mt-4 h-56 w-full rounded-2xl object-cover" />
              <p className="mt-4 text-sm text-white/70">{active.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {active.stack.map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={active.demo} className="primary-button" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <button className="secondary-button" onClick={() => setActive(null)}>
                  Back
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionTransition>
  );
}
