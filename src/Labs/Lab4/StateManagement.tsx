// src/Labs/Lab4/StateManagement.tsx
import React, { useState } from "react";

export default function StateManagement() {
  // 定义一个状态变量 count 和更新函数 setCount
  const [count, setCount] = useState(0);
  
  // 控制器函数 - 处理用户交互
  const handleIncrement = () => {
    setCount(count + 1); // 更新状态
  };
  
  const handleDecrement = () => {
    setCount(count - 1); // 更新状态
  };
  
  const handleReset = () => {
    setCount(0); // 重置状态
  };

  return (
    <div>
      <h2>State Management</h2>
      <div className="d-flex align-items-center gap-2">
        <button 
          onClick={handleDecrement}
          className="btn btn-primary"
        >
          Decrease
        </button>
        
        <span className="mx-3 fs-4">{count}</span>
        
        <button 
          onClick={handleIncrement}
          className="btn btn-primary"
        >
          Increase
        </button>
        
        <button 
          onClick={handleReset}
          className="btn btn-secondary ms-2"
        >
          Reset
        </button>
      </div>
      
      <div className="mt-3">
        <p>Current count: {count}</p>
        <p>Count is {count % 2 === 0 ? 'even' : 'odd'}</p>
      </div>
      <hr/>
    </div>
  );
}