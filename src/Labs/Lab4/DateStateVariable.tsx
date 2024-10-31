// src/Labs/Lab4/DateStateVariable.tsx
import React, { useState } from "react";

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date());
  
  // 将 Date 对象转换为 HTML date input 需要的格式 (YYYY-MM-DD)
  const dateObjectToHtmlDateString = (date: Date) => {
    return `${date.getFullYear()}-${
      (date.getMonth() + 1).toString().padStart(2, '0')}-${
      date.getDate().toString().padStart(2, '0')}`;
  };

  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      <h3>{JSON.stringify(startDate)}</h3>
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>
      <label className="form-control">
        <input
          type="date"
          defaultValue={dateObjectToHtmlDateString(startDate)}
          onChange={(e) => setStartDate(new Date(e.target.value))}
        />
      </label>
      <hr/>
    </div>
  );
}