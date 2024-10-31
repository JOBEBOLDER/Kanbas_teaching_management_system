// src/Kanbas/Account/ProtectedRoute.tsx
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: any }) {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  if (!currentUser) {
    return <Navigate to="/Kanbas/Account/Signin" />;
  }

  // 如果是学生，检查是否注册了该课程
  if (currentUser.role === "STUDENT" && cid) {
    const isEnrolled = enrollments.some(
      (e: any) => e.user === currentUser._id && e.course === cid
    );
    if (!isEnrolled) {
      return <Navigate to="/Kanbas/Dashboard" />;
    }
  }

  return children;
}