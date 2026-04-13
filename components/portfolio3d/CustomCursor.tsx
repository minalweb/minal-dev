"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-50 h-10 w-10 rounded-full border border-cyan-400/60 bg-cyan-400/10"
      animate={{
        x: pos.x - 20,
        y: pos.y - 20,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 250, damping: 30, mass: 0.6 }}
    />
  );
}
