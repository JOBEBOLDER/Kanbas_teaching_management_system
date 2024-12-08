import { useParams } from "react-router";
import db from "../../services/db";
import "./index.css";
import React from 'react';

// 定义Course接口
interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  description: string;
  department?: string;
  credits?: number;
}

interface HomeProps {
  course?: Course;  // 使用定义好的Course接口
}

export default function Home({ course: propsCourse }: HomeProps) {
  const { cid } = useParams();
  
  // 使用db中的courses数据
  const course = propsCourse || db.courses.find((c: Course) => c._id === cid);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="wd-home container mt-4">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">Course Home</h2>
        </div>
      </div>
      
      <div className="row">
        <div className="col-lg-8">
          {/* Course Information Section */}
          <div className="card mb-4">
            <div className="card-header bg-light">
              <h3 className="m-0">Course Information</h3>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <p className="mb-2">
                  <strong className="text-danger">Course:</strong> {course.name}
                </p>
                <p className="mb-2">
                  <strong className="text-danger">Course Number:</strong> {course.number}
                </p>
                <p className="mb-2">
                  <strong className="text-danger">Department:</strong> {course.department || 'N/A'}
                </p>
                <p className="mb-2">
                  <strong className="text-danger">Credits:</strong> {course.credits || 'N/A'}
                </p>
                <p className="mb-2">
                  <strong className="text-danger">Term:</strong>{' '}
                  {new Date(course.startDate).toLocaleDateString()} - {new Date(course.endDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* 其他部分保持不变 */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
}