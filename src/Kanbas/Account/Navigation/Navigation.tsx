// src/Kanbas/Account/Navigation/Navigation.tsx
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.css";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // 根据登录状态决定显示哪些链接
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  return (
    <div className="list-group">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item ${pathname.includes(link) ? "active" : ""}`}
        >
          {link}
        </Link>
        
      ))}
    </div>
  );
}