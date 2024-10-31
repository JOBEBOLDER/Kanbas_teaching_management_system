// src/Kanbas/Dashboard/index.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Course } from "../types";
import * as db from "../Database";
import { toggleShowAllCourses, enroll, unenroll } from "./enrollmentsReducer";
import "./index.css";

// 扩展 Course 类型定义
interface ExtendedCourse extends Course {
  image?: string;
}

interface DashboardProps {
  courses: Course[];
  course: Course;
  setCourse: (course: Course) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse
}: DashboardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  // Redux状态
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments, showAllCourses } = useSelector(
    (state: any) => state.enrollmentsReducer
  );

  const isStudent = currentUser?.role === "STUDENT";
  const isFaculty = currentUser?.role === "FACULTY";

  // 获取课程图片
  const getCourseImage = (course: ExtendedCourse): string => {
    const imageMap: { [key: string]: string } = {
      "Rocket Propulsion": "rocket.jpg",
      "Aerodynamics": "aerodynamics.jpg",
      "Spacecraft Design": "spacecraft.jpg",
      "Organic Chemistry": "chemistry.jpg",
      "Inorganic Chemistry": "chemistry2.jpg",
      "Physical Chemistry": "chemistry3.jpg",
      "Ancient Languages and Scripts of Middle-earth": "languages.jpg",
      "Wizards, Elves, and Men: Inter-species Diplomacy in Middle-earth": "manhistory.jpg",
      "History and Practice of Middle-earth Magic": "history2.jpg",
      "Principles of Democratic Education": "education.jpg"
    };
    return course.image || imageMap[course.name] || "default.jpg";
  };

  // 重置表单
  const resetForm = () => {
    setCourse({
      _id: "",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      department: "D123",
      description: "New Description"
    } as Course);
    setIsEditing(false);
  };

  // 检查是否已注册
  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (e: any) => e.user === currentUser._id && e.course === courseId
    );
  };

  // 处理注册/退选
  const handleEnrollment = (courseId: string) => {
    if (isEnrolled(courseId)) {
      dispatch(unenroll({ userId: currentUser._id, courseId }));
    } else {
      dispatch(enroll({ userId: currentUser._id, courseId }));
    }
  };

  // 获取要显示的课程
  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((course) => isEnrolled(course._id));

  return (
    <div className="wd-dashboard">
      <h1 className="wd-dashboard-title">
        Dashboard
        {isStudent && (
          <button
            className="btn btn-primary float-end"
            onClick={() => dispatch(toggleShowAllCourses())}
          >
            {showAllCourses ? "Show My Courses" : "Show All Courses"}
          </button>
        )}
      </h1>
      <hr />

      {/* 课程表单 - 仅对教职工显示 */}
      {isFaculty && (
        <div className="mb-4">
          <h5>{isEditing ? "Edit Course" : "New Course"}</h5>
          <div className="row g-3 align-items-end">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Course Name"
                value={course.name}
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
              />
            </div>
            <div className="col-md-2">
              <input
                type="text"
                className="form-control"
                placeholder="Course Number"
                value={course.number}
                onChange={(e) => setCourse({ ...course, number: e.target.value })}
              />
            </div>
            <div className="col-md-2">
              <input
                type="text"
                className="form-control"
                placeholder="Department"
                value={course.department}
                onChange={(e) => setCourse({ ...course, department: e.target.value })}
              />
            </div>
            <div className="col-md-2">
              <input
                type="date"
                className="form-control"
                value={course.startDate}
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
              />
            </div>
            <div className="col-md-2">
              <input
                type="date"
                className="form-control"
                value={course.endDate}
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
              />
            </div>
            <div className="col-12">
              <textarea
                className="form-control"
                placeholder="Course Description"
                value={course.description}
                onChange={(e) => setCourse({ ...course, description: e.target.value })}
              />
            </div>
            <div className="col-12">
              {isEditing ? (
                <div className="float-end">
                  <button
                    onClick={() => {
                      updateCourse();
                      setIsEditing(false);
                    }}
                    className="btn btn-warning me-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={resetForm}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={addNewCourse}
                  className="btn btn-primary float-end"
                >
                  Add
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <h2 className="wd-dashboard-title">
        {showAllCourses ? "All Courses" : "My Courses"} ({displayedCourses.length})
      </h2>
      <hr />

      {/* 课程列表 */}
      <div className="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayedCourses.map((c) => (
            <div 
              key={c._id}
              className="wd-dashboard-course col" 
              style={{ width: "300px" }}
            >
              <div className="card rounded-3 overflow-hidden">
                <img 
                  src={`/images/${getCourseImage(c)}`}
                  alt={c.name}
                  className="card-img-top"
                  width="100%" 
                  height={160} 
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {c.name}
                  </h5>
                  <p className="card-text text-muted small">
                    {c.number} • {c.department}
                  </p>
                  <p 
                    className="card-text overflow-y-hidden" 
                    style={{ maxHeight: 100 }}
                  >
                    {c.description}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted small">
                      {c.startDate} - {c.endDate}
                    </span>
                  </div>
                  <div className="card-actions mt-3 d-flex justify-content-between">
                    {isStudent ? (
                      <>
                        {isEnrolled(c._id) ? (
                          <>
                            <Link
                              to={`/Kanbas/Courses/${c._id}/Home`}
                              className="btn btn-primary"
                            >
                              Go
                            </Link>
                            <button
                              onClick={() => handleEnrollment(c._id)}
                              className="btn btn-danger"
                            >
                              Unenroll
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() => handleEnrollment(c._id)}
                            className="btn btn-success w-100"
                          >
                            Enroll
                          </button>
                        )}
                      </>
                    ) : (
                      <>
                        <Link
                          to={`/Kanbas/Courses/${c._id}/Home`}
                          className="btn btn-primary"
                        >
                          Go
                        </Link>
                        {isFaculty && (
                          <div>
                            <button
                              onClick={() => {
                                setCourse(c);
                                setIsEditing(true);
                              }}
                              className="btn btn-warning me-2"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteCourse(c._id)}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}