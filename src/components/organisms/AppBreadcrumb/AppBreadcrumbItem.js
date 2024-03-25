import React from "react";
import { NavLink } from "react-router-dom";

function AppBreadcrumbItem({ label = "", active = null, to = "#" }) {
  const liClass = "breadcrumb-item";
  return (
    <>
      {active ? (
        <li className={`${liClass} ${active && "active"}`} aria-current="page">
        {label}
        </li>
      ) : (
        <li className="breadcrumb-item">
          <NavLink className="test" to={to}>{label}</NavLink>
        </li>
      )}
    </>
  );
}

export default AppBreadcrumbItem;
