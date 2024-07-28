"use client";
import DashBoard from "@/component/dashboard";
import { useEffect, useState } from "react";

export default function DashboardComponent() {
  const [dashboard, setDashboard] = useState({
    totalHotels: 0,
    totalRoomsStatus: { occupied: 0, vacant: 0 },
    foodOrders: 0,
    foodRevenue: 0,
    delayServices: 0,
    runningServices: 0,
    roomRevenue: 0,
  });
  const fetchDashboardData = () => {
    fetch("https://cs-api.nugen.co.in/hotel/dashboard", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjVmMTNjNDRlMWQzZTVhMDc3YTdhMDciLCJpYXQiOjE3MjIwNjkwMDd9.jS6WAWDwF1JhtVm_tlwQc7UTdLS3b3-oqR58cs2ZTxw",
      },
    })
      .then(async (response) => {
        if (response?.ok) {
          const data = await response.json();
          setDashboard({
            totalHotels: data?.totalHotels,
            totalRoomsStatus: {
              occupied: data?.occupied,
              vacant: data?.vacant,
            },
            foodOrders: data?.foodOrders,
            foodRevenue: data?.foodRevenue,
            delayServices: data?.delayServices,
            runningServices: data?.runningServices,
            roomRevenue: data?.roomRevenue,
          });
        }
      })
      .catch((err) => console.log("Error while fetching data", err));
  };
  useEffect(() => {
    fetchDashboardData();
  }, []);
  const {
    totalHotels,
    totalRoomsStatus,
    foodOrders,
    foodRevenue,
    delayServices,
    runningServices,
    roomRevenue,
  } = dashboard;
  const { occupied, vacant } = totalRoomsStatus;

  return (
    <DashBoard
      totalHotels={totalHotels}
      occupied={occupied}
      totalRooms={occupied + vacant}
      roomRevenue={roomRevenue}
      foodOrder={foodOrders}
      foodRevenue={foodRevenue}
      delayServices={delayServices}
      runningServices={runningServices}
    />
  );
}
