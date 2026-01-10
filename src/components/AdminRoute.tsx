import { JSX } from "react";
import { Navigate } from "react-router-dom";

export const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (
    !user ||
    user.name.trim().toLowerCase() !== "admin" ||
    user.email.trim().toLowerCase() !== "admincinehub@gmail.com"
  ) {
    return <Navigate to="/" />;
  }

  return children;
};
