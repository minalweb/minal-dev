"use client";

import { useEffect, useRef } from "react";
import { timeline } from "@/components/portfolio3d/data";
import SectionTransition from "@/components/portfolio3d/SectionTransition";

export default function Timeline3D() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const gsapModule = await import("gsap");
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
      gsapModule.gsap.registerPlugin(ScrollTrigger);

      ctx = gsapModule.gsap.context(() => {
        gsapModule.gsap.fromTo(
          ".timeline-item",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".timeline-track",
              start: "top 80%",
            },
          }
        );
      }, sectionRef);
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <SectionTransition className="section-padding" id="timeline">
      <div ref={sectionRef}>
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Experience</p>
            <h2 className="mt-2 text-3xl font-semibold">Timeline of craft</h2>
          </div>
          <p className="text-sm text-white/60">Scroll to reveal.</p>
        </div>

        <div className="timeline-track space-y-6 border-l border-white/10 pl-6">
          {timeline.map((item) => (
            <div key={item.year} className="timeline-item glass-card p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{item.year}</p>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </SectionTransition>
  );
}
