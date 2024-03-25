import React from "react";
import classStyle from "./PrimaryContainer.module.css";

function PrimaryContainer({ children, style = {}, color, className = "" }) {
  return (
    <div
      // className={`${classStyle.className}`}
      style={{ ...style }}
      className={
        className === "primary"
          ? `${classStyle.container} ${classStyle.PrimaryContainer}`
          : className === "secondary"
          ? `${classStyle.container} ${classStyle.SecondaryContainer}`
          : `${classStyle.container} ${classStyle.SemiSecondaryContainer}`
      }
    >
      {children}
    </div>
  );
}

export default PrimaryContainer;
