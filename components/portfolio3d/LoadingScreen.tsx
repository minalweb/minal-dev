"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-base-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative">
            <div className="h-16 w-16 rounded-full border border-accent-400/50" />
            <div className="absolute inset-0 h-16 w-16 animate-spin rounded-full border-t-2 border-cyan-400" />
            <p className="mt-6 text-center text-xs uppercase tracking-[0.4em] text-white/60">
              Loading
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
