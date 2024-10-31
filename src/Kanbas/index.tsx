import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";
import * as db from "./Database";
import { Course } from "./types";

// 定义课程状态接口
interface CourseState {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department?: string;
  description: string;
}

export default function Kanbas() {
  // 课程列表状态
  const [courses, setCourses] = useState<Course[]>(db.courses);
  
  // 当前编辑的课程状态
  const [course, setCourse] = useState<CourseState>({
    _id: "",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    department: "D123",
    description: "New Description"
  });

  // 添加新课程
  const addNewCourse = () => {
    const newCourse = {
      ...course,
      _id: new Date().getTime().toString()
    };
    setCourses([...courses, newCourse]);
    resetCourseForm();
  };

  // 删除课程
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter(c => c._id !== courseId));
  };

  // 更新课程
  const updateCourse = () => {
    setCourses(
      courses.map(c => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    resetCourseForm();
  };

  // 重置课程表单
  const resetCourseForm = () => {
    setCourse({
      _id: "",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      department: "D123",
      description: "New Description"
    });
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div className="flex-grow-1">
          <Routes>
            {/* Dashboard Route */}
            <Route 
              path="/" 
              element={<Navigate to="Dashboard" />} 
            />

            {/* Account Routes */}
            <Route 
              path="Account/*" 
              element={<Account />} 
            />

            {/* Protected Dashboard Route */}
            <Route 
              path="Dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard 
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                </ProtectedRoute>
              } 
            />

            {/* Protected Courses Route */}
            <Route 
              path="Courses/:cid/*" 
              element={
                <ProtectedRoute>
                  <Courses 
                    courses={courses}
                    modules={db.modules}
                    assignments={db.assignments}
                  />
                </ProtectedRoute>
              } 
            />

            {/* Other Routes */}
            <Route 
              path="Calendar" 
              element={<h1>Calendar</h1>} 
            />
            <Route 
              path="Inbox" 
              element={<h1>Inbox</h1>} 
            />
            <Route 
              path="History" 
              element={<h1>History</h1>} 
            />
            <Route 
              path="Studio" 
              element={<h1>Studio</h1>} 
            />
            <Route 
              path="Commons" 
              element={<h1>Commons</h1>} 
            />
            <Route 
              path="Help" 
              element={<h1>Help</h1>} 
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}