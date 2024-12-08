// src/Labs/index.tsx
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";
import TOC from "./TOC";
import { Routes, Route } from "react-router";

export default function Labs() {
  return (
    <Provider store={store}>
      <div style={{ padding: "20px 40px" }}>
        <h1>Jieyao Chen A3 Homework</h1>
        <h1>Labs</h1>
        <TOC />
        <div style={{ marginLeft: "40px" }}>
          <Routes>
            <Route path="Lab1/*" element={<Lab1 />} />
            <Route path="Lab2/*" element={<Lab2 />} />
            <Route path="Lab3/*" element={<Lab3 />} />
            <Route path="Lab4/*" element={<Lab4 />} />
            <Route path="Lab5/*" element={<Lab5 />} />

          </Routes>
        </div>
      </div>
    </Provider>
  );
}