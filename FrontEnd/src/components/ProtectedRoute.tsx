import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  if (!localStorage.getItem("_id") || !localStorage.getItem("user")) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
