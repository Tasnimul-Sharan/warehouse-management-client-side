import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    <Loading />;
  }

  if (!user) {
    <Navigate to="/login" state={{ from: location }} replace />;
    console.log("user is found", user);
  } else {
    console.log("user not found");
  }

  return children;
};

export default RequireAuth;
