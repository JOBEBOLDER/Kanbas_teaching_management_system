import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { FaEye, FaClipboardList, FaBookOpen, FaRegClipboard } from "react-icons/fa"; // 引入其他图标

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>

      {/* Unpublish and Publish buttons */}
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish
          </button>
        </div>
      </div><br />

      {/* Import buttons */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </button>

      {/* Other course status buttons */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaEye className="me-2 fs-5" /> View Course
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaClipboardList className="me-2 fs-5" /> Course Analytics
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaBookOpen className="me-2 fs-5" /> Open Syllabus
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaRegClipboard className="me-2 fs-5" /> Assignments
      </button>
    </div>
  );
}