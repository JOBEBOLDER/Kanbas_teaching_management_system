// src/Labs/Lab4/UseStateHook.tsx
import React, { useState } from "react";

export default function UseStateHook() {
  // 1. 基本类型的状态
  const [count, setCount] = useState<number>(0);
  
  // 2. 字符串类型的状态
  const [text, setText] = useState<string>("");
  
  // 3. 布尔类型的状态
  const [isVisible, setIsVisible] = useState<boolean>(true);
  
  // 4. 对象类型的状态
  const [user, setUser] = useState({
    name: "",
    age: 0,
  });
  
  // 5. 数组类型的状态
  const [items, setItems] = useState<string[]>([]);

  // 处理文本输入
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 处理用户信息更新
  const handleUserUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  // 添加新项目到数组
  const handleAddItem = () => {
    if (text.trim()) {
      setItems(prevItems => [...prevItems, text]);
      setText("");  // 清空输入
    }
  };

  return (
    <div>
      <h2>useState Hook Examples</h2>
      
      {/* 数字状态示例 */}
      <div className="mb-3">
        <h3>Number State</h3>
        <button 
          onClick={() => setCount(c => c + 1)}
          className="btn btn-primary me-2"
        >
          Count: {count}
        </button>
      </div>

      {/* 字符串状态示例 */}
      <div className="mb-3">
        <h3>String State</h3>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          className="form-control w-50"
          placeholder="Type something..."
        />
        <p>You typed: {text}</p>
      </div>

      {/* 布尔状态示例 */}
      <div className="mb-3">
        <h3>Boolean State</h3>
        <button 
          onClick={() => setIsVisible(!isVisible)}
          className="btn btn-primary mb-2"
        >
          Toggle Content
        </button>
        {isVisible && <p>This content can be toggled!</p>}
      </div>

      {/* 对象状态示例 */}
      <div className="mb-3">
        <h3>Object State</h3>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleUserUpdate}
          className="form-control mb-2 w-50"
          placeholder="Enter name"
        />
        <input
          type="number"
          name="age"
          value={user.age || ''}
          onChange={handleUserUpdate}
          className="form-control mb-2 w-50"
          placeholder="Enter age"
        />
        <p>User: {JSON.stringify(user)}</p>
      </div>

      {/* 数组状态示例 */}
      <div className="mb-3">
        <h3>Array State</h3>
        <div className="d-flex gap-2 mb-2">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            className="form-control w-50"
            placeholder="Add new item"
          />
          <button 
            onClick={handleAddItem}
            className="btn btn-primary"
          >
            Add Item
          </button>
        </div>
        <ul className="list-group w-50">
          {items.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
              <button 
                onClick={() => setItems(items.filter((_, i) => i !== index))}
                className="btn btn-danger btn-sm float-end"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <hr/>
    </div>
  );
}