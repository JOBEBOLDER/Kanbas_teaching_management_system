// src/Kanbas/Dashboard/index.tsx
import { Link } from "react-router-dom";
import { Course } from "../Database";
import "./index.css";

interface DashboardProps {
  courses: Course[];
}

export default function Dashboard({ courses }: DashboardProps) {
  // 获取课程图片
  const getCourseImage = (course: Course): string => {
    const imageMap: { [key: string]: string } = {
      "Rocket Propulsion": "rocket.jpg",
      "Aerodynamics": "aerodynamics.jpg",
      "Spacecraft Design": "spacecraft.jpg",
      "Organic Chemistry":"chemistry.jpg",
      "Inorganic Chemistry": "chemistry2.jpg",
      "Physical Chemistry" : "chemistry3.jpg",
      "Ancient Languages and Scripts of Middle-earth" : "languages.jpg",
      "Wizards, Elves, and Men: Inter-species Diplomacy in Middle-earth" : "manhistory.jpg",
      "History and Practice of Middle-earth Magic" : "history2.jpg",
      "Principles of Democratic Education" : "education.jpg"

    };
    return imageMap[course.name] || imageMap.default;
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div 
              key={course._id}
              className="wd-dashboard-course col" 
              style={{ width: "300px" }}
            >
              <div className="card rounded-3 overflow-hidden">
                <Link 
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img 
                    src={`/images/${getCourseImage(course)}`} 
                    alt={course.name}
                    className="card-img-top"
                    width="100%" 
                    height={160} 
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p className="card-text text-muted small">
                      {course.number} • {course.department}
                    </p>
                    <p 
                      className="card-text overflow-y-hidden" 
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted small">
                        {course.startDate} - {course.endDate}
                      </span>
                      <button className="btn btn-primary">
                        Go to Course
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}