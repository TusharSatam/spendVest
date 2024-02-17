import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { authApi } from "./api/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    authSlice: authSlice,

    [authApi.reducerPath]:authApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
