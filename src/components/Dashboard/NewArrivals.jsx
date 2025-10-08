import React from "react";
import Card from "../Card";
import { PackagePlus } from "lucide-react";

function NewArrivals() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-10 text-gray-400">
        <h4 className="text-lg font-semibold">
          Yangi kelgan kitoblar
        </h4>
        <PackagePlus />
      </div>
      <p className="text-7xl text-white font-medium">21</p>
    </Card>
  );
}

export default NewArrivals;
