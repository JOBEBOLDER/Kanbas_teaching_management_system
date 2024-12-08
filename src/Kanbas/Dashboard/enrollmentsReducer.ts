import { createSlice } from "@reduxjs/toolkit";
import db from "../services/db";

// 定义 Enrollment 接口
interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface EnrollmentState {
  enrollments: Enrollment[];
  showAllCourses: boolean;
}

const initialState: EnrollmentState = {
  enrollments: db.enrollments,
  showAllCourses: false,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleShowAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
    enroll: (state, action: { payload: { userId: string; courseId: string } }) => {
      const { userId, courseId } = action.payload;
      state.enrollments.push({
        _id: new Date().getTime().toString(),
        user: userId,
        course: courseId,
      });
    },
    unenroll: (state, action: { payload: { userId: string; courseId: string } }) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
  },
});

export const { toggleShowAllCourses, enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;