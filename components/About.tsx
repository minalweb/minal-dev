import SectionHeader from "@/components/SectionHeader";
import StaggerSection from "@/components/StaggerSection";
import type { CSSProperties } from "react";

const skills = [
  {
    label: "Next.js",
    color: "#111111",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.5c-5.25 0-9.5 4.25-9.5 9.5S6.75 21.5 12 21.5s9.5-4.25 9.5-9.5S17.25 2.5 12 2.5Zm3.8 13.2-1.5.9-4.8-7.3v7.6h-1.6V8.2h1.7l4.6 7V8.2h1.6v7.5Z"
        />
      </svg>
    ),
  },
  {
    label: "React",
    color: "#61DAFB",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 9.6a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm7.4 2.4c0-.9-.1-1.8-.3-2.6 1-.8 1.6-1.6 1.6-2.3 0-1.7-3.1-2.8-7.1-2.6-1.1-2.3-2.5-3.8-3.6-3.8s-2.5 1.5-3.6 3.8c-4-.2-7.1.9-7.1 2.6 0 .7.6 1.5 1.6 2.3-.2.8-.3 1.7-.3 2.6s.1 1.8.3 2.6c-1 .8-1.6 1.6-1.6 2.3 0 1.7 3.1 2.8 7.1 2.6 1.1 2.3 2.5 3.8 3.6 3.8s2.5-1.5 3.6-3.8c4 .2 7.1-.9 7.1-2.6 0-.7-.6-1.5-1.6-2.3.2-.8.3-1.7.3-2.6Zm-7.4 8.1c-.6 0-1.4-1-2.1-2.5.7-.1 1.4-.2 2.1-.2s1.4.1 2.1.2c-.7 1.5-1.5 2.5-2.1 2.5Zm-4.7-1.1c-2.2 0-3.9-.5-3.9-1.1 0-.3.4-.8 1.1-1.2.9 1.6 2.1 2.9 3.4 3.8-.2 0-.4 0-.6 0Zm-1.7-6.9c0-.7.1-1.4.2-2.1.6.4 1.2.8 1.9 1.1-.1.7-.1 1.4 0 2.1-.7.3-1.3.7-1.9 1.1-.1-.7-.2-1.4-.2-2.1Zm6.4-5.6c-.7 0-1.4-.1-2.1-.2.7-1.5 1.5-2.5 2.1-2.5s1.4 1 2.1 2.5c-.7.1-1.4.2-2.1.2Zm4.7 1.1c2.2 0 3.9.5 3.9 1.1 0 .3-.4.8-1.1 1.2-.9-1.6-2.1-2.9-3.4-3.8.2 0 .4 0 .6 0Zm1.7 4.5c0 .7-.1 1.4-.2 2.1-.6-.4-1.2-.8-1.9-1.1.1-.7.1-1.4 0-2.1.7-.3 1.3-.7 1.9-1.1.1.7.2 1.4.2 2.1Zm-4.1 4.1c-.7-.1-1.4-.2-2.1-.2s-1.4.1-2.1.2c-.2-.5-.4-1-.6-1.6.9.1 1.8.1 2.7.1.9 0 1.8 0 2.7-.1-.2.6-.4 1.1-.6 1.6Zm-5.4-2.9c-.7-.3-1.3-.7-1.9-1.1.6-.4 1.2-.8 1.9-1.1.3.7.7 1.3 1.1 1.9-.4.1-.8.2-1.1.3Zm6.5.3c.4-.6.8-1.2 1.1-1.9.7.3 1.3.7 1.9 1.1-.6.4-1.2.8-1.9 1.1-.3-.1-.7-.2-1.1-.3Zm-.9-3c-.7 0-1.4 0-2.1-.1-.1-.7-.1-1.4 0-2.1.7-.1 1.4-.1 2.1-.1s1.4 0 2.1.1c.1.7.1 1.4 0 2.1-.7.1-1.4.1-2.1.1Z"
        />
      </svg>
    ),
  },
  {
    label: "TypeScript",
    color: "#3178C6",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3 3h18v18H3V3Zm4 6h5v2H10v6H8v-6H7V9Zm7.6 7.3c.6.5 1.4.8 2.2.8.7 0 1.1-.3 1.1-.7 0-.5-.6-.7-1.4-1-1.1-.4-2.3-.9-2.3-2.5 0-1.5 1.2-2.5 3-2.5 1 0 2 .3 2.8.8l-.8 1.6c-.6-.4-1.2-.6-1.8-.6-.6 0-1 .2-1 .6 0 .5.6.7 1.4 1 1.2.4 2.4.9 2.4 2.5 0 1.6-1.3 2.6-3.2 2.6-1.2 0-2.4-.4-3.3-1l.9-1.6Z"
        />
      </svg>
    ),
  },
  {
    label: "Tailwind CSS",
    color: "#38BDF8",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 6c-2.7 0-4.4 1.3-5.2 3.8 1.1-1.3 2.3-1.7 3.6-1.3.7.2 1.3.7 2 1.3 1.1 1 2.3 2.2 4.8 2.2 2.7 0 4.4-1.3 5.2-3.8-1.1 1.3-2.3 1.7-3.6 1.3-.7-.2-1.3-.7-2-1.3C15.7 7.2 14.5 6 12 6Zm-5.2 8.2C7.6 11.7 9.3 10.4 12 10.4c2.5 0 3.7 1.2 4.8 2.2.7.6 1.3 1.1 2 1.3 1.3.4 2.5 0 3.6-1.3-.8 2.5-2.5 3.8-5.2 3.8-2.5 0-3.7-1.2-4.8-2.2-.7-.6-1.3-.1-2-1.3-1.3-.4-2.5 0-3.6 1.3Z"
        />
      </svg>
    ),
  },
  {
    label: "Node.js",
    color: "#339933",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="currentColor"
          d="M11.9 2.4 4.2 6.9c-.8.5-1.2 1.4-1.2 2.3v5.5c0 .9.4 1.8 1.2 2.3l7.7 4.5c.8.5 1.8.5 2.6 0l7.7-4.5c.8-.5 1.2-1.4 1.2-2.3V9.2c0-.9-.4-1.8-1.2-2.3l-7.7-4.5c-.8-.5-1.8-.5-2.6 0Zm1.2 3.3c.6 0 1 .4 1 1v8.7c0 .6-.4 1-1 1s-1-.4-1-1V6.7c0-.6.4-1 1-1Zm-4.4 2.2c.6 0 1 .4 1 1v6.5c0 .6-.4 1-1 1s-1-.4-1-1V8.9c0-.6.4-1 1-1Zm8.7 0c.6 0 1 .4 1 1v6.5c0 .6-.4 1-1 1s-1-.4-1-1V8.9c0-.6.4-1 1-1Z"
        />
      </svg>
    ),
  },
  {
    label: "API Integrations",
    color: "#7C5CFF",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 7a3 3 0 1 1 5.7 1.2l2.2 1.3a3 3 0 1 1-.7 1.2l-2.2-1.3A3 3 0 0 1 7 7Zm0 10a3 3 0 1 1 5.7-1.2l2.2-1.3a3 3 0 1 1 .7 1.2l-2.2 1.3A3 3 0 0 1 7 17Z"
        />
      </svg>
    ),
  },
  {
    label: "Conversion Optimization",
    color: "#F59E0B",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 19h16v2H4v-2Zm2-2h2V9H6v8Zm5 0h2V5h-2v12Zm5 0h2v-6h-2v6Z"
        />
      </svg>
    ),
  },
  {
    label: "Express.js",
    color: "#111111",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 12c2.2 0 3.9-1.2 5.1-3.5L11 12l-1.9 3.5C7.9 13.2 6.2 12 4 12Zm7.2 0 5.5-7h2.3l-6.6 9 6.9 10h-2.3l-5.8-8-5.7 8H3.2l7-10-6.7-9h2.3l5.4 7Z"
        />
      </svg>
    ),
  },
  {
    label: "WordPress",
    color: "#21759B",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.6a9.4 9.4 0 1 0 0 18.8 9.4 9.4 0 0 0 0-18.8Zm0 1.8c1.5 0 2.9.4 4.1 1.1-.2 0-.5-.1-.8-.1-1 0-1.7.8-1.7 1.7 0 .8.4 1.4.9 2.2.4.8.9 1.8.9 3.2 0 1-.4 2.2-.9 3.5l-1.2 4.1-4.3-12.8h.1c.9 0 1.6-.1 1.6-.1.8 0 .7-1.2-.1-1.2 0 0-.7.1-1.5.1-1.1 0-2.9-.1-2.9-.1-.8 0-.9 1.2-.1 1.2 0 0 .6 0 1.2.1l1.8 5.1-2.6 7.8C5 15.1 4.3 13.1 4.3 11c0-3.9 3.8-6.6 7.7-6.6Zm7.1 6.6c0 2.6-.9 4.9-2.5 6.7l2.1-6.1c.4-1 .4-1.9.4-2.7 0-1-.3-1.8-.6-2.4 1.3 1.3 2.1 3.2 2.1 4.5ZM12 19.4c-1 0-2.1-.3-3.1-.7l3.3-9.6 3.1 9.2c0 .1.1.2.1.3-1.1.5-2.2.8-3.4.8Z"
        />
      </svg>
    ),
  },
];

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
        <div className="card-elevated p-6 stagger-item" style={{ "--stagger": 1 } as CSSProperties}>
          <h3 className="text-lg font-semibold">Core skills</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <div
                key={skill.label}
                className="skill-card flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black/80 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition"
                style={{ "--stagger": index + 2 } as CSSProperties}
              >
                <span
                  className="skill-icon pulse-glow float-icon"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}26, ${skill.color}10)` ,
                    color: skill.color,
                    boxShadow: `0 12px 30px ${skill.color}30`,
                  }}
                >
                  {skill.icon}
                </span>
                {skill.label}
              </div>
            ))}
          </div>
        </div>
      </StaggerSection>
    </section>
  );
}
