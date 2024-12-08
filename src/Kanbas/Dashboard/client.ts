import axios from "axios";

const BASE_API = process.env.REACT_APP_API_BASE || "http://localhost:4000";
const ENROLLMENTS_API = `${BASE_API}/api/enrollments`;

export interface Enrollment {
  _id?: string;
  user: string;
  course: string;
  grade?: number;
  status?: "ENROLLED" | "PENDING" | "DROPPED";
  startDate: string;
}

export const findAllEnrollments = async () => {
  const response = await axios.get(ENROLLMENTS_API);
  return response.data;
};

export const createEnrollment = async (enrollment: Enrollment) => {
  const response = await axios.post(ENROLLMENTS_API, enrollment);
  return response.data;
};

export const deleteEnrollment = async (enrollmentId: string) => {
  const response = await axios.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
  return response.data;
};

export const findEnrollmentById = async (enrollmentId: string) => {
  const response = await axios.get(`${ENROLLMENTS_API}/${enrollmentId}`);
  return response.data;
};

export const findEnrollmentsByCourse = async (courseId: string) => {
  const response = await axios.get(`${BASE_API}/api/courses/${courseId}/enrollments`);
  return response.data;
};

export const findEnrollmentsByUser = async (userId: string) => {
  const response = await axios.get(`${BASE_API}/api/users/${userId}/enrollments`);
  return response.data;
};