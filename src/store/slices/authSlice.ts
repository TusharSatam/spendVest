import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  jwt?: string;
  _id?: string;
  name?: string;
  email: string;
  phoneNumber?: string;
  panNumber?: string;
  salary?: number,
  currentRatio?: number,
  Gender?: string,
  DOB?: string,
  isAuthenticated: boolean;
  isOnboarding:boolean;
}

const initialState: AuthState = {
  jwt: "",
  _id: "",
  name: "",
  email: "",
  phoneNumber: "",
  isAuthenticated: false,
  isOnboarding:false,
};

export const auth = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: () => initialState,
    login: (state, action: PayloadAction<AuthState>) => {
      return { ...state, ...action.payload, isAuthenticated: true };
    },
    updateOnboarding: (state, action: PayloadAction<boolean>) => {
      return { ...state, isOnboarding: action.payload };
    },
  },
});

export const { login, logout, updateOnboarding } = auth.actions;
export default auth.reducer;
