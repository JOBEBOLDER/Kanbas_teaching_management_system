// src/Kanbas/Courses/People/Table.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { users, enrollments, User, Enrollment } from "../../Database";
import { FaUserCircle, FaEllipsisV } from "react-icons/fa";
import "./index.css";

export default function PeopleTable() {
  const { cid } = useParams();

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between mb-4">
        <div className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search for users..."
          />
          <button className="btn btn-light">Filter</button>
        </div>
        <div>
          <button className="btn btn-danger">
            <i className="fas fa-plus me-2"></i>People
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Login ID</th>
              <th>Section</th>
              <th>Role</th>
              <th>Last Activity</th>
              <th>Total Activity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user: User) =>
                enrollments.some(
                  (enrollment: Enrollment) =>
                    enrollment.user === user._id && enrollment.course === cid
                )
              )
              .map((user: User) => (
                <tr key={user._id}>
                  <td className="align-middle">
                    <div className="d-flex align-items-center">
                      <FaUserCircle className="me-2 text-secondary" size={32} />
                      <div>
                        <div className="fw-bold">
                          {user.firstName} {user.lastName}
                        </div>
                        <div className="text-muted small">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">{user.loginId}</td>
                  <td className="align-middle">{user.section}</td>
                  <td className="align-middle">
                    <span className={`badge ${getBadgeClass(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="align-middle">{user.lastActivity}</td>
                  <td className="align-middle">{user.totalActivity}</td>
                  <td className="align-middle">
                    <button className="btn btn-light">
                      <FaEllipsisV />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function getBadgeClass(role: string): string {
  switch (role.toUpperCase()) {
    case 'FACULTY':
      return 'bg-primary';
    case 'STUDENT':
      return 'bg-success';
    case 'TA':
      return 'bg-warning text-dark';
    case 'ADMIN':
      return 'bg-danger';
    default:
      return 'bg-secondary';
  }
}