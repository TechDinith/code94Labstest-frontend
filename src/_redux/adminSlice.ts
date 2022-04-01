import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    key: "",
    result: "",
  },
  reducers: {
    deleteProductRed: (state: any, action: any) => {
      void { ...state, key: (state.key = action.payload) };
    },
    searchProductRed: (state: any, action: any) => {
      void { ...state, result: (state.result = action.payload) };
    },
  },
});

export const { deleteProductRed, searchProductRed } = adminSlice.actions;

export default adminSlice.reducer;
