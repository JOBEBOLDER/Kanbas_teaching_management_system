import axios from "axios";

const BASE_API = process.env.REACT_APP_API_BASE || "http://localhost:4000";
const ASSIGNMENTS_API = `${BASE_API}/api/assignments`;

export interface Assignment {
  _id?: string;
  title: string;
  course: string;
  description?: string;
  dueDate: string;
  points: number;
}

export const findAllAssignments = async () => {
  const response = await axios.get(ASSIGNMENTS_API);
  return response.data;
};

export const createAssignment = async (assignment: Assignment) => {
  const response = await axios.post(ASSIGNMENTS_API, assignment);
  return response.data;
};

export const findAssignmentById = async (id: string) => {
  const response = await axios.get(`${ASSIGNMENTS_API}/${id}`);
  return response.data;
};

export const updateAssignment = async (id: string, assignment: Assignment) => {
  const response = await axios.put(`${ASSIGNMENTS_API}/${id}`, assignment);
  return response.data;
};

export const deleteAssignment = async (id: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${id}`);
  return response.data;
};