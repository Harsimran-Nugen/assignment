import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./features/dashboardSlice";
import loginSlice from "./features/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    dashboard: dashboardSlice,
  },
});
