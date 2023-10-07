import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resumeData: {
    contactInfo: [],
    role: [],
    competencies: [],
    experiences: [],
    education: [],
  },
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addContactInfo: (state, action) => {
      state.resumeData.contactInfo.push(action.payload);
    },
    addRole: (state, action) => {
      state.resumeData.role.push(action.payload);
    },
    addCompetencies: (state, action) => {
      state.resumeData.competencies.push(action.payload);
    },
    addExperience: (state, action) => {
      state.resumeData.experiences.push(action.payload);
    },
    addEducation: (state, action) => {
      state.resumeData.education.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addContactInfo,
  addRole,
  addCompetencies,
  addExperience,
  addEducation,
} = resumeSlice.actions;

export default resumeSlice.reducer;
