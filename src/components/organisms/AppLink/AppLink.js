import React from "react";
import { Link } from "react-router-dom";

function AppLink({ to, children, onClick }) {
  return (
    <Link onClick={onClick !== undefined ? onClick : ()=>{}} style={{ textDecoration: "none" }} to={to}>
      {children}
    </Link>
  );
}

export default AppLink;
