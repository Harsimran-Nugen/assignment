"use client";

import Image from "next/image";
// import { useDispatch, useSelector } from "react-redux";
import HotelImage from "../../images/hotel.png";
import { DashboardProps } from "./types";
import { useRouter } from "next/navigation";



export default function DashBoard({
  totalHotels,
  vacant,
  occupied,
}: Readonly<DashboardProps>) {
  //   const dashboard = useSelector((state: any) => state.dashboard);
  // const dispatch = useDispatch();
  // const { totalHotels = 0, totalRoomsStatus: { occupied = 0, vacant } = 0 } =
  //   dashboard;

  const totalRooms = occupied + vacant;
  const route = useRouter();
  return (
    <div className="container ">
      <div className="flex flex-col overflow-scroll w-full h-full md:h-screen rounded-lg ">
        <div className="grid grid-cols-1 md:!grid-cols-2 xl:!grid-cols-3 ml-16 gap-6 mt-12 mr-6 md:ml-5">
          <div className="h-64 w-full rounded-2xl gap-8 shadow-lg">
            <div className="relative">
              <Image
                alt="Hotel Image"
                className="h-32 w-full rounded-t-2xl"
                src={HotelImage}
              />
              <div className="absolute top-5 left-5 bg-primary rounded-full w-3 h-3"></div>
            </div>
            <div className="flex justify-between mt-7 h-12 px-5 ">
              <div className="flex flex-col pl-4 mt-1 text-card-foreground">
                <div className="font-semibold text-xs opacity-60">
                  Total Hotels
                </div>
                <div className="text-2xl font-bold  mb-2">{totalHotels}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full rounded-lg h-64  bg-background shadow-lg">
          {/* <div className="py-2 px-6 ">
            <DoughnutChart
              className={"w-48 mt-9"}
              textClass={"text-3xl"}
              size={8}
              totalRooms={totalRooms}
              occupied={occupied}
            />
          </div> */}
          <div className="flex flex-col mt-11 mb-12 px-6 xl:pr-12 xl:pl-10 border-l-solid border-l-2 border-l-grey-300 ">
            <div className="flex flex-col mt-11 text-card-foreground">
              <div className="font-semibold text-xs opacity-90 ">
                Rooms Occupied
              </div>
              <div>
                <span className="text-xl font-bold">{occupied}</span>
                <span className="text-md font-semibold ">/{totalRooms}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className=" border-white border-2 text-sm sm:w-auto px-5 py-2.5 text-center"
        onClick={() => route.push("/login")}
      >
        LogOut
      </button>
    </div>
  );
}
