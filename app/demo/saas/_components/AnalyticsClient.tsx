"use client";

import { useEffect, useState } from "react";
import AudienceChart from "@/app/demo/saas/_components/AudienceChart";
import { fetchAnalyticsSummary } from "@/app/demo/saas/_components/fakeApi";

export default function AnalyticsClient() {
  const [summary, setSummary] = useState<{ activation: string; retention: string; conversion: string } | null>(null);

  useEffect(() => {
    fetchAnalyticsSummary().then(setSummary);
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold">Audience Growth</h2>
          <p className="mt-2 text-sm text-white/70">Weekly active users and activation rate.</p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-base-900 p-4">
            <AudienceChart />
          </div>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold">Activation funnel</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Signup → Onboarding: {summary ? summary.activation : "…"}</li>
            <li>Onboarding → Activated: {summary ? summary.retention : "…"}</li>
            <li>Activated → Paid: {summary ? summary.conversion : "…"}</li>
          </ul>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold">Retention</h3>
          <p className="mt-2 text-sm text-white/70">Month 1 retention: 62%</p>
          <div className="mt-6 h-40 rounded-2xl bg-gradient-to-br from-accent-400/30 to-base-900" />
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold">Conversion Drivers</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Live demo requests +31%</li>
            <li>Sales-assisted wins +18%</li>
            <li>Referral traffic +22%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
