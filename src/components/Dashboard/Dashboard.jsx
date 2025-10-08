import React from "react";
import TotalBooks from "./TotalBooks";
import NewArrivals from "./NewArrivals";
import BooksSold from "./BooksSold";
import Card from "../Card";
import TopSelling from "./TopSelling";
import { BarChart } from "recharts";
import SalesBarChart from "./BarChart";
import DailySold from "./DailySold";
import DailyRevenue from "./DailyRevenue";

function Dashboard() {
  return (
    <section className="ml-[20%] p-8 bg-[#221c17] h-[100vh]">
      <div className="h-[70px]">
        <Card>
          <h1 className="font-medium text-2xl text-white">Dashboard</h1>
        </Card>
      </div>
      <div className="grid grid-cols-3 grid-rows-[200px_120px_1fr]  gap-5 mt-5">
        <TotalBooks />
        <NewArrivals />
        <BooksSold />
        <DailySold />
        <DailyRevenue />
        <div className="row-span-3 h-full">
          <TopSelling />
        </div>
        <SalesBarChart />
      </div>
    </section>
  );
}

export default Dashboard;
