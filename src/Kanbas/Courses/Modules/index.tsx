import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import ModulesControls from './ModulesControls';
import ModuleControlButtons from './ModuleControlButtons';
import { Module } from "../../types";

interface ModulesState {
  modulesReducer: {
    modules: Module[];
  };
}

interface ModulesProps {
  isFaculty: boolean;
}

export default function Modules({ isFaculty }: ModulesProps) {
  const { cid } = useParams<{ cid: string }>();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: ModulesState) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div className="wd-modules">
      {/* 只对教职工显示模块控制器 */}
      {isFaculty && (
        <ModulesControls 
          moduleName={moduleName} 
          setModuleName={setModuleName}
          addModule={() => {
            if (cid) {
              dispatch(addModule({ 
                name: moduleName, 
                course: cid,
                description: "New module description" 
              }));
              setModuleName("");
            }
          }} 
        />
      )}

      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: Module) => module.course === cid)
          .map((module: Module) => (
            <li key={module._id} className="list-group-item">
              {!module.editing && module.name}
              {module.editing && isFaculty && (
                <input 
                  className="form-control w-50 d-inline-block"
                  onChange={(e) => 
                    dispatch(updateModule({ 
                      ...module, 
                      name: e.target.value 
                    }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(updateModule({ 
                        ...module, 
                        editing: false 
                      }));
                    }
                  }}
                  defaultValue={module.name} 
                />
              )}
              {/* 只对教职工显示控制按钮 */}
              {isFaculty && (
                <ModuleControlButtons 
                  moduleId={module._id}
                  deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
                  editModule={(moduleId) => dispatch(editModule(moduleId))} 
                />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}