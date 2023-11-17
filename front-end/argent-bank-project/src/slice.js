import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const SignInFormSlice = createSlice({
  name: "SignInForm",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    unSetToken: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, unSetToken } = SignInFormSlice.actions;
export default SignInFormSlice.reducer;
