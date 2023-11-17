import { configureStore } from "@reduxjs/toolkit";
import tokenerReducer from "../slice";
import firstNameReducer from "../profileSlice";
import lastNameReducer from "../profileSlice";
import userNameReducer from "../profileSlice";

export const store = configureStore({
  reducer: {
    tokener: tokenerReducer,
    firstName: firstNameReducer,
    lastName: lastNameReducer,
    userName: userNameReducer,
  },
});
