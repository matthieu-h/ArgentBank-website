import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../slice";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});
