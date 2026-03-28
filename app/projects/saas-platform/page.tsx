import ProjectDetailPage from "@/components/ProjectDetailPage";

export default function SaaSDetailPage() {
  return (
    <ProjectDetailPage
      title="SaaS Platform Web App"
      category="Web App"
      summary="Production-ready SaaS workspace with analytics, billing, settings, and onboarding flows."
      image="/images/mockup-saas.svg"
      highlights={[
        "Multi-page SaaS layout",
        "Charts + billing system",
        "Auth screens + fake API",
      ]}
      outcomes={[
        "Enterprise-ready UI",
        "Data-rich dashboards",
        "Polished client workflows",
      ]}
      stack={["Next.js", "Recharts", "Tailwind CSS", "Dashboard UI"]}
      timeline={["Day 1: IA + structure", "Day 2-4: UI build", "Day 5: QA + charts"]}
      demoUrl="/demo/saas"
    />
  );
}
