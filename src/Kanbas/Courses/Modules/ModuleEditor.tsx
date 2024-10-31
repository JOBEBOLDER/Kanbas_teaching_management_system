import React from "react";

interface ModuleEditorProps {
  dialogTitle: string;
  moduleName: string;
  setModuleName: (name: string) => void;
  addModule: () => void;
}

const ModuleEditor: React.FC<ModuleEditorProps> = ({ dialogTitle, moduleName, setModuleName, addModule }) => {
  return (
    <div
      id="wd-add-module-dialog"
      className="modal fade"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {dialogTitle}
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control"
              placeholder="Module Name"
              value={moduleName}
              onChange={(e) => setModuleName(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                addModule();
              }}
              data-bs-dismiss="modal"
            >
              Add Module
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleEditor;