import axios from "axios";

const BASE_API = process.env.REACT_APP_API_BASE || "http://localhost:4000";
const USERS_API = `${BASE_API}/api/users`;

export interface User {
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

export const findAllUsers = async () => {
  const response = await axios.get(USERS_API);
  return response.data;
};

export const createUser = async (user: User) => {
  const response = await axios.post(USERS_API, user);
  return response.data;
};

export const updateUser = async (userId: string, user: User) => {
  const response = await axios.put(`${USERS_API}/${userId}`, user);
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axios.delete(`${USERS_API}/${userId}`);
  return response.data;
};
export const findEnrollmentsByCourse = async (courseId: string) => {
    const response = await axios.get(`${BASE_API}/api/courses/${courseId}/enrollments`);
    return response.data;
  };