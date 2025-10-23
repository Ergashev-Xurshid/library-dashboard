import React from "react";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#2c2c2c] p-3 rounded-lg text-white shadow-md border border-gray-600">
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-xs">Sotilgan kitoblar: <span className="text-blue-400">{payload[0].payload.books} ta</span></p>
        <p className="text-xs">Sotuv: <span className="text-orange-400">{payload[0].payload.sale.toLocaleString()} so‘m</span></p>
        <p className="text-xs ">Foyda: <span className="text-green-400">{payload[0].payload.revenue.toLocaleString()} so‘m</span></p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
