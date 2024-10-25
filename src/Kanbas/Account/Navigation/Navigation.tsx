// src/Kanbas/Account/Navigation/index.tsx
import { Link, useLocation } from "react-router-dom";
import "./index.css";

export default function AccountNavigation() {
  // 获取当前路径以设置活动状态
  const { pathname } = useLocation();

  return (
    <div className="wd-account-navigation">
      <Link 
        to="/Kanbas/Account/Signin"
        className={`${pathname.includes("Signin") ? "active" : ""}`}
      >
        Signin
      </Link>
      <Link 
        to="/Kanbas/Account/Signup"
        className={`${pathname.includes("Signup") ? "active" : ""}`}
      >
        Signup
      </Link>
      <Link 
        to="/Kanbas/Account/Profile"
        className={`${pathname.includes("Profile") ? "active" : ""}`}
      >
        Profile
      </Link>
    </div>
  );
}