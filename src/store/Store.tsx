import { configureStore } from "@reduxjs/toolkit";
import showSlice from "./features/showSlice";

export const Store = configureStore({
  reducer: {
    show: showSlice,
  },
});
