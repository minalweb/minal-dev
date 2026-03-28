import InvoicesTable from "@/app/demo/saas/billing/InvoicesTable";
import SaaSTopbar from "@/app/demo/saas/_components/SaaSTopbar";
import { saasPlans } from "@/app/demo/saas/_data";

export default function SaaSBilling() {
  return (
    <div className="min-h-screen">
      <SaaSTopbar />
      <main className="p-6 lg:p-10 space-y-8">
        <section className="glass-card p-6">
          <h2 className="text-2xl font-semibold">Current plan</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {saasPlans.map((plan) => (
              <div key={plan.name} className="rounded-2xl border border-white/10 bg-base-900 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">{plan.name}</p>
                <p className="mt-2 text-2xl font-semibold">{plan.price}</p>
                <p className="text-sm text-white/60">{plan.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card p-6">
          <h3 className="text-lg font-semibold">Recent invoices</h3>
          <p className="mt-2 text-sm text-white/60">Filter and sort to simulate real billing workflows.</p>
          <div className="mt-4">
            <InvoicesTable />
          </div>
        </section>
      </main>
    </div>
  );
}
