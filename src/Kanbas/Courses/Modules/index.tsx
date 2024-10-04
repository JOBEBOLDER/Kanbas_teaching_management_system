import React from 'react';
import LessonControlButtons from './LessonControlButttons';
import ModuleControlButtons from './ModuleControlButtons';
import { BsGripVertical } from 'react-icons/bs';  // 用于添加拖动效果的图标

export default function Modules() {
  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between mb-3">
        {/* Collapse All and View Progress Buttons */}
        <button className="btn btn-light">Collapse All</button>
        <button className="btn btn-primary">View Progress</button>
      </div>

      {/* Module List */}
      <ul id="wd-modules" className="list-unstyled">
        <li className="wd-module mb-4">
          <div className="card">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2" /> {/* 可选的拖动图标 */}
                Week 1
              </div>
              <ModuleControlButtons /> {/* 模块控制按钮 */}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong>LEARNING OBJECTIVES</strong>
                <LessonControlButtons /> {/* 课程控制按钮 */}
                <ul className="wd-content list-unstyled ms-3">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong>Lecture 1</strong>
                <LessonControlButtons /> {/* 课程控制按钮 */}
                <ul className="wd-content list-unstyled ms-3">
                  <li className="wd-content-item">
                    <a href="#reading-material">READING</a>
                  </li>
                  <li className="wd-content-item">
                    <a href="#slides">SLIDES</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>

        <li className="wd-module mb-4">
          <div className="card">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2" /> {/* 可选的拖动图标 */}
                Week 2
              </div>
              <ModuleControlButtons /> {/* 模块控制按钮 */}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong>LEARNING OBJECTIVES</strong>
                <LessonControlButtons /> {/* 课程控制按钮 */}
                <ul className="wd-content list-unstyled ms-3">
                  <li className="wd-content-item">Understanding HTML</li>
                  <li className="wd-content-item">Basic CSS Concepts</li>
                </ul>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong>Lecture 2</strong>
                <LessonControlButtons /> {/* 课程控制按钮 */}
                <ul className="wd-content list-unstyled ms-3">
                  <li className="wd-content-item">
                    <a href="#reading-material">READING</a>
                  </li>
                  <li className="wd-content-item">
                    <a href="#slides">SLIDES</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}