import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import StaggerSection from "@/components/StaggerSection";
import { siteConfig } from "@/lib/data";
import type { CSSProperties } from "react";

export default function Contact() {
  return (
    <section className="section-padding" id="contact">
      <StaggerSection className="mx-auto max-w-6xl space-y-8">
        <div className="stagger-item" style={{ "--stagger": 0 } as CSSProperties}>
          <SectionHeader
            eyebrow="Contact"
            title="Let us talk about your next project"
            description="Pick the fastest way to reach me and I will reply within 12 hours."
          />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <a
            href={siteConfig.whatsappUrl}
            className="card-elevated hover-lift p-6 stagger-item"
            style={{ "--stagger": 1 } as CSSProperties}
            target="_blank"
          >
            <p className="text-sm text-white/60">WhatsApp</p>
            <h3 className="mt-2 text-lg font-semibold">Chat instantly</h3>
            <p className="mt-2 text-sm text-white/70">Fastest response for urgent Fiverr briefs.</p>
          </a>
          <Link
            href={siteConfig.fiverrUrl}
            className="card-elevated hover-lift p-6 stagger-item"
            style={{ "--stagger": 2 } as CSSProperties}
            target="_blank"
          >
            <p className="text-sm text-white/60">Fiverr</p>
            <h3 className="mt-2 text-lg font-semibold">Hire on Fiverr</h3>
            <p className="mt-2 text-sm text-white/70">Secure payments and milestone delivery.</p>
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="card-elevated hover-lift p-6 stagger-item"
            style={{ "--stagger": 3 } as CSSProperties}
          >
            <p className="text-sm text-white/60">Email</p>
            <h3 className="mt-2 text-lg font-semibold">{siteConfig.email}</h3>
            <p className="mt-2 text-sm text-white/70">Send project details and timelines.</p>
          </a>
        </div>
      </StaggerSection>
    </section>
  );
}
