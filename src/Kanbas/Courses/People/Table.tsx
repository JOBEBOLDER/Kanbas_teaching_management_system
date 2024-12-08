import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as userClient from "./client";
import * as enrollmentClient from "./client";
import { FaUserCircle, FaEllipsisV } from "react-icons/fa";
import "./index.css";

interface User {
  _id: string;
  username: string;
  role: "FACULTY" | "STUDENT" | "TA" | "ADMIN";
  loginId: string;
  section: string;
  lastActivity: string;
  totalActivity: string;
  email: string;
  firstName: string;
  lastName: string;
}

function PeopleTable() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [users, setUsers] = useState<User[]>([]);
  const [enrollments, setEnrollments] = useState<any[]>([]);

  const fetchUsers = async () => {
    try {
      const enrolledUsers = await enrollmentClient.findEnrollmentsByCourse(cid!);
      setEnrollments(enrolledUsers);
      const allUsers = await userClient.findAllUsers();
      const courseUsers = allUsers.filter((user: User) =>
        enrolledUsers.some((enrollment: any) => enrollment.user === user._id)
      );
      setUsers(courseUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);

  function getBadgeClass(role: string): string {
    switch (role.toUpperCase()) {
      case "FACULTY":
        return "bg-primary";
      case "STUDENT":
        return "bg-success";
      case "TA":
        return "bg-warning text-dark";
      case "ADMIN":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  }

  return (
    <div className="p-4">
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
            {users.map((user: User) => (
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

export default PeopleTable;