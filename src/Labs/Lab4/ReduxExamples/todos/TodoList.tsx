// src/Labs/Lab4/ReduxExamples/todos/TodoList.tsx
import React from "react";
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { RootState } from "../../../store";

export default function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);

  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <div className="card rounded-4 border">
        <ul className="list-group list-group-flush">
          <TodoForm />
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
      <hr/>
    </div>
  );
}