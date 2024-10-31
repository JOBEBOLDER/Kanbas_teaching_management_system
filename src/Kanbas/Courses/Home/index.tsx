// src/Kanbas/Courses/Home/index.tsx
import { useParams } from "react-router";
import { courses } from "../../Database";
import  "./index.css";

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

// 定义组件Props接口
interface HomeProps {
  course: any;  // 根据需要定义更具体的类型
}
export default function Home({ course: propsCourse }: HomeProps) {
  const { cid } = useParams();
  // 明确指定courses的类型
  const coursesTyped = courses as Course[];
  // 现在使用类型化的courses数组
  const course = propsCourse || coursesTyped.find((c) => c._id === cid);

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

          {/* Course Description Section */}
          <div className="card">
            <div className="card-header bg-light">
              <h3 className="m-0">Course Description</h3>
            </div>
            <div className="card-body">
              <p className="card-text">{course.description}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          {/* Course Status Section */}
          <div className="card">
            <div className="card-header bg-light">
              <h3 className="m-0">Course Status</h3>
            </div>
            <div className="card-body">
              <div className="list-group">
                <div className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Published</span>
                    <span className="badge bg-success">Yes</span>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Course Start</span>
                    <span className="text-muted">
                      {new Date(course.startDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Course End</span>
                    <span className="text-muted">
                      {new Date(course.endDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}