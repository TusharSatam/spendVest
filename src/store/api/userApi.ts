import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { AuthState } from "../slices/authSlice";

export interface UserData
  extends Omit<AuthState, "isAuthenticated" | "isOnboarding"> {}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL + "user/",
    credentials: "include",
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
    },
  }),
  endpoints: (builder) => ({
    checkUser: builder.query<{ data: UserData }, { _id: string; jwt: string }>({
      query: (data) => ({
        url: `${data._id}`,
        method: "GET",
      }),
    }),
    updateUser: builder.mutation<UserData, UserData>({
      query: (data) => ({
        url: `${data._id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useCheckUserQuery,
  useLazyCheckUserQuery,
  useUpdateUserMutation,
} = userApi;
