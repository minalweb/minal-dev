import AnalyticsClient from "@/app/demo/saas/_components/AnalyticsClient";
import SaaSTopbar from "@/app/demo/saas/_components/SaaSTopbar";

export default function SaaSAnalytics() {
  return (
    <div className="min-h-screen">
      <SaaSTopbar />
      <main className="p-6 lg:p-10">
        <AnalyticsClient />
      </main>
    </div>
  );
}
