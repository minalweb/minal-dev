"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);
  const scroll = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
          onClick={scroll} aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-2xl border border-black/10 text-black hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 transition-all active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
