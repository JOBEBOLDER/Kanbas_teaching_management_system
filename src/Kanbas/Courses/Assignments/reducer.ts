// src/Kanbas/Courses/Assignments/reducer.ts
import { createSlice } from "@reduxjs/toolkit";
import db from "../../services/db";

// 定义 Assignment 接口
interface Assignment {
  _id: string;
  title: string;
  course: string;
}

// 定义 state 接口
interface AssignmentState {
  assignments: Assignment[];
}

// 初始状态，使用 db.assignments
const initialState: AssignmentState = {
  assignments: db.assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment: Assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment: Assignment) =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;