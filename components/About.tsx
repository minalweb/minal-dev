import SectionHeader from "@/components/SectionHeader";
import StaggerSection from "@/components/StaggerSection";
import { skills } from "@/lib/data";
import type { CSSProperties } from "react";

export default function About() {
  return (
    <section className="section-padding" id="about">
      <StaggerSection className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 stagger-item" style={{ "--stagger": 0 } as CSSProperties}>
          <SectionHeader
            eyebrow="About"
            title="Hi, I am Minal — your conversion-focused dev partner"
            description="I help Fiverr clients launch fast, look premium, and win trust with modern web experiences."
          />
          <p className="text-white/70">
            I specialize in Next.js, UI systems, and conversion UX. My projects are optimized for performance and designed to help businesses
            stand out, close deals, and scale with confidence.
          </p>
        </div>
        <div className="glass-card p-6 stagger-item" style={{ "--stagger": 1 } as CSSProperties}>
          <h3 className="text-lg font-semibold">Core skills</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="badge stagger-item"
                style={{ "--stagger": index + 2 } as CSSProperties}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </StaggerSection>
    </section>
  );
}
