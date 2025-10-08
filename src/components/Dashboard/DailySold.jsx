import React from "react";
import Card from "../Card";
import { BookCheck } from "lucide-react";

function DailySold() {
  return (
    <Card>
      <div className="text-gray-400  mb-4 flex items-center justify-between">
        <h4 className="text-lg font-semibold ">
          1 kunda sotilgan kitoblar
        </h4>
        <BookCheck />
      </div>
      <p className="text-4xl text-white font-medium">6 </p>
    </Card>
  );
}

export default DailySold;
