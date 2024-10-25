// src/Kanbas/Courses/Modules/index.tsx
import { useParams } from "react-router";
import { modules } from "../../Database";
import { BsGripVertical } from "react-icons/bs";
import "./index.css";

// 控制按钮组件
const ModuleControlButtons = () => (
  <div className="float-end">
    <button className="btn btn-light me-1">
      <i className="fa fa-check-circle text-success"></i>
    </button>
    <button className="btn btn-light me-1">
      <i className="fa fa-plus"></i>
    </button>
    <button className="btn btn-light">
      <i className="fa fa-ellipsis-v"></i>
    </button>
  </div>
);

const LessonControlButtons = () => (
  <div className="float-end">
    <button className="btn btn-light">
      <i className="fa fa-ellipsis-v"></i>
    </button>
  </div>
);

export default function Modules() {
  const { cid } = useParams();
  const modulesList = modules.filter((module) => module.course === cid);

  return (
    <div>
      <h2>Modules</h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-light me-2">Collapse All</button>
        <button className="btn btn-light me-2">View Progress</button>
        <button className="btn btn-light me-2">
          <i className="fa fa-check-circle"></i> Publish All
        </button>
        <button className="btn btn-danger">+ Module</button>
      </div>

      <ul id="wd-modules" className="list-group rounded-0">
        {modulesList.map((module) => (
          <li 
            key={module._id} 
            className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-light">
              <BsGripVertical className="me-2 fs-3" /> 
              {module.name}
              <ModuleControlButtons />
            </div>
            
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson) => (
                  <li 
                    key={lesson._id}
                    className="wd-lesson list-group-item p-3 ps-1"
                  >
                    <BsGripVertical className="me-2 fs-3" /> 
                    {lesson.name}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}