import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  // if token missing → block access
  if (!token || token === "undefined" || token === "null") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}