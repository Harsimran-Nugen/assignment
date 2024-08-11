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
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjVmMTNjNDRlMWQzZTVhMDc3YTdhMDciLCJpYXQiOjE3MjIwNjkwMDd9.jS6WAWDwF1JhtVm_tlwQc7UTdLS3b3-oqR58cs2ZTxw",
      },
    })
      .then(async (response) => {
        if (response?.ok) {
          const data = await response.json();
          setDashboard({
            totalHotels: data?.totalHotels || 0,
            totalRoomsStatus: {
              occupied: data?.occupied || 0,
              vacant: data?.vacant || 0,
            },
            foodOrders: data?.foodOrders || 0,
            foodRevenue: data?.foodRevenue || 0,
            delayServices: data?.delayServices || 0,
            runningServices: data?.runningServices || 0,
            roomRevenue: data?.roomRevenue || 0,
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
  const totalRooms = occupied + vacant;
  return (
    <DashBoard
      totalHotels={totalHotels}
      occupied={occupied}
      totalRooms={totalRooms}
      roomRevenue={roomRevenue}
      foodOrder={foodOrders}
      foodRevenue={foodRevenue}
      delayServices={delayServices}
      runningServices={runningServices}
    />
  );
}
