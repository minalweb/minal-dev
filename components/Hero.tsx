import Link from "next/link";
import { siteConfig } from "@/lib/data";

const badges = ["Fast Delivery", "Clean Code", "Scalable Systems"];

export default function Hero() {
  return (
    <section className="section-padding relative overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-radial-faint opacity-70" />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6 reveal">
          <p className="badge">Available for Fiverr projects</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            I build <span className="gradient-text">conversion-first</span> web experiences that turn clicks into paid clients.
          </h1>
          <p className="text-lg text-white/75">
            Premium Next.js websites, sleek dashboards, and revenue-ready landing pages designed to earn trust in seconds.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="primary-button">
              View My Work
            </a>
            <Link href={siteConfig.fiverrUrl} className="secondary-button" target="_blank">
              Hire Me on Fiverr
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span key={badge} className="badge">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="glass-strong p-6 shadow-glow animate-float">
          <div className="rounded-2xl border border-white/10 bg-base-900 p-6">
            <p className="text-sm text-white/70">Live delivery snapshot</p>
            <h3 className="mt-3 text-2xl font-semibold">7-day launch plan</h3>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>Day 1-2: UX + wireframes</li>
              <li>Day 3-5: UI build + animations</li>
              <li>Day 6: QA + performance</li>
              <li>Day 7: Handoff + launch support</li>
            </ul>
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-base-900 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Trusted by global teams</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/70">
              <span>Startup founders</span>
              <span>Agency leads</span>
              <span>Fiverr buyers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
