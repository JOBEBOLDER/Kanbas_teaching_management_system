// src/Kanbas/Courses/Assignments/Editor.tsx
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        {/* Assignment Name */}
        <h2>Assignment Name</h2>
        <input id="wd-name" value="A1 - ENV + HTML" style={{ width: '100%' }} /><br /><br />
  
        {/* Assignment Description */}
        <textarea id="wd-description" style={{ width: '100%', height: '100px' }}>
          The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: 
          - Your full name and section
          - Links to each of the lab assignments
          - Link to the Kanbas application
          - Links to all relevant source code repositories
          The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br /><br />
  
        <table style={{ width: '100%' }}>
          <tbody>
            {/* Points */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" value={100} style={{ width: '100%' ,marginBottom: '10px'}} />
              </td>
            </tr>
  
            {/* Assignment Group */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-group" style={{ width: '100%',marginBottom: '10px' }}>
                  <option value="assignments">Assignments</option>
                  <option value="quizzes">Quizzes</option>
                  <option value="exams">Exams</option>
                  <option value="projects">Projects</option>
                </select>
              </td>
            </tr>
  
            {/* Display Grade As */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade As</label>
              </td>
              <td>
                <select id="wd-display-grade-as" style={{ width: '100%' ,marginBottom: '10px'}}>
                  <option value="points">Points</option>
                  <option value="percentage">Percentage</option>
                </select>
              </td>
            </tr>
  
            {/* Submission Type */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type" style={{ width: '100%' ,marginBottom: '10px'}}>
                  <option value="online">Online</option>
                  <option value="on-paper">On Paper</option>
                </select>
              </td>
            </tr>
  
            {/* Online Entry Options */}
            <tr>
              <td align="right" valign="top">
                <label>Online Entry Options</label>
              </td>
              <td>
                <div style={{ display: 'flex', flexDirection: 'column' ,marginBottom: '10px'}}>
                  <label><input type="checkbox" /> Text Entry</label>
                  <label><input type="checkbox" checked /> Website URL</label>
                  <label><input type="checkbox" /> Media Recordings</label>
                  <label><input type="checkbox" /> Student Annotation</label>
                  <label><input type="checkbox" /> File Uploads</label>
                </div>
              </td>
            </tr>
  
            {/* Assign To */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign To</label>
              </td>
              <td>
                <input id="wd-assign-to" value="Everyone" style={{ width: '100%' ,marginBottom: '10px'}} />
              </td>
            </tr>
  
            {/* Due Date */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due Date</label>
              </td>
              <td>
                <input id="wd-due-date" type="date" value="2024-05-13" style={{ width: '100%' ,marginBottom: '10px'}} />
              </td>
            </tr>
  
            {/* Available From */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-from">Available From</label>
              </td>
              <td>
                <input id="wd-available-from" type="date" value="2024-05-06" style={{ width: '100%',marginBottom: '10px' }} />
              </td>
            </tr>
  
            {/* Available Until */}
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-until">Available Until</label>
              </td>
              <td>
                <input id="wd-available-until" type="date" value="2024-05-20" style={{ width: '100%',marginBottom: '10px' }} />
              </td>
            </tr>
          </tbody>
        </table>
  
        {/* Buttons */}
        <div style={{ marginTop: '20px' }}>
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    );
  }