import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedHome() {
  const authData = useSelector((state) => state.auth);

  let { offlineTokenIsPresent } = authData;

  if (offlineTokenIsPresent) {
    // return <Navigate to="/" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProtectedHome;
