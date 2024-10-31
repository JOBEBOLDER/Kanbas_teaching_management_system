// src/Kanbas/Courses/Assignments/index.tsx
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaGripVertical,
  FaEdit,
  FaTrash
} from "react-icons/fa";
import { addAssignment, deleteAssignment } from "./reducer";
import "./index.css";

// 定义 Assignment 接口
interface Assignment {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFromDate?: string;
  availableUntilDate?: string;
  published?: boolean;
}

interface AssignmentsProps {
  isFaculty: boolean;
}

// 定义 AssignmentsState 接口
interface AssignmentsState {
  assignmentsReducer: {
    assignments: Assignment[];
  };
}

interface DeleteConfirmState {
  show: boolean;
  assignmentId: string;
  assignmentTitle: string;
}

export default function Assignments({ isFaculty }: AssignmentsProps) {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector((state: AssignmentsState) => 
    state.assignmentsReducer.assignments || []
  );
  const [searchTerm, setSearchTerm] = useState("");

  // 删除确认状态
  const [deleteConfirm, setDeleteConfirm] = useState<DeleteConfirmState>({
    show: false,
    assignmentId: "",
    assignmentTitle: ""
  });

  const courseAssignments = assignments
    .filter((assignment: Assignment) => assignment.course === cid)
    .filter((assignment: Assignment) => 
      assignment.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleAddAssignment = () => {
    const newAssignment: Omit<Assignment, '_id'> = {
      title: "New Assignment",
      course: cid || "",
      description: "New Assignment Description",
      points: 100,
      dueDate: new Date().toISOString(),
      published: false
    };
    dispatch(addAssignment(newAssignment));
  };

  // 处理删除点击
  const handleDeleteClick = (assignment: Assignment) => {
    setDeleteConfirm({
      show: true,
      assignmentId: assignment._id,
      assignmentTitle: assignment.title
    });
  };

  // 处理确认删除
  const handleDeleteConfirm = () => {
    dispatch(deleteAssignment(deleteConfirm.assignmentId));
    setDeleteConfirm({
      show: false,
      assignmentId: "",
      assignmentTitle: ""
    });
  };

  // 处理取消删除
  const handleDeleteCancel = () => {
    setDeleteConfirm({
      show: false,
      assignmentId: "",
      assignmentTitle: ""
    });
  };

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-2 text-secondary"></i>
          </div>
          {isFaculty && (
            <button className="btn btn-light border">
              <i className="fas fa-plus me-1"></i>Group
            </button>
          )}
        </div>
        {isFaculty && (
          <button className="btn btn-danger" onClick={handleAddAssignment}>
            <i className="fas fa-plus me-1"></i>Assignment
          </button>
        )}
      </div>

      {/* 作业列表 */}
      <div className="list-group shadow-sm">
        {/* 作业标题栏 */}
        <div className="list-group-item assignments-header">
          <div className="d-flex justify-content-between align-items-center py-1">
            <div className="d-flex align-items-center">
              {isFaculty && <FaGripVertical className="me-2 text-secondary" />}
              <span className="fw-bold">ASSIGNMENTS</span>
            </div>
            <div>
              <span className="badge rounded-pill bg-light text-dark border me-2">
                40% of Total
              </span>
              {isFaculty && (
                <>
                  <button className="btn btn-transparent p-0 me-2">
                    <i className="fas fa-plus text-secondary"></i>
                  </button>
                  <button className="btn btn-transparent p-0">
                    <FaEllipsisV className="text-secondary" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* 作业列表项 */}
        {courseAssignments.map((assignment: Assignment, index: number) => (
          <div key={assignment._id} className="list-group-item assignment-item">
            <div className="d-flex align-items-center mb-2">
              {isFaculty && (
                <div className="drag-handle me-2">
                  <FaGripVertical className="text-secondary" />
                </div>
              )}
              <div className="assignment-icon me-3">
                <FaEdit className="text-success" />
              </div>
              <div className="flex-grow-1">
                <Link
                  to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  className="assignment-title text-danger fw-bold text-decoration-none"
                >
                  {assignment.title}
                </Link>
                <div className="assignment-details text-secondary small">
                  <span>Multiple Modules</span>
                  <span className="mx-2">|</span>
                  <span>Due: {assignment.dueDate ? 
                    new Date(assignment.dueDate).toLocaleDateString() : 
                    'No due date'}</span>
                  <span className="mx-2">|</span>
                  <span>{assignment.points || 0} pts</span>
                </div>
              </div>
              <div className="assignment-status d-flex align-items-center">
                <FaCheckCircle className="text-success me-2" />
                {isFaculty && (
                  <>
                    <button 
                      className="btn btn-transparent p-0 me-2"
                      onClick={() => handleDeleteClick(assignment)}
                    >
                      <FaTrash className="text-danger" />
                    </button>
                    <FaEllipsisV className="text-secondary" />
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 删除确认对话框 */}
      {deleteConfirm.show && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={handleDeleteCancel}
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete the assignment "{deleteConfirm.assignmentTitle}"?
                This action cannot be undone.
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={handleDeleteCancel}
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  className="btn btn-danger" 
                  onClick={handleDeleteConfirm}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}