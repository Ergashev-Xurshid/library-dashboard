import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const DayBarChart = () => {
  // Fake data — 30 kunlik sotuvlar (random)
  const salesData = Array.from({ length: 30 }, (_, i) => ({
    day: `${i + 1}-kun`,
    revenue: Math.floor(Math.random() * 200000) + 50000, // 50 ming - 250 ming oralig‘ida
  }));

  return (
    <div className="bg-[#1e1813] p-6 overflow-hidden rounded-2xl shadow-md mt-5">
      <h2 className="text-xl font-semibold text-white mb-4">
        01.01.2025 sotuvlar
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#3a3129" />
          <XAxis dataKey="day" tick={{ fill: "#888"}} />
          <YAxis tick={{ fill: "#888"}} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#2d2721",
               color: "#fff",
            }}
            formatter={(value) => `${value.toLocaleString()} so‘m`}
          />
          <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFB347" />
                <stop offset="100%" stopColor="#FF6600" />
              </linearGradient>
            </defs>
          <Bar dataKey="revenue" fill="#ff7806" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DayBarChart;
