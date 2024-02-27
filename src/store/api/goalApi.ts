import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export interface GoalI {
  goalName: string;
  targetAmount: number;
  investmentFrequency: number;
  ratio: number | string;
  totalAmountInvested: number;
  brandName: string;
  userId: string;
  duration: number;
}

export const goalApi = createApi({
  reducerPath: "goalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL + "goal/",
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
    createGoal: builder.mutation<any, GoalI>({
      query: (data) => ({
        url: "",
        method: "POST",
        body: data,
      }),
    }),
    getMyGoals: builder.query<{data:GoalI[]},string>({
      query: (user_id) => ({
        url: `${user_id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateGoalMutation, useLazyGetMyGoalsQuery } = goalApi;
