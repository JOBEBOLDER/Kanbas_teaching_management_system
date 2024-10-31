import React from 'react';

interface ModulesControlsProps {
  moduleName: string;
  setModuleName: (name: string) => void;
  addModule: () => void;
}

function ModulesControls({ moduleName, setModuleName, addModule }: ModulesControlsProps) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <input
        type="text"
        className="form-control w-50"
        value={moduleName}
        placeholder="Module Name"
        onChange={(e) => setModuleName(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={addModule}
      >
        Add Module
      </button>
    </div>
  );
}

export default ModulesControls;