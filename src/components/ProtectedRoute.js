import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children, isLoggedIn }) {
  const location = useLocation();
  const from = location.state?.from || "/";
  if (isLoggedIn) {
    return children;
  } else {
    return Navigate({ to: "/" });
  }
}

export default ProtectedRoute;
