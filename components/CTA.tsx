import Link from "next/link";
import { siteConfig } from "@/lib/data";
import StaggerSection from "@/components/StaggerSection";
import type { CSSProperties } from "react";

export default function CTA() {
  return (
    <section className="section-padding" id="cta">
      <StaggerSection className="mx-auto max-w-6xl">
        <div className="glass-strong flex flex-col items-start gap-6 p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3 stagger-item" style={{ "--stagger": 0 } as CSSProperties}>
            <h2 className="text-3xl font-semibold">Ready to turn your Fiverr traffic into paying clients?</h2>
            <p className="text-white/70">Let us build something premium that makes buyers say yes.</p>
          </div>
          <div className="flex flex-wrap gap-4 stagger-item" style={{ "--stagger": 1 } as CSSProperties}>
            <a href="#contact" className="primary-button">
              Contact Me
            </a>
            <Link href={siteConfig.fiverrUrl} className="secondary-button" target="_blank">
              Hire Me on Fiverr
            </Link>
          </div>
        </div>
      </StaggerSection>
    </section>
  );
}
