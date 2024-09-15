import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";




export default function Kanbas() {
    return (
      <div id="wd-kanbas">
        <h1>Kanbas</h1>
        <table>
          <tbody> {/* 使用 <tbody> 包裹 <tr> */}
            <tr>
              {/* left side bar navigation */}
              <td valign="top">
                <KanbasNavigation />
              </td>
              {/* right side  */}
              <td valign="top">
                <Routes>
                  <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
                  <Route path="/Account/*" element={<Account />} />
                  <Route path="/Dashboard" element={<Dashboard />} />
                   {/* Courses 路由，包含课程 ID 参数 */}
                <Route path="/Courses/:cid/*" element={<Courses />} />
                    {/* 其他占位符页面 */}
                <Route path="/Calendar" element={<h1>Calendar</h1>} />
                <Route path="/Inbox" element={<h1>Inbox</h1>} />
              </Routes>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }