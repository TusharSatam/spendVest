import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ScreenState {
  isProfileCompleted: boolean;
  isGoalSet: boolean;
}

const initialState: ScreenState = {
  isProfileCompleted: false,
  isGoalSet: false,
};

export const screenValidation = createSlice({
  name: "screenValidation",
  initialState,
  reducers: {
    update_IsProfileCompleted: (state, action: PayloadAction<boolean>) => {
      state.isProfileCompleted = action.payload;
    },
    update_isGoalSet: (state, action: PayloadAction<boolean>) => {
      state.isGoalSet = action.payload;
    },
    update_ProfileAndGoal: (state, action: PayloadAction<{ isProfileCompleted: boolean; isGoalSet: boolean }>) => {
      state.isProfileCompleted = action.payload.isProfileCompleted;
      state.isGoalSet = action.payload.isGoalSet;
    },
  },
});

export const { update_IsProfileCompleted,update_isGoalSet,update_ProfileAndGoal } = screenValidation.actions;
export default screenValidation.reducer;
