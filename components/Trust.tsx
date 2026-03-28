import { credibilityPoints, trustStats } from "@/lib/data";
import StaggerSection from "@/components/StaggerSection";
import type { CSSProperties } from "react";

export default function Trust() {
  return (
    <section className="section-padding" id="trust">
      <StaggerSection className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 stagger-item" style={{ "--stagger": 0 } as CSSProperties}>
          <h2 className="text-3xl font-semibold">Instant trust, measurable outcomes.</h2>
          <p className="text-white/70">
            Clients on Fiverr move fast. I make sure you have a premium presence that proves capability within seconds.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {trustStats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-4 stagger-item"
                style={{ "--stagger": index + 1 } as CSSProperties}
              >
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-xs uppercase tracking-wide text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card space-y-4 p-6 stagger-item" style={{ "--stagger": 2 } as CSSProperties}>
          <h3 className="text-lg font-semibold">Credibility highlights</h3>
          <ul className="space-y-3 text-sm text-white/70">
            {credibilityPoints.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </div>
      </StaggerSection>
    </section>
  );
}
