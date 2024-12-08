// src/Kanbas/Account/index.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Signin from "./Signin/Signin";
import Profile from "./Profile";
import Signup from "./Signup/Signup";
import AccountNavigation from "./Navigation/Navigation";
import './styles.css';
import './Navigation/index.css';
import './Signin/index.css';
import React from "react";

export default function Account() {
  // 获取当前用户状态
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-account-screen">
      <nav className="wd-kanbas-nav">
        {/* 左侧导航内容 */}
      </nav>
      <div className="wd-content-wrapper">
        <h2>Account</h2>
        <table className="wd-content-table">
          <tbody>
            <tr>
              <td>
                <AccountNavigation />
              </td>
              <td>
                <Routes>
                  {/* 根据登录状态重定向到不同页面 */}
                  <Route 
                    path="/" 
                    element={
                      <Navigate 
                        to={
                          currentUser 
                            ? "/Kanbas/Account/Profile" 
                            : "/Kanbas/Account/Signin"
                        }
                      />
                    } 
                  />
                  <Route path="/Signin" element={<Signin />} />
                  <Route path="/Signup" element={<Signup />} />
                  <Route path="/Profile" element={<Profile />} />
                </Routes>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}