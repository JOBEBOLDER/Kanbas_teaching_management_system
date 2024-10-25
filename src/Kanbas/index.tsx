// src/Kanbas/index.tsx
import { useState, useEffect } from "react";
import { courses as coursesArray, modules as modulesArray, assignments as assignmentsArray } from "./Database";
import KanbasNavigation from "./Navigation";
import { Navigate, Route, Routes } from 'react-router-dom';
import Account from "./Account";
import Dashboard from './Dashboard';
import Courses from './Courses';
import "./styles.css";
import PeopleTable from "./Courses/People/Table"; // 确保导入PeopleTable


// 定义类型
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

export default function Kanbas() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [modules, setModules] = useState<Module[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    setCourses(coursesArray);
    setModules(modulesArray);
    setAssignments(assignmentsArray);
  }, []);

  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard courses={courses} />} />
          <Route 
            path="/Courses/:cid/*" 
            element={<Courses modules={modules} assignments={assignments} />} 
          />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}