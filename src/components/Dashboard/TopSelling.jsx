import React from "react";
import Card from "../Card";
import { ListStart } from "lucide-react";

function TopSelling() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-5 text-gray-400">
        <h4 className=" text-lg font-semibold ">
          Eng ko‘p sotilgan kitoblar
        </h4>
        <ListStart />
      </div>
      <table className="w-full text-left text-white border-separate border-spacing-y-2">
        <thead>
          <tr className="bg-[#2d2721]">
            <th className="py-3 px-4 font-semibold text-gray-300">Title</th>
            <th className="py-3 px-4 font-semibold text-gray-300">Price</th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-[#3a322c] hover:bg-[#4b4038] transition rounded-lg ">
            <td className="py-3 px-4">
              <h4 className="font-medium text-[15px]">Atomic Habits</h4>
              <p className="text-sm text-gray-400">James Clear</p>
            </td>
            <td className="py-3 px-4 text-[15px] font-semibold text-[#ff7806]">
              $12
            </td>
          </tr>

          <tr className="bg-[#3a322c] hover:bg-[#4b4038] transition rounded-lg">
            <td className="py-3 px-4">
              <h4 className="font-medium text-[15px]">Deep Work</h4>
              <p className="text-sm text-gray-400">Cal Newport</p>
            </td>
            <td className="py-3 px-4 text-[15px] font-semibold text-[#ff7806]">
              $15
            </td>
          </tr>

          <tr className="bg-[#3a322c] hover:bg-[#4b4038] transition rounded-lg">
            <td className="py-3 px-4">
              <h4 className="font-medium text-[15px]">The 48 Laws of Power</h4>
              <p className="text-sm text-gray-400">Robert Greene</p>
            </td>
            <td className="py-3 px-4 text-[15px] font-semibold text-[#ff7806]">
              $18
            </td>
          </tr>

          <tr className="bg-[#3a322c] hover:bg-[#4b4038] transition rounded-lg">
            <td className="py-3 px-4">
              <h4 className="font-medium text-[15px]">Atomic Habits</h4>
              <p className="text-sm text-gray-400">Cal Newport</p>
            </td>
            <td className="py-3 px-4 text-[15px] font-semibold text-[#ff7806]">
              $20
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
}

export default TopSelling;
