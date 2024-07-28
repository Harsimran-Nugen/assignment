import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalHotels: 0,
  totalRoomsStatus: { occupied: 0, vacant: 0 },
  foodOrders: 0,
  foodRevenue: 0,
  delayServices: 0,
  runningServices: 0,
  roomRevenue: 0,
};

const dashboardSlice = createSlice({
  name: "DashboardSlice",
  initialState,
  reducers: {
    setData: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const { setData } = dashboardSlice.actions;

export default dashboardSlice.reducer;
