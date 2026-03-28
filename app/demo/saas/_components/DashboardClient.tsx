"use client";

import { useEffect, useState } from "react";
import RevenueChart from "@/app/demo/saas/_components/RevenueChart";
import { fetchSaasOverview } from "@/app/demo/saas/_components/fakeApi";

type Stat = { label: string; value: string; trend: string };

type Overview = {
  stats: Stat[];
  tasks: string[];
  activity: { title: string; time: string }[];
};

export default function DashboardClient() {
  const [data, setData] = useState<Overview | null>(null);

  useEffect(() => {
    fetchSaasOverview().then(setData);
  }, []);

  if (!data) {
    return (
      <div className="space-y-6">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="glass-card p-5">
              <div className="h-4 w-24 rounded-full bg-white/10" />
              <div className="mt-4 h-6 w-20 rounded-full bg-white/10" />
              <div className="mt-3 h-3 w-16 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="glass-card p-6">
            <div className="h-6 w-40 rounded-full bg-white/10" />
            <div className="mt-6 h-52 rounded-2xl bg-white/5" />
          </div>
          <div className="space-y-6">
            <div className="glass-card p-6">
              <div className="h-5 w-28 rounded-full bg-white/10" />
              <div className="mt-4 h-24 rounded-2xl bg-white/5" />
            </div>
            <div className="glass-card p-6">
              <div className="h-5 w-28 rounded-full bg-white/10" />
              <div className="mt-4 h-24 rounded-2xl bg-white/5" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Stats grid */}
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {data.stats.map((stat) => (
          <div key={stat.label} className="glass-card hover-lift p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">{stat.label}</p>
            <p className="mt-3 text-2xl font-semibold">{stat.value}</p>
            <p className="mt-2 text-sm text-accent-400">{stat.trend}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">Revenue</p>
              <h2 className="mt-2 text-2xl font-semibold">MRR Growth</h2>
            </div>
            <span className="badge">+18% QoQ</span>
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-base-900 p-4">
            <RevenueChart />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-base-900 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">Expansion</p>
              <p className="mt-2 text-xl font-semibold">$24.3k</p>
              <p className="text-sm text-white/60">Upsell and cross-sell wins</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-base-900 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">Net Retention</p>
              <p className="mt-2 text-xl font-semibold">118%</p>
              <p className="text-sm text-white/60">Healthy revenue expansion</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold">Priority tasks</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {data.tasks.map((task) => (
                <li key={task}>• {task}</li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold">Recent activity</h3>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              {data.activity.map((item) => (
                <div key={item.title} className="flex items-center justify-between">
                  <span>{item.title}</span>
                  <span className="text-xs text-white/50">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
