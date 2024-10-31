// src/Labs/Lab4/ObjectStateVariable.tsx
import React, { useState } from "react";

interface Person {
  name: string;
  age: number;
}

export default function ObjectStateVariable() {
  const [person, setPerson] = useState<Person>({ 
    name: "Peter", 
    age: 24 
  });

  return (
    <div>
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <input
        defaultValue={person.name}
        onChange={(e) => setPerson({
          ...person,
          name: e.target.value
        })}
        className="form-control mb-2 w-50"
      />
      <input
        type="number"
        defaultValue={person.age}
        onChange={(e) => setPerson({
          ...person,
          age: parseInt(e.target.value)
        })}
        className="form-control w-50"
      />
      <hr/>
    </div>
  );
}