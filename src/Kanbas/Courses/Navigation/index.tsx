// src/Kanbas/Courses/Navigation/index.tsx
import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css"

export default function CourseNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  
  const links = [
    { label: "Home", path: "Home" },
    { label: "Modules", path: "Modules" },
    { label: "Assignments", path: "Assignments" },
    { label: "Grades", path: "Grades" },
    { label: "People", path: "People" },  // 确保有People链接
    { label: "Announcements", path: "Announcements" },
    { label: "Analytics", path: "Analytics" }
  ];

  return (
    <div className="wd-course-navigation">
      <div className="list-group">
        {links.map((link) => (
          <Link
            key={link.path}
            to={`/Kanbas/Courses/${cid}/${link.path}`}
            className={`list-group-item ${
              pathname.includes(link.path) ? "active" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}