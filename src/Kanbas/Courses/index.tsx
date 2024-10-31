import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";
import { useSelector } from "react-redux";
import CourseNavigation from "./Navigation";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor/Editor";
import Grades from "./Grades";
import PeopleTable from "./People/Table";
import "./index.css";
import { Course, Module, Assignment } from "../types";


interface CoursesProps {
  courses: Course[];
  modules: Module[];
  assignments: Assignment[];
}

export default function Courses({ courses, modules = [], assignments = [] }: CoursesProps) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  if (!course) {
    return <Navigate to="/Kanbas/Dashboard" />;
  }

  const courseModules = modules.filter(module => module.course === cid);
  const courseAssignments = assignments.filter(assignment => assignment.course === cid);

  return (
    <div className="wd-courses">
      <div className="d-flex flex-column h-100">
        <div className="wd-courses-header border-bottom mb-3">
          <h2 className="text-danger d-flex align-items-center">
            <FaAlignJustify className="me-2" />
            {course.name}
          </h2>
        </div>
        
        <div className="wd-courses-content flex-grow-1">
          <div className="row">
            <div className="col-md-2">
              <CourseNavigation />
            </div>
            <div className="col-md-10">
            <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home course={course} />} />
            <Route path="Modules" element={<Modules isFaculty={isFaculty} />} />
            <Route path="Assignments" element={<Assignments isFaculty={isFaculty} />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor isFaculty={isFaculty} />} />
            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}