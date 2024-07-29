"use client";

import { useRouter } from "next/navigation";
import { DashboardProps } from "./types";
import { LogOut } from "lucide-react";
import ItemCard from "./item";

export default function DashBoard({
  totalHotels,
  occupied,
 totalRooms,
  roomRevenue,
  foodOrder,
  foodRevenue,
  delayServices,
  runningServices,
}: Readonly<DashboardProps>) {

  const router = useRouter();

  return (
    <div className="flex flex-col p-4 w-full bg-gradient-to-tl from-gray-200  to-gray-300 h-screen">
      <div className="flex justify-end items-center ">
        <button
          onClick={() => router.push("/")}
          type="button"
          className="w-36 rounded-md flex justify-between  border-2 items-center text-white bg-green-800 py-2 px-4"
        >
          <div>Log Out</div>
          <LogOut strokeWidth={2} className="w-5 h-5"/>
        </button>
      </div>
      <div className="container w-auto mx-auto pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
        <ItemCard  label={"Total Hotels"} value={totalHotels} />
        <ItemCard  label={"Rooms Occupied"} value={occupied}/>
        <ItemCard  label={"Total Rooms"} value={totalRooms}/>
        <ItemCard  label={"Room Revenue"} value={roomRevenue}/>
        <ItemCard label={"Food Order"} value={foodOrder}/>
        <ItemCard  label={"Running Services"} value={runningServices}/>
        <ItemCard  label={"Delay Services"} value={delayServices}/>
        <ItemCard label={"Food Revenue"} value={foodRevenue}/>
      </div>
    </div>
  );
}
