import { configureStore } from "@reduxjs/toolkit";

import adminSlice from "./adminSlice";

const store = configureStore({
  reducer: {
    adminSlice: adminSlice,
  },
});
export default store;
