"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { day: "Monday", value: 60 },
  { day: "Tuesday", value: 80 },
  { day: "Wednesday", value: 75 },
  { day: "Thursday", value: 65 },
  { day: "Friday", value: 50 },
  { day: "Saturday", value: 35 },
  { day: "Sunday", value: 70 },
]

export default function PerformanceChart() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Performance Report</h3>
        <select className="text-sm border border-gray-300 rounded px-3 py-1 bg-white">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7dd3fc" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#7dd3fc" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} dy={10} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              domain={[10, 80]}
              ticks={[10, 20, 30, 40, 50, 60, 70, 80]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#60a5fa"
              strokeWidth={2}
              fill="url(#colorValue)"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
