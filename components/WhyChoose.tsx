import SectionHeader from "@/components/SectionHeader";
import StaggerSection from "@/components/StaggerSection";
import { reasons } from "@/lib/data";
import type { CSSProperties } from "react";

export default function WhyChoose() {
  return (
    <section className="section-padding" id="why">
      <StaggerSection className="mx-auto max-w-6xl space-y-8">
        <div className="stagger-item" style={{ "--stagger": 0 } as CSSProperties}>
          <SectionHeader
            eyebrow="Why choose me"
            title="Built for business outcomes"
            description="I design with conversion psychology, clarity, and a premium feel that gets buyers to message fast."
          />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="card-elevated hover-lift p-6 stagger-item"
              style={{ "--stagger": index + 1 } as CSSProperties}
            >
              <h3 className="text-lg font-semibold">{reason.title}</h3>
              <p className="mt-3 text-sm text-white/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </StaggerSection>
    </section>
  );
}
