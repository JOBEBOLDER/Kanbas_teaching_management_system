// src/Kanbas/store.ts
import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer"; // 添加这行
import enrollmentsReducer from "./Dashboard/enrollmentsReducer"


const store = configureStore({
    reducer: {
      modulesReducer,
      accountReducer,
      assignmentsReducer,  // 添加这行
      enrollmentsReducer,

    },
  });
  
  export default store;