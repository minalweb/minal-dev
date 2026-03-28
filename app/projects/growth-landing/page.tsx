import ProjectDetailPage from "@/components/ProjectDetailPage";

export default function LandingDetailPage() {
  return (
    <ProjectDetailPage
      title="High-Converting Landing Page"
      category="Landing"
      summary="Premium landing experience with video mockup, testimonials, FAQ accordion, and conversion pricing."
      image="/images/mockup-landing.svg"
      highlights={[
        "Hero video mockup",
        "Testimonials slider",
        "FAQ accordion with motion",
      ]}
      outcomes={[
        "Trust built in seconds",
        "Clear CTA hierarchy",
        "Premium SaaS feel",
      ]}
      stack={["Next.js", "Tailwind CSS", "Conversion Copy", "Motion"]}
      timeline={["Day 1: Copy + structure", "Day 2-3: UI build", "Day 4: QA + polish"]}
      demoUrl="/demo/landing-premium"
    />
  );
}
