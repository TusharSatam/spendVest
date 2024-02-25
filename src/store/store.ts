import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { authApi } from "./api/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./api/userApi";
import { goalApi } from "./api/goalApi";

export const store = configureStore({
  reducer: {
    authSlice: authSlice,

    [authApi.reducerPath]:authApi.reducer,
    [userApi.reducerPath]:userApi.reducer,
    [goalApi.reducerPath]:goalApi.reducer,
  },
  middleware:(getMiddleware)=>
  getMiddleware({}).concat([
    authApi.middleware,
    userApi.middleware,
    goalApi.middleware
  ])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
