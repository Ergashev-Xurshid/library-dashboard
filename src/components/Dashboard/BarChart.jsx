import { ChartNoAxesCombined } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import DashboardTooltip from "./DashboardTooltip";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = months.map((month) => ({
  name: month,
  sale: Math.floor(Math.random() * 3000000) + 50000,
  revenue: Math.floor(Math.random() * 1000000) + 30000,
  books: Math.floor(Math.random() * 10000) + 100,
}));

export default function ReportChart() {
  return (
    <div className="bg-[#2d2721] col-span-2 row-span-2 text-gray-400 p-4 rounded-2xl w-full  shadow-lg">
      <div className="flex  items-center justify-between mb-5">
        <h3 className="text-sm font-medium text-gray-400">Oylik Sotuvlar</h3>
        <ChartNoAxesCombined />
      </div>

      <div className="h-[90%] w-full ">
        <ResponsiveContainer width="100%" height="100%" >
          <BarChart data={data}>
            <YAxis  tick={{ fill: "#888" }} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#888" }}
            />
            <Tooltip content={DashboardTooltip} />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFB347" />
                <stop offset="100%" stopColor="#FF6600" />
              </linearGradient>
            </defs>
            <Bar
              dataKey="sale"
              fill="url(#barGradient)"
              radius={[10, 10, 0, 0]}
              barSize={40}
              activeBar={{ fillOpacity: 0.8 }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
