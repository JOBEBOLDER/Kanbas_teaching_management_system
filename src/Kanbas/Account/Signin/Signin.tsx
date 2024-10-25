// src/Kanbas/Account/Signin/index.tsx
import { Link } from "react-router-dom";
import "./index.css";

export default function Signin() {
  return (
    <div className="wd-signin">
      {/* Account Navigation and Title */}
      <div className="wd-content">

        {/* Sign in Form */}
        <div className="wd-signin-form">
          <h1>Sign in</h1>
          <input
            type="text"
            placeholder="Username"
            className="form-control mb-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
          />
          <Link 
            to="/Kanbas/Account/Profile"
            className="btn btn-primary d-block mb-3"
          >
            Sign in
          </Link>
          <div className="text-center">
            <div>Don't have an account?</div>
            <Link to="/Kanbas/Account/Signup">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}