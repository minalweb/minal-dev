"use client";

import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const dataSets = {
  "7d": [
    { week: "Mon", users: 120 },
    { week: "Tue", users: 180 },
    { week: "Wed", users: 210 },
    { week: "Thu", users: 240 },
    { week: "Fri", users: 260 },
    { week: "Sat", users: 220 },
    { week: "Sun", users: 190 },
  ],
  "30d": [
    { week: "W1", users: 420 },
    { week: "W2", users: 520 },
    { week: "W3", users: 610 },
    { week: "W4", users: 740 },
  ],
  "90d": [
    { week: "Jan", users: 1600 },
    { week: "Feb", users: 2100 },
    { week: "Mar", users: 2480 },
  ],
};

type RangeKey = keyof typeof dataSets;

export default function AudienceChart() {
  const [range, setRange] = useState<RangeKey>("30d");

  const data = useMemo(() => dataSets[range], [range]);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-xs text-white/60">
          <span className="inline-flex h-2 w-2 rounded-full bg-accent-500" />
          Active Users
        </div>
        <div className="flex flex-wrap gap-2">
          {(["7d", "30d", "90d"] as RangeKey[]).map((key) => (
            <button
              key={key}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                range === key ? "bg-white/10 text-white" : "border border-white/10 text-white/60"
              }`}
              onClick={() => setRange(key)}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ left: -10, right: 10 }}>
            <XAxis dataKey="week" stroke="#6B7280" tickLine={false} axisLine={false} />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                background: "#0B0D12",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                color: "#fff",
                fontSize: 12,
              }}
            />
            <Bar dataKey="users" fill="#5B7CFF" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
