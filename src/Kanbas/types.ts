// src/Kanbas/types.ts
export interface Course {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    description: string;
    department?: string;
    credits?: number;
  }
  
  export interface Assignment {
    _id: string;
    title: string;
    course: string;
    description: string;
    points: number;
    dueDate: string;
  }
  // src/Kanbas/types.ts
export interface Lesson {
    _id: string;
    name: string;
    description: string;
  }
  
  export interface Module {
    _id: string;
    name: string;
    description: string;
    course: string;
    lessons: Lesson[];
    editing?: boolean;
  }

  export interface User {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    role: "FACULTY" | "STUDENT";
    loginId: string;
    section: string;
    lastActivity: string;
    totalActivity: string;
  }