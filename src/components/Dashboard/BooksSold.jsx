import React from "react";
import Card from "../Card";
import { ShoppingBasket } from "lucide-react";

function BooksSold() {
  return (
    <Card>
      <div className="text-gray-400 mb-10 flex items-center justify-between">
        <h4 className=" text-lg font-semibold">
          Oylik sotilgan kitoblar
        </h4>
        <ShoppingBasket />
      </div>
      <p className="text-7xl text-white font-medium">34</p>
    </Card>
  );
}

export default BooksSold;
