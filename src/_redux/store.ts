import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import adminSlice from "./adminSlice";
import watchData from "./sagas/adminSaga";

const sagaMidllware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    adminSlice: adminSlice,
  },
  middleware: [sagaMidllware],
});
sagaMidllware.run(watchData);
export default store;
