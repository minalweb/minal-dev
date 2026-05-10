"use client";
import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          <span className="gradient-text">{siteConfig.name}</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-black/70 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="group relative transition hover:text-black">
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-accent-400 to-accent-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href={siteConfig.fiverrUrl} className="secondary-button hidden md:inline-flex" target="_blank" rel="noopener noreferrer">Hire Me</Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-black/70" aria-label="Toggle menu" aria-expanded={isOpen}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="flex flex-col border-t border-black/5 bg-white p-4 md:hidden">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="py-3 text-sm font-medium text-black/70 hover:text-black">
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
