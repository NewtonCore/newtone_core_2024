import React from "react";
import classStyle  from "./AppBreadcrumb.module.css";

function AppBreadcrumb({ children }) {
  return (
    <div className={classStyle.breadcrumb}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">{children}</ol>
      </nav>
    </div>
  );
}

export default AppBreadcrumb;


// style="--bs-breadcrumb-divider: '>';"