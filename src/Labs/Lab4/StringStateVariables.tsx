// src/Labs/Lab4/StringStateVariables.tsx
import React, { useState } from "react";

export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");

  return (
    <div>
      <h2>String State Variables</h2>
      <p>{firstName}</p>
      <input
        type="text"
        className="form-control w-50"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <hr/>
    </div>
  );
}