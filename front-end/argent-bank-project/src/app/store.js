import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../components/SignInForm";

export const store = configureStore({
  reducer: { reducer },
});
