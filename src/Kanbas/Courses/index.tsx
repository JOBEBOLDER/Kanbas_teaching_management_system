// src/Kanbas/Courses/index.tsx
import { courses } from "../Database";
import { FaAlignJustify } from "react-icons/fa6";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor/Editor";
import Grades from "./Grades";
import PeopleTable from "./People/Table";

// 导入或定义必要的接口
interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  description: string;
  department?: string;
  credits?: number;
}

interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: any[];
}

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  dueDate: string;
}

// 定义组件props接口
interface CoursesProps {
  modules: Module[];
  assignments: Assignment[]; // 修正这里的类型名
}

export default function Courses({ modules, assignments }: CoursesProps) {
  const { cid } = useParams();
  const coursesTyped = courses as Course[];
  const course = coursesTyped.find((course) => course._id === cid);

  if (!course) {
    return <Navigate to="/Kanbas/Dashboard" />;
  }

  return (
    <div className="wd-courses container-fluid">
      <div className="row">
        <div className="col-12 border-bottom mb-3">
          <h2 className="text-danger py-3">
            <FaAlignJustify className="me-2" />
            {course.name}
          </h2>
        </div>
        
        <div className="row">
          <div className="col-md-2">
            <CourseNavigation />
          </div>
          
          <div className="col-md-10">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home course={course} />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route 
                path="Assignments/:aid" 
                element={<AssignmentEditor />} 
              />
               <Route path="Grades" element={<Grades />} />
               <Route path="People" element={<PeopleTable />} /> {/* 添加People路由 */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}