// src/Kanbas/Account/Profile.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  // 状态管理
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // 获取个人资料
  const fetchProfile = () => {
    if (!currentUser) {
      return navigate("/Kanbas/Account/Signin");
    }
    setProfile(currentUser);
  };

  // 登出功能
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };

  // 组件加载时获取个人资料
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div id="wd-profile-screen" className="container mt-5">
      <h3 className="mb-4">Profile</h3>
      {profile && (
        <>
          <input
            id="wd-username"
            value={profile.username || ""}
            placeholder="username"
            className="form-control mb-3"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
          <input
            id="wd-password"
            value={profile.password || ""}
            placeholder="password"
            type="password"
            className="form-control mb-3"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          />
          <input
            id="wd-firstname"
            value={profile.firstName || ""}
            placeholder="First Name"
            className="form-control mb-3"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
          <input
            id="wd-lastname"
            value={profile.lastName || ""}
            placeholder="Last Name"
            className="form-control mb-3"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
          <input
            id="wd-dob"
            value={profile.dob || ""}
            type="date"
            className="form-control mb-3"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <input
            id="wd-email"
            value={profile.email || ""}
            type="email"
            className="form-control mb-3"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select 
            id="wd-role" 
            className="form-control mb-3"
            value={profile.role || "USER"}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button 
            onClick={signout} 
            className="btn btn-danger w-100"
            id="wd-signout-btn"
          >
            Sign out
          </button>
        </>
      )}
    </div>
  );
}