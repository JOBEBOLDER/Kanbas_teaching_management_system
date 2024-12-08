import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import * as client from "../client";

interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableFromDate: string;
  availableUntilDate: string;
  course: string;
}

interface AssignmentEditorProps {
  isFaculty: boolean;
}

  export default function AssignmentEditor({ isFaculty }: AssignmentEditorProps) {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
  
    const [assignment, setAssignment] = useState<Assignment>({
      _id: "",
      title: "New Assignment",
      description: "",
      points: 100,
      dueDate: new Date().toISOString().slice(0, 16),
      availableFromDate: new Date().toISOString().slice(0, 16),
      availableUntilDate: new Date().toISOString().slice(0, 16),
      course: cid || ""
    });
  
    const fetchAssignment = async () => {
      if (aid && aid !== "new") {
        try {
          const response = await client.findAssignmentById(aid);
          setAssignment(response);
        } catch (error) {
          console.error("Error fetching assignment:", error);
        }
      }
    };
  
    useEffect(() => {
      fetchAssignment();
    }, [aid]);

    const handleSave = async () => {
      try {
        if (aid && aid !== "new") {
          await client.updateAssignment(aid, assignment);
        } else {
          await client.createAssignment(assignment);
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
      } catch (error) {
        console.error("Error saving assignment:", error);
      }
    };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div className="assignment-editor p-4">
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <div>
          <FaCheckCircle className="text-success me-2" />
          <h2 className="d-inline">{aid ? "Edit Assignment" : "New Assignment"}</h2>
        </div>
      </div>

      <form className="assignment-form">
        <div className="mb-3">
          <label className="form-label">Assignment Name</label>
          <input
            type="text"
            className="form-control"
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
            disabled={!isFaculty}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={5}
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
            disabled={!isFaculty}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Points</label>
          <input
            type="number"
            className="form-control"
            value={assignment.points}
            onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
            disabled={!isFaculty}
          />
        </div>

        <div className="assign-dates mb-3">
          <h4 className="mb-3">Assign</h4>
          <div className="mb-3">
            <label className="form-label">Due Date</label>
            <input
              type="datetime-local"
              className="form-control"
              value={assignment.dueDate}
              onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
              disabled={!isFaculty}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Available From</label>
            <input
              type="datetime-local"
              className="form-control"
              value={assignment.availableFromDate}
              onChange={(e) => setAssignment({ ...assignment, availableFromDate: e.target.value })}
              disabled={!isFaculty}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Until</label>
            <input
              type="datetime-local"
              className="form-control"
              value={assignment.availableUntilDate}
              onChange={(e) => setAssignment({ ...assignment, availableUntilDate: e.target.value })}
              disabled={!isFaculty}
            />
          </div>
        </div>

        {isFaculty && (
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleSave}
            >
              {aid ? "Update" : "Save"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}