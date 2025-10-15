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
      <div className="flex  justify-end gap-4 mb-10">
        <select className="bg-[#2d2721] text-white px-4 py-2 outline-none cursor-pointer  rounded-lg  border border-gray-400">
          <option value="yanvar">Yanvar</option>
          <option value="fevral">Fevral</option>
          <option value="mart">Mart</option>
          <option value="aprel">Aprel</option>
          <option value="may">May</option>
          <option value="iyun">Iyun</option>
          <option value="iyul">Iyul</option>
          <option value="avgust">Avgust</option>
          <option value="sentabr">Sentabr</option>
          <option value="oktabr">Oktabr</option>
          <option value="noyabr">Noyabr</option>
          <option value="dekabr">Dekabr</option>
        </select>
      </div>
      <DayBarChart />
    </section>
  );
}

export default Sale;
