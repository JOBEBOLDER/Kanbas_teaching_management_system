import { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";

// 根据课程信息返回对应的图片URL
const getCourseImage = (course: any) => {
  const imageMap: { [key: string]: string } = {
    "RS101": "/images/rocket-propulsion.png",
    "RS102": "/images/aerodynamics.png", 
    "RS103": "/images/spaceship-design.png",
    "CH1230": "/images/flowers.jpg",
    "CH1240": "/images/chemistry-lesson-school-laboratory-equipment-600nw-2500197829.webp",
    "CH1250": "/images/reactjs.jpg",
    "ME101": "/images/language.jpg",
    "ME102": "/images/men_diplomacy.jpg",
    "ME103": "/images/history.jpeg",
    "EDU201": "/images/democratic.jpg",
    "HIS301": "/images/ood.jpg",
    "HIS302": "/images/ood.jpg",
    "HIS303": "/images/ood.jpg",
    "HIS304": "/images/ood.jpg",
    "HIS305": "/images/ood.jpg",
    "HIS306": "/images/ood.jpg",
    "HIS307": "/images/ood.jpg",
  };
  
  // 如果课程编号在映射中，使用对应图片，否则使用默认图片
  return imageMap[course.number] || "/images/reactjs.jpg";
};

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: {
    _id: string;
    id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    image: string;
  }[];
  course: {
    _id: string;
    id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    image: string;
  };
  setCourse: (course: {
    _id: string;
    id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    image: string;
  }) => void;
  addNewCourse: () => void;
  deleteCourse: (id: string) => void;
  updateCourse: () => void;
}) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="add-course">
        <input
          value={course.name}
          className="form-control"
          placeholder="Course Name"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          value={course.number}
          className="form-control"
          placeholder="Course Number"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <button className="btn btn-primary" onClick={addNewCourse}>
          Add
        </button>
        <button className="btn btn-warning" onClick={updateCourse}>
          Update
        </button>
      </div>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
                <img
                  src={getCourseImage(course)}
                  className="card-img-top"
                  style={{ height: "150px" }}
                />
                <div className="card-body">
                  <Link
                    to={`/Kanbas/Courses/${course.id}/Home`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="card-title card-title-style">
                      {course.number} {course.name}{" "}
                    </div>
                    <p className="card-text card-text-style">{course.name}</p>
                    <div>
                      <button className="btn btn-primary"> Go </button>
                      <div className="float-end">
                        <button
                          className="btn btn-secondary me-1"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
