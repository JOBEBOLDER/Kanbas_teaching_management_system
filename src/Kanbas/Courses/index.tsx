// src/Kanbas/Courses/index.tsx
import CoursesNavigation from "./Navigation";
import Home from "./Home";
import { Navigate, Route, Routes } from "react-router";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Modules from "./Modules"; 


export default function Courses() {
    return (
      <div id="wd-courses">
        <h2>Course 1234</h2>
        <hr />
        <table>
          <tbody>
            <tr>
              {/* courses navigation */}
              <td valign="top">
                <CoursesNavigation />
              </td>
              {/* second: content navigation */}
              <td valign="top">
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                </Routes>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }