import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

interface Credentials {
  email: string;
  password: string;
}

interface UserData {
  jwt: string;
  _id: string;
  name: string;
  email: string;
  isAuthenticated: boolean;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL + "auth/",
    credentials: "same-origin",
    mode: "cors",
    prepareHeaders: (headers, { getState }) => {
      const bearertoken = (getState() as RootState).authSlice.jwt;
      // If we have a bearertoken set in state, let's assume that we should be passing it.
      if (bearertoken) {
        headers.set("Authorization", `Bearer ${bearertoken}`);
      } else {
        const localJWT = localStorage.getItem("jwt");
        headers.set("Authorization", `Bearer ${localJWT}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserData, Credentials>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation<UserData, Credentials>({
      query: (credentials) => ({
        url: "signup",
        method: "POST",
        body: credentials,
      }),
    }),
    protectedRoute: builder.query<UserData, void>({
      query: () => ({
        url: "protected",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useProtectedRouteQuery,
} = authApi;
