import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="container mt-5">
      <h1 className="mb-4 text-center">Sign in</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Username 输入框 */}
          <input
            id="wd-username"
            placeholder="Username"
            className="form-control mb-3"
          />

          {/* Password 输入框 */}
          <input
            id="wd-password"
            placeholder="Password"
            type="password"
            className="form-control mb-3"
          />

          {/* Sign in 按钮 */}
          <Link
            id="wd-signin-btn"
            to="/Kanbas/Account/Profile"
            className="btn btn-primary w-100 mb-3"
          >
            Sign in
          </Link>

          {/* Sign up 链接 */}
          <div className="text-center">
            <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
              Don't have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}