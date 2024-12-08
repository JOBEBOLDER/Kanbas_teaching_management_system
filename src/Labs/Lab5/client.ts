import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;

const handleError = (error: any) => {
    console.error("API Error:", error);
    throw error;
};
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;



// 可以添加其他CRUD操作
export const getTodos = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/todos`);
    return response.data;
};

export const getTodoById = async (id: string) => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/todos/${id}`);
    return response.data;
};


export const updateTodoTitle = async (id: string, title: string) => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/todos/${id}/title/${title}`);
    return response.data;
};
export const deleteTodo = async (todoId: number) => {
    try {
        const response = await axios.delete(`${TODOS_API}/${todoId}`);
        return response.data;
    } catch (error) {
        throw error; // 将错误传递给组件处理
    }
};

export const updateTodo = async (todo: any) => {
    try {
        const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
        return response.data;
    } catch (error) {
        throw error; // 将错误传递给组件处理
    }
};

// 获取欢迎消息
export const fetchWelcomeMessage = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    return response.data;
};

// 获取assignment
export const fetchAssignment = async () => {
    const response = await axios.get(ASSIGNMENT_API);
    return response.data;
};

// 更新assignment的title
export const updateTitle = async (title: string) => {
    const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
    return response.data;
}

// 在client.ts中配置axios
axios.interceptors.request.use((config) => {
    // 添加认证信息等
    return config;
});

axios.interceptors.response.use(
    (response) => response,
    (error) => handleError(error)
);


export const fetchTodos = async () => {
    const response = await axios.get(TODOS_API);
    // 确保返回的是数组
    return Array.isArray(response.data) ? response.data : [];
};

export const postTodo = async (todo: any) => {
    const response = await axios.post(TODOS_API, todo);
    return Array.isArray(response.data) ? response.data : [];
};

// GET方式创建（旧方法，保留以支持之前的功能）
export const createTodo = async () => {
    const response = await axios.get(`${TODOS_API}/create`);
    return response.data;
};


// POST方式创建新todo

// DELETE - 删除todo
export const removeTodo = async (id: number) => {
    const response = await axios.delete(`${TODOS_API}/${id}`);
    return response.data;
};
