// src/Labs/Lab4/ReduxExamples/todos/TodoForm.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { RootState } from "../../../store";

export default function TodoForm() {
  const { todo } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <li className="list-group-item border-0">
      <div className="d-flex gap-2">
        <input
          value={todo.title}
          onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
          className="form-control"
          placeholder="Enter a new task"
          style={{ borderColor: '#dc3545' }}
        />
        <button 
          onClick={() => dispatch(addTodo(todo))}
          className="btn btn-success rounded-3 px-4"
          id="wd-add-todo-click"
        >
          Add
        </button>
        <button 
          onClick={() => dispatch(updateTodo(todo))}
          className="btn btn-warning rounded-3 px-4"
          id="wd-update-todo-click"
        >
          Update
        </button>
      </div>
    </li>
  );
}