import Link from "next/link";
import { siteConfig } from "@/lib/data";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          <span className="gradient-text">{siteConfig.name}</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-black/70 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative transition hover:text-black"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-accent-400 to-accent-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href={siteConfig.fiverrUrl} className="secondary-button" target="_blank">
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}
