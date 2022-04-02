import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    key: "",
    result: "",
    data: [],
  },
  reducers: {
    deleteProductRed: (state: any, action: any) => {
      void { ...state, key: (state.key = action.payload) };
    },
    searchProductRed: (state: any, action: any) => {
      void { ...state, result: (state.result = action.payload) };
    },
    loadDataRed: (state: any, action: any) => {
      void { ...state, data: (state.data = action.payload) };
    },
  },
});

export const { deleteProductRed, searchProductRed, loadDataRed } =
  adminSlice.actions;

export default adminSlice.reducer;
