import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Course } from "../types";
import * as enrollmentService from "./client";
import { Enrollment } from "./client";
import "./index.css";

interface ExtendedCourse extends Course {
 image?: string;
 isEnrolled?: boolean;
 enrollmentId?: string;
}

interface DashboardProps {
 courses: Course[];
 course: Course;
 setCourse: (course: Course) => void;
 addNewCourse: () => void;
 deleteCourse: (courseId: string) => void;
 updateCourse: () => void;
}

export default function Dashboard({
 courses,
 course,
 setCourse,
 addNewCourse,
 deleteCourse,
 updateCourse
}: DashboardProps) {
 const [isEditing, setIsEditing] = useState(false);
 const { currentUser } = useSelector((state: any) => state.accountReducer);
 const [enrollments, setEnrollments] = useState<any[]>([]);
 const [displayCourses, setDisplayCourses] = useState<ExtendedCourse[]>([]);

 const isStudent = currentUser?.role === "STUDENT";
 const isFaculty = currentUser?.role === "FACULTY";

 // 获取课程图片
 const getCourseImage = (course: ExtendedCourse): string => {
   const imageMap: { [key: string]: string } = {
     "Rocket Propulsion": "rocket.jpg",
     "Aerodynamics": "aerodynamics.jpg",
     "Spacecraft Design": "spacecraft.jpg",
     "Organic Chemistry": "chemistry.jpg",
     "Inorganic Chemistry": "chemistry2.jpg",
     "Physical Chemistry": "chemistry3.jpg",
     "Ancient Languages and Scripts of Middle-earth": "languages.jpg",
     "Wizards, Elves, and Men: Inter-species Diplomacy in Middle-earth": "manhistory.jpg",
     "History and Practice of Middle-earth Magic": "history2.jpg",
     "Principles of Democratic Education": "education.jpg"
   };
   return course.image || imageMap[course.name] || "default.jpg";
 };

 // 获取用户的选课信息
 const fetchEnrollments = async () => {
   try {
     if (currentUser) {
       const userEnrollments = await enrollmentService.findEnrollmentsByUser(currentUser._id);
       setEnrollments(userEnrollments);
     }
   } catch (error) {
     console.error("Error fetching enrollments:", error);
   }
 };

 // 处理选课信息和课程数据
 useEffect(() => {
   const processedCourses = courses.map(course => ({
     ...course,
     isEnrolled: enrollments.some(e => e.course === course._id),
     enrollmentId: enrollments.find(e => e.course === course._id)?._id
   }));
   setDisplayCourses(processedCourses);
 }, [courses, enrollments]);

 useEffect(() => {
   fetchEnrollments();
 }, [currentUser]);

 const handleEnrollment = async (courseId: string) => {
   try {
     const enrollment = enrollments.find(e => e.course === courseId);
     if (enrollment) {
       await enrollmentService.deleteEnrollment(enrollment._id);
     } else {
       await enrollmentService.createEnrollment({
         user: currentUser._id,
         course: courseId,
         status: "ENROLLED",
         startDate: new Date().toISOString()
       });
     }
     await fetchEnrollments();
   } catch (error) {
     console.error("Error managing enrollment:", error);
   }
 };

 // 重置表单
 const resetForm = () => {
   setCourse({
     _id: "",
     name: "New Course",
     number: "New Number",
     startDate: "2023-09-10",
     endDate: "2023-12-15",
     department: "D123",
     description: "New Description"
   } as Course);
   setIsEditing(false);
 };

 return (
   <div className="wd-dashboard">
     <h1 className="wd-dashboard-title">Dashboard</h1>
     <hr />

     {isFaculty && (
       <div className="mb-4">
         <h5>{isEditing ? "Edit Course" : "New Course"}</h5>
         <div className="row g-3 align-items-end">
           {/* 课程表单字段 */}
           <div className="col-md-3">
             <input
               type="text"
               className="form-control"
               placeholder="Course Name"
               value={course.name}
               onChange={(e) => setCourse({ ...course, name: e.target.value })}
             />
           </div>
           <div className="col-md-2">
             <input
               type="text"
               className="form-control"
               placeholder="Course Number"
               value={course.number}
               onChange={(e) => setCourse({ ...course, number: e.target.value })}
             />
           </div>
           <div className="col-md-2">
             <input
               type="text"
               className="form-control"
               placeholder="Department"
               value={course.department}
               onChange={(e) => setCourse({ ...course, department: e.target.value })}
             />
           </div>
           <div className="col-md-2">
             <input
               type="date"
               className="form-control"
               value={course.startDate}
               onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
             />
           </div>
           <div className="col-md-2">
             <input
               type="date"
               className="form-control"
               value={course.endDate}
               onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
             />
           </div>
           <div className="col-12">
             <textarea
               className="form-control"
               placeholder="Course Description"
               value={course.description}
               onChange={(e) => setCourse({ ...course, description: e.target.value })}
             />
           </div>
           <div className="col-12">
             {isEditing ? (
               <div className="float-end">
                 <button
                   onClick={() => {
                     updateCourse();
                     setIsEditing(false);
                   }}
                   className="btn btn-warning me-2"
                 >
                   Update
                 </button>
                 <button
                   onClick={resetForm}
                   className="btn btn-secondary"
                 >
                   Cancel
                 </button>
               </div>
             ) : (
               <button
                 onClick={addNewCourse}
                 className="btn btn-primary float-end"
               >
                 Add
               </button>
             )}
           </div>
         </div>
       </div>
     )}

     <h2 className="wd-dashboard-title">My Courses ({courses.length})</h2>
     <hr />

     <div className="wd-dashboard-courses">
       <div className="row row-cols-1 row-cols-md-5 g-4">
         {displayCourses.map((c) => (
           <div 
             key={c._id}
             className="wd-dashboard-course col" 
             style={{ width: "300px" }}
           >
             <div className="card rounded-3 overflow-hidden">
               <img 
                 src={`/images/${getCourseImage(c)}`}
                 alt={c.name}
                 className="card-img-top"
                 width="100%" 
                 height={160} 
               />
               <div className="card-body">
                 <h5 className="card-title">{c.name}</h5>
                 <p className="card-text text-muted small">
                   {c.number} • {c.department}
                 </p>
                 <p 
                   className="card-text overflow-y-hidden" 
                   style={{ maxHeight: 100 }}
                 >
                   {c.description}
                 </p>
                 <div className="d-flex justify-content-between align-items-center">
                   <span className="text-muted small">
                     {c.startDate} - {c.endDate}
                   </span>
                 </div>
                 <div className="card-actions mt-3 d-flex justify-content-between">
                   {isStudent ? (
                     c.isEnrolled ? (
                       <>
                         <Link
                           to={`/Kanbas/Courses/${c._id}/Home`}
                           className="btn btn-primary"
                         >
                           Go
                         </Link>
                         <button
                           onClick={() => handleEnrollment(c._id)}
                           className="btn btn-danger"
                         >
                           Unenroll
                         </button>
                       </>
                     ) : (
                       <button
                         onClick={() => handleEnrollment(c._id)}
                         className="btn btn-success w-100"
                       >
                         Enroll
                       </button>
                     )
                   ) : (
                     <>
                       <Link
                         to={`/Kanbas/Courses/${c._id}/Home`}
                         className="btn btn-primary"
                       >
                         Go
                       </Link>
                       {isFaculty && (
                         <div>
                           <button
                             onClick={() => {
                               setCourse(c);
                               setIsEditing(true);
                             }}
                             className="btn btn-warning me-2"
                           >
                             Edit
                           </button>
                           <button
                             onClick={() => deleteCourse(c._id)}
                             className="btn btn-danger"
                           >
                             Delete
                           </button>
                         </div>
                       )}
                     </>
                   )}
                 </div>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
}