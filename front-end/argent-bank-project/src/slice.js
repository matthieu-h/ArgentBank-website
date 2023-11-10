import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const SignInFormSlice = createSlice({
  name: "SignInForm",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token += action.payload;
      console.log(state.token);
    },
  },
});

export const { setToken } = SignInFormSlice.actions;
export default SignInFormSlice.reducer;
