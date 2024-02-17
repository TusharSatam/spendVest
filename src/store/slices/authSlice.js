import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jwt: "",
  id: "",
  name: "",
  email: "",
  isAuthenticated: false,
};

export const auth = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: () => initialState,
    login: (state, action) => {
      return { ...action.payload, isAuthenticated:true };
    },
  },
});

export const { login, logout } = auth.actions;
export default auth.reducer;