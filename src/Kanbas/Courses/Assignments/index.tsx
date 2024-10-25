// src/Kanbas/Courses/Assignments/index.tsx
import { useParams, Link } from "react-router-dom";
import { assignments } from "../../Database";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaGripVertical,
  FaEdit,
} from "react-icons/fa";
import "./index.css";

interface Assignment {
  _id: string;
  title: string;
  course: string;
}

export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = assignments.filter(
    (assignment: Assignment) => assignment.course === cid
  );

  return (
    <div className="wd-assignments">
      {/* 顶部搜索和按钮 */}
      <div className="assignment-header d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex flex-grow-1 me-3">
          <div className="search-box position-relative flex-grow-1 me-2">
            <input
              type="text"
              className="form-control ps-4"
              placeholder="Search for Assignment"
            />
            <i className="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-2 text-secondary"></i>
          </div>
          <button className="btn btn-light border">
            <i className="fas fa-plus me-1"></i>Group
          </button>
        </div>
        <button className="btn btn-danger">
          <i className="fas fa-plus me-1"></i>Assignment
        </button>
      </div>

      {/* 作业列表 */}
      <div className="list-group shadow-sm">
        {/* 作业标题栏 */}
        <div className="list-group-item assignments-header">
          <div className="d-flex justify-content-between align-items-center py-1">
            <div className="d-flex align-items-center">
              <FaGripVertical className="me-2 text-secondary" />
  
              <span className="fw-bold">ASSIGNMENTS</span>
            </div>
            <div>
              <span className="badge rounded-pill bg-light text-dark border me-2">
                40% of Total
              </span>
              <button className="btn btn-transparent p-0 me-2">
                <i className="fas fa-plus text-secondary"></i>
              </button>
              <button className="btn btn-transparent p-0">
                <FaEllipsisV className="text-secondary" />
              </button>
            </div>
          </div>
        </div>

        {/* 作业列表项 */}
        {courseAssignments.map((assignment, index) => (
          <div key={assignment._id} className="list-group-item assignment-item">
            <div className="d-flex align-items-center mb-2">
              <div className="drag-handle me-2">
                <FaGripVertical className="text-secondary" />
               
              </div>
              <div className="assignment-icon me-3">
                <FaEdit className="text-success" />
              </div>
              <div className="flex-grow-1">
                <Link
                  to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  className="assignment-title text-danger fw-bold text-decoration-none"
                >
                  {`A${index + 1}`}
                </Link>
                <div className="assignment-details text-secondary small">
                  <span>Multiple Modules</span>
                  <span className="mx-2">|</span>
                  <span>Not available until May 6 at 12:00am</span>
                  <span className="mx-2">|</span>
                  <span>Due May 13 at 11:59pm</span>
                  <span className="mx-2">|</span>
                  <span>100 pts</span>
                </div>
              </div>
              <div className="assignment-status">
                <FaCheckCircle className="text-success me-2" />
                <FaEllipsisV className="text-secondary" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}