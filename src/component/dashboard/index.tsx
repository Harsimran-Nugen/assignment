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
    <div className="flex flex-col p-4 w-full h-full bg-white md:h-screen rounded-lg ">
      <div className="flex justify-end  items-center ">
        <button
          onClick={() => router.push("/")}
          type="button"
          className="w-40 flex justify-between items-center text-white bg-gradient-to-r from-blue-300 to-green-400 hover:bg-primary-700 focus:ring-4  focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <p>Log Out</p>
          <LogOut />
        </button>
      </div>
      <div className="container mx-auto mt-10 grid grid-cols-3 gap-6">
        <ItemCard  label={"Total Hotels"} value={totalHotels}/>
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
