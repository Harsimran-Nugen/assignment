import { createSlice } from "@reduxjs/toolkit";
export type LoginType = { email: string; password: string} 
const initialState:LoginType = {
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      return { ...action.payload };
    },
    setPassword: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const { setEmail, setPassword } = loginSlice.actions;

export default loginSlice.reducer;
