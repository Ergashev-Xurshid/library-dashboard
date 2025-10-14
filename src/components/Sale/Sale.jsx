import React from "react";
import Card from "../Card";
import DayBarChart from "./DayBarChart";
import { CalendarDays } from "lucide-react";

function Sale() {
  return (
    <section className="ml-[20%] p-8 bg-[#221c17] h-[100vh]">
      <div className="fixed top-0 left-[20%] w-[80%] bg-[#221c17] z-50 p-8 pb-4">
        <div className="h-[70px]">
          <Card>
            <h1 className="font-medium text-2xl text-white">
              Sotuvlar bo‘limi
            </h1>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-25  mb-8">
        <div className="bg-[#2d2721] rounded-xl p-5 shadow">
          <h4 className="text-gray-400 text-sm">📘 Sotilgan kitoblar</h4>
          <h2 className="text-2xl font-bold text-white mt-2">125 ta</h2>
        </div>
        <div className="bg-[#2d2721] rounded-xl p-5 shadow">
          <h4 className="text-gray-400 text-sm">💰 Jami daromad</h4>
          <h2 className="text-2xl font-bold text-green-500 mt-2">
            1 250 000 so‘m
          </h2>
        </div>
        <div className="bg-[#2d2721] rounded-xl p-5 shadow">
          <h4 className="text-gray-400 text-sm">📦 Xarid qilingan kitoblar</h4>
          <h2 className="text-2xl font-bold text-white mt-2">45 ta</h2>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-10">
        <div className="relative">
          <input
            type="date"
            className="border px-3 py-2 rounded-lg outline-none text-gray-400 w-full bg-[#2d2721] "
          />
          <CalendarDays className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" />
        </div>
        <button className="bg-[#ff7806] hover:bg-[#e56d05] text-white cursor-pointer rounded-lg px-4 py-2">
          Tahlil qilish
        </button>
      </div>
      <DayBarChart />
    </section>
  );
}

export default Sale;
