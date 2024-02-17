import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  jwt?: string;
  id: string;
  name: string;
  email: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
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
    login: (state, action: PayloadAction<AuthState>) => {
      return { ...action.payload, isAuthenticated: true };
    },
  },
});

export const { login, logout } = auth.actions;
export default auth.reducer;
