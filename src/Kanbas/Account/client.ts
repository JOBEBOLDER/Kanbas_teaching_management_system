import axios from "axios";

const BASE_API = process.env.REACT_APP_API_BASE || "http://localhost:4000";
const USERS_API = `${BASE_API}/api/users`;

// 创建带认证的axios实例
const axiosWithCredentials = axios.create({
 withCredentials: true 
});

// User interfaces
export interface User {
 _id: string;
 username: string;
 password: string;
 role: string;
}

// User related APIs
export const signin = async (credentials: any) => {
 const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
 return response.data;
};

export const profile = async () => {
 const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
 return response.data;
};

export const signup = async (user: any) => {
 const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
 return response.data;
};

export const signout = async () => {
 const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
 return response.data;
};

export const updateUser = async (user: User) => {
 const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
 return response.data;
};

// Course related APIs
export const createCourse = async (course: any) => {
 const response = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
 return response.data;
};

export const findMyCourses = async () => {
 const response = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
 return response.data;
};