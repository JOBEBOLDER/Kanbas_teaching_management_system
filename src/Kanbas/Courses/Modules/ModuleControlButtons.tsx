// src/Kanbas/Courses/Modules/ModuleControlButtons.tsx
import { FaPencil, FaTrash, FaPlus } from "react-icons/fa6";
import { BsCheckCircle, BsThreeDots, BsPlusLg } from "react-icons/bs";

interface ModuleControlButtonsProps {
  moduleId: string;
  deleteModule: (id: string) => void;
  editModule: (id: string) => void;
}

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule
}: ModuleControlButtonsProps) {
  return (
    <div className="d-flex align-items-center module-controls">
      <button 
        className="btn btn-link p-1"
        onClick={() => editModule(moduleId)}
      >
        <FaPencil className="text-primary" />
      </button>
      
      <button 
        className="btn btn-link p-1"
        onClick={() => deleteModule(moduleId)}
      >
        <FaTrash className="text-danger" />
      </button>
      
      <button className="btn btn-link p-1">
        <BsCheckCircle className="text-success" />
      </button>
      
      <button className="btn btn-link p-1">
        <BsPlusLg />
      </button>
      
      <button className="btn btn-link p-1">
        <BsThreeDots />
      </button>
    </div>
  );
}