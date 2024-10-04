import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBook, FaComments, FaVideo, FaTasks, FaCheckCircle, FaUsers } from "react-icons/fa"; // 引入相应的图标

export default function CoursesNavigation() {
  const links = [
    { label: "Home", icon: FaHome, path: "Home" },
    { label: "Modules", icon: FaBook, path: "Modules" },
    { label: "Piazza", icon: FaComments, path: "Piazza" },
    { label: "Zoom Meetings", icon: FaVideo, path: "Zoom" },
    { label: "Assignments", icon: FaTasks, path: "Assignments" },
    { label: "Quizzes", icon: FaCheckCircle, path: "Quizzes" },
    { label: "People", icon: FaUsers, path: "People" },
  ];

  const { pathname } = useLocation();

  return (
    <div className="list-group wd-courses-navigation">
      {links.map((link) => (
        <Link
          key={link.path}
          to={`/Kanbas/Courses/1234/${link.path}`}
          className={`list-group-item ${
            pathname.includes(link.path) ? "active" : ""
          }`}
        >
          <link.icon className="me-2" /> {/* 使用 `react-icons` 图标组件 */}
          {link.label}
        </Link>
      ))}
    </div>
  );
}