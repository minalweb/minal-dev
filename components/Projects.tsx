import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import StaggerSection from "@/components/StaggerSection";
import { projects } from "@/lib/data";
import type { CSSProperties } from "react";

export default function Projects() {
  return (
    <section className="section-padding" id="projects">
      <StaggerSection className="mx-auto max-w-6xl space-y-8">
        <div className="stagger-item" style={{ "--stagger": 0 } as CSSProperties}>
          <SectionHeader
            eyebrow="Live demos"
            title="Proof-driven projects"
            description="Every demo is production-quality and built to show how I solve real business challenges."
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="stagger-item"
              style={{ "--stagger": index + 1 } as CSSProperties}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </StaggerSection>
    </section>
  );
}
