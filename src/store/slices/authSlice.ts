import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  jwt?: string;
  id: string;
  name: string;
  email: string;
  isAuthenticated: boolean;
  isOnboarding:boolean;
}

const initialState: AuthState = {
  jwt: "",
  id: "",
  name: "",
  email: "",
  isAuthenticated: true,
  isOnboarding:false,
};

export const auth = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: () => initialState,
    login: (state, action: PayloadAction<AuthState>) => {
      return { ...action.payload, isAuthenticated: true };
    },
    updateOnboarding: (state, action: PayloadAction<boolean>) => {
      return { ...state, isOnboarding: action.payload };
    },
  },
});

export const { login, logout, updateOnboarding } = auth.actions;
export default auth.reducer;
