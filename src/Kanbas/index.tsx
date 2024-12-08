import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import store from "./store";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";
import { Course } from "./types.js";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import './styles.css'

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
  // Initialize courses as empty array since we'll fetch from server
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  

  
  const [course, setCourse] = useState<CourseState>({
    _id: "",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    department: "D123",
    description: "New Description"
  });

  // Fetch courses when component mounts or currentUser changes
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  // Add new course
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };


  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };


  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(courses.map((c) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })
  );};


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
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account/*" element={<Account />} />
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
            <Route 
              path="Courses/:cid/*" 
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              } 
            />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="Inbox" element={<h1>Inbox</h1>} />
            <Route path="History" element={<h1>History</h1>} />
            <Route path="Studio" element={<h1>Studio</h1>} />
            <Route path="Commons" element={<h1>Commons</h1>} />
            <Route path="Help" element={<h1>Help</h1>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}