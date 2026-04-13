"use client";

import { motion } from "framer-motion";
import SectionTransition from "@/components/portfolio3d/SectionTransition";

export default function Contact3D() {
  return (
    <SectionTransition id="contact" className="section-padding">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Contact</p>
          <h2 className="text-3xl font-semibold">Let’s build something unforgettable</h2>
          <p className="text-sm text-white/70">
            Ready to launch a premium digital experience? Share your vision and I’ll respond within 24 hours.
          </p>
          <div className="flex gap-3">
            {[
              { label: "Behance", url: "#" },
              { label: "Dribbble", url: "#" },
              { label: "LinkedIn", url: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.url}
                className="neo-card inline-flex items-center justify-center px-4 py-2 text-xs"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="glass-strong space-y-4 p-6"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(event) => event.preventDefault()}
        >
          <div>
            <label className="text-sm text-white/70">Name</label>
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-base-900 px-4 py-3 text-sm text-white"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm text-white/70">Email</label>
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-base-900 px-4 py-3 text-sm text-white"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="text-sm text-white/70">Project details</label>
            <textarea
              className="mt-2 h-28 w-full rounded-xl border border-white/10 bg-base-900 px-4 py-3 text-sm text-white"
              placeholder="Tell me about your idea"
            />
          </div>
          <button className="primary-button w-full" type="submit">
            Send Message
          </button>
        </motion.form>
      </div>
    </SectionTransition>
  );
}
