// src/Labs/Lab4/Counter.tsx
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  
  return (
    <div>
      <h2>Counter: {count}</h2>
      <div className="button-group">
        <button 
          onClick={() => setCount(count + 1)}
          id="wd-counter-up-click"
          className="btn btn-success"
        >
          Up
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          id="wd-counter-down-click"
          className="btn btn-danger"
        >
          Down
        </button>
      </div>
      <hr/>
    </div>
  );
}