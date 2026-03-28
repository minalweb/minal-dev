import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/app/demo/landing-premium/FAQAccordion";
import TestimonialsSlider from "@/app/demo/landing-premium/TestimonialsSlider";

export const metadata: Metadata = {
  title: "Premium Landing Demo | Minal Studio",
  description: "Premium landing page demo with video mockup, testimonials, and FAQ accordion.",
};

export default function PremiumLanding() {
  return (
    <main className="min-h-screen bg-base-950 text-white">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-70" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="badge">Premium Landing Demo</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Launch a landing page that turns visitors into booked calls
            </h1>
            <p className="text-white/70">
              Designed for high-ticket services with bold typography, conversion-driven layout, and crisp CTAs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="primary-button">Book a Call</button>
              <button className="secondary-button">View Case Study</button>
              <Link href="/" className="secondary-button">
                Back to Portfolio
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="badge">Instant trust</span>
              <span className="badge">Fast delivery</span>
              <span className="badge">High ROI</span>
            </div>
          </div>
          <div className="glass-strong p-6">
            {/* Video mockup */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-base-900">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-white/60">
                <span>Product walkthrough</span>
                <span>02:14</span>
              </div>
              <div className="relative flex h-64 items-center justify-center bg-gradient-to-br from-accent-400/30 via-base-900 to-base-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]" />
                <button className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-2xl text-white">
                  ▶
                </button>
                <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/70">
                  Live demo video
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            {["120+ launches", "98% satisfaction", "4 day delivery"].map((item) => (
              <div key={item} className="glass-card p-6">
                <h3 className="text-lg font-semibold">{item}</h3>
                <p className="mt-2 text-sm text-white/70">Trusted by Fiverr buyers worldwide.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="section-title">Client wins</h2>
          <TestimonialsSlider />
        </div>
      </section>

      {/* Feature grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl space-y-8">
          <h2 className="section-title">Built for premium conversion</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {["Outcome-first copy", "Speed-optimized UI", "Structured trust flow"].map((item) => (
              <div key={item} className="glass-card p-6">
                <h3 className="text-lg font-semibold">{item}</h3>
                <p className="mt-2 text-sm text-white/70">Every section is engineered to move buyers forward.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl space-y-6">
          <h2 className="section-title">FAQ</h2>
          <FAQAccordion />
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="section-title">Conversion packages</h2>
            <span className="badge">Most popular: Growth</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Starter", price: "$149" },
              { name: "Growth", price: "$349" },
              { name: "Elite", price: "$699" },
            ].map((plan) => (
              <div key={plan.name} className="glass-card p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">{plan.name}</p>
                <p className="mt-2 text-3xl font-semibold">{plan.price}</p>
                <p className="mt-2 text-sm text-white/70">Full landing page with copy + design.</p>
                <button className="primary-button mt-4 w-full">Choose {plan.name}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="glass-strong flex flex-col items-start gap-6 p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Ready to launch?</h2>
              <p className="text-white/70">Let’s build a premium landing that closes deals.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="primary-button">Book a Call</button>
              <Link href="/" className="secondary-button">
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
