import { useParams } from "react-router-dom";
import React from 'react';  // 添加这行
import db from "../../services/db";

// 定义 Assignment 接口
interface Assignment {
  _id: string;
  title: string;
  course: string;
  dueDate: string;
  points: number;
}

export default function Grades() {
  const { cid } = useParams();
  const courseAssignments = db.assignments.filter(
    (assignment: Assignment) => assignment.course === cid
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
          {courseAssignments.map((assignment: Assignment) => (
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