import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resume: [
      
  ],
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = resumeSlice.actions;

export default resumeSlice.reducer;
