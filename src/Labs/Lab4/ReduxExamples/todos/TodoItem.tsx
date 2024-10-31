// src/Labs/Lab4/ReduxExamples/todos/TodoItem.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-3">
      <span className="fs-5">{todo.title}</span>
      <div>
        <button 
          onClick={() => dispatch(setTodo(todo))}
          className="btn btn-primary rounded-3 me-2 px-4"
          id="wd-set-todo-click"
        >
          Edit
        </button>
        <button 
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="btn btn-danger rounded-3 px-4"
          id="wd-delete-todo-click"
        >
          Delete
        </button>
      </div>
    </li>
  );
}