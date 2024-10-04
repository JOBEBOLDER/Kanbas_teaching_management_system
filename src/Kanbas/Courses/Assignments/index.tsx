import { FaPlus, FaSearch } from "react-icons/fa"; // 使用 react-icons

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container-fluid p-4">
      {/* 顶部的搜索框和按钮 */}
      <div className="d-flex justify-content-between mb-3">
        <div className="input-group w-50">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
          />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-success me-2">
            <FaPlus className="me-1" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-primary">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      {/* ASSIGNMENTS 大标题 */}
      <h3 id="wd-assignments-title" className="d-flex justify-content-between align-items-center">
        ASSIGNMENTS 40% of Total
        <button className="btn btn-secondary btn-sm">
          <FaPlus /> Add Assignment
        </button>
      </h3>

      {/* 任务列表 */}
      <ul id="wd-assignment-list" className="list-group">
        <li className="wd-assignment-list-item list-group-item">
          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
            A1 - ENV + HTML
          </a>
          <br />
          <span className="text-muted">
            Multiple Modules | Not available until May 6 at 12:00am |
          </span>
          <br />
          <strong>Due</strong> May 13 at 11:59pm | 100 pts
        </li>

        <li className="wd-assignment-list-item list-group-item">
          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/124">
            A2 - CSS + BOOTSTRAP
          </a>
          <br />
          <span className="text-muted">
            Multiple Modules | Not available until May 13 at 12:00am |
          </span>
          <br />
          <strong>Due</strong> May 20 at 11:59pm | 100 pts
        </li>

        <li className="wd-assignment-list-item list-group-item">
          <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/125">
            A3 - JAVASCRIPT + REACT
          </a>
          <br />
          <span className="text-muted">
            Multiple Modules | Not available until May 20 at 12:00am |
          </span>
          <br />
          <strong>Due</strong> May 27 at 11:59pm | 100 pts
        </li>

        {/* 继续添加更多任务 */}
      </ul>
    </div>
  );
}