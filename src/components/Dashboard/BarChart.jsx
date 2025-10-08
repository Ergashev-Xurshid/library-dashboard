import { ChartNoAxesCombined } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 55 },
  { name: "Mar", value: 30 },
  { name: "Apr", value: 65 },
  { name: "May", value: 50 },
  { name: "June", value: 30 },
  { name: "July", value: 45 },
  { name: "Aug", value: 10 },
  { name: "Sep", value: 50 },
  { name: "Oct", value: 65 },
  { name: "Nov", value: 40 },
  { name: "Dec", value: 50 },
];

export default function ReportChart() {
  return (
    <div className="bg-[#2d2721] col-span-2 row-span-2 text-gray-400 p-4 rounded-2xl w-full  shadow-lg">
      <div className="flex  items-center justify-between mb-5">
        <h3 className="text-sm font-medium text-gray-400">Oylik Sotuvlar</h3>
        <ChartNoAxesCombined />
      </div>

      <div className="h-[90%] w-full ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#888" }} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#888" }} />
            <Tooltip cursor={{ fill: "transparent" }} />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFB347" />
                <stop offset="100%" stopColor="#FF6600" />
              </linearGradient>
            </defs>
            <Bar
              dataKey="value"
              fill="url(#barGradient)"
              radius={[10, 10, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
