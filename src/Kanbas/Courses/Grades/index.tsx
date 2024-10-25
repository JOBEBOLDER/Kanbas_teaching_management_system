// src/Kanbas/Courses/Grades/index.tsx
import { useParams } from "react-router-dom";
import { assignments } from "../../Database";

export default function Grades() {
  const { cid } = useParams();
  const courseAssignments = assignments.filter(
    assignment => assignment.course === cid
  );

  return (
    <div className="wd-grades">
      <h2>Grades</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Due Date</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {courseAssignments.map(assignment => (
            <tr key={assignment._id}>
              <td>{assignment.title}</td>
              <td>{assignment.dueDate}</td>
              <td>{assignment.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}