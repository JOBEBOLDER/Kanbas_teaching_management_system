import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaTrash, FaPlusCircle, FaPencilAlt } from "react-icons/fa";
import { TiDelete } from 'react-icons/ti';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
    editing?: boolean;
}

export default function WorkingWithArraysAsynchronously() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const showError = (message: string) => {
        setErrorMessage(message);
        setTimeout(() => setErrorMessage(""), 3000); // 3秒后清除错误消息
    };

    // 获取todos
    const fetchTodos = async () => {
        try {
            const response = await client.fetchTodos();
            // 确保设置的是数组
            setTodos(Array.isArray(response) ? response : []);
        } catch (error) {
            console.error("Error fetching todos:", error);
            setTodos([]); // 出错时设置为空数组
        }
    };

    // 使用GET方式创建todo
    const createTodo = async () => {
        try {
            const newTodos = await client.createTodo();
            setTodos(newTodos);
        } catch (error) {
            console.error("Error creating todo:", error);
        }
    };

// 使用POST方式创建todo
const postTodo = async () => {
    try {
        const newTodo = {
            title: "New Posted TODO",
            completed: false
        };
        const response = await client.postTodo(newTodo);
        // 因为服务器返回的是完整的todos数组
        setTodos(response);  // 直接使用服务器返回的新数组
    } catch (error) {
        console.error("Error posting todo:", error);
        setErrorMessage("Error creating new todo");
    }
};

    // 使用GET方法删除
    const removeTodo = async (todo: Todo) => {
        try {
            const updatedTodos = await client.removeTodo(todo.id);
            setTodos(updatedTodos);
        } catch (error) {
            console.error("Error removing todo:", error);
        }
    };

    // 更新DELETE方法的错误处理
    const deleteTodo = async (todo: Todo) => {
        try {
            await client.deleteTodo(todo.id);
            setTodos(todos.filter(t => t.id !== todo.id));
        } catch (error: any) {
            if (error.response) {
                showError(error.response.data.message);
            } else {
                showError("Error deleting todo");
            }
        }
    };


    // 更新updateTodo方法的错误处理
    const updateTodo = async (todo: Todo) => {
        try {
            await client.updateTodo(todo);
            setTodos(todos.map(t => 
                t.id === todo.id ? { ...todo, editing: false } : t
            ));
        } catch (error: any) {
            if (error.response) {
                showError(error.response.data.message);
            } else {
                showError("Error updating todo");
            }
        }
    };


    // 切换编辑状态
    const toggleEdit = (todo: Todo) => {
        setTodos(todos.map(t => 
            t.id === todo.id ? { ...t, editing: !t.editing } : t
        ));
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    // 在渲染时添加检查
    return (
        <div id="wd-asynchronous-arrays">
            <h3>Working with Arrays Asynchronously</h3>
            {errorMessage && (
                <div className="alert alert-danger">
                    {errorMessage}
                </div>
            )}
            <h4>
                Todos
                <div className="float-end">
                    <FaPlusCircle 
                        onClick={createTodo}
                        className="text-success fs-3 me-2"
                        id="wd-create-todo"
                        style={{ cursor: 'pointer' }}
                    />
                    <FaPlusCircle 
                        onClick={postTodo}
                        className="text-primary fs-3"
                        id="wd-post-todo"
                        style={{ cursor: 'pointer' }}
                    />
                </div>
            </h4>
            <ul className="list-group">
                {Array.isArray(todos) && todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <input
                                    type="checkbox"
                                    className="form-check-input me-2"
                                    checked={todo.completed}
                                    onChange={(e) => updateTodo({
                                        ...todo,
                                        completed: e.target.checked
                                    })}
                                />
                                {todo.editing ? (
                                    <input
                                        type="text"
                                        className="form-control w-auto"
                                        value={todo.title}
                                        onChange={(e) => setTodos(todos.map(t =>
                                            t.id === todo.id ? 
                                                { ...t, title: e.target.value } : t
                                        ))}
                                        onKeyPress={(e) => {
                                            if (e.key === "Enter") {
                                                updateTodo({
                                                    ...todo,
                                                    editing: false
                                                });
                                            }
                                        }}
                                        autoFocus
                                    />
                                ) : (
                                    <span style={{
                                        textDecoration: todo.completed ? 
                                            "line-through" : "none"
                                    }}>
                                        {todo.title}
                                    </span>
                                )}
                            </div>
                            <div>
                                <button 
                                    className="btn btn-primary me-2"
                                    onClick={() => toggleEdit(todo)}>
                                    <FaPencilAlt />
                                </button>
                                <button 
                                    className="btn btn-danger me-2" 
                                    id="wd-remove-todo"
                                    onClick={() => removeTodo(todo)}>
                                    <FaTrash />
                                </button>
                                <button 
                                    className="btn btn-danger" 
                                    id="wd-delete-todo"
                                    onClick={() => deleteTodo(todo)}>
                                    <TiDelete />
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
}