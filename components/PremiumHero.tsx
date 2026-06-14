import Link from "next/link";
import { siteConfig } from "@/lib/data";

const badges = ["Fast Delivery", "Clean Code", "Scalable Systems"];

export default function PremiumHero() {
  return (
    <section className="section-padding relative overflow-hidden hero-light">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left content section */}
        <div className="space-y-6 reveal">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <p className="text-sm font-medium text-blue-300">Premium Services Available</p>
          </div>

          {/* Main heading with gradient */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              I build{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-xl opacity-40" />
                <span className="relative bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  conversion-first
                </span>
              </span>{" "}
              web experiences that turn clicks into <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">paid clients</span>.
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed text-white/70 max-w-xl">
            Premium Next.js websites, sleek dashboards, and revenue-ready landing pages designed to earn trust in seconds. Built with performance, conversion optimization, and stunning UI as core pillars.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="group relative px-8 py-3 font-semibold text-white rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/50" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-1 group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative block">View My Work</span>
            </a>
            <Link href={siteConfig.fiverrUrl} target="_blank" className="group relative px-8 py-3 font-semibold text-white rounded-lg overflow-hidden border border-white/20 hover:border-purple-400/50 transition-colors">
              <div className="absolute inset-0 bg-white/5 group-hover:bg-purple-500/10 transition-colors" />
              <span className="relative block">Hire Me on Fiverr</span>
            </Link>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 pt-4">
            {badges.map((badge) => (
              <div key={badge} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-400/50 transition-colors">
                <span className="text-sm font-medium text-white/80">{badge}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
            {[
              { number: "120+", label: "Projects" },
              { number: "4.9/5", label: "Rating" },
              { number: "98%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{stat.number}</p>
                <p className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual section */}
        <div className="relative group">
          {/* Outer glow card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Main card */}
          <div className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 space-y-8 hover:border-blue-400/30 transition-colors duration-300">
            {/* Premium delivery card */}
            <div className="space-y-4 p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-colors">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-300 font-semibold">Premium Delivery</p>
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white">7-Day Launch</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">✓</span> Day 1-2: UX Strategy & Wireframes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">✓</span> Day 3-5: Premium UI & Animations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">✓</span> Day 6: QA & Performance Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">✓</span> Day 7: Launch Support & Analytics Setup
                </li>
              </ul>
            </div>

            {/* Trust & testimonials card */}
            <div className="space-y-4 p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 hover:from-emerald-500/20 hover:to-cyan-500/20 transition-colors">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300 font-semibold">Trusted by Global Teams</p>
              <div className="space-y-2">
                <p className="text-sm text-white/80">✨ Startup founders</p>
                <p className="text-sm text-white/80">✨ Agency leads</p>
                <p className="text-sm text-white/80">✨ Fortune 500 companies</p>
              </div>
            </div>

            {/* Performance metrics */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <p className="text-xs text-white/50">Load Time</p>
                <p className="text-lg font-bold text-green-400">0.8s</p>
              </div>
              <div>
                <p className="text-xs text-white/50">Pagespeed</p>
                <p className="text-lg font-bold text-green-400">98</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
