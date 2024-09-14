import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <img src="/images/canvas.jpeg" width={200} alt="React JS" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack Software Developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <img src="/images/canvas.jpeg" width={200} alt="JavaScript" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
              CS5678 JavaScript
            </Link>
            <p className="wd-dashboard-course-title">
              Modern JavaScript Development
            </p>
            <Link to="/Kanbas/Courses/5678/Home"> Go </Link>
          </div>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <img src="/images/canvas.jpeg" width={200} alt="Python" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/9012/Home">
              CS9012 Python
            </Link>
            <p className="wd-dashboard-course-title">
              Data Science with Python
            </p>
            <Link to="/Kanbas/Courses/9012/Home"> Go </Link>
          </div>
        </div>

       {/* Course 4 */}
       <div className="wd-dashboard-course">
          <img src="/images/canvas.jpeg" width={200} alt="Python" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/9012/Home">
              CS9012 Python
            </Link>
            <p className="wd-dashboard-course-title">
              Data Science with Python
            </p>
            <Link to="/Kanbas/Courses/9012/Home"> Go </Link>
          </div>
        </div>

        {/* Course 5 */}
       <div className="wd-dashboard-course">
          <img src="/images/canvas.jpeg" width={200} alt="Python" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/9012/Home">
              CS9012 Python
            </Link>
            <p className="wd-dashboard-course-title">
              Data Science with Python
            </p>
            <Link to="/Kanbas/Courses/9012/Home"> Go </Link>
          </div>
        </div>

        {/* Course 6 */}
       <div className="wd-dashboard-course">
          <img src="/images/canvas.jpeg" width={200} alt="Python" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/9012/Home">
              CS9012 Python
            </Link>
            <p className="wd-dashboard-course-title">
              Data Science with Python
            </p>
            <Link to="/Kanbas/Courses/9012/Home"> Go </Link>
          </div>
        </div>

        {/* Course 7 */}
       <div className="wd-dashboard-course">
          <img src="/images/canvas.jpeg" width={200} alt="Python" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/9012/Home">
              CS9012 Python
            </Link>
            <p className="wd-dashboard-course-title">
              Data Science with Python
            </p>
            <Link to="/Kanbas/Courses/9012/Home"> Go </Link>
          </div>
        </div>


      </div>
    </div>
  );
}