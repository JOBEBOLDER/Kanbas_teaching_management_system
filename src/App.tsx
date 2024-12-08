import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import logo from './logo.svg';
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";  // 移除 HashRouter
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import store from "./Kanbas/store"
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
    <div>
      <Routes>
        {/* default navigate to Labs*/}
        <Route path="/" element={<Navigate to="Labs" />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/Kanbas/*" element={<Kanbas />} />
      </Routes>
    </div>
    </Provider>
  );
}