// src/Kanbas/Courses/Assignments/Editor/index.tsx
import { useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import "./index.css";

// 更新Assignment接口定义，包含所有必要的属性
interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  dueDate: string;
  availableFromDate?: string;  // 改为可选属性
  availableUntilDate?: string; // 改为可选属性
  published?: boolean;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = assignments.find(
    (assignment: Assignment) => assignment._id === aid
  ) as Assignment | undefined;

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div className="assignment-editor">
      <div className="editor-header d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <FaCheckCircle className="text-success me-2" />
          <h2 className="mb-0">Assignment Details</h2>
        </div>
        <div>
          <span className="text-success me-2">
            {assignment.published ? "Published" : "Draft"}
          </span>
          <FaEllipsisV />
        </div>
      </div>

      <form className="assignment-form">
        <div className="mb-3">
          <label className="form-label fw-bold">Assignment Name</label>
          <input
            type="text"
            className="form-control"
            value={assignment.title}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Assignment Description</label>
          <textarea
            className="form-control"
            rows={5}
            value={assignment.description}
            readOnly
          ></textarea>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label fw-bold">Points</label>
            <input
              type="number"
              className="form-control"
              value={assignment.points}
              readOnly
            />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bold">Assignment Group</label>
            <select className="form-select" disabled>
              <option>ASSIGNMENTS</option>
            </select>
          </div>
        </div>

        <div className="assignment-dates mb-3">
          <h3 className="h5 mb-3">Assign</h3>
          <div className="date-fields bg-light p-3 border rounded">
            <div className="mb-3">
              <label className="form-label fw-bold">Due Date</label>
              <input
                type="datetime-local"
                className="form-control"
                value={assignment.dueDate}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Available from</label>
              <input
                type="datetime-local"
                className="form-control"
                value={assignment.availableFromDate || ''}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Until</label>
              <input
                type="datetime-local"
                className="form-control"
                value={assignment.availableUntilDate || ''}
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div className="form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="notify" 
            />
            <label className="form-check-label" htmlFor="notify">
              Notify students that this content has changed
            </label>
          </div>
          <div>
            <Link
              to={`/Kanbas/Courses/${cid}/Assignments`}
              className="btn btn-light me-2"
            >
              Cancel
            </Link>
            <Link
              to={`/Kanbas/Courses/${cid}/Assignments`}
              className="btn btn-danger"
            >
              Save
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}