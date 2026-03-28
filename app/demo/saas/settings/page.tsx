import SaaSTopbar from "@/app/demo/saas/_components/SaaSTopbar";

export default function SaaSSettings() {
  return (
    <div className="min-h-screen">
      <SaaSTopbar />
      <main className="p-6 lg:p-10 space-y-6">
        <section className="glass-card p-6">
          <h2 className="text-2xl font-semibold">Workspace settings</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm text-white/60">Workspace name</label>
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-base-900 px-4 py-3 text-sm text-white/80"
                defaultValue="NovaSuite"
              />
            </div>
            <div>
              <label className="text-sm text-white/60">Primary region</label>
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-base-900 px-4 py-3 text-sm text-white/80"
                defaultValue="US-East"
              />
            </div>
          </div>
        </section>
        <section className="glass-card p-6">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-base-900 px-4 py-3">
              <span>Weekly performance report</span>
              <span className="text-accent-400">Enabled</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-base-900 px-4 py-3">
              <span>Churn risk alerts</span>
              <span className="text-accent-400">Enabled</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-base-900 px-4 py-3">
              <span>Product update digest</span>
              <span className="text-white/50">Paused</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
