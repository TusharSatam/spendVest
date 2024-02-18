import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UUID } from "crypto";

type singleNotification = {
  _id: UUID;
  title: string;
  description: string;
  category: "Goal" | "Tips & Tricks" | "Offers" | "Others";
  seen?: boolean;
};

const initialState: singleNotification[] = [];

export const notification = createSlice({
  name: "notificationSlice",
  initialState: initialState,
  reducers: {
    addMultipleNotifications: (
      state,
      action: PayloadAction<singleNotification[]>
    ) => {
      return [...action.payload, ...state];
    },
    addSingleNotification: (
      state,
      action: PayloadAction<singleNotification>
    ) => {
      return [action.payload, ...state];
    },
    clearAllNotifications: () => {
      return [];
    },
    clearSingleNotification: (state, action: PayloadAction<UUID>) => {
      const index = state.findIndex((obj) => obj._id === action.payload);
      const newArr = state.slice(index, 1);
      return newArr;
    },
    seeSingleNotification: (state, action: PayloadAction<UUID>) => {
      const index = state.findIndex((obj) => obj._id === action.payload);
      state[index] = { ...state[index], seen: true };
    },
    seeMultipleNotifications: (state, action: PayloadAction<UUID[]>) => {
      let newArr: singleNotification[] = [];
      state.forEach((obj) => {
        const _id = obj._id;
        if (action.payload.includes(_id)) {
          newArr.push({ ...obj, seen: true });
        } else {
          newArr.push(obj);
        }
      });
      return newArr;
    },
  },
});

export const {
  addSingleNotification,
  addMultipleNotifications,
  clearAllNotifications,
  clearSingleNotification,
  seeMultipleNotifications,
  seeSingleNotification,
} = notification.actions;
export default notification.reducer;
