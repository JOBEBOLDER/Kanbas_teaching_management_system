export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <h2>Assignment Name</h2>
      <input id="wd-name" value="A1 - ENV + HTML" className="form-control mb-3" />

      {/* Assignment Description */}
      <textarea
        id="wd-description"
        className="form-control mb-4"
        style={{ height: "100px" }}
      >
        The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
        - Your full name and section
        - Links to each of the lab assignments
        - Link to the Kanbas application
        - Links to all relevant source code repositories
        The Kanbas application should include a link to navigate back to the landing page.
      </textarea>

      <div className="row">
        {/* Points */}
        <div className="col-md-6 mb-3">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input id="wd-points" value={100} className="form-control" />
        </div>

        {/* Assignment Group */}
        <div className="col-md-6 mb-3">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          <select id="wd-group" className="form-control">
            <option value="assignments">Assignments</option>
            <option value="quizzes">Quizzes</option>
            <option value="exams">Exams</option>
            <option value="projects">Projects</option>
          </select>
        </div>

        {/* Display Grade As */}
        <div className="col-md-6 mb-3">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
          <select id="wd-display-grade-as" className="form-control">
            <option value="points">Points</option>
            <option value="percentage">Percentage</option>
          </select>
        </div>

        {/* Submission Type */}
        <div className="col-md-6 mb-3">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
          <select id="wd-submission-type" className="form-control">
            <option value="online">Online</option>
            <option value="on-paper">On Paper</option>
          </select>
        </div>

        {/* Online Entry Options */}
        <div className="col-12 mb-3">
          <label className="form-label">Online Entry Options</label>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">Text Entry</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" checked />
            <label className="form-check-label">Website URL</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">Media Recordings</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">Student Annotation</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">File Uploads</label>
          </div>
        </div>

        {/* Assign To */}
        <div className="col-md-6 mb-3">
          <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
          <input id="wd-assign-to" value="Everyone" className="form-control" />
        </div>

        {/* Due Date */}
        <div className="col-md-6 mb-3">
          <label htmlFor="wd-due-date" className="form-label">Due Date</label>
          <input id="wd-due-date" type="date" value="2024-05-13" className="form-control" />
        </div>

        {/* Available From */}
        <div className="col-md-6 mb-3">
          <label htmlFor="wd-available-from" className="form-label">Available From</label>
          <input id="wd-available-from" type="date" value="2024-05-06" className="form-control" />
        </div>

        {/* Available Until */}
        <div className="col-md-6 mb-3">
          <label htmlFor="wd-available-until" className="form-label">Available Until</label>
          <input id="wd-available-until" type="date" value="2024-05-20" className="form-control" />
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-end mt-4">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-success">Save</button>
      </div>
    </div>
  );
}