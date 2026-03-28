import ProjectDetailPage from "@/components/ProjectDetailPage";

export default function AdminDashboardDetailPage() {
  return (
    <ProjectDetailPage
      title="Admin Dashboard UI Suite"
      category="Web App"
      summary="Command center UI with KPI tracking, activity feeds, and modular widgets for ops teams."
      image="/images/mockup-saas.svg"
      highlights={[
        "KPI stats grid",
        "Operational task board",
        "Analytics-ready layout",
      ]}
      outcomes={[
        "Fast decision visibility",
        "Improved team velocity",
        "Modern admin UX",
      ]}
      stack={["Next.js", "Tailwind CSS", "Dashboard UI", "Data Viz"]}
      timeline={["Day 1: Dashboard map", "Day 2-3: UI build", "Day 4: QA + polish"]}
      demoUrl="/demo/saas/dashboard"
    />
  );
}
