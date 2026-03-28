import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SaaS Platform Demo | Minal Studio",
  description: "Production-ready SaaS demo with analytics, billing, and team workflows.",
};

export default function SaaSLanding() {
  return (
    <main className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-6">
          <p className="badge">SaaS Platform Demo</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            A production-ready SaaS workspace built for growth teams
          </h1>
          <p className="text-white/70">
            This demo showcases a full SaaS experience with analytics, billing, and team operations. Built for speed, trust, and scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/demo/saas/dashboard" className="primary-button">
              Enter Dashboard
            </Link>
            <Link href="/demo/saas/auth/login" className="secondary-button">
              Sign in
            </Link>
            <Link href="/" className="secondary-button">
              Back to Portfolio
            </Link>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Role-based access",
            "Real-time KPI tracking",
            "Smart billing workflows",
          ].map((item) => (
            <div key={item} className="glass-card p-6">
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-white/70">
                Designed with premium UI and conversion-focused flows.
              </p>
            </div>
          ))}
        </div>

        <section className="glass-strong flex flex-col items-start gap-6 p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Need a SaaS UI like this?</h2>
            <p className="text-white/70">I build production-ready dashboards for Fiverr clients.</p>
          </div>
          <Link href="/" className="primary-button">
            View Portfolio
          </Link>
        </section>
      </div>
    </main>
  );
}
