// src/Labs/index.tsx
import Lab1 from "./Lab1/index";
import Lab2 from "./Lab2/index";
import Lab3 from "./Lab3/index";
import TOC from "./TOC";
import { Route, Routes, Navigate } from "react-router";

export default function Labs() {
  return (
    <div>
        <h1>jieyao chen A1 Homework</h1>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}