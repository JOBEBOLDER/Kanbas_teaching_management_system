// src/Kanbas/Dashboard/enrollmentsReducer.ts
import { createSlice } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "../Database";

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState: {
    enrollments: initialEnrollments,
    showAllCourses: false,
  },
  reducers: {
    toggleShowAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
    enroll: (state, action) => {
      const { userId, courseId } = action.payload;
      state.enrollments.push({
        _id: new Date().getTime().toString(),
        user: userId,
        course: courseId,
      });
    },
    unenroll: (state, action) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
  },
});

export const { toggleShowAllCourses, enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;