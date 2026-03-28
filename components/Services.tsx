import SectionHeader from "@/components/SectionHeader";
import StaggerSection from "@/components/StaggerSection";
import { services } from "@/lib/data";
import type { CSSProperties } from "react";

export default function Services() {
  return (
    <section className="section-padding" id="services">
      <StaggerSection className="mx-auto max-w-6xl space-y-8">
        <div className="stagger-item" style={{ "--stagger": 0 } as CSSProperties}>
          <SectionHeader
            eyebrow="Services"
            title="Everything you need to ship fast"
            description="Pick a service and I will handle strategy, UX, UI, and engineering."
          />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card hover-lift p-6 stagger-item"
              style={{ "--stagger": index + 1 } as CSSProperties}
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </StaggerSection>
    </section>
  );
}
