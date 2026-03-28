"use client";

import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const dataSets = {
  "30d": [
    { month: "W1", value: 18 },
    { month: "W2", value: 22 },
    { month: "W3", value: 26 },
    { month: "W4", value: 30 },
  ],
  "90d": [
    { month: "Jan", value: 42 },
    { month: "Feb", value: 48 },
    { month: "Mar", value: 55 },
  ],
  "12m": [
    { month: "Jan", value: 42 },
    { month: "Feb", value: 48 },
    { month: "Mar", value: 55 },
    { month: "Apr", value: 62 },
    { month: "May", value: 70 },
    { month: "Jun", value: 86 },
    { month: "Jul", value: 92 },
    { month: "Aug", value: 98 },
    { month: "Sep", value: 104 },
    { month: "Oct", value: 112 },
    { month: "Nov", value: 118 },
    { month: "Dec", value: 128 },
  ],
};

type RangeKey = keyof typeof dataSets;

export default function RevenueChart() {
  const [range, setRange] = useState<RangeKey>("12m");

  const data = useMemo(() => dataSets[range], [range]);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-xs text-white/60">
          <span className="inline-flex h-2 w-2 rounded-full bg-accent-400" />
          MRR (in $k)
        </div>
        <div className="flex flex-wrap gap-2">
          {(["30d", "90d", "12m"] as RangeKey[]).map((key) => (
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
      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: -10, right: 10 }}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7C5CFF" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#0B0D12" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" stroke="#6B7280" tickLine={false} axisLine={false} />
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
            <Area
              type="monotone"
              dataKey="value"
              stroke="#7C5CFF"
              strokeWidth={2}
              fill="url(#revenueFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
