export default function Assignments() {
    return (
      <div id="wd-assignments">
        {/* filter button */}
        <input id="wd-search-assignment" placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        
        {/* ASSIGNMENTS big title */}
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        
        {/* task list */}
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <br />
            <span>Multiple Modules | Not available until May 6 at 12:00am |</span>
            <br />
            <strong>Due</strong> May 13 at 11:59pm | 100 pts
          </li>
  
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/124">
              A2 - CSS + BOOTSTRAP
            </a>
            <br />
            <span>Multiple Modules | Not available until May 13 at 12:00am |</span>
            <br />
            <strong>Due</strong> May 20 at 11:59pm | 100 pts
          </li>
  
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/125">
              A3 - JAVASCRIPT + REACT
            </a>
            <br />
            <span>Multiple Modules | Not available until May 20 at 12:00am |</span>
            <br />
            <strong>Due</strong> May 27 at 11:59pm | 100 pts
          </li>
  
          {/* add more tasks */}
        </ul>
      </div>
    );
  }