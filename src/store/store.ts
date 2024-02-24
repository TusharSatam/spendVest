import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { authApi } from "./api/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./api/userApi";

export const store = configureStore({
  reducer: {
    authSlice: authSlice,

    [authApi.reducerPath]:authApi.reducer,
    [userApi.reducerPath]:userApi.reducer,
  },
  middleware:(getMiddleware)=>
  getMiddleware({}).concat([
    authApi.middleware,
    userApi.middleware
  ])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
