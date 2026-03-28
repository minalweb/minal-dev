import DashboardClient from "@/app/demo/saas/_components/DashboardClient";
import SaaSTopbar from "@/app/demo/saas/_components/SaaSTopbar";

export default function SaaSDashboard() {
  return (
    <div className="min-h-screen">
      <SaaSTopbar />
      <main className="p-6 lg:p-10">
        <DashboardClient />
      </main>
    </div>
  );
}
