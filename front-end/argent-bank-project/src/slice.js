import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const slice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    // reducer: (state, action) => {
    //   switch (action.type) {
    //     case "newEmail":
    //       return { ...state, email: action.payload };
    //     case "newPassword":
    //       return { ...state, password: action.payload };
    //     default:
    //       return { ...state };
    //   }
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setToken } = slice.actions;

export default slice.reducer;
