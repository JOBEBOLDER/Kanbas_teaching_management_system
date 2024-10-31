// src/Labs/Lab4/ReduxExamples/AddRedux/index.tsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./addReducer";

export default function AddRedux() {
  // 本地状态管理 a 和 b 的值
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  
  // 从 Redux store 获取 sum
  const { sum } = useSelector((state: any) => state.addReducer);
  const dispatch = useDispatch();

  return (
    <div className="w-25" id="wd-add-redux">
      <h2>Add Redux</h2>
      <h3>{a} + {b} = {sum}</h3>
      
      <div className="mb-2">
        <input
          type="number"
          value={a}
          onChange={(e) => setA(parseInt(e.target.value))}
          className="form-control"
        />
      </div>
      
      <div className="mb-2">
        <input
          type="number"
          value={b}
          onChange={(e) => setB(parseInt(e.target.value))}
          className="form-control"
        />
      </div>
      
      <button
        className="btn btn-primary"
        id="wd-add-redux-click"
        onClick={() => dispatch(add({ a, b }))}
      >
        Add Redux
      </button>
      <hr/>
    </div>
  );
}