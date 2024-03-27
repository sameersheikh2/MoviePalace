import { createSlice } from "@reduxjs/toolkit";

const sideMenuSlice = createSlice({
  name: "sideMenuSlice",
  initialState: false,
  reducers: {
    sideMenuToggle(state, action) {
      return !state;
    },
  },
});

export const { sideMenuToggle } = sideMenuSlice.actions;
export default sideMenuSlice.reducer;
