import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="p-4">
      {/* Dashboard 标题 */}
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      
      {/* Published Courses 副标题 */}
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />

      {/* 课程网格布局 */}
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-4 g-4">
        {Array.from({ length: 7 }).map((_, idx) => (
          <div key={idx} className="col">
            <div className="card rounded-3 overflow-hidden" style={{ width: "260px" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to={`/Kanbas/Courses/123${idx}/Home`}>
                <img src="/images/canvas.jpeg" alt={`Course ${idx}`} width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                     CS123{idx} - Course Title {idx}
                  </h5>
                  <p className="wd-dashboard-course-term card-text">
                      Spring 2025 - Section 01
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}