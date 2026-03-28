"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Our conversion rate jumped from 2.1% to 5.4% in two weeks.",
    name: "Elena Marquez",
    role: "Founder, Studio Vale",
  },
  {
    quote: "Best Fiverr experience. Premium design, fast delivery, real results.",
    name: "Jared Liu",
    role: "Growth Lead, Hexa Labs",
  },
  {
    quote: "The new landing page paid for itself in the first 3 days.",
    name: "Rina Khatun",
    role: "CEO, Northwind",
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="transition-all duration-500">
        <p className="text-lg font-semibold">“{testimonials[index].quote}”</p>
        <p className="mt-4 text-sm text-white/60">
          {testimonials[index].name} · {testimonials[index].role}
        </p>
      </div>
      <div className="mt-6 flex gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-accent-400" : "bg-white/20"}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
