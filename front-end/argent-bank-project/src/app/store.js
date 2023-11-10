import { configureStore } from "@reduxjs/toolkit";
import tokenerReducer from "../slice";

export const store = configureStore({
  reducer: {
    tokener: tokenerReducer,
  },
});
