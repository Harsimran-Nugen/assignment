"use client";
import DashBoard from "@/component/dashboard";
import { DashboardProps } from "@/component/dashboard/types";
import { useEffect, useState } from "react";

export default function DashboardComponent() {
  const [totalHotel, setTotalHotel] = useState<DashboardProps>({
    totalHotels: 0,
    vacant: 0,
    occupied: 0,
  });
  //   const fetchData = async () => {
  //     try {
  //       const response = await getData();
  //       console.log(response);
  //       setTotalHotel(response);
  //       //   dispatch(setData(response));
  //     } catch (error) {
  //       console.error("Error fetching totalHotels:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  return (
    <DashBoard
      totalHotels={totalHotel.totalHotels}
      occupied={totalHotel.occupied}
      vacant={totalHotel.vacant}
    />
  );
}
