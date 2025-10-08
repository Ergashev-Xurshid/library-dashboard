import React from "react";
import Card from "../Card";
import { Book } from "lucide-react";

function TotalBooks() {
  return (
    <Card>
      <div className="mb-10 flex items-center justify-between text-gray-400">
        <h4 className="text-lg font-semibold  ">
          Umumiy kitoblar soni
        </h4>
        <Book />
      </div>
      <p className="text-7xl text-white font-medium">7.123</p>
    </Card>
  );
}

export default TotalBooks;
